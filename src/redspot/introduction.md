# Redspot

Redspot是让ink!，Ask!等合约开发项目化，简化开发者对合约的测试和交互过程的合约集成构建工具。Redspot 的功能覆盖整个合约开发环节（开发-调试-测试-部署），并且可以允许开发者构建丰富的插件以扩展Redspot的功能，最大程度简化合约开发者的负担，自动化执行重复的过程。

Redspot的设计目标类似Ethereum 生态中的Truffle，但是会比 Truffle 具备更广泛的扩展功能。

Patract 认为Redspot必须是一个灵活的系统，因为`pallet-contracts`合约模块可以被直接，或在一定程度上的修改后集成到Substrate链中。因此，Redspot决定使用 [hardhat](https://github.com/nomiclabs/hardhat) 作为Redspot核心架构，因为它具有出色的设计，允许开发人员使用插件来添加新功能。

因此 Redspot 从 hardhat fork 而来（基于MIT协议），并在其基础上移除了与以太坊相关的部分，并添加和Substrate及`pallet-contracts`模块相关的功能。在未来，Redspot将会基于hardhat的核心构建更多的功能。