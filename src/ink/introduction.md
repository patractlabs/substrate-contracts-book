# ink

ink! is an eDSL to write WebAssembly based smart contracts using the Rust programming language. The compilation target are blockchains built on the Substrate framework.

ink! 是 parity 官方编写的，可以提供一种 eDSL 的方式编写 Rust 合约，并编译为 Wasm 运行于 Contracts Pallet 模块上。

虽然 ink!自称为一种写合约的 eDSL，但是笔者更倾向于认为 ink!是使用 Rust 语言编写符合能满足 Contracts Pallet 运行的合约框架。

例如对于 EVM 而言，若把 EVM 的指令集看做一种规范（EVM 的指令集已经包含了 EVM 合约模型的信息），那么只要能编译到 EVM 指令集的语言都可以称为能运行在 EVM 上的合约语言，例如：

- Solidity
- Vyper

而 ink!这里同理。Contracts Pallet 要求是能满足运行 Contracts Pallet 合约模型的 Wasm 代码，因此任何能编译成满足这个 Wasm 合约模型的框架/语言/库都可以称为 Contracts Pallet 的合约语言。

ink!就是使用 Rust 语言，并在此基础上通过 Rust 的**卫生宏系统**设计了一套 eDSL，并使用该 eDSL 编写能满足 Contracts Pallet 要求的 Rust 代码。除 eDSL 之外，ink!还提供了适用于合约模型的**存储集合类型**，生成 Metadata（对应于 Solidity 的 ABI）等工具库。

ink!的官方文档见：

- [ink! Concepts](https://substrate.dev/docs/en/knowledgebase/smart-contracts/ink-fundamentals)
- [ink! Smart Contracts Tutorial](https://substrate.dev/substrate-contracts-workshop/#/)
- [ink! Documentation Portal](https://paritytech.github.io/ink-docs/)

## ink! 到 Contracts pallet 的过程

parity 官方文档中提供了示例图：
![https://paritytech.github.io/ink-docs/how-it-works](https://paritytech.github.io/ink-docs/img/how-it-works.svg)

由此图可知，编写 ink!合约并部署的过程需要

- ink! 依赖库：提供 ink!的 eDSL 框架以及提供相应的依赖组件
- cargo-contract: 编译 ink!合约的工具
- SDK：与链交互并将合约部署到链上的 SDK，parity 官方主要提供了`polkadot.js`，Patract 提供了 Himalia 工具包，包含`go`，`java`，`python`，`C#`的 SDK

本章节将主要介绍 ink!以及`cargo-contract`的信息，关于 SDK 的信息放在后续章节介绍。
