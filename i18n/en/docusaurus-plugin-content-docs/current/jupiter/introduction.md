
# Jupiter testnet

## Overview

Jupiter is a **contract test network** that is maintained by Patract, contains Patract contract design specifications and is compatible with the latest pallet-contracts module. Jupiter has three types of nodes, namely:

- `jupiter-dev` node suitable for **local quick test**.
- Independently run the `jupiter-prep` **independent testnet** that provides the latest contract functions to the outside world.
- Parachain of `jupiter` contract running on **relay-chain**.

The key configuration of those three block chain network are basically the same, such as contract weight, block limit size etc. The specific configuration need to check [Jupiter network](./network.md).

The repository of Jupiter is [https://github.com/patractlabs/jupiter](https://github.com/patractlabs/jupiter).

After compile jupiter successfully, there are there executable file: `jupiter-dev`, `jupiter-prep`, `jupiter` in target/release directory.

In the repository above, The Node implementation of those there network are:

- directory `bin/node-dev`: local develop mode, convenient for developer to test contract quickly
- directory `bin/node-prep`: testnet mode，use PoA authorities, support contract deploy, invoke
- directory `bin/node`: parachain testnet mode，use Aura authorities, support contract deploy, invoke

And the Runtime implementation of those there network are:

- directory `runtime/jupiter-dev`
- directory `runtime/jupiter-prep`
- directory `runtime/jupiter`

> Note: for the third mode, as currently relaychain(such as Westend) don't support Sandbox HostFunction, we're running our own private Westend testnet. Once relaychain support this feature afterward, we'll switchover to official relaychain.

## ChangeLog

- 1.0.0: Jupiter PoA network release, including jupiter-prep and jupiter-dev
- 1.0.1: Setting Jupiter PoA ss58prefix to 26, from now on Jupiter will use 26 as address ss58prefix
- 1.0.2: Support Zero-Knowledge、randomness
- 1.0.3: Add Parachain feature, and Jupiter PC1 network release

## Contract

**Patract's FRAME contracts pallet (We will name it as pallet-patracts in future)**

Patract FRAME contracts pallet contains our ChainExtension to provide many particular features for contracts, and contains some compatible modifications.

- ChainExtension
    - Contract Logger support, refer to this project link [ink-log](https://github.com/patractlabs/ink-log)
    - Zero-Knowledge support, refer to this link [PIP-101](https://github.com/patractlabs/PIPs/blob/main/PIPs/pip-101.md)
- Patract modifications (pallet-patracts)
    - // No features for now.

Thus we call "src pallet-contract" for the pallet-contract module which comes from substrate directly, and call "modified pallet-contracts" for the pallet-contract which comes from our forked substrate repo in vendor directory.

Inside:

- `src pallet-contract`: support Patract `ChainExtension`
- `modified pallet-contract`: support Patract `ChainExtension` and Patract modifications

> Note1：Patract intergration of contract module，refer to this project link [patracts](https://github.com/patractlabs/patracts)

> Note2：The ChainExtension of Zero-Knowledge refer to this link [zkmega](https://docs.patract.io/zkmega/tutorial)

