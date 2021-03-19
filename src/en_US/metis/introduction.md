# Metis

Metis is the contract standard implementation and example case library led by Patract. In this warehouse, contract language frameworks such as ink!, Ask! that can run on `pallet-contracts` will be provided with the implementation of corresponding contract standards and common cases.

Metis is similar to OpenZepplin-contracts in the Ethereum ecosystem, providing contract developers with reusable wheels without having to write contract code from scratch. Developers who are new to Polkadot's ecological trial contract development can quickly build common applications with the help of the code in this warehouse after learning simple basic knowledge.

> Since the current ink! contract is not yet stable and the Ask! contract is still under development, neither platform has yet to make standards. Therefore, the current implementations provided in Metis are some mimic implementations that imitate the EIP-related standards in Solidity.

# Overview

## Warehouse Address
[https://github.com/patractlabs/metis](https://github.com/patractlabs/metis)

## Project structure
The metis project is divided into the following three modules: `trait`, `stubs`, and `impls`.

### trait
The `trait` module contains commonly used contract standard definitions, such as: erc20, erc721, etc. The ink! contract defines the common shared contract interface by defining `#[ink::trait_definition]` to achieve the characteristics similar to solidity `interface`.

Metis has formulated some widely used `trait_definition` contract standards based on development practical experience. Developers only need to add the `trait` package defined in metis to their own project's dependencies,
And implement the method defined in `#[ink::trait_definition]` like implementing the rust trait, then a common standard contract can be implemented.

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

    /// Transfers'amount' from caller to'to'.
    #[ink(message, payable)]
    fn transfer(&mut self, to: AccountId, amount: Balance);
}
```

### stubs

The `stubs` module is a `stub` implementation of the `trait definition` contract defined in the `trait` module. The main purpose of stub is to assemble the contract address into a contract object when calling across contracts, and the contract method on the chain corresponding to the contract address can be called through the contract object.

Students who are familiar with solidity know that solidity implements inter-contract calls through interface, such as: `interfaceContract _interfaceContract = interfaceContract(_addr);`, so you may have questions here: since ink! has been implemented through `#[ink:: trait_definition]` to implement the contract interface,
Why not use `trait` to implement cross-contract calls, but need `stub`? This is indeed a feature that the official parity needs to implement in the next step, but it is not currently supported. Interested students can track the official implementation (https://github.com/paritytech/ink/issues/631).

Therefore, metis implements the function of cross-contract call by providing contract stubs. Developers can introduce stub contracts into the project to implement cross-contract calls.

> The structure of the interface definition is exactly the same as that of the contract, but no function implementation is defined, only they are declared. This type of declaration is usually called a `stub`;

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
        fn new(initial_supply: Balance) -> Self {unimplemented!()}

        #[ink(message)]
        fn total_supply(&self) -> Balance {unimplemented!()}

        #[ink(message, payable)]
        fn transfer(&mut self, to: AccountId, amount: Balance) {unimplemented!()}
    }
}
```

### impls

The impls module provides contract development and implementation cases, including the above-mentioned `trait`, the use of packages in the `stubs` module, and contract cases with features such as zkp.


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
