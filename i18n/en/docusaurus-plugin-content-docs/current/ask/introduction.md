# What is Ask! smart contract programming？

## Background Information

Ask! is a Wasm contract language framework designed by Patract based on AssemblyScript and running on the `pallet-contracts` module.

In a non-strict sense, AssemblyScript syntax is a subset of TypeScript syntax. At present, there are a large number of developers who use TypeScript, and the cost of learning AssemblyScript for these developers is relatively low. Therefore, Patract believes that the Ask! project based on AssemblyScript has a good application development prospect. Compared with Rust-based ink!, Ask! can effectively lower the learning threshold for contract developers, attract more TypeScript developers to develop smart contracts, and enrich the smart contract ecosystem.

Ask! is implemented in a similar way to ink!, adopting Rust macro design and implementing smart contracts through eDSL. Provide custom decorators (also called annotations in other languages) by writing the compiler Transform in AssemblyScript (AS for short). Based on the grammar of AS, it provides those that can be applied to the `pallet-contracts` contract model Function. Through the implementation of annotations, the details related to the contract are hidden as much as possible. On the other hand, the realization of Ask! will learn from some of the ideas of ink!, and strive to ensure compatibility with the ink! contract to the greatest extent in the final implementation. For example, ink! describes the external call interface of the contract using `#[ink(constructor)]`, `#[ink(message)]` to modify the method of the contract structure.
In Ask!, decorators such as `@constructor` and `@message` will be used to decorate the smart contract class definition methods to achieve similar functions.

## How Ask! compilation works

Ask! is involved in the compilation process by writing AssemblyScript Transform. The flowchart is shown below.

![ask-design](./img/ask-design.png)

## More information

Ask! is currently being developed now, and only the v0.2 version of the Kusama financial proposal has been completed. Many current designs may undergo incompatible changes in the future.

## Report for Ask！proposals

- [v0.1Report](./reports/v0.1Report.md)

- [v0.2Report](./reports/v0.2Report.md)
