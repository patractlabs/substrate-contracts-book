# Europa tutorial

## Background Information

Europa is a simulated node sandbox environment with contract functions. Its interfaces (mainly RPC) are compatible with most third-party tools, so Europa can be regarded as an independent node for operation.

## Set up a development environment

Europa's environment is roughly the same as that of normal use of node debugging contracts. The only difference is that if you need to print Wasm's backtrace, you need to use a fork version of cargo-contract provided by Patract until the official cargo-contract merges the functions submitted by Patract. If you don't need to print the Wasm backtract when the contract execution crashes, just use the official cargo-contract.

* Compile and run Europa node
```bash
$ git clone --recurse-submodules https://github.com/patractlabs/europa.git
## or do following commands
$ git clone https://github.com/patractlabs/europa.git
$ cd europa/vendor
$ git submodule update --init --recursive
```

You can also install Europa directly using `cargo install`, but you need to add `--locked` to use the Substrate version that Europa currently depends on.

```bash
$ cargo install europa --git=https://github.com/patractlabs/europa.git --force --locked
```

Run Europa

```bash
$ ./target/release/europa --log=runtime=debug -d ./europa_database
# If there is no need to retain data, you can also use `--tmp` to run Europa
$ ./target/release/europa --log=runtime=debug --tmp
```

* Install PatractLabs's cargo-contract (optional, only needed if the Wasm contract executes the backtrace when it crashes).
```plain
$ cargo install cargo-contract --git https://github.com/patractlabs/cargo-contract --branch=tag-v0.12.0 --force
```

If you have already installed the official cargo-contract and do not want to overwrite the installation, you can take the way of  manual compilation.

```bash
$ git clone https://github.com/patractlabs/cargo-contract --branch=v0.10.0
$ cd cargo-contract
$ cargo build --release
```

* Compile the contract

The `--debug` option is provided by the cargo-contract of Patract. If the official cargo-contract is used, the `--debug `option is not required in the following execution commands.

```bash
$ cargo-contract build --debug
# or
$ cargo +nightly contract build --debug
```

`-d/--debug` can replace the original `*.wasm` and `*.contract  `files in the `target/ink` directory. The replaced Wasm and Contract files close the code optimization conditions during the compilation process, and include the name section part, used to help analyze Wasm call stack information.

If the cargo-contract in the Patract repository is not used when compiling the contract, and the contract is compiled with the `-d/--debug` parameter, if a Wasm panic occurs during the execution of the contract, the following log information may appear.

```plain
wasm_error: Error::WasmiExecution(Trap(Trap { kind: Unreachable }))
   wasm backtrace:
   |  <unknown>[...]
   |  <unknown>[...]
   ╰─><unknown>[...]
```

The compiled file generated after adding `-d/--debug` is generally several hundred times the original file. Because the new file is not optimized, and a lot of debugging information is retained. Therefore, you can roughly judge whether it is a file generated after adding the `-d/--debug` option by the file size.

## **Deployment contract**

You can use [Redspot](https://redspot.patract.io/zh-CN/tutorial/) or [Substrate Protal](https://polkadot.js.org/apps/#/explorer) to deploy contracts.

The extending types of Europa are as follows.

```json
{
  "LookupSource": "MultiAddress",
  "Address": "MultiAddress"
}
```

For example, use Redspot to deploy, use apps to execute transactions and view status.

1. Use Redspot to deploy a contract.
```bash
$ npx redspot run scripts/deploy.js
```

2. Obtain the successfully deployed contract address and add an existing contract to apps.

   ![](C:\Users\lizhaoyang\workspace\substrate-contracts-book\src\europa\imgs\add_exist.png)

## **Analyze the log**

During the process of deploying and executing the contract with Europa, detailed logs will be printed, and you can quickly locate problems in the contract based on these logs. Through these logs, the execution process of the contract is no longer a black box.

An example of log printing is as follows.

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

## **Contract execution log**

According to the above log content, the following information can be analyzed.

* `ext_result`：The execution result of contract call execution (through transaction call and RPC call belong to contract call).
* `caller`：The public key of the caller, and the contract calling contract is the public key of the parent contract (consistent with the EVM model).
* `self_account`：The address of this contract.
* `selector`: The selector of the called method can be used to judge which method of the contract this call is based on this attribute.
* `args`、`value`、`gas_limit`、`gas_limit`：The related parameters and gas consumption of this execution are indicated.
* `env_trace、sandbox_result_ok`：The interaction information between contract Wasm execution and pallet-contracts, and the final result of Wasm executor (Wasm executor result and contract execution result are different concepts).
* `nest`：Describes the relationship between the contract calling the contract. Since this is empty, it appears that this call only involves the execution of one contract. See the following text for details.

According to the contract log provided by Europa, you can see the detailed process of a contract call. If you have a good understanding of the contract module pallet-contracts, you can get a lot of important debugging information to assist in locating contract problems. If you don't know much about the contract module, information such as selector, caller, nest can also be of great help to you, reducing the time to debug the contract.

**Note** When viewing messages in contracts on apps, apps will automatically call the read-only messages of the contract to obtain some values of the current contract, causing Europa to display some logs of read calls, which interferes with normal judgment. So you need to distinguish clearly which piece of log is what you need. If you use a third-party client whose sending request can be controlled by itself, there is no concern in this regard.

## How to identify the required log in Europa when sending a request using apps?

There is a `selector` field under the `NestedRuntime {}` block, which indicates the selector used for this contract execution. You can find out what the selector corresponding to the currently called method name is in the `messages` section of metadata.json. The example is as follows.

```json
"messages": [
    {
      "name": [
        "flip"
      ],
      "selector": "0x633aa551"
    }
]
```

Therefore, the selector field can be compared with the selector in the log to judge the part of the log corresponding to the current contract call issued through apps.

## wasmi panic backtrace

Suppose the method of writing a contract in ink! is as follows.

```rust
#[ink(message)]
pub fn transfer(&mut self, to: AccountId, value: Balance) -> Result<()> {
    let from = self.env().caller();
    self.transfer_from_to(from, to, value)?;
    panic!("123");
    Ok(())
}
```

When this method is called, the following log will be printed in Europa.

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

**Note** The current contract needs to use Patract's `cargo-contract` to print Wasm's Backtrace.

From Europa's log, the following calling process can be analyzed.

```bash
call -> dispatch_using_mode -> ... -> transfer -> panic 
```

Therefore, you can locate the cause of the panic because of the panic in the transfer function.

## **Custom ChainExtensions**

### **ink logger**

Check the [ink-log](https://github.com/patractlabs/ink-log)。

### **ZKP feature**

Check the [zkMega](https://github.com/patractlabs/zkmega)，For examples of related contracts, see [metis/groth16](https://github.com/patractlabs/metis/tree/master/groth16)。



