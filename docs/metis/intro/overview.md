# Overview
Metis is the standard contract Library for ink!, an eDSL written in Rust for WASM smart contract based on Substrate. With the introduction of Metis, ink! developers can skip the insecure and repeated  process of copying and paste existent implementation from other smart contracts. 

## Git repository
For detailed implmentations and examples, please check [Metis](https://github.com/patractlabs/metis)

## Contracts
***A library for secure smart contract development***. Build on mature solutions used OpenZeppelin 

- Implementations of standards like ERC20 and ERC721.

- Flexible role-based permissioning scheme such as  `Ownable`, `Access Control`

- Reusable ink! components to build custom contracts.

## Installation
add required dependencies in `cargo.toml` in your ink! contract project directory.

> Note: metis_lang is a must-have dependency while other dependencies are required on demand. For more details, please check [Metis Examples](https://github.com/patractlabs/metis/tree/main/example)

```rust
metis_lang = { git = "https://github.com/patractlabs/metis", default-features = false }
metis_erc20 = { git = "https://github.com/patractlabs/metis", default-features = false }
metis_ownable = { git = "https://github.com/patractlabs/metis", default-features = false }
metis_pausable = { git = "https://github.com/patractlabs/metis", default-features = false }

```

## Sample Usages
```rust

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
    #[metis(ownable)] // event in ink! will refactor
    pub struct OwnershipTransferred {
        //...
    }

    impl Flipper {
        //...

        #[ink(message)]
        pub fn flip(&mut self) {
            // check owner
            ownable::Impl::ensure_caller_is_owner(self);

            self.value = !self.value;
        }

        //...

        #[ink(message)]
        pub fn renounce_ownership(&mut self) {
            ownable::Impl::renounce_ownership(self) // owner message
        }

        //...
    }
}

```

## Componenets
Metis implements a series of common components, similar to the Openzeppelin-contracts development library. These components will be thoroughly tested and code audited. These components will be as consistent as possible with Openzeppelin-contracts, which can reduce the burden on developers and effectively absorb the experience accumulated in the Solidity ecosystem.

Metis includes the following components:

- Openzeppelin-contracts-like components, including basic `Access` and `Security` components, as well as `Token` and `Governance` components
- Component developed for ink! contracts, wasm-based contracts can support better abstraction mechanisms, and we can implement more complex and practical components
- Summarizing abstract components from mature contract projects, metis will absorb the experience and accumulation of the community, including both the mature Solidity ecology and emerging blockchain contract projects.
- The expansion of ink! contracts, including basic data structures for different scenarios, etc.

Implemented Components:

- Token: ERC20, ERC721, ERC777, ERC1155 and the expansion contract of the above Token contract
- Access: Ownable, AccessControl, TimelockController
- Security: PullPayment, ReentrancyGuard, Pausable


## ink! Componenet Types
Most of Metis development libraries are composed of contract components. In Solidity, the introduction of contract components can be implemented based on inheritance. Generally, the contract components are divided into the following parts:

- Component Storage: The storage state related to the logic of the component itself, these states do not need to be exposed to the outside
- Component Message: The externally-facing Message of the component
- Component Event: The event that the component's own logic will  emit
- Component internal interface: an interface for other logic in the contract to call

## Claim
> Since the current ink! contract is not yet stable and the Ask! contract is still under development, neither platform has yet to make standards. Therefore, the current implementations provided in Metis are some mimic implementations that imitate the EIP-related standards in Solidity.
