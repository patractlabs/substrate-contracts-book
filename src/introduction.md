# Substrate 合约书
## 介绍
本书用于介绍 Substrate 中与合约体系相关的一系列知识。

本书由 Patract ([https://patract.io/](https://patract.io/)) @ [patractlabs](https://github.com/patractlabs) 主导编写，由 Aten @ [atenjin](https://github.com/atenjin) 负责。

本书仓库位于 [https://github.com/patractlabs/substrate-contracts-book](https://github.com/patractlabs/substrate-contracts-book)，欢迎有志之士一起为本书做出贡献。

本书主体包含三类：

* 运行合约的合约平台（模块）
* 编写合约的语言
* 帮助合约开发的工具们

其中由于`pallet-evm`（即EVM/solidity体系的合约）在以太坊生态中已有比较丰富的资料，故不会在本合约书中当做重点讲解。而另外的合约体系如`pallet-actor`，或`libra`移植合约平台等皆处于比较早期的研究阶段，因此也不会作为本书的重点。

**本书当前主要以`pallet-contracts` （即WASM合约）作为主体进行介绍。**

因此本书内容包含：

* 运行合约的合约平台（模块）
    * `pallet-contracts`
* 编写合约的语言
    * `ink!`
    * `Ask!`
    * `Solang`
* 帮助合约开发的工具们
    * `Redspot`
    * `Europa`
    * `Elara`
    * 等等

为了让合约开发者更好的理解`pallet-contracts`模块与WASM合约的运行方式，本书也会涉及一些WASM的介绍以及区块链合约模型的介绍。