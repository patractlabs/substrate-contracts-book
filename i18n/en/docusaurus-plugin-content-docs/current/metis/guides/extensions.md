# Extending Metis
Such components can extend their functions by inheriting other components, such as an ERC20 component with the function of destroying tokens:

```rust
pub trait Impl<E>: erc20::Impl<E>
where
    E: Env,
{
    fn _burn(&mut self, account: &E::AccountId, amount: E::Balance) -> Result<()> {
        //...
    }

    fn burn(&mut self, amount: E::Balance) -> Result<()> {
        self._burn(&Self::caller(), amount)
    }

    fn burn_from(&mut self, account: &E::AccountId, amount: E::Balance) -> Result<()> {
        //...
    }
}
```

Based on metis, we can implement various contract combination modes implemented by Solidity through inheritance under limited intent, and at the same time, with the help of rust's zero-cost abstraction, these abstractions will not bring additional performance consumption.