# ERC20
metis provides [trait_definition](https://github.com/patractlabs/metis/tree/master/traits/token/erc20) and [calling stub between contracts](https://github.com/patractlabs/metis/tree/master/traits/token/erc20) that fully complies with the `ERC20` standard. com/patractlabs/metis/tree/master/stubs/token/erc20)
And the standard implementation of [erc20 contract](https://github.com/patractlabs/metis/tree/master/impls/token/erc20).

The following is a detailed introduction to the use of the erc20 trait and stub provided by metis.

## Trait Definition
By processing macros with `#[ink::trait_definition]`, developers can define their own trait definitions, which can then be implemented by ink! smart contract. This allows the definition of shared smart contract interfaces for different specific implementations. Note that this `#[ink::trait_definition]` can be defined anywhere, even in another crate!

### erc20 trait source code analysis
```rust
#![cfg_attr(not(feature = "std"), no_std)]

// Note: The tarit definition needs to be exported here for other packages to use
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
First, you must define `#[ink::trait_definition]`, where a trait interface of `IErc20` is defined. At least one of `#[ink(constructor)]` and `#[ink(message)]` must be defined in trait_definition.
All interfaces have only declarations, not implementations.

`#[ink::trait_definition]` can be defined separately from `#[ink::contract]`. For simple traits, you only need to define trait_definition, as defined in the introduction. But in this erc20 trait
In the implementation, the reason why it is defined in `#[ink::contract]` is because of the existence of `#[ink(event)]`. We hope to not only provide interfaces, but also provide some event and error definitions, so that developers When using our erc20-trait package, you can clearly know that it will
Which events are triggered and what errors occur, but the catch is that `#[ink(event)]` cannot be separated from the separate definition of `#[ink::contract]`, so we can only temporarily implement a `Phantom` contract and store it. Make the compilation pass. We have submitted this issue as an official issue
(Https://github.com/paritytech/ink/issues/683).

After defining `#[ink::trait_definition]`, pay attention to exporting the trait, such as: `pub use self::erc20::{Error, IErc20, Result};`, only after exporting can it be used by other crates .

### Use erc20-trait to implement the contract
1. Create a new contract
```
cargo contract new myerc20
```
Note: The ink! dependencies of all contracts in metis are the codes in the latest ink warehouse, so you need to change the dependencies in the newly created contract project to the latest, otherwise it will cause version conflicts, as follows:
```toml
[dependencies]
ink_primitives = { version = "3.0.0-rc3", git = "https://github.com/paritytech/ink", default-features = false }
ink_metadata = { version = "3.0.0-rc3", git = "https://github.com/paritytech/ink", default-features = false, features = ["derive"], optional = true }
ink_env = { version = "3.0.0-rc3", git = "https://github.com/paritytech/ink", default-features = false }
ink_storage = { version = "3.0.0-rc3", git = "https://github.com/paritytech/ink", default-features = false }
ink_lang = { version = "3.0.0-rc3", git = "https://github.com/paritytech/ink", default-features = false }
ink_prelude = { version = "3.0.0-rc3", git = "https://github.com/paritytech/ink", default-features = false }
```
2. Add the `erc20-trait` package to the `cargo.toml` dependency of the new contract project
```toml
[dependencies]
erc20-trait = { git = "https://github.com/patractlabs/metis", default-features = false, features = ["ink-as-dependency"] }

[features]
default = ["std"]
std = [
    "erc20-trait/std",
]
```
When adding a dependency here, the `features = ["ink-as-dependency"]` feature is enabled because it is in ink! As a dependency, the Chinese contract needs to be turned on and modified.

3. Implement the erc20 trait in the new contract project

The complete code is at: `https://github.com/patractlabs/metis/blob/master/impls/token/erc20`

```rust
#![cfg_attr(not(feature = "std"), no_std)]

use ink_lang as ink;

#[ink::contract]
mod erc20 {
    // Here you need to import the interface and errors defined in erc20_trait
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

## Call stub across contracts
Before that, we have implemented the standard erc20 contract through the erc20 trait, and it is essential to interact with the erc20 contract in some complex dapps. Metis provides `erc20-stub` to support cross-contract calls. We have implemented the erc20 contract.

### erc20 stub source code analysis
```rust
#![cfg_attr(not(feature = "std"), no_std)]

// Need to export Erc20Stub for sub-contract call
pub use self::erc20::Erc20Stub;
use ink_lang as ink;

#[ink::contract]
mod erc20 {
    use ink_prelude::string::String;

    /// The ERC-20 error types.
    #[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
    #[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
    pub enum Error {
        /// Returned if not enough balance to fulfill a request is available.
        InsufficientBalance,
        /// Returned if not enough allowance to fulfill a request is available.
        InsufficientAllowance,
    }

    /// The ERC-20 result type.
    pub type Result<T> = core::result::Result<T, Error>;

    #[ink(storage)]
    pub struct Erc20Stub {}

    impl Erc20Stub {
        /// Creates a new ERC-20 contract with the specified initial supply.
        #[ink(constructor)]
        pub fn new(
            _initial_supply: Balance,
            _name: Option<String>,
            _symbol: Option<String>,
            _decimals: Option<u8>,
        ) -> Self {
            unimplemented!()
        }

        /// Returns the token name.
        #[ink(message, selector = "0x6b1bb951")]
        pub fn token_name(&self) -> Option<String> {
            unimplemented!()
        }

        /// Returns the token symbol.
        #[ink(message, selector = "0xb42c3368")]
        pub fn token_symbol(&self) -> Option<String> {
            unimplemented!()
        }

        /// Returns the token decimals.
        #[ink(message, selector = "0xc64b0eb2")]
        pub fn token_decimals(&self) -> Option<u8> {
            unimplemented!()
        }

        /// Returns the total token supply.
        #[ink(message, selector = "0x143862ae")]
        pub fn total_supply(&self) -> Balance {
            unimplemented!()
        }

        /// Returns the account balance for the specified `owner`.
        #[ink(message, selector = "0xb7d968c9")]
        pub fn balance_of(&self, _owner: AccountId) -> Balance {
            unimplemented!()
        }

        /// Transfers `value` amount of tokens from the caller's account to account `to`.
        #[ink(message, selector = "0x10d455c2")]
        pub fn transfer(&mut self, _to: AccountId, _value: Balance) -> Result<()> {
            unimplemented!()
        }

        /// Returns the amount which `spender` is still allowed to withdraw from `owner`.
        #[ink(message, selector = "0xc04aa300")]
        pub fn allowance(&self, _owner: AccountId, _spender: AccountId) -> Balance {
            unimplemented!()
        }

        /// Transfers `value` tokens on the behalf of `from` to the account `to`.
        #[ink(message, selector = "0xbb399017")]
        pub fn transfer_from(
            &mut self,
            _from: AccountId,
            _to: AccountId,
            _value: Balance,
        ) -> Result<()> {
            unimplemented!()
        }

        /// Allows `spender` to withdraw from the caller's account multiple times, up to
        /// the `value` amount.
        #[ink(message, selector = "0x4ce0e831")]
        pub fn approve(&mut self, _spender: AccountId, _value: Balance) -> Result<()> {
            unimplemented!()
        }
    }
}
```
From the above code, we can know that there is no erc20 specific logic implementation in the stub contract, only an empty implementation of the interface is provided, and the contract will be instantiated by the child contract as the parent contract.
And you can call the interface of the parent contract in the child contract.

Note: In the erc20-stub contract, the `selector` of each contract method is set with a fixed value, where the value of `selector` is determined by `BLAKE2("IErc20::{message_func_name}".to_string().as_bytes ())[0..4]`
The formula is calculated.

The calculation method of `selector` in the ink! system is different from that of solidity. In solidity, the method signature is hashed, while in ink! there is a set of calculation methods. The simplest one is for `{message_func_name} `
Perform hash operation, but when message is implemented by `#[ink::trait_definition]`, use {trait_name} + {message_func_name} mixed hash method, detailed calculation rules,
You can check ink! Source code (https://github.com/paritytech/ink/blob/master/crates/lang/ir/src/ir/item_impl/callable.rs#L190).

Therefore, erc20-stub is only applicable to cross-contract calls of the erc20 contract implemented in metis (implemented through the IErc20 trait). If it is an erc20 contract implemented in other ways, this stub cannot be used due to the mismatch of `selector`.

### Cross-contract call through erc20 stub
1. Add the `erc20-stub` package to the `cargo.toml` dependency of the new contract project
```toml
[dependencies]
erc20-stub = {git = "https://github.com/patractlabs/metis", default-features = false, features = ["ink-as-dependency"]}

[features]
default = ["std"]
std = [
    "erc20-stub/std",
]
```

2. Instantiate erc20 stub in the new contract
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
In the ink! contract, you can use `FromAccountId` to instantiate the contract object (not to create a new contract), and then you can use the contract object to make cross-contract calls to contract methods.

> `ink_storage::Lazy` manages data entities and delays the execution of read/write operations on the storage. Only when it is determined that reading/writing is really needed, it will be executed on the storage.