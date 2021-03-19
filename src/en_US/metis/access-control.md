# Access Control
Although smart contract applications are decentralized, implementing necessary centralized access control in the contract can make the contract more secure.

## Ownership and Ownable
The concept of ownership is the most common and basic form of access control: an account is the owner of the contract and can perform management tasks on the contract.

metis provides [Ownership](https://github.com/patractlabs/metis/tree/master/traits/access/ownership) to realize the ownership in your contract.
```rust
#[ink::trait_definition]
pub trait Ownable {
    /// Initializes the contract setting the deployer as the initial owner.
    #[ink(constructor)]
    fn new() -> Self;

    /// Returns the account id of the current owner.
    #[ink(message)]
    fn owner(&self) -> Option<AccountId>;

    /// Transfer ownership to new owner.
    #[ink(message)]
    fn transfer_ownership(&mut self, new_owner: Option<AccountId>);
}
```

### Use `Ownership` to realize contract ownership
1. Add the `ownership` package to the `cargo.toml` dependency of the new contract project
```toml
[dependencies]
ownership = {version = "0.1.0", git = "https://github.com/patractlabs/metis", default-features = false}

[features]
default = ["std"]
std = [
    "ownership/std",
]
```
2. The simplest realization of `ownership`
```rust
use ink_lang as ink;

#[ink::contract]
mod ownership {
use super::Ownable;

    #[ink(storage)]
    pub struct Ownership {
        owner: Option<AccountId>,
    }

    impl Ownable for Ownership {
        #[ink(constructor)]
        fn new() -> Self {
            Self {
                owner: Self::env().caller(),
            }
        }

        #[ink(message)]
        fn owner(&self) -> Option<AccountId> {
            self.owner.clone()
        }

        #[ink(message)]
        fn transfer_ownership(&mut self, new_owner: Option<AccountId>) {
            assert_eq!(self.owner(), Some(self.env().caller()));
            if let Some(new_one) = new_owner {

            }
            self.owner = new_owner;
        }
    }
}
```
By default, the owner of the contract is the account that deployed it, and `Ownable` also provides the `transfer_ownership` method to allow you to transfer the contract ownership to other accounts.