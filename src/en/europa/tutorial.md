# Europa tutorial

Europa is a simulated node sandbox environment with contract functions, and its interface (mainly rpc) is compatible with most third-party tools, so Europa can be regarded as an independent node for operation.

## Set up development environment

The environment of Europa is the same as the environment of normal use of node debugging contracts. The only difference is that if you need to print the backtrace of Wasm, you need to use a fork version of `cargo-contract` provided by Patract until parity (official)`cargo- contract` before merging the features submitted by Patract. If you don't need to print the Wasm backtract when the contract execution crashes, just use the official `cargo-contract`.

* Compile and run Europa node

  ```bash
  $ git clone --recurse-submodules https://github.com/patractlabs/europa.git
  ## or do following commands
  $ git clone https://github.com/patractlabs/europa.git
  $ cd europa/vendor
  $ git submodule update --init --recursive
  ```

  You can also install Europa directly using `cargo install`. (Note to add `--locked` to use the Substrate version that Europa currently depends on)

  ```bash
  $ cargo install europa --git=https://github.com/patractlabs/europa.git --force --locked
  ```

  Run Europa:

  ```bash
  $ ./target/release/europa --log=runtime=debug -d ./europa_database
  # If there is no need to retain data, you can also use `--tmp` to run Europa
  $ ./target/release/europa --log=runtime=debug --tmp
  ```

