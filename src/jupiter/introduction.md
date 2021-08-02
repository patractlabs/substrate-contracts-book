# Jupiter 测试网

## 介绍

Jupiter 是由 Patract 维护，包含 Patract 合约设计规范并兼容最新 pallet-contracts 模块的**合约测试网**。Jupiter 有三类节点，分别是：

- 适用于速测试合约功能的 `jupiter-dev` **本地节点**。
- 独立运行对外提供最新合约功能的 `jupiter-prep` **独立测试网**。
- 运行于中继链并提供稳定合约功能的 `jupiter` **平行链测试网**。

三个区块链网络的关键配置基本相同，例如合约计费，区块资源大小等。具体的配置详见 [Jupiter 网络](./network.md)。

Jupiter 的项目地址是 [https://github.com/patractlabs/jupiter](https://github.com/patractlabs/jupiter)。

正常编译后，在编译产物目录中将会出现三个可执行性文件： `jupiter-dev`, `jupiter-prep` 和 `jupiter`。

在上面链接的仓库中，三个网络对应的节点实现分别是：

- 目录 `bin/node-dev`：本地开发模式，有交易即立即触发，方便合约开发者快速测试。
- 目录 `bin/node-prep`：独立链测试网模式，采用 Babe 作为出块算法，PoA 指定验证人，支持合约部署，调用。
- 目录 `bin/node`：平行链测试网模式，采用 Aura 作为收集人选择算法，PoA指定验证人，支持合约部署，调用。

对应的 Runtime 实现分别是：

- 目录 `runtime/jupiter-dev`
- 目录 `runtime/jupiter-prep`
- 目录 `runtime/jupiter`

> 注：针对第三种平行链模式，由于目前中继链（比如 Westend）不支持 Sandbox HostFunction，我们自己运行了一个支持 Sandbox HostFunction 的 Westend 测试网来运行 Jupiter 平行链。后续一旦中继链支持了 Sandbox HostFunction，Jupiter 平行链会切换到官方的 Westend 上。

## ChangeLog

- 1.0.0: Jupiter PoA 网络正式发布，包含jupiter-prep 及 jupiter-dev
- 1.0.1: 设置 Jupiter PoA 的 ss58prefix 为 26，今后Jupiter沿用 26 作为地址的ss58prefix
- 1.0.2: 支持 ZK、随机数
- 1.0.3: 增加平行链

## Contract

**Patract's FRAME contracts pallet (We will name it as pallet-patracts in future)**

**当前合约使用官方的 pallet-contracts，未来我们会迁移到自己的合约模块上。**

Patract 的 `FRAME contracts pallet` 通过 ChainExtension 为合约提供了一些增强的特性，并且包含一些兼容性的修改：

- ChainExtension
    - [ ] 支持合约日志，参考连接：[ink-log](https://github.com/patractlabs/ink-log)
    - [x] 支持 Zero-Knowledge，参考连接：[PIP-101](https://github.com/patractlabs/PIPs/blob/main/PIPs/pip-101.md)
- pallet-patracts
    - 目前暂时没有新特性

我们约定如下概念：

- `src pallet-contract`：substrate 官方的 pallet-contract 模块
- `modified pallet-contracts`：Patract 从官方 fork 出来的修改，位于 vendor 目录下

这两种 pallet_contract 对合约功能的支持：

- `src pallet-contract`：支持 Patract 的 `ChainExtension`
- `modified pallet-contracts`：支持 Patract 的 `ChainExtension`，以及 Patract 对 pallet-contract 的修改

> 注1：Patract 集成合约模块，可以参考 [patracts](https://github.com/patractlabs/patracts)

> 注2：Zero-Knowledge 的相关文档也可以参考：[zkmega](https://docs.patract.io/zkmega/tutorial.html)

