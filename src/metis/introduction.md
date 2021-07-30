# Metis

Metis 是 Patract 主导的合约标准实现及示例案例库。在这个仓库里，将会对 ink!, Ask! 等能运行于`pallet-contracts`的合约语言框架提供对应的合约标准的实现及通用案例。

Metis 类似于 Ethereum 生态中的 OpenZepplin-contracts，给合约开发者提供可复用的轮子，不必从零开始编写合约代码。新接触波卡生态尝试合约开发的开发者，在经过简单基础知识的学习后，可以借助本仓库的代码快速搭建出常见的应用。

> 由于当前ink!合约还未稳定，Ask!合约还在开发当中，因此两个平台都还未进行标准的制定。因此当前在Metis中提供的的实现是一些模仿Solidity中的EIP相关的标准的模仿实现。

# Overview

## 仓库地址
[https://github.com/patractlabs/metis](https://github.com/patractlabs/metis)

## 项目结构
metis 项目分为以下三个模块: `trait`、`stubs`、`impls`。

### trait
`trait` 模块包含了常用的合约标准定义，如:erc20、erc721 等。 ink! 合约通过定义 `#[ink::trait_definition]` 的方式实现类似 solidity `interface` 的特性以此来定义通用共享的合约接口。

metis 根据开发实践经验制定了一些运用比较广泛的 `trait_definition` 的合约标准。 开发者只需要将 metis 中定义的 `trait` 包添加到自己项目的依赖中, 
并像实现 rust trait 一样实现 `#[ink::trait_definition]` 中定义的方法，就可以实现一个通用的标准合约。

#### example
```rust
use ink_lang as ink;

#[ink::trait_definition]
pub trait IErc20 {
    /// Creates a new ERC-20 contract and initializes it with the initial supply for the instantiator.
    #[ink(constructor)]
    fn new(initial_supply: Balance) -> Self;

    /// Returns the total supply.
    #[ink(message)]
    fn total_supply(&self) -> Balance;

    /// Transfers 'amount' from caller to 'to'.
    #[ink(message, payable)]
    fn transfer(&mut self, to: AccountId, amount: Balance);
}
```

### stubs

`stubs` 模块是对 `trait` 模块中定义的`trait definition`合约的 `桩 (stub)` 实现。 stub 的用途主要是跨合约调用时将合约地址组装成合约对象，通过合约对象可以调用合约地址对应的链上合约方法。

熟悉 solidity 的同学都知道 solidity 是通过 interface 来实现合约间调用，如：`interfaceContract _interfaceContract = interfaceContract(_addr);`，所以看到这里可能有疑问：既然 ink! 已经实现了通过 `#[ink::trait_definition]` 来实现合约接口，
为什么不使用`trait` 来实现跨合约调用，而需要 `stub` 呢？ 这确实是 parity 官方下一步需要实现的特性，但目前还不支持，有兴趣的同学可以跟踪官方的实现（https://github.com/paritytech/ink/issues/631）。

因此 metis 通过提供合约的桩（stub）,来实现跨合约调用的功能, 开发者可以将 stub 合约引入项目中来实现跨合约调用。

> 接口定义的结构与合约完全一样，但未定义任何函数实现，仅声明它们。 这种类型的声明通常称为 `stub`；

#### example
```rust
use ink_lang as ink;

#[ink::contract]
mod erc20 {
    use ierc20::IErc20;

    #[ink(storage)]
    pub struct Erc20Stub {}

    impl IErc20 for Erc20Stub {
        #[ink(constructor)]
        fn new(initial_supply: Balance) -> Self { unimplemented!() }

        #[ink(message)]
        fn total_supply(&self) -> Balance { unimplemented!() }

        #[ink(message, payable)]
        fn transfer(&mut self, to: AccountId, amount: Balance) { unimplemented!() }
    }
}
```

### impls

impls 模块里提供了合约的开发实现案例， 其中包括以上提及的 `trait` 、`stubs` 模块中包的使用， 以及 zkp 等特性的合约案例。


#### example
```rust
use ink_lang as ink;

#[ink::contract]
mod erc20 {
    use ierc20::IErc20;

    #[ink(storage)]
    pub struct Erc20 {
        total_supply: Balance,
        // more fields ...
    }

    impl IErc20 for Erc20 {
        #[ink(constructor)]
        fn new(initial_supply: Balance) -> Self {
            // implementation ...
        }

        #[ink(message)]
        fn total_supply(&self) -> Balance {
            // implementation ...
        }

        #[ink(message, payable)]
        fn transfer(&mut self, to: AccountId, amount: Balance) {
            // implementation ...
        }
    }
}
```

## Metis议会提案报告

- [M1Report](./reports/M1Report.md)