* Install [PatractLabs's `cargo-contract`](https://github.com/patractlabs/cargo-contract) (optional, only needed if the Wasm contract executes backtrace when it crashes)

  ```
  $ cargo install cargo-contract --git https://github.com/patractlabs/cargo-contract --branch=tag-v0.12.1 --force
  ```

  If the developer has installed the official `cargo-contract` and does not want to overwrite the installation, you can use manual compilation:
  
  ```bash
  $ git clone https://github.com/patractlabs/cargo-contract --branch=tag-v0.12.1
  $ cd cargo-contract
  $ cargo build --release
  ```

* Compile contract

  The `--debug` option is provided by Patract's `cargo-contract`. If you use the `cargo-contract` provided by parity, you do not need the `--debug` option in the following commands.

  ```bash
  $ cargo-contract build --debug
  # or
  $ cargo +nightly contract build --debug
  ```
  
  `-d/--debug` can **replace** the original `*.wasm` and `*.contract` files in the `target/ink` directory. The replaced Wasm and Contract files close the compilation process Code optimization conditions, and include the "name section" part to help analyze the information of the wasm call stack.
  
  > If the contract is compiled without using the `cargo-contract` in the Patract warehouse and carrying the `-d/--debug` parameter when compiling the contract, the following log may appear when a wasm panic occurs during the execution of the contract:
  >
  > ```
  > wasm_error: Error::WasmiExecution(Trap(Trap {kind: Unreachable }))
  > wasm backtrace:
  > | <unknown>[...]
  > | <unknown>[...]
  > ╰─><unknown>[...]
  > ```
  
  > The compiled product produced after adding `-d/--debug` is generally several hundred times larger than the original product (for example, the original product 2.5k, the new product 700k), because the new product is not optimized and retains a lot of debugging information. Therefore, the developer can roughly determine whether it is the product after adding the `-d/--debug` option by the product size.

## Deploy contract

Developers can use [Redspot](https://redspot.patract.io/zh-CN/tutorial/) or [Substrate Protal](https://polkadot.js.org/apps/#/explorer) to deploy contracts .

Note that Europa's `extending types` are as follows:

```json
{
  "LookupSource": "MultiAddress",
  "Address": "MultiAddress"
}
```

For example, use Redspot to deploy, use apps to execute transactions and view status.

Redspot deploys a contract:

```bash
$ npx redspot run scripts/deploy.js
```

Get the successfully deployed contract address, and add an existing contract to apps:

![add_exist](./imgs/add_exist.png)

## Analysis log

In the process of deploying and executing the contract using Europa, the following detailed information will be printed. This information is the information in the execution of the contract, which can conveniently help developers locate problems in the contract. With this information, the execution process of the contract is no longer a black box.

Examples of log printing effects:

```bash
1: NestedRuntime {
    ext_result: [success] ExecReturnValue { flags: 0, data:  },
    caller: d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d (5GrwvaEF...),
    self_account: 0144d6fc570d7bddda6f8e36141f179cd172324599b556ef514193f3105865f6 (5C6NMXaS...),
    selector: 0x9bae9d5e,
    args: 0x40420f00000000000000000000000000,
    value: 10000000000000000,
    gas_limit: 200000000000,
    gas_left: 190018947968,
    env_trace: [
        seal_input(Some(0x9bae9d5e40420f00000000000000000000000000)),
        seal_caller(Some(0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d)),
        ...
       seal_set_storage((Some(0x0300000001000000000000000000000000000000000000000000000000000000), Some(0x000000000000000000000000))),
    ],
    sandbox_result_ok: Value(
        I32(
            0,
        ),
    ),
    nest: [],
}
```

### Contract execution log

For the log cases listed above, we can simply analyze the following information:

* `ext_result`: It can surface the execution result of this contract call execution (call through transaction and rpc call belong to contract call);
* `caller`: The public key of the caller is displayed, and the contract calling contract is the public key of the parent contract (consistent with the EVM model);
* `self_account`: The address of this contract on the surface;
* `selector`: The selector of the method being called. Through this attribute, it can be judged which method of the contract is called this time;
* `args`, `value`, `gas_limit`, `gas_limit`, etc. indicate the relevant parameters and gas consumption of this execution;
* `env_trace` and `sandbox_result_ok`: surface the interaction information between contract Wasm execution and `pallet-contracts`, and the final result of Wasm executor (Wasm executor result and contract execution result are different concepts)
* `nest`: Describes the relationship between the contract calling the contract. Since this is empty, it appears that this call only involves the execution of one contract. See the following text for details;

It can be seen that the contract log provided by Europa can clearly surface many detailed information in a contract call. If the developer of the contract has a better understanding of the contract module `pallet-contracts`, a lot of important debugging information can be obtained to assist in locating contract problems. If the contract developer knows less about the contract module, information such as `selector`, `caller`, `nest`, etc. can also bring great help to the contract development process and reduce the time for debugging the contract.

**Note that when viewing messages in contracts on apps, apps will automatically call the read-only messages of the contract to obtain some values ​​of the current contract, causing Europa to display some logs of read calls, which interferes with normal judgment. Therefore, developers need to distinguish clearly which log is what they need. ** If you use a third-party client that sends requests that can be controlled by yourself, there is no concern in this regard.

> When the developer uses apps to send a request, he identifies the small tip that needs to be logged in Europa:
>
> `1: NestedRuntime {}` There is a `selector` field under the block, which indicates the selector used for this contract execution. Developers can find out what the selector corresponding to the currently called method name is in the `messages` section of metadata.json, for example:
> ```json
> "messages": [
>     {
>       "name": [
>         "flip"
>       ],
>       "selector": "0x633aa551"
>     }
> ]
> ```
> Therefore, you can compare the `selector` field with the `selector` in the log to determine the part of the log corresponding to the current contract call issued through apps.

### wasmi panic backtrace

Suppose the method of writing a contract in `ink!` is as follows:

```rust
#[ink(message)]
pub fn transfer(&mut self, to: AccountId, value: Balance) -> Result<()> {
    let from = self.env().caller();
    self.transfer_from_to(from, to, value)?;
    panic!("123");
    Ok(())
}
```

When this method is called, EuropThe following log will be printed in a (please note that the current contract needs to use Patract's `cargo-contract` to print Wasm's Backtrace):

```bash
1: NestedRuntime {
	ext_result: [failed] ExecError { error: DispatchError::Module {index:5, error:17, message: Some("ContractTrapped"), orign: ErrorOrigin::Caller }}
    caller: d43593c715fdd31c61141abd04a99fd6822...(5GrwvaEF...),
    self_account: b6484f58b7b939e93fff7dc10a654af7e.... (5GBi41bY...),
    selector: 0xfae3a09d,
    args: 0x1cbd2d43530a44705ad088af313e18f80b5....,
    value: 0,
    gas_limit: 409568000000,
    gas_left: 369902872067,
    env_trace: [
        seal_value_transferred(Some(0x00000000000000000000000000000000)),
        seal_input(Some(0xfae3a09d1cbd.....)),
        seal_get_storage((Some(0x0100000000000....), Some(0x010000000100000001000000))),
        # ...
        seal_caller(Some(0xd43593c715fdd31c61141abd...)),
        seal_hash_blake256((Some(0x696e6b20686173....), Some(0x0873b31b7a3cf....))),
      	# ...  
        seal_deposit_event((Some([0x45726332303a....00000000000]), Some(0x000..))),
    ],
	trap_reason: TrapReason::SupervisorError(DispatchError::Module { index: 5, error: 17, message: Some("ContractTrapped") }),
    wasm_error: Error::WasmiExecution(Trap(Trap { kind: Unreachable }))
        wasm backtrace: 
        |  core::panicking::panic[28]
        |  erc20::erc20::_::<impl erc20::erc20::Erc20>::transfer[1697]
        |  <erc20::erc20::_::__ink_Msg<[(); 2644567034]> as ink_lang::traits::MessageMut>::CALLABLE::{{closure}}[611]
        |  core::ops::function::FnOnce::call_once[610]
        |  <erc20::erc20::_::_::__ink_MessageDispatchEnum as ink_lang::dispatcher::Execute>::execute::{{closure}}[1675]
        |  ink_lang::dispatcher::execute_message_mut[1674]
        |  <erc20::erc20::_::_::__ink_MessageDispatchEnum as ink_lang::dispatcher::Execute>::execute[1692]
        |  erc20::erc20::_::<impl ink_lang::contract::DispatchUsingMode for erc20::erc20::Erc20>::dispatch_using_mode[1690]
        |  call[1691]
        ╰─><unknown>[2387]
    ,
    nest: [],
}
```

From Europa's log, we can analyze the following calling process:

```bash
call -> dispatch_using_mode -> ... -> transfer -> panic
```

Therefore, the contract developer can locate the cause of the panic because of the occurrence of the panic in the transfer function.

The above is a simple log analysis description, more special cases will be introduced in the following "Examples" chapter.

## Custom ChainExtensions

### ink logger

Check [ink-log](https://github.com/patractlabs/ink-log).

### ZKP feature

Check [zkMega](https://github.com/patractlabs/zkMega), related contract example [metis/groth16](https://github.com/patractlabs/metis/tree/master/groth16).