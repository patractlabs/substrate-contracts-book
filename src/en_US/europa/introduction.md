# Europa

Europa is a sandbox environment for running `FRAME Contracts pallet` and **simulating nodes. It is also a framework for running Substrate runtime.

1. When Europa is used as a sandbox for contract debugging, Europa modified the `FRAME Contracts pallet` module to track the contract execution process, which can provide contract developers with richest contract execution information to allow contract execution The process is no longer a black box**, helping contract developers to debug Wasm contracts;
2. When using Europa as the framework of Substrate, you can do Substrate Runtime development (mostly used for experimental functions) without being disturbed by Wasm compilation problems.

## As the framework of Substrate runtime

1. Europa removed some unnecessary functional modules, such as WASM executor, p2p, etc., and only retained the native execution environment.

2. The block generation method of `manual_seal` is used (the block generation is triggered when a new transaction is received), so that developers do not have to be affected by consensus block generation, and can focus more on contract development, debugging and log analysis.

3. The `state-kv` database is provided, which records the state changes of each block.

   ```bash
   # print the modified state kvs for block 1
   $ ./target/debug/europa state-kv 1 -d europa_database
   Nov 12 15:53:27.699 INFO modified state for block:0x6c119a8f7de42e330aca8b9d3587937aacbbc203cc21650b60644c2f2d33e7fb
   Nov 12 15:53:27.699 INFO key:26aa394eea5630e07c48ae0c9558cef702a5c1b19ab7a04f536c519aca4983ac|value:[DELETED]
   Nov 12 15:53:27.699 INFO key:26aa394eea5630e07c48ae0c9558cef70a98fdbe9ce6c55837576c60c7af3850|value:05000000
   # ...
   ```

4. In addition to providing the basic rpc in the Substrate framework, Europa also has some special rpc:

   * `europa_forwardToHeight (params: [height: NumberOf<B>])`: Fast forward the block to the specified height, which is very helpful for testing functions related to the block height.
   * `europa_backwardToHeight (params: [height: NumberOf<B>])`: Return the block to the specified height, mainly used to restore the state.
   * `europa_modifiedStateKvs (params: [number_or_hash: NumberOrHash<B>])`: Provide block height or block hash, query the state change in the corresponding block.

5. In addition to using the optional command of `-d/--base-path` to divide different working directories, Europa can also use `-w/--workspace` to declare different workspaces under the working directory.

## As a sandbox environment for `FRAME Contracts pallet`

When developing contracts, Europa provides developers with **more detailed log information** to assist contract developers in locating problems, including contracts execution logs and wasm execution stacks. At the same time, this sandbox environment also has the functions of the aforementioned Europa framework. For example, you can use rpc such as `europa_forwardToHeight` to control the execution of the contract.

Contract errors may appear in three places: the `ink!` layer, the internal business logic of the contract, and the `pallet_contracts` layer. With these detailed logs, developers can quickly locate problems during debugging, especially in the case of mutual calls between contracts, Europa can greatly improve the development experience.

Currently, there are two custom ChainExtensions available on Europa, namely Contract logger and ZKP feature.

## Focus of this chapter

Since the main focus of this book is Substrate's Wasm contract, the Europa-related introductions in the following chapters are all related to the use of Europa contract debugging.