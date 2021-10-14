# Metis vs OpenZeppelin
Metis refers the implementations from OpenZepplin and absorbs the successful experience. However, since Solidity is based inheritence but Rust, as a non OOP language, doesn't support inheritence. 

Let's take `Ownable` as an example to help us understand the differences between OpenZepplin and Metis.

## OpenZeppelin
```solidity
abstract contract Ownable is Context {
    // Component Storage
    address private _owner;

    // Component Event
    event OwnershipTransferred(
        address indexed previousOwner,
        address indexed newOwner
    );
    
    // Component internal interface
    modifier onlyOwner() {
        ...
    }

    // Component Event
    function renounceOwnership() public virtual onlyOwner {
        ...
    }

    ...
}
```

If a contract needs to be Ownable, just inherit the contract:

```solidity
contract Escrow is Ownable {
...
}
```

Similarly, other components can also have Ownable through inheritance:

```solidity
contract Pausable is Ownable {
  ...
  function unpause() public onlyOwner whenPaused {
      ...
  }
}
```
The intention of inheritance in OpenZepplin is actually composition rather than an `is-a` relationship. Although excessive use of inheritance in Solidity will cause many problems, inheritance for specific intentions is still an important way to achieve it.


## Metis
In contract development based on ink!, through metis, we can also achieve the same motivation based on generics and traits:

### Metis's version of `Ownable`
```rust
...

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

Metis assists developers to achieve the same function through a series of helper macros. In order to improve the auditability of the contract, here we hope that users clearly implement storage, event and message declarations.

### Stub
At the same time, metis has simplified the implementation of components using stub:

```rust
//...

// Storage
#[metis::component::storage]
pub struct Data<E>
where
    E: Env,
{
    owner: Lazy<Option<E::AccountId>>,
}

// Event trait
pub trait EventEmit<E: Env>: EnvAccess<E> {
    //...
}

// Impl trait
pub trait Impl<E: Env>: Storage<E> + EventEmit<E> {
    // logics
    fn init(&mut self) {
        self.get_mut().set_ownership(&Some(Self::caller()));
    }

    fn renounce_ownership(&mut self) {
        self.ensure_caller_is_owner();

        self.emit_event_ownership_transferred(
            self.get().get_ownership().clone(),
            None);

        self.get_mut().set_ownership(&None);
    }

    //...

    /// Panic if `owner` is not an owner
    fn ensure_owner(&self, owner: &E::AccountId) {
        assert!(&self.get().get_ownership().clone().unwrap() == owner);
    }

    //...
}

```