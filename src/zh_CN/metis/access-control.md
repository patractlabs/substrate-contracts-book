# Access Control
虽然智能合约应用是去中心化的，但在合约中实现必要的中心化访问控制可以使合约更加安全。

## Ownership and Ownable
所有权的概念是访问控制最常见和最基本的形式：有一个帐户是合约的 owner，可以在合约上执行管理任务。 

metis 提供 [Ownership](https://github.com/patractlabs/metis/tree/master/traits/access/ownership)  来实现您合约中的所有权。
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

### 使用 `Ownership` 实现合约所有权
1. 将 `ownership` 包添加到新合约项目的 `cargo.toml` 依赖中
```toml
[dependencies]
ownership = { version = "0.1.0", git = "https://github.com/patractlabs/metis", default-features = false }

[features]
default = ["std"]
std = [
    "ownership/std",
]
```
2. 最简实现 `ownership`
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
默认情况下，合约的所有者是部署它的帐户，`Ownable` 也提供了 `transfer_ownership` 方法可以让您将合约所有权转移到其他帐户。
