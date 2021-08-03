# Metis(ink!标准库)项目的提案征求意见稿

Metis 是 Patract 开发的 WebAssembly 合约标准库。Patract Labs 将联合社区力量一起制定各项 WebAssembly 合约标准，开发 ink! 和 Ask! 版本的对应实现，并进行专业机构审计。

## 0. 动机

我们认为，Wasm 合约生态中，一个类似于 Openzeppelin-contracts 的开发库是十分必要的，这就是Metis。出于对简单性与可读性的考虑，这个库提供的模式与元语应该尽可能与 Openzeppelin-contracts 保持一致，这样可以减少开发者的负担，同时有效的吸收 Solidity 生态所积累的经验。

不过需要意识到，基于 ink! 与 Ask! 的 Wasm 合约开发，与基于 Solidity 的 EVM 合约开发有着很大的不同。Wasm 成熟的体系支持，使得开发者可以使用各种不同的语言与工具开发智能合约，通过基于这些成熟或者快速迭代中的平台，开发者可以享受到大量的底层设施支持与开发经验积累，但是不同的语言和工具，往往具有不同的考量和权衡。这意味着，开发者会使用完全不同的代码，表达同样的机制与设计，这将会给社区带来巨大的沟通成本与心智负担。

面对这样的问题，我们需要总结与积累智能合约开发中的实现模式，这一思路由 Kent Beck 所著的「实现模式」一书中引入。总结实现模式的目的就在于，通过这些明确的模式清晰准确的表达出开发者的意图与想法，这样就可以实现"别人能懂的代码"，在合约开发中，这中思路是非常重要的。

从 Openzeppelin-contracts 中，我们可以看到其总结了数个智能合约开发中的实现模式，如基于 Solidity 继承语法的"合约拓展模式"，这些实现模式是 Solidity 生态中积累的宝贵经验。当然，不同的语言下，实践这些模式的方式有所不同，Metis 将会贯彻这些模式，并在不同平台提供对应的支持。例如在 Rust 中, 显然不能直接使用继承的方式实现合约拓展，对此 Metis 中将会提供代码实现范例，并提供一系列帮助库来减少开发者的心智成本。

Metis 将不仅仅是一个 Wasm 合约标准库，我们希望通过 Metis 的实践，在充分继承吸收以往合约开发经验的同时探索 Wasm 合约开发最佳实践。

## 1. 问题

目前基于合约的开发者主要面临以下几个问题:

- 缺乏常见合约(如ERC20)的可靠实现
- 难以实现类似Solidity继承机制的合约组合与拓展
- 缺乏一系列可靠的公共组件以实现合约
- 缺乏基于ink!开发合约的经验积累和模式总结

以上几个问题严重限制了当前基于ink!的合约开发生态, metis将会解决这些问题, 同时避免Solidity中已经存在的问题.

## 2. metis合约开发库

metis将会实现一系列通用组件, 类似于Openzeppelin-contracts开发库, 这些组件将会经过完善的测试和代码审计,
这些组件将会尽可能与 Openzeppelin-contracts 保持一致，这样可以减少开发者的负担，同时有效的吸收 Solidity 生态所积累的经验。

metis将会包含以下几部分组件:

- 类Openzeppelin-contracts组件, 包括基础的Access与Security组件, 以及Token与Governance组件
- 面向ink!合约开发的组件, 基于wasm的合约可以支持更好的抽象机制, 我们可以实现更加复杂和实用的组件
- 从成熟合约项目中总结抽象的组件, metis将会吸纳社区的经验和积累, 既包括成熟的 Solidity生态, 也包括新兴的区块链合约项目.
- ink!合约的拓展, 包括面向不同场景的基础数据结构等.

在metis的前期版本中, 我们将会首先实现类Openzeppelin-contracts组件以供开发者使用, 这些组件包括:

- Token: ERC20, ERC721, ERC777, ERC1155以及上述Token合约的拓展合约
- Access: Ownable, AccessControl, TimelockController
- Security: PullPayment, ReentrancyGuard, Pausable

## 3. ink!组件

Metis的大部分开发库都是由合约组件构成, 在Solidity, 可以基于继承来实现合约组件的引入, 一般来说合约组件将会包括以下几部分:

- 组件Storage: 组件自身逻辑相关的存储状态, 这些状态无需对外暴露
- 组件Message: 组件面向外部的Message
- 组件Event: 组件自身逻辑将会触发(emit)的Event
- 组件内部接口: 供合约其他逻辑调用的接口

例如常见的Ownable合约:

```Solidity
abstract contract Ownable is Context {
    // 组件Storage
    address private _owner;

    // 组件Event
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
    
    // 组件内部接口
    modifier onlyOwner() {
        ...
    }

    // 组件Message
    function renounceOwnership() public virtual onlyOwner {
        ...
    }

    ...
}
```

如果一个合约需要具备Ownable, 则继承合约即可:

```Solidity
contract Escrow is Ownable {
...
}
```

同样其他组件也可以通过继承具备Ownable:

```Solidity
contract Pausable is Ownable {
  ...
  function unpause() public onlyOwner whenPaused {
      ...
  }
}
```

这里继承的意图实际上是组合而非`is-a`关系, 虽然在Solidity中过多的使用继承会带来很多问题, 但是针对特定意图的继承依然是重要的实现途径.

