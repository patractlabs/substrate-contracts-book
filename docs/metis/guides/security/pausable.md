# Pausable

Metis component which allows the contract to implement an emergency stop
mechanism that can be triggered by an authorized account.

This component is used through inheritance. It will make available through the
internal functions `ensure_not_paused` and `ensure_paused`, which can be applied to
the functions of your contract. Note that they will not be pausable by
simply including this component, only once the modifiers(hooks) are put in place.

## Dependency
```rust
metis_pausable = { git = "https://github.com/patractlabs/metis", default-features = false }
```

## Storage

`Pausable` has only one state for pause or unpause:

```rust
/// The Data of pausable component
pub struct Data {
    /// is contract current paused
    paused: Lazy<bool>,
}
```

## Mutable Messages

To control a contract is paused or unpause, we need impl some access limit for it, so the `_pause` and `_unpause` should be called by develop.

> **WARNNING** NOT use `_pause` and `_unpause` directly.

### _pause

Pause the contract, will emit the Paused Event.

Requirements:

- The contract must be not paused.

```rust
    fn _pause(&mut self) {
        self.ensure_not_paused();
        self.get_mut().pause();
        self.emit_event_paused(Self::caller());
    }
```

### _unpause

Unpause the contract, will emit the `Unpaused` Event

Requirements:

- The contract must be paused.

```rust
    fn _unpause(&mut self) {
        self.ensure_paused();
        self.get_mut().unpause();
        self.emit_event_unpaused(Self::caller());
    }
```

## Immutable Messages

### paused

Returns true if the contract is paused, and false otherwise

```rust
    fn paused(&self) -> bool {
        self.get().is_paused()
    }
```

## Internal Functions

A contract with `Pausable` component can use `ensure_paused` and `ensure_not_paused` to make sure the messages cannot used when paused.

### ensure_paused

Panic if current is not paused.

```rust
    fn ensure_paused(&self) {
        assert!(self.get().is_paused(), "Pausable: ensure paused");
    }
```

### ensure_not_paused

Panic if current is paused.

```rust
    fn ensure_not_paused(&self) {
        assert!(!self.get().is_paused(), "Pausable: ensure not paused");
    }
```

## Events

### Paused

The Event will emit when the contract is into paused state.

```rust
    #[ink(event)]
    #[metis(pausable)]
    pub struct Paused {
        /// paused caller
        #[ink(topic)]
        account: AccountId,
    }
```

### Unpaused

The Event will emit when the contract is unpaused.

```rust
    #[ink(event)]
    #[metis(pausable)]
    pub struct Unpaused {
        /// unpaused caller
        #[ink(topic)]
        account: AccountId,
    }
```

## Usage Example

To use `Pausable` component, should import pausable, at the same time, if use pausable component,
we need some access control to control pause or unpause, so we will also import ownerable component.

```rust
#[metis_lang::contract]
mod contract {
    use metis_lang::{
        import,
        metis,
    };
    
    use metis_ownable as ownable;
    use metis_pausable as pausable;

    #[ink(storage)]
    #[import(pausable, ownable)]
    pub struct PausableContract {
        pausable: pausable::Data,
        ownable: ownable::Data<Flipper>,

        // other datas
    }
}
```

Note pausable component not need use Env for types in environment, just use `pausable::Data`.

Add Events which pausable need:

```rust
    /// Event emitted when Pause
    #[ink(event)]
    #[metis(pausable)]
    pub struct Paused {
        /// paused caller
        #[ink(topic)]
        account: AccountId,
    }

    /// Event emitted when unPause
    #[ink(event)]
    #[metis(pausable)]
    pub struct Unpaused {
        /// unpaused caller
        #[ink(topic)]
        account: AccountId,
    }

    /// Need OwnershipTransferred for ownerable.
```

in constructor, call the init from pausable:

```rust
    #[ink(constructor)]
    pub fn new() -> Self {
        let mut instance = Self {
            pausable: pausable::Data::default(),
            ownable: ownable::Data::default(),

            // other datas default data
        };

        pausable::Impl::init(&mut instance);
        ownable::Impl::init(&mut instance);

        // other initializes

        instance
    }
```

then add the message to control if is paused:

```rust
    /// Returns true if the contract is paused, and false otherwise
    #[ink(message)]
    pub fn paused(&self) -> bool {
        pausable::Impl::paused(self)
    }

    /// Pause the contract, will emit the `Paused` Event
    ///
    /// Requirements:
    ///
    /// - The contract must be not paused.
    /// - The caller should be the owner of contract
    #[ink(message)]
    pub fn pause(&mut self) {
        ownable::Impl::ensure_caller_is_owner(self);
        pausable::Impl::_pause(self)
    }

    /// Unpause the contract, will emit the `Unpaused` Event
    ///
    /// Requirements:
    ///
    /// - The contract must be paused.
    /// - The caller should be the owner of contract
    #[ink(message)]
    pub fn unpause(&mut self) {
        ownable::Impl::ensure_caller_is_owner(self);
        pausable::Impl::_unpause(self)
    }
```

In this example, only owner can pause or unpause the contract. In different contracts, this also can impl by access-control component.

In other contract messages, we can use `ensure_paused` and `ensure_not_paused` to control contract logic by paused:

```rust
    #[ink(message)]
    pub fn do_sth(&mut self) {
        // if contract is paused, the do_sth cannot called
        pausable::Impl::ensure_not_paused(self);
        
        // logic for do_sth
    }
```