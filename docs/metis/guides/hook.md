# Hooks

## Why using hook
Sometimes, in order to extend a parent contract you will need to override multiple related functions, which leads to code duplication and errors

For example, consider implementing safe ERC20 transfers in the style of IERC721Receiver. You may think overriding transfer and transferFrom would be enough, but what about _transfer and _mint? To prevent you from having to deal with these details, Metis uses Function Hooks.

Hooks are simply functions that are called before or after some action takes place. They provide a centralized point to hook into and extend the original behavior.

In some component, the hook has a default implementation:

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

The hook will call by component functions, user can define it, a normal example is Pausable ERC20 component:

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

The Pausable ERC20 component is extend the erc20 component, which implements the hook. You can find this hooks get called here:

```rust
    fn _transfer_from_to(
        &mut self,
        sender: E::AccountId,
        recipient: E::AccountId,
        amount: E::Balance,
    ) -> Result<()> {
        let null_account = E::AccountId::default();

        if sender == null_account || recipient == null_account {
            return Err(Error::AccountIsZero)
        }

        self._before_token_transfer(&sender, &recipient, &amount)?;
        xxxxx
    }
```