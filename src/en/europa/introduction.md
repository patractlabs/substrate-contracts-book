# What is Europa？

## Background Information

Europa is a sandbox environment that runs `FRAME Contracts pallet` and simulates nodes. It is also a framework for running Substrate runtime.

* When Europa is used as a sandbox for contract debugging, Europa modified the `FRAME Contracts pallet` module to track the contract execution process, which can provide you with rich contract execution information, so that the contract execution process is no longer a black box, helping you debug the Wasm contract.
* When using Europa as the framework of Substrate, you can develop Substrate Runtime without being disturbed by Wasm compilation problems (mostly used for experimental functions).
## As the framework of Substrate runtime

* Europa removed some unnecessary functional modules, such as Wasm executor, p2p, and only retained the native execution environment.
* The `manual_seal` block generation method is used, and the block generation is triggered when a new transaction is received, so that you do not have to be affected by consensus block generation, and can focus more on contract development, debugging and analysis logs.
* A `state-kv` database is provided, which records the state changes of each block.
```bash
# print the modified state kvs for block 1
$ ./target/debug/europa state-kv 1 -d europa_database
Nov 12 15:53:27.699  INFO modified state for block:0x6c119a8f7de42e330aca8b9d3587937aacbbc203cc21650b60644c2f2d33e7fb    
Nov 12 15:53:27.699  INFO       key:26aa394eea5630e07c48ae0c9558cef702a5c1b19ab7a04f536c519aca4983ac|value:[DELETED]    
Nov 12 15:53:27.699  INFO       key:26aa394eea5630e07c48ae0c9558cef70a98fdbe9ce6c55837576c60c7af3850|value:05000000
# ... 
```

* In addition to providing basic RPC in the Substrate framework, Europa also has some special RPC.
| Field                                                        | Description                                                  |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| europa_forwardToHeight (params: [height: NumberOf<B>])       | Fast forward the block to the specified height to help test functions related to the block height. |
| europa_backwardToHeight (params: [height: NumberOf<B>])      | Return the block to the specified height, mainly used to restore the state. |
| europa_modifiedStateKvs (params: [number_or_hash: NumberOrHash<B>]) | Provide block height or block hash, query the state change in the corresponding block. |

* In addition to using the `-d/--base-path `option command to divide different working directories, Europa can also use `-w/--workspace` to declare different working spaces under the working directory.
## As a sandbox environment for Frame Contracts pallet

When developing contracts, Europa provides you with more detailed log information, including contracts execution log and Wasm execution stack. At the same time, this sandbox environment also has the functions of the aforementioned Europa framework. For example, you can use RPC such as `europa_forwardToHeight` to control the execution of the contract.

Contract errors may occur in the ink! layer, the internal business logic of the contract, and the pallet_contracts layer. With detailed log information, you can quickly locate problems during debugging. Especially in the case of mutual calls between contracts, Europa can greatly improve the development experience.

Currently, there are two custom ChainExtensions available on Europa, namely Contract logger and ZKP feature.

## More information

native refers to the form of compiling Substrate Runtime into native machine code for execution.

The main focus of this book is Substrate's Wasm contract, so the Europa-related introductions in the following chapters are all related to the use of debugging Europa contract.



