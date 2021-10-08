# Europa Overview

<div style={{textAlign: 'center'}}>
  <img height="200" src="https://patract.io/images/products/Europa.svg" />
</div>

Europa is a private test blockchain based on Substrate to help Runtime Pallet and `pallet-contracts` development. It modifies the native Substrate chain by removing unnecessary components such as Wasm execution and p2p while adding some great features to help developers get more insights of the contract execution details

## How does it work
Europa runs as standalone daemon to serve JSON-RPC and Websocket requests. By default, it only mines a block every time it receive extrinsics. Extrinsic, by definition, means state changes that come from the outside the blockchain node itself. For example, a transaction is an extrinsic. Europa is a fork of substrate blockchain with handy modifications, so theoretically, runtime pallets and contracts developed through Europa will work on all substrate based chains as well. 
Check [Architectures](../guides/architecture.md) for more insights.

## Why use it?
1. Europa is an implementation of [substrate](https://github.com/paritytech/substrate), while Substrate is a modular framework that enables developers to create purpose-built blockchains by composing custom or pre-built components. For example, Polkadot, Kusama and other parachains are all based on substrate.
2. Producing a block only when receiving new extrinsics. Developers won't have to wait for block production or deal with redundent blocks.
3. Removing all wasm execution, only native runtime is kept for execution. By default, substrate support both wasm execution and native execution. Native execution is prprioritized to be used but wasm execution brings hard fork to chain without updating the node software. However, wasm execution makes the code harder to debug.
4. Additional database entry called `state-kv` to record the state changes. Developers can use RPC calls to fetch those state changes. `state-kv` can also be feteched through cli `europa state-kv <HASH or NUMBER>`
5. Custom RPC calls:
    - `europa_forwardToHeight`: forward the blockheight to certain block height with empty blocks
    - `europa_backwardToHeight`: revert the blockchain back to certain heights and remove states of reverted blocks
    - `europa_modifiedStateKvs`: retrive the cached state changes
6. Allow developers to swtich between multiple workspace for better dev environment isolation.
7. Europa also ships with Europa UI and compiled binary release. 