在基于ink!的合约开发, 通过metis, 我们也可以基于泛型和trait来实现同样的动机:

```rust
...

#[metis::contract] // metis contract macro, will use ink_lang::contract auto
mod flipper {
    ...

    #[ink(storage)]
    #[import(ownable)] // flipper import the ownable
    pub struct Flipper {
        ownable: ownable::Data<Flipper>, // data by ownable

        value: bool,
    }

    #[ink(event)]
    #[metis(ownable)] // TODO: event in ink! will refactor
    pub struct OwnershipTransferred {
        ...
    }

    impl Flipper {
        ...

        #[ink(message)]
        pub fn flip(&mut self) {
            // check owner
            ownable::Impl::ensure_caller_is_owner(self);

            self.value = !self.value;
        }

        ...

        #[ink(message)]
        pub fn renounce_ownership(&mut self) {
            ownable::Impl::renounce_ownership(self) // owner message
        }

        ...
    }
}
```

metis通过一系列帮助宏来辅助开发者实现相同的功能, 为了提高合约的可审计性, 这里我们希望用户明确的实现storage, event与message的声明.

同时metis完善了组件的实现方式:

```rust
...

// Storage
#[metis::component::storage]
pub struct Data<E>
where
    E: Env,
{
    owner: Lazy<Option<E::AccountId>>,
}

// Event trait
pub trait EventEmit<E: Env>: EnvAccess<E> {
    ...
}

// Impl trait
pub trait Impl<E: Env>: Storage<E> + EventEmit<E> {
    // logics
    fn init(&mut self) {
        self.get_mut().set_ownership(&Some(Self::caller()));
    }

    fn renounce_ownership(&mut self) {
        self.ensure_caller_is_owner();

        self.emit_event_ownership_transferred(
            self.get().get_ownership().clone(),
            None);

        self.get_mut().set_ownership(&None);
    }

    ...

    /// Panic if `owner` is not an owner
    fn ensure_owner(&self, owner: &E::AccountId) {
        assert!(&self.get().get_ownership().clone().unwrap() == owner);
    }

    ...
}

```

这样的组件可以通过继承其他组件来拓展其功能, 例如一个具有销毁代币功能的Erc20组件:

```rust
...

pub trait Impl<E>: erc20::Impl<E>
where
    E: Env,
{
    fn _burn(&mut self, account: &E::AccountId, amount: E::Balance) -> Result<()> {
        ...
    }

    fn burn(&mut self, amount: E::Balance) -> Result<()> {
        self._burn(&Self::caller(), amount)
    }

    fn burn_from(&mut self, account: &E::AccountId, amount: E::Balance) -> Result<()> {
        ...
    }
}
```

基于metis, 我们可以在限定的意图之下, 实现Solidity通过继承实现的各种合约组合模式, 同时借助rust的零成本抽象, 这些抽象不会带来额外的性能消耗.

## 4. 路线图

metis for ink!分为五个里程碑:

- [M1] 实现基础的组件宏和组件, 完善对于组件的测试支持, 开发者可以基于metis构建常见的DAPP
- [M2] 完善组件宏, 完善组件的开发支持, 开发者可以构建自定义的组件. 完成metis组件对应的api支持.
- [M3] 丰富组件库, 完成面向治理与金融机制的组件及API支持, 完善适用于合约开发的数学库以支持需要复杂计算的Defi类合约.
 
考虑到目前的ink!与contract-pallet依然在迭代中, 一些metis特性将会基于后续的改进来实现, 包括:

- 合约Proxy与可升级支持, 将会依赖于后续合约call的改进[739](https://github.com/paritytech/ink/issues/739).
- 组件中的Event, 当前ink!中的Event不能独立于合约[759](https://github.com/paritytech/ink/issues/759), 现在的组件中的event仅仅早期的实现, 后续会基于ink!的改进而重构.

随着ink!合约社区的丰富和完备, metis也会进一步实现更多公共的组件和库, 辅助开发者开发大型的合约项目. 因此我们可能会安排 [MR] 里程碑。

其将会基于ink!的迭代进度安排开发.

- [MR] 根据基于ink!的迭代进度及社区反馈，合约升级, 合约代理与跨合约调用支持, 重构Event相关实现， 完善基础组件并添加开发辅助宏, 在保证可审计性的情况下减少重复代码。

## 5. M1里程碑计划

- M1.1 设计并完善支持开发metis组件的宏, 确定组件开发范式
- M1.2 设计并完善支持合约引入metis组件的宏, 确定合约拓展与引入组件的开发范式
- M1.3 设计并完善针对组件的单元测试支持
- M1.4 设计并完善基于redspot的集成测试支持
- M1.5 完成Access相关组件的实现与测试
- M1.6 完成Security相关组件的实现与测试
- M1.7 完成Token相关组件的实现与测试
- M1.8 完成详细的metis组件设计文档
- M1.9 完成metis组件使用文档及示例
  
M1检查点如下:

完成metis组件相关的宏及测试, 所有测试可以通过.
完成详细的metis组件设计文档.
完成以下合约组件的实现及测试, 所有测试可以通过:

- ERC20及其拓展组件(包括可增发, 可销毁等)
- ERC721及其拓展组件
- ERC777及其拓展组件
- ERC1155及其拓展组件
- Ownable
- AccessControl
- TimelockController
- PullPayment
- ReentrancyGuard
- Pausable

完成上述合约组件的文档及示例.
