# Reentrancy Guard

Contract component that helps prevent reentrant calls to a function.

## Dependency
```rust
metis_reentrancy_guard  = { git = "https://github.com/patractlabs/metis", default-features = false }
```

## Storage

In most cases, developer not need to consider the storage of reentrancy guard.

```rust
const _NOT_ENTERED: u8 = 1;
const _ENTERED: u8 = 2;

/// The Data of pausable component
#[cfg_attr(feature = "std", derive(::ink_storage::traits::StorageLayout))]
#[derive(Debug)]
pub struct Data {
    /// is contract current paused
    status: Lazy<u8>,

    key: ink_primitives::Key,
}
```

Note the `key` in module, in `ink!`, all storage will flush to storage after the end of message proccess,
so if contract only modifies `status`, the reentrancy_guard will not work:

```rust
    /// set current status to entered
    pub fn set_entered(&mut self) {
        Lazy::set(&mut self.status, _ENTERED);
        self.flush() // flush to storage
    }

    /// set current status to not entered
    pub fn set_not_entered(&mut self) {
        Lazy::set(&mut self.status, _NOT_ENTERED);
        self.flush() // flush to storage
    }
```

## Internal Function

There is some internal function for reentrancy_guard, the marco will check it automatically:

```rust
        #[ink(message)]
        #[metis_lang::reentrancy_guard]
        pub fn function_can_not_reentrancy(&mut self) {
            self._check_nonreentrant();
            self._set_entered();

            // logics

            self._set_not_entered();
        }
```

the functions:

- `_check_nonreentrant` : check if the current status is `_NOT_ENTERED`
```rust
    fn _check_nonreentrant(&self) {
        assert!(!self.get().is_entered(), "ReentrancyGuard: reentrant call");
    }
```
- `_set_entered` : set current status to `_ENTERED`
```rust
    fn _set_entered(&mut self) {
        self.get_mut().set_entered();
    }
```
- `_set_not_entered` : set current status to `_NOT_ENTERED`
```rust
    fn _set_not_entered(&mut self) {
        self.get_mut().set_not_entered();
    }
```
## Usage Example

To use `reentrant_guard` component, first is import the component:

```rust
    use metis_lang::{
        import,
        metis,
    };
    
    use metis_reentrancy_guard as reentrancy_guard;

    #[ink(storage)]
    #[import(reentrancy_guard)]
    pub struct Contracts {
        reentrancy_guard: reentrancy_guard::Data,

        // others
    }
```

To use reentrancy guard, we can use a marco to check, it like the modifier in solidity:

```rust
        #[ink(message)]
        #[metis_lang::reentrancy_guard]
        pub fn function_can_not_reentrancy(&mut self) {
            // logics
        }
```