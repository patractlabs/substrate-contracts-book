# Europa CLI

## Setup environment

Europa's environment is the same as any other Substrate Projects. Please follow the official [instruction](https://substrate.dev/docs/en/knowledgebase/getting-started/) on Substrate Dev Hub to setup the required enviroment.

## Install Europa
```bash
$ cargo install europa --git=https://github.com/patractlabs/europa.git --force --locked
```

*NOTE* 

ink! Stabilize `seal_debug_message` after pr [paritytech/ink#902](https://github.com/paritytech/ink/commit/fdae16d7a9384ae4d475b99a7d86f72e1927e665). Thus, if use the ink! which after this commit, the pallet-contracts should support stable seal_debug_message either. 

To use ink! supports `seal_debug_message`, making sure running Europa >= v0.3.4 or node will report `Error: Other`. Otherwise, use Europa <= v0.3.3



## Start Europa CLI

```bash
$ europa --log=runtime=debug -d ./europa_database
# If there is no need to retain data, you can also use `--tmp` to run Europa
$ europa --log=runtime=debug --tmp
```

You should see the following output from CLI once Europa is started:

```bash
$ europa --log=runtime=debug -d ./europa_database
2021-09-12 20:07:32.201  INFO main ec_cli::runner: Europa Dev Node    
2021-09-12 20:07:32.201  INFO main ec_cli::runner: ✌️  version 0.3.4-031c246-x86_64-linux-gnu    
2021-09-12 20:07:32.201  INFO main ec_cli::runner: ❤️  by patract labs <https://github.com/patractlabs>, 2020-2021    
2021-09-12 20:07:32.201  INFO main ec_cli::runner: 📋 Chain specification: Development    
2021-09-12 20:07:32.201  INFO main ec_cli::runner: 💾 Database: RocksDb at ./europa_database/default/chains/dev/db    
2021-09-12 20:07:32.201  INFO main ec_cli::runner: 📖 Workspace: default | Current workspace list: ["default"]    
2021-09-12 20:07:32.201  INFO main ec_cli::runner: ⛓  Native runtime: europa-4 (europa-1.tx1.au1)    
2021-09-12 20:07:32.258  INFO main ec_service::builder: 📦 Highest known block at #0    
2021-09-12 20:07:32.259  INFO main parity_ws: Listening for new connections on 127.0.0.1:9944.  
```

## Install Cargo Contract

Please follow the official [instruction](https://substrate.dev/substrate-contracts-workshop/#/0/setup) on Ink! to install Cargo Contract

## Compile the contract with debug info
Europa provides more detailed log than default Substrate Chain. However, the compilation process is a litlle different.

```bash
$ cargo +nightly contract build --keep-debug-symbols --optimization-passes=0
```

`--keep-debug-symbols --optimization-passes=0` replaces the original `*.wasm` and `*.contract  `files in the `target/ink` directory. It disables code optimization during compilation and includes the name section part to help analyze Wasm call stack information.

The compiled file with `--keep-debug-symbols --optimization-passes=0` is much larger than the original file, because the new file is not optimized and retaines a lot of debugging information. Therefore, you can roughly judge whether this contract file contains debugging information by the file size.


## Deploy contract to Europa

We suggest using our [Redspot](../../redspot/intro/quick-start) development suites for better contract deployment experience.
You can use [Redspot](https://redspot.patract.io/zh-CN/tutorial/) or [Substrate Protal](https://polkadot.js.org/apps/#/explorer) to deploy contracts.

The extending types of Europa are as follows.

```json
{
  "LookupSource": "MultiAddress",
  "Address": "MultiAddress"
}
```

First, follow the instruction on [Redspot](../../redspot/intro/quick-start) to setup a Redspot Project

Once you are in the Redspot project directory
```bash
$ cd contract
$ cargo +nightly contract build --keep-debug-symbols --optimization-passes=0
```

To use Redspot default script for deployment, we need to copy the contract files to dir `artifacts`

```
$ mkdir ../artifacts
$ cp ./target/ink/erc20.contract ../artifacts/

# *notice*: must rename metadata.json to erc20.json
$ cp ./target/ink/metadata.json ../artifacts/erc20.json 
```

Finally, deploy the project.
```
$ cd ../
$ npx redspot run scripts/deploy.ts --no-compile
```

## Decode the log

When deploying or executing contract using Europa, detailed logs will be printed to allow developers quickly locate problems in the contract based on these logs.
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

* `ext_result`：The execution result of contract call execution (through transaction call and RPC call belong to contract call).
* `caller`：The public key of the caller, and the contract calling contract is the public key of the parent contract (consistent with the EVM model).
* `self_account`：The address of this contract.
* `selector`:Which method of contract is called upon
* `args`、`value`: related parameters of this contract call
* `gas_limit`、`gas_left`：gas consumption
* `env_trace`、`sandbox_result_ok`：Tracing interaction between contract Wasm execution and `pallet-contracts`, 
* `sandbox_result_ok`: The final result of Wasm executor (Wasm executor result and contract execution result are different).
* `nest`：Describes the nested relationship when contract calling another contract. Since this is empty, it appears that this call only involves the execution of one contract. See the following text for details.

For more detailed explaination, please refer to [Europa Execution Log](../guides/contract-log.md)

Through Europa's contract log, you can inspect the details of what happened during a contract call.

 With a good understanding of the contract module pallet-contracts, you can grab a lot of useful debugging information to assist in locating contract errors. Even you are unfamiliar with pallet-contracts, information such as `selector`, `caller`, `nest` can also bring great help to debug contracts.

**Note** When inspecting contracts using RPC, it will automatically call the read-only methods of the contract to obtain values, causing Europa to display some logs of read-only rpc calls, which may interfere normal judgment. So making sure distinguish clearly which piece of log is what you need. If you use a third-party client fully controls the calls it made, this shouldnt be the concern.

## How to identify which contract function`selector` refers to?

The `selector` field under the `NestedRuntime {}` block indicates the selector used for contract execution. You can find out which contract function the `selector` refers to in the `messages` section of `metadata.json` generated by cargo-contract.

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

Therefore, by comparing `metadata.json`, you are able to locate the coresponding contract function.  

## Wasmtime panic backtrace

Suppose following contract method written in ink!:

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

**Note** `--keep-debug-symbols --optimization-passes=0` parameters need to be placed when using `cargo +nightly contract build` to enable backtrace.

From Europa's log, the order of execution is:

```bash
call -> dispatch_using_mode -> ... -> transfer -> panic 
```

Europa, together with debug option enabled when compiling, 



