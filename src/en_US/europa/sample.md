# Europa debugging example

## Duplicate topics

1. checkout `ink!` to commit `8e8fe09565ca6d2fad7701d68ff13f12deda7eed`

   ```bash
   $ cd ink
   $ git checkout 8e8fe09565ca6d2fad7701d68ff13f12deda7eed -b tmp
   ```

2. In `ink/examples/erc20/lib.rs:L90`, in the `Transfer` event, change the value to `0_u128`

   ```rust
   #[ink(constructor)]
   pub fn new(initial_supply: Balance) -> Self {
        //...
        Self::env().emit_event(Transfer {
           from: None,
           to: Some(caller),
           // change this from `initial_supply` to `0_u128`
           value: 0_u128.into() // initial_supply,
        });
        instance
   }
   ```

3. Execute `cargo +nightly contract build --debug` to compile the contract

4. Use [RedSpot](https://redspot.patract.io/en/tutorial/) or [`Polkadot/Substrate Portal`](https://polkadot.js.org/apps) to deploy the contract (note that this must be Use erc20.wasm instead of erc20-opt.wasm, otherwise the wasm backtrace cannot be printed normally)

During the deployment process, you will encounter `DuplicateTopics`, the Europa log is as follows:

```bash
1: NestedRuntime {
    #...
    env_trace: [
        seal_input(Some(0xd183512b0)),
		#...    
		seal_deposit_event((Some([0x45726332303a3a5472616e736....]), None)),
    ],
    trap_reason: TrapReason::SupervisorError(DispatchError::Module { index: 5, error: 23, message: Some("DuplicateTopics") }),
    wasm_error: Error::WasmiExecution(Trap(Trap { kind: Host(DummyHostError) }))
    	wasm backtrace: 
    	|  ink_env::engine::on_chain::ext::deposit_event[1623]
    	|  ink_env::engine::on_chain::impls::<impl ink_env::backend::TypedEnvBackend for ink_env::engine::on_chain::EnvInstance>::emit_event[1564]
    	|  ink_env::api::emit_event::{{closure}}[1563]
    	|  <ink_env::engine::on_chain::EnvInstance as ink_env::engine::OnInstance>::on_instance[1562]
    	|  ink_env::api::emit_event[1561]
    	|  erc20::erc20::_::<impl ink_lang::events::EmitEvent<erc20::erc20::Erc20> for ink_lang::env_access::EnvAccess<<erc20::erc20::Erc20 as ink_lang::env_access::ContractEnv>::Env>>::emit_event[1685]
        # ...
        # ...
    	|  deploy[1691]
    	╰─><unknown>[2385]
    ,
    nest: [],
}
```

In the log, you can find:

1. The last record in `env_trace` is `seal_deposit_event` instead of `seal_return`. If the contract is executed normally, the last record should be `seal_return`.
2. The second parameter of `seal_deposit_event` is `None`, which means this host_function is not executed normally. [Related Implementation](https://github.com/patractlabs/substrate/blob/3624deb47cabe6f6cd44ec2c49c6ae5a29fd2198/frame/contracts/src/wasm/runtime.rs#L1399).
3. Combined with wasm backtrace, you can see that the top of the stack is `deposit_event`.

In summary, it can be concluded that the error occurred in the host_function of `seal_deposit_event`.

## Balance types are inconsistent

Assuming that the balance on the chain is defined as u64 and the Balance in `ink!` is defined as u128, an ordinary erc20 contract is deployed.

When reading `total_supply`, the log in Europa is as follows:

```bash
1: NestedRuntime {
    ext_result: [failed] ExecError { error: DispatchError::Module { index: 5, error: 17, message: Some("ContractTrapped") }, origin: ErrorOrigin::Caller },
    caller: 0000000000000000000000000000000000000000000000000000000000000000 (5C4hrfjw...),
    self_account: 2fe715301c9609c0c5ab75b24f2d8ad7dbe9671d7aebfeed80ed8963bc017955 (5D9Wkfa3...),
    selector: 0xdb6375a8,
    args: None,
    value: 0,
    gas_limit: 4999999999999,
    gas_left: 4999865113466,
    env_trace: [
        seal_value_transferred(Some(0x0000000000000000)),
    ],
    wasm_error: Error::WasmiExecution(Trap(Trap { kind: Unreachable }))
    	wasm backtrace:
    	|  core::panicking::panic_fmt.48[1956]
    	|  core::result::unwrap_failed[1057]
    	|  core::result::Result<T,E>::expect[1060]
    	|  ink_lang::dispatcher::deny_payment[1878]
    	|  call[1906]
    	╰─><unknown>[2614]
    ,
    nest: [],
}
```

When calling `tranfer`, the log in Europa is as follows:

```bash
1: NestedRuntime {
    ext_result: [failed] ExecError { error: DispatchError::Module { index: 5, error: 17, message: Some("ContractTrapped") }, origin: ErrorOrigin::Caller },
    caller: 0000000000000000000000000000000000000000000000000000000000000000 (5C4hrfjw...),
    self_account: 2fe715301c9609c0c5ab75b24f2d8ad7dbe9671d7aebfeed80ed8963bc017955 (5D9Wkfa3...),
    selector: 0xdb6375a8,
    args: None,
    value: 0,
    gas_limit: 4999999999999,
    gas_left: 4999865113466,
    env_trace: [
        seal_value_transferred(Some(0x0000000000000000)),
    ],
    wasm_error: Error::WasmiExecution(Trap(Trap { kind: Unreachable }))
    	wasm backtrace:
    	|  core::panicking::panic_fmt.48[1956]
    	|  core::result::unwrap_failed[1057]
    	|  core::result::Result<T,E>::expect[1060]
    	|  ink_lang::dispatcher::deny_payment[1878]
    	|  call[1906]
    	╰─><unknown>[2614]
    ,
    nest: [],
}
```

It can be found that whether it is a read or write operation, there will be a call process such as `call -> deny_payment -> expect`. The reason is that in `ink!`, there is the following code:

```rust
#[no_mangle]
fn call() -> u32 {
    if true {
     ::ink_lang::deny_payment::<<Erc20 as ::ink_lang::ContractEnv>::Env>()
    		.expect("caller transferred value even though all ink! message deny payments")
    }
    ::ink_lang::DispatchRetCode::from(
        <Erc20 as ::ink_lang::DispatchUsingMode>::dispatch_using_mode(
            ::ink_lang::DispatchMode::Call,
        ),
    )
    .to_u32()
}

pub fn deny_payment<E>() -> Result<()>
where
    E: Environment,
{
    let transferred = ink_env::transferred_balance::<E>()
        .expect("encountered error while querying transferred balance");
    if transferred != <E as Environment>::Balance::from(0u32) {
        return Err(DispatchError::PaidUnpayableMessage)
    }
    Ok(())
}
```

In `ink!`, the timing of `expect` is different for `off_chain` and `on_chain`. In `off_chain`, it is because `ink_env::transferred_balance::<E>()` cannot be decoded correctly. In `on_chain`, `deny_payment` returns Error due to `transferred!=0`, and `expect` appears in `call`.

It can be seen that the current `ink!` in `off_chain` and `on_chain` is not exactly the same for some situations, causing debugging troubles.