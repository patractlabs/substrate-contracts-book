# Substrate 合约书

## 合约书概览

本书介绍了 Substrate 中与合约体系相关的一系列知识，由[Patract](https://patract.io/)主导编写，由[Aten](https://github.com/atenjin)负责维护。仓库地址位于[substrate-contracts-book](https://github.com/patractlabs/substrate-contracts-book)，欢迎有志之士一起为本书做出贡献。

本书主要从以下三个方面进行阐述：

* 运行合约的合约平台（模块）
* 编写合约的语言
* 协助合约开发的工具

其中由于`pallet-evm`（即EVM/Solidity体系的合约）在以太坊生态中已有比较丰富的资料，故不在本合约书中做重点讲解。而其他的合约体系，例如`pallet-actor`、`libra`移植合约平台等都处于早期的研究阶段，因此在本书中也不作重点讲解。

本书以`pallet-contracts`（即Wasm合约）作为主体进行介绍，内容主要包含：

运行合约的合约平台（模块）

* pallet-contracts

编写合约的语言

* ink!
* Ask!
* Solang

协助合约开发的工具

* Redspot
* Europa
* Elara

为了让您更好的理解`pallet-contracts`模块与Wasm合约的运行方式，本书也会涉及Wasm和区块链合约模型的介绍。相信本书一定会让您有所收益。



