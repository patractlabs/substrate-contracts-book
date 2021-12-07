# Patract

![overview](./imgs/overview.jpg)

Patract 做的东西具体包括:

* 在开发者端：

    * Jupiter：独立的智能合约测试网，提供给合约开发者测试合约链的环境。
    * Ask!：AssemblyScript 版的 Ink! 合约框架，吸引 TS/JS 的开发者，给不愿意使用 rust 的合约开发者另一个选择。
    * Redspot：Wasm 合约开发工作流和脚手架：对标 Ethereum 生态中的 Tuffle/Redhat，让合约开发项目化，自动化的工具。Redspot 采用插件化设计，运行开发者添加自己设计的插件丰富 Redspot 的功能。
    * Europa：Runtime 和合约运行沙盒：对标 Ethereum 生态中的 EthereumJS/Ganache，给合约开发者提供了丰富的调试信息，便于快速开发合约。
    * Elara：实时和可扩展的波卡 API：对标 Ethereum 中的 Infura，给合约项目方提供节点的 Endpoint，不用自行搭建节点获取数据。
    * Megaclite：零知识证明的底层支持：在 Jupiter/Patract 链中提供零知识原语支持，可以允许项目方设计 zkRollup 或其他零知识相关合约。
    * Metis：Ink! 合约标准库：对标 Ethereum 中的 openzeppelin-contracts，给合约开发者提供可复用的轮子，不必从零开始编写合约代码。
    * Himalia：多语言合约 SDK：对标 Ethereum 中的 Web3J，Web3Py 等 SDK，给合约项目方提供不同语言的环境，丰富的接口与合约进行交互。
    * Leda：合约监控台：对标 Ethereum 生态中各类合约监控设施，让合约项目方随时监控合约的存储情况，代币转移情况，合约调用情况等等。

* 在用户端包括：

    * Patra Store：作为 Patract 平行链钱包和 DApp 生态的入口，在测试网阶段将集成一些示例应用和配套开发工具套件用法演示，帮助开发者快速开发 Wasm 合约和前端界面，帮助用户快速进入波卡新合约生态。
