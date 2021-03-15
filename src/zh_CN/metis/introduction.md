# Metis

Metis 是 Patract 主导的合约标准实现及示例案例库。在这个仓库里，将会对 ink!, Ask! 等能运行于`pallet-contracts`的合约语言框架提供对应的合约标准的实现及通用案例。

Metis 类似于 Ethereum 生态中的 OpenZepplin-contracts，给合约开发者提供可复用的轮子，不必从零开始编写合约代码。新接触波卡生态尝试合约开发的开发者，在经过简单基础知识的学习后，可以借助本仓库的代码快速搭建出常见的应用。

> 由于当前ink!合约还未稳定，Ask!合约还在开发当中，因此两个平台都还未进行标准的制定。因此当前在Metis中提供的的实现是一些模仿Solidity中的EIP相关的标准的模仿实现。

## 仓库地址

[https://github.com/patractlabs/metis](https://github.com/patractlabs/metis)

# 仓库简介

代码仓库中包含三个子目录：
- `trait` ink! 合约通过支持 `#[ink::trait_definition]` 的方式实现类似 solidity interface 特性来定义合约方法。由此可以通过定义一些 `trait_definition` 制定合约标准, 比如： erc20、erc721 等。开发者只需要导入合约的 `trait` ,
  并像实现 rust trait 一样实现 `#[ink::trait_definition]` 中定义的方法，就可以实现一个通用的合约。
- `stubs` 虽然 ink! 已经实现了通过 `#[ink::trait_definition]` 来实现合约接口，但当前还不支持通过 trait 实现类似 solidity interface 的跨合约调用，因此我们通过提供合约的桩（stub）,来实现跨合约调用的功能。stubs 中所有合约只提供了接口定义，
  没有提供具体实现, 开发这可以通过将 stub 合约引入项目中来实现跨合约调用。
- `impls` 这里我们提供了一些合约的开发案例， 其中包括以上提及的使用 `trait` 、`stubs` 以及 zkp 等功能开发合约的案例。
