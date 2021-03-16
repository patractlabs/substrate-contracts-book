# ERC20
metis 提供了完全符合 `ERC20` 标准的 [trait_definition](https://github.com/patractlabs/metis/tree/master/traits/token/erc20) 、[合约间调用 stub](https://github.com/patractlabs/metis/tree/master/stubs/token/erc20) 
以及 [erc20合约](https://github.com/patractlabs/metis/tree/master/impls/token/erc20) 的标准实现。

下面详细介绍下 metis 提供的 erc20 trait 和 stub 的使用方法。

## Trait Definition
通过 `#[ink::trait_definition]` 处理宏，开发者可以定义自己的 trait definitions，然后可以由 ink! 智能合约实现。 这允许为不同的具体实现定义共享的智能合约接口。 注意这种 `#[ink::trait_definition]` 可以在任何地方定义，甚至可以在另一个 crate 中定义！

### erc20 trait 代码解析 
```rust
#![cfg_attr(not(feature = "std"), no_std)]

pub use self::erc20::{Error, IErc20, Result};
pub mod events {
    // pub use crate::erc20::{Transfer, Approval};
}

use ink_lang as ink;
#[ink::contract]
mod erc20 {
    use ink_lang as ink;
    use ink_prelude::string::String;
    /// The ERC-20 result type.
    pub type Result<T> = core::result::Result<T, Error>;

    /// Event emitted when a token transfer occurs.
    #[ink(event)]
    pub struct Transfer {
        #[ink(topic)]
        pub from: Option<AccountId>,
        #[ink(topic)]
        pub to: Option<AccountId>,
        #[ink(topic)]
        pub value: Balance,
    }
    /// Event emitted when an approval occurs that `spender` is allowed to withdraw
    /// up to the amount of `value` tokens from `owner`.
    #[ink(event)]
    pub struct Approval {
        #[ink(topic)]
        pub owner: AccountId,
        #[ink(topic)]
        pub spender: AccountId,
        #[ink(topic)]
        pub value: Balance,
    }

    /// The ERC-20 error types.
    #[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
    #[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
    pub enum Error {
        /// Returned if not enough balance to fulfill a request is available.
        InsufficientBalance,
        /// Returned if not enough allowance to fulfill a request is available.
        InsufficientAllowance,
    }

    /// Trait implemented by all ERC-20 respecting smart contracts.
    #[ink::trait_definition]
    pub trait IErc20 {
        /// Creates a new ERC-20 contract with the specified initial supply.
        #[ink(constructor)]
        fn new(
            initial_supply: Balance,
            name: Option<String>,
            symbol: Option<String>,
            decimals: Option<u8>,
        ) -> Self;

        /// Returns the token name.
        #[ink(message)]
        fn token_name(&self) -> Option<String>;

        /// Returns the token symbol.
        #[ink(message)]
        fn token_symbol(&self) -> Option<String>;

        /// Returns the token decimals.
        #[ink(message)]
        fn token_decimals(&self) -> Option<u8>;
        /// Returns the total token supply.
        #[ink(message)]
        fn total_supply(&self) -> Balance;
        /// Returns the account balance for the specified `owner`.
        #[ink(message)]
        fn balance_of(&self, owner: AccountId) -> Balance;

        /// Transfers `value` amount of tokens from the caller's account to account `to`.
        #[ink(message)]
        fn transfer(&mut self, to: AccountId, value: Balance) -> Result<()>;

        /// Returns the amount which `spender` is still allowed to withdraw from `owner`.
        #[ink(message)]
        fn allowance(&self, owner: AccountId, spender: AccountId) -> Balance;

        /// Transfers `value` tokens on the behalf of `from` to the account `to`.
        #[ink(message)]
        fn transfer_from(&mut self, from: AccountId, to: AccountId, value: Balance) -> Result<()>;

        /// Allows `spender` to withdraw from the caller's account multiple times, up to
        /// the `value` amount.
        #[ink(message)]
        fn approve(&mut self, spender: AccountId, value: Balance) -> Result<()>;
    }

    // TODO tmp hack struct for passing compile
    #[ink(storage)]
    pub struct Phantom;
    impl Phantom {
        #[ink(constructor)]
        pub fn new() -> Self {
            Phantom {}
        }
        #[ink(message)]
        pub fn message(&self) {}
    }
}
```
首先必须要定义 `#[ink::trait_definition]`, 这里定义了一个 `IErc20` 的 trait 接口。在 trait_definition 中必须定义至少一个 `#[ink(constructor)]` 和 `#[ink(message)]`。
所有接口只有声明，没有实现。

`#[ink::trait_definition]` 是可以脱离于 `#[ink::contract]` 单独定义的，一般简单的trait的，只需要定义 trait_definition 即可，如在前文介绍中定义的那样。但在这个 erc20 trait 的
实现中，之所以定义在`#[ink::contract]` 中，是因为 `#[ink(event)]` 的存在，我们希望不仅提供接口，也提供一些事件和错误的定义，这样开发者在使用我们的 erc20-trait 包时可以清楚的知道会
触发那些事件和发生哪些错误，但美中不足的是`#[ink(event)]`不能脱离于`#[ink::contract]`单独定义，所以我们只能临时实现一个 `Phantom` 合约及存储来使编译通过。这个问题我们已经像官方提交issue
（https://github.com/paritytech/ink/issues/683） 。

在定义了`#[ink::trait_definition]`后，注意需要将 trait 导出，如： `pub use self::erc20::{Error, IErc20, Result};`, 只有导出后才可以被其他 crate 使用。

### 使用 erc20-trait 实现合约
1. 创建一个新合约
```
cargo contract new myerc20
```
注意： metis中所有合约的 ink! dependencies 都是最新的ink仓库中的代码，因此需要将新建的合约项目中的依赖改为最新，不然会引起版本冲突，如下：
```toml
[dependencies]
ink_primitives = { version = "3.0.0-rc3", git = "https://github.com/paritytech/ink", default-features = false }
ink_metadata = { version = "3.0.0-rc3", git = "https://github.com/paritytech/ink", default-features = false, features = ["derive"], optional = true }
ink_env = { version = "3.0.0-rc3", git = "https://github.com/paritytech/ink", default-features = false }
ink_storage = { version = "3.0.0-rc3", git = "https://github.com/paritytech/ink", default-features = false }
ink_lang = { version = "3.0.0-rc3", git = "https://github.com/paritytech/ink", default-features = false }
ink_prelude = { version = "3.0.0-rc3", git = "https://github.com/paritytech/ink", default-features = false }
```
2. 将 `erc20-trait` 包添加到新合约项目的 `cargo.toml` 依赖中
```toml
[dependencies]
erc20-trait = { git = "https://github.com/patractlabs/metis", default-features = false, features = ["ink-as-dependency"] }

[features]
default = ["std"]
std = [
    "erc20-trait/std",
]
```
这里添加依赖时，启用了 ` features = ["ink-as-dependency"]` 特性，是因为在 ink！中合约作为依赖是需要开启改特性。 

3. 在新合约项目中实现 erc20 trait

完整代码在: `https://github.com/patractlabs/metis/blob/master/impls/token/erc20`

```rust
#![cfg_attr(not(feature = "std"), no_std)]

use ink_lang as ink;

#[ink::contract]
mod erc20 {
    use erc20_trait::{Error, IErc20, Result};
    use ink_prelude::string::String;

    /// Basic version of StandardToken, with no allowances.
    #[ink(storage)]
    pub struct Erc20 {
        /// Total token supply.
        total_supply: Lazy<Balance>,
        /// Mapping from owner to number of owned token.
        balances: StorageHashMap<AccountId, Balance>,
        /// Mapping of the token amount which an account is allowed to withdraw
        /// from another account.
        allowances: StorageHashMap<(AccountId, AccountId), Balance>,
        /// Name of the token
        name: Option<String>,
        /// Symbol of the token
        symbol: Option<String>,
        /// Decimals of the token
        decimals: Option<u8>,
    }

    impl IErc20 for Erc20 {
        #[ink(constructor)]
        fn new(
            initial_supply: Balance,
            name: Option<String>,
            symbol: Option<String>,
            decimals: Option<u8>,
        ) -> Self {
            // implementation ...
        }

        // Omitted part of interface
        
        #[ink(message)]
        fn transfer_from(&mut self, from: AccountId, to: AccountId, value: Balance) -> Result<()> {
            // implementation ...
        }
        
        #[ink(message)]
        fn approve(&mut self, spender: AccountId, value: Balance) -> Result<()> {
            // implementation ...
        }
    }
}
```

## 跨合约调用
在此之前我们已经通过 erc20 trait 实现了标准 erc20 合约, 在一些复杂的 dapps 中与 erc20 合约交互是必不可少的。metis 提供了 `erc20 stub` 支持调用我们已经实现erc20合约。

```rust
#![cfg_attr(not(feature = "std"), no_std)]

pub use self::erc20::Erc20Stub;
use ink_lang as ink;

#[ink::contract]
mod erc20 {
    use erc20_trait::{IErc20, Result};
    use ink_prelude::string::String;

    /// Basic version of Erc20Stub.
    #[ink(storage)]
    pub struct Erc20Stub {}

    impl IErc20 for Erc20Stub {
        /// Creates a new ERC-20 contract with the specified initial supply.
        #[ink(constructor)]
        fn new(
            _initial_supply: Balance,
            _name: Option<String>,
            _symbol: Option<String>,
            _decimals: Option<u8>,
        ) -> Self {
            unimplemented!()
        }
        
        // Omitted part of interface

        /// Allows `spender` to withdraw from the caller's account multiple times, up to
        /// the `value` amount.
        #[ink(message)]
        fn approve(&mut self, _spender: AccountId, _value: Balance) -> Result<()> {
            unimplemented!()
        }
    }
}
```
通过以上代码可以知道，在 stub 合约中没有erc20 具体逻辑的实现，只提供了接口的空实现，该合约将作为父合约被子合约实例化，
并且可以在子合约中，调用父合约的接口。

### 通过 erc20 stub 跨合约调用
1. 将 `erc20-stub` 包添加到新合约项目的 `cargo.toml` 依赖中
```toml
[dependencies]
erc20-stub = { git = "https://github.com/patractlabs/metis", default-features = false, features = ["ink-as-dependency"] }

[features]
default = ["std"]
std = [
    "erc20-stub/std",
]
```

2. 在新合约中实例化 erc20 stub
```rust
#![cfg_attr(not(feature = "std"), no_std)]

use ink_lang as ink;

#[ink::contract]
mod delegate {
    use erc20_stub::Erc20Stub;
    use ink_env::call::FromAccountId;
    use ink_storage::Lazy;

    #[ink(storage)]
    pub struct CrossCall {
        callee: Lazy<Erc20Stub>,
    }

    impl CrossCall {
        #[ink(constructor)]
        pub fn new(callee: AccountId) -> Self {
            let token: Erc20Stub = FromAccountId::from_account_id(callee);
            Self { callee: Lazy::new(token) }
        }

        #[ink(message)]
        pub fn transfer(&mut self, owner: AccountId, amount: Balance) {
            self.callee.transfer(owner, amount).unwrap();
        }
    }
}
```
在 ink! 合约中可以使用 `FromAccountId` 实例化合约对象（不是创建一个新合约），接下来就可以使用合约对象对合约方法进行跨合约调用。
