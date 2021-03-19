# Substrate Contracts Book

## Introduction

This book introduces a series of knowledge related to the contract system in Substrate. The book is written by Aten @atenjin, who comes from Patract ([https://patract.io/](https://patract.io/)) @[patractlabs](https://github.com/patractlabs). You can check the repository of this book on [GitHub](https://github.com/patractlabs/substrate-contracts-book) and we welcome you to contribute to this book.

Because `pallet-evm`, which is the contract of EVM/solidity system, has relatively rich information in the Ethereum ecosystem, `pallet-evem` will not be explained as a key point in this contract book. Other contract systems, such as pallet-actor, or libra transplantation contract platform, are in a relatively early stage of research, so they will not be mentioned in this book either.

This book focuses on `pallet-contracts`, which is the WASM contracts, and contains the following topics:

- `pallet-contracts`: the contract platform (also referred as contract module) to run the contract
- Language for writing contracts, which are:
  - `ink!`
  - `Ask!`
  - `Solang`
- Tools to develop contracts, which are:
  - `Redspot`
  - `Europa`
  - `Elara`
  - and so on..

To make contract developers to better understand how the `pallet-contracts` module and WASM contracts work, this book also includes some information about WASM and blockchain contract models.