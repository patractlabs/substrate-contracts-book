# ink!

ink! is an eDSL to write WebAssembly based smart contracts using the Rust programming language. The compilation target are blockchains built on the Substrate framework.

ink! 是parity官方编写的，可以提供一种eDSL的方式编写Rust合约，并编译为Wasm运行于Contracts Pallet模块上。

虽然ink!自称为一种写合约的eDSL，但是笔者更倾向于认为ink!是使用Rust语言编写符合能满足Contracts Pallet运行的合约框架。

例如对于EVM而言，若把EVM的指令集看做一种规范（EVM的指令集已经包含了EVM合约模型的信息），那么只要能编译到EVM指令集的语言都可以称为能运行在EVM上的合约语言，例如：

* Solidity
* Vyper

而ink!这里同理。Contracts Pallet要求是能满足允许Contracts Pallet合约模型的Wasm代码，因此任何能编译成满足这个执行条件的框架/语言/库都可以称为Contracts Pallet的合约语言。

ink!就是使用Rust语言，并在此基础上通过Rust的**卫生宏系统**设计了一套eDSL，并使用该eDSL编写能满足Contracts Pallet要求的Rust代码。除eDSL之外，ink!还提供了适用于合约模型的**存储集合类型**，生成Metadata（对应于Solidity的ABI）等工具库。

ink!的官方文档见：
* [ink! Concepts](https://substrate.dev/docs/en/knowledgebase/smart-contracts/ink-fundamentals)
* [ink! Smart Contracts Tutorial](https://substrate.dev/substrate-contracts-workshop/#/)
* [ink! Documentation Portal](https://paritytech.github.io/ink-docs/)

## ink! 到 Contracts pallet 的过程：
parity官方文档中提供了示例图：
![https://paritytech.github.io/ink-docs/how-it-works](https://paritytech.github.io/ink-docs/img/how-it-works.svg)

由此图可知，编写ink!合约并部署的过程需要
* ink! 依赖库：提供ink!的eDSL框架以及提供相应的依赖组件
* cargo-contract: 编译ink!合约的工具
* SDK：与链交互并将合约部署到链上的SDK，parity官方主要提供了`polkadot.js`，Patract 提供了Himalia工具包，包含`go`，`java`，`python`，`C#`的SDK

本章节将主要介绍ink!以及`cargo-contract`的信息，关于SDK的信息放在后续章节介绍。