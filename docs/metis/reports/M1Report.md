# Patract Metis M1 开发报告(Wasm合约标准库)

6周前，Patract 向波卡国库申请了关于 Metis M1 的第57号（[https://polkadot.polkassembly.io/treasury/57](https://polkadot.polkassembly.io/treasury/57)）提案。现在，我们已经完成了 M1 的所有工作，大家可以在以下网站上查看我们的代码库。

* Metis GitHub: [https://github.com/patractlabs/metis](https://github.com/patractlabs/metis)
* Metis文档: [https://patractlabs.github.io/metis/#/./zh-cn/overview](https://patractlabs.github.io/metis/#/./zh-cn/overview)
* Metis提出并实现了 MCCI 架构: [https://patractlabs.github.io/metis/#/./zh-cn/use-component?id=metis-mcci-architecture](https://patractlabs.github.io/metis/#/./zh-cn/use-component?id=metis-mcci-architecture) 。

MCCI 架构通过组合独立组件来促进了智能合约的开发。 以下是当前实现的组件列表：

- ERC20及其扩展组件
- ERC721及其扩展组件
- ERC777及其扩展组件
- ERC1155及其扩展组件
- Ownable
- AccessControl
- TimelockController
- PullPayment
- support(ERC165)
- ReentrancyGuard
- Pauseable

详细用法和实现示例，请参考 Metis 文档（[https://patractlabs.github.io/metis/#/zh-cn/](https://patractlabs.github.io/metis/#/zh-cn/)）。

在 Metis 的开发过程中，我们通过对底层机制的调整，完善了基于 Redspot 的智能合约测试程序。测试用途的使用请参考示例（[https://github.com/patractlabs/metis/tree/master/example](https://github.com/patractlabs/metis/tree/master/example)）。

> 注意：由于 Metis 的测试用例量很大，我们应该为每个合约单独运行测试。 详细命令请参考 Metis 示例自述文件: [https://github.com/patractlabs/metis/blob/master/example/README.md](https://github.com/patractlabs/metis/blob/master/example/README.md)。

## 1. Metis 的未来开发计划

* ~~**[M1]** 实现组件的基本宏和实现； 改进组件测试支持； 开发者可以基于 Metis 构建常规 DAPP 。~~
* **[M2]** 完整的组件宏； 完善的组件开发支持，以便开发人员能够建立自定义组件； 完成 Metis 组件对应的 API 支持。
* **[M3]** 丰富的组件库； 对治理和财务机制的完整组件和 API 支持； 用于合约开发的完整数学库，以支持需要复杂计算的 DeFi 类型合约。

## 2. 报告

### 2.1 实现基本组件宏

我们已经为组件开发实现了以下 marcos：

- `contract` : 按照 Metis 的合约标准定义合约。
- `import` : 生成代码来实现组件。
- `metis` : 定义 Metis 组件。
- `stub` : 在 Metis 中实现存根。
- `reentrancy_guard` : `reentrancy_guard` 组件的辅助宏。
- `supports` : ERC165 的辅助宏支持 API。
- `hash` : 在编译期间计算字符串的哈希值。
- `selector_id` : 计算消息的 `selector_id` .

注意：上面列出的当前可用的宏是最小的实现，将在 [M2] 里程碑中进行扩展和强化，请参阅使用组件: [https://patractlabs.github.io/metis/use-component.html](https://patractlabs.github.io/metis/use-component.html)。

### 2.2 组件

此版本中最重要的工作是实现用于构建智能合约的 Metis 组件。

#### Metis——MCCI 架构

* M : 数据模型。 大多数合约读取和写入合约环境状态。 这些状态映射到特定的数据模型。 每个模型仅与一个组件相关联。
* C: 组件。成分。 组件是一个可重用的、独立的实现单元，它封装了数据和方法，但与其他组件保持正交性。
* C: 控制器。控制器协调各组件并实现合约接口。
I:接口。合约的用户接口。该接口定义了合约的交互，并进一步定义了 metadata.。

如图所示，在 MCCI 架构下，一份合约由一系列可重复使用的组件组成。合约交互是通过组件的相互连接实现的，并由接口和控制器定义。

```text
┌───────┐          ┌───────────────┬────────────────────────────────┐
│       │          │ Interface     │ Control                        │
│       │          │               │  ┌─────────────────────┐       │
│       │          │  Constructor  │  │ Component           │       │
│ User  │  Call    │               │  │ ┌───────────────────┴──┐    │
│       ├─────────►│  Messages     │  │ │ Component            │    │
│       │          │               │  │ │ ┌────────────────────┴─┐  │
│       │          │  Events       │  │ │ │ Component            │  │
├───────┤          │               │  │ │ │        ┌───────────┐ │  │
│       │  Call    │               │  │ │ │ Msgs   │           │ │  │
│       ├─────────►│               │  │ │ │        │ Module    │ │  │
│       │          │               │  │ │ │ Apis   │           │ │  │
│ Apps  │          │               │  │ │ │        │           │ │  │
│       │  Event   │               │  └─┤ │ Events └───────────┘ │  │
│       │◄─────────┤               │    └─┤                      │  │
│       │          │               │      └──────────────────────┘  │
│       │          │               │                                │
└───────┘          └───────────────┴────────────────────────────────┘

```

合约的接口定义了合约的交互，包括：
- constructor
- message
- event

用户可以根据这三点与智能合约进行交互。事实上，这三部分也构成了 ink! 合约 metadata 的主要部分。

对于一个合约来说，这三部分必须是确定、明确和易于理解的。因此，合约代码的接口需要保证内聚性。

合约控制器负责整合各组件。我们把合约的主要逻辑分拆成一系列可重用的组件，这些组件可以在其他组件的基础上进行扩展和组合。
数据模型是对合约状态和合约逻辑的封装。每个合约组件在其数据模型中需要不同的属性。因此，一个完整的合约将由多个数据模型组成。

一般来说，数据模型也有助于合约交互，制定合约的接口，但在大多数情况下，外部应用程序和用户不会与存储合约数据的区块链状态进行互动。因此，这里不强调数据模型的外部封装。

#### 继承 VS 组合

在合约开发中，我们强调合约的可审计性，Solidity中对继承特性的使用，会使得合约难以进行代码审计：合约逻辑被分散到多个文件甚至不同的项目中。因此，在 Metis 中，我们不直接继承合约的接口和实现，而是引入组件和数据模型组合最终的合约。
每个组件都实现了一系列的功能，包括消息和 APIs 的方法。组件可以基于其他组件进行扩展和组合。
大多数组件看起来像这样：

```rust
/// The `EventEmit` impl the event emit api for ownable component.
pub trait EventEmit<E: Env>: EnvAccess<E> {
    /// Emit OwnershipTransferred event
    fn emit_event_ownership_transferred(
        &mut self,
        previous_owner: Option<E::AccountId>,
        new_owner: Option<E::AccountId>,
    );
}

/// The `Impl` define ownable component impl funcs
pub trait Impl<E: Env>: Storage<E, Data<E>> + EventEmit<E> {
    /// init Initializes the contract setting the deployer as the initial owner.
    fn init(&mut self) {
        // logic
    }

    /// Message impl 
    fn one_message_impl(&mut self) -> Result<()> {
        // msg impl which will call by ```xxx::Impl::one_message_impl(self)```

        // use the hook
        self.hook(xxx)?

        Ok(())
    }

    /// Message for Query impl
    fn one_query_impl(& self, param_acc: &E::AccountId) -> Data {
        Data::default()
    }

    /// API for other message
    fn check_xxx(&self, owner: &E::AccountId) {
    }

    // Hook which need impl by contract
    fn hook(&mut self, params: &E::Balance) -> Result<()>;
}
```

一些组件包含默认实现：

```rust
// a default impl, each contract which impl storage and event emitter can be component
impl<E: Env, T: Storage<E, Data<E>> + EventEmit<E>> Impl<E> for T {}
```

要用这个组件，我们可以将其导入到合约中：

```rust
#![cfg_attr(not(feature = "std"), no_std)]

#[metis_lang::contract] // use `metis_lang::contract`
pub mod contract {
    // use the component: xxx1 and xxx2
    use metis_component_xxx1 as xxx1;
    use metis_component_xxx2 as xxx2;

    // use `import` and `metis` marco
    use metis_lang::{
        import,
        metis,
    };

    #[ink(storage)]
    #[import(xxx1, xxx2)] // import the component
    pub struct Contract {
        // add data to storage, which use Contract as Env to Data
        xxx1: xxx1::Data<Contract>,
        xxx2: xxx2::Data<Contract>,
    }

    /// add event for component
    /// in emit it will be emit_event_ownership_transferred
    #[ink(event)]
    #[metis(xxx1)] // event for xxx1
    pub struct OwnershipTransferred {
        /// previous owner account id
        #[ink(topic)]
        previous_owner: Option<AccountId>,
        /// new owner account id
        #[ink(topic)]
        new_owner: Option<AccountId>,
    }

    /// Event emitted when payee withdraw
    #[ink(event)]
    #[metis(xxx2)] // event for xxx1
    pub struct OtherEvent {
        #[ink(topic)]
        pub payee: AccountId,
        pub amount: Balance,
    }

    impl xxx1::Impl<Contract> for Contract {
        fn hook(
            &mut self,
            params: &E::Balance
        ) -> Result<()> {
            // some logic

            Ok(())
        }
    }

    // impl
    impl Contract {
        #[ink(constructor)]
        pub fn new() -> Self {
            // impl for default
            let mut instance = Self {
                xxx1: xxx1::Data::new(),
                xxx2: xxx2::Data::new(),
            };

            // init call
            xxx1::Impl::init(&mut instance);
            xxx2::Impl::init(&mut instance);

            // return instance
            instance
        }

        /// commits for one_message_impl
        #[ink(message)]
        pub fn one_message_impl(&mut self) -> Result<()> {
            // some other check
            xxx2::Impl::do_some_check(self);
            xxx1::Impl::one_message_impl(self)
        }

        /// commits for one_query_impl
        #[ink(message, payable)]
        pub fn one_query_impl(&self, payee: AccountId) {
            xxx1::Impl::one_query_impl(self, payee)
        }

        /// commits for other_message_impl
        #[ink(message)]
        pub fn other_message_impl(&mut self, payee: AccountId) {
            xxx1::Impl::check_xxx(self)
            // other logic
        }
    }

    #[cfg(test)]
    mod tests {
        // test for contract
    }
}
```

#### Hook 和 Impl

在前面的例子中，我们可以看到函数 hook：

```rust
    // Hook which need impl by contract
    fn hook(&mut self, params: &E::Balance) -> Result<()>;
```

在某些组件中， hook有一个默认实现：
```rust
    /// @dev Hook that is called before any token transfer. This includes
    /// calls to {send}, {transfer}, {operatorSend}, minting and burning.
    ///
    /// Calling conditions:
    ///
    /// - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
    /// will be to transferred to `to`.
    /// - when `from` is zero, `amount` tokens will be minted for `to`.
    /// - when `to` is zero, `amount` of ``from``'s tokens will be burned.
    /// - `from` and `to` are never both zero.
    ///
    /// To learn more about hooks,
    /// head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
    fn _before_token_transfer(
        &mut self,
        _operator: &E::AccountId,
        _from: &Option<&E::AccountId>,
        _to: &Option<&E::AccountId>,
        _amount: &E::Balance,
    ) -> Result<()> {
        Ok(())
    }
```

该hook将被组件函数自动调用。 用户可以定义自己的hook。 这里有一个例子，是在 Pausable ERC20 组件中：

```rust
    fn before_token_transfer(
        &mut self,
        _from: &E::AccountId,
        _to: &E::AccountId,
        _amount: E::Balance,
    ) -> Result<()> {
        metis_pausable::Impl::<E>::ensure_not_paused(self);

        Ok(())
    }
```

Pausable ERC20 组件通过实现hook扩展了本地 ERC20 组件。

#### Metis合约组件

在Metis的未来版本中，我们将首先完整实现 openZeppelin-contracts 组件供开发者使用。 这些组件包括：

- Token：ERC20、ERC721、ERC777、ERC1155 以及这些 Token 合约的扩展。
- 访问权限：Ownable、AccessControl、TimelockController。
- 安全性：PullPayment、ReentrancyGuard、Pausable。

Metis 将实现一套通用组件，类似于OpenZeppelin-Contracts库。确保所有库的代码都经过全面测试和审计，这些组件将尽可能地与 OpenZeppelin-Contracts 保持一致，通过吸收从 Solidity 生态中学到的经验来平滑开发者的学习曲线：

- ERC20（https://patractlabs.github.io/metis/tokens/erc20.html）
- ERC721（https://patractlabs.github.io/metis/tokens/erc721.html）
- ERC777（https://patractlabs.github.io/metis/tokens/erc777.html）
- ERC1155（https://patractlabs.github.io/metis/tokens/erc1155.html）
- Ownable（https://patractlabs.github.io/metis/access-control/ownable.html）
- AccessControl（https://patractlabs.github.io/metis/access-control/access-control.html）
- Access Control Enumerable（https://patractlabs.github.io/metis/access-control/access-control-enumerable.html#access-control-enumerable）
- TimelockController（https://patractlabs.github.io/metis/governance/timelock-controller.html）
- Escrow(PullPayment)（https://patractlabs.github.io/metis/utilities/escrow.html）
- Support(ERC165)（https://patractlabs.github.io/metis/tools/erc165.html）
- ReentrancyGuard（https://patractlabs.github.io/metis/security/reentrancy-guard.html）
- Pausable（https://patractlabs.github.io/metis/security/pausable.html）

有关每个组件的详细信息，请参阅文档。

### 2.3 示例和测试

每个组件都附带了 ink! 链下测试环境和 Redspot 的默认实现示例和测试用例。
