# Architeture
## Another Substrate Implementation

Europa sandbox framework is another implementation for [Substrate client](https://github.com/paritytech/substrate/tree/master/client).That means all substrate runtime could integrate with Europa client directly.

## No consensus, only producing blocks on need

Europa focuses on contract development regardless which consensus protocol is running, so that we remove all components about consensus. Thus, we use `sc-consensus-manual-seal` crate to produce block. This crate is well abstracted with no need to fork. We just modify the part of commands stream for `manual-seal`. The async stream could receive information from different place (e.g. transaction pool, RPC and others) to drive seal-engine to produce blocks only when receiving extrinsics.

## Removed Wasm for Runtime

As a sandbox designs for debugging during contract development, we remove all Wasm components as Wasm may cause many problems during debugging. Since we need to extend many features for low level libraries, if the runtime is compiled to Wasm for execution, we might encounter many unexpected problems. Also, as a local sandbox, we do not need the features brought by Wasm runtime such as non hard fork software update.

*Europa runtime should remove `build.rs` in runtime crate and remove `[build-dependencies]` in runtime crate (cargo.toml file).*

## State KV to trace block state changes

In Substrate, we can check the current blockchain states but not the state modifications. However, the developers are concerned mostly about the state changes when new blocks get mined. So that, they can check whether the changes match their expectations for debugging.

Thus, in europa sandbox, we store the mapping of blockhash and state kvs in the state-kv database, so that developers could export the state changes to look up the details.

## `pallet-contracts` Modification
* Modification on the `pallet contracts` layer: By adding trace during the execution of the contract in `pallet contracts`, the information in the contract layer is recorded, and the calling structure of the contract is recorded. The error message during Wasm execution is also enhanced.
* Modification on the `wasmi` layer: We have provided the backtrace function of recording wasm execution for `wasmi`, and provided support for `parity-wasm`, `pwasm-utils`, and `cargo-contract` during wasm processing of the contract contains the function of the name section.
* Contract logging function: Use the function of `ChainExtensions` to realize the library for printing the `log` in the contract. Check [Custom ChainExtensions](../extensions/custom-chain-extensions.md) for more details.

Check [Contract Pallet Implementation](./implementation.md) for implemention details.
