# 示例

## Duplicate topics

1. checkout `ink!` to commit `8e8fe09565ca6d2fad7701d68ff13f12deda7eed`

   ```bash
   $ cd ink
   $ git checkout 8e8fe09565ca6d2fad7701d68ff13f12deda7eed -b tmp
   ```

2. 在`ink/examples/erc20/lib.rs:L90` 在`Transfer`事件中把value改为 `0_u128`

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

3. 执行 `cargo +nightly contract build --debug` 来编译合约

4. 使用 [RedSpot](https://redspot.patract.io/en/tutorial/) or [`Polkadot/Substrate Portal`](https://polkadot.js.org/apps) 部署合约 ( 注意这里必须使用 erc20.wasm，而不是erc20-opt.wasm，否则无法正常打印wasm backtrace)

在部署过程中，你会遇到 `DuplicateTopics` ，Europa日志如下：

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

在日志中，你可以发现：

1. 在`env_trace`中最后一条记录是`seal_deposit_event`而不是`seal_return`。如果合约执行正常，最后一条记录应当是`seal_return`。
2. `seal_deposit_event`的第二个参数为`None`，这意味着这个host_function没有被正常执行。[相关实现](https://github.com/patractlabs/substrate/blob/3624deb47cabe6f6cd44ec2c49c6ae5a29fd2198/frame/contracts/src/wasm/runtime.rs#L1399)。
3. 结合wasm backtrace，可以看到栈顶为`deposit_event`。

综上，可以断定错误出现在`seal_deposit_event`这个host_function中。

## Balance类型不一致

假设链上的Balance定义为u64，而`ink!`中Balance定义为u128，部署了一个普通的erc20合约。

读取`total_supply`时，Europa中日志如下：

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



调用`tranfer`时，Europa中日志如下：

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

可以发现，无论是读取还是写入操作，都会出现`call -> deny_payment -> expect`这样的调用过程。原因是在`ink!`中，有如下代码：

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

在`ink!`中，对于`off_chain`和`on_chain`，出现`expect`的时机是不同的。在`off_chain`中，是由于`ink_env::transferred_balance::<E>()`不能正确decoded。在`on_chain`中，由于`transferred!=0`导致`deny_payment`返回Error，在`call`中才出现`expect`。

由此可见，当前`ink!`在`off_chain`和`on_chain`中对某些情况是不完全一致的，造成调试的困扰。

