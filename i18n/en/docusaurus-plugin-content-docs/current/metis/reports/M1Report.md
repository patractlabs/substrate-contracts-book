# Patract's treasury report for Metis M1 (Wasm Contract Library)

6 weeks ago，Patract applied a [proposal #469](https://polkadot.polkassembly.io/post/469) for Metis M1, Now, we have finished all the work and you can review our codebase at：

- [Metis](https://github.com/patractlabs/metis)
- [Metis Documentation](https://patractlabs.github.io/metis/overview.html)

Metis proposed and implemented [`MCCI` architecture](https://patractlabs.github.io/metis/use-component.html#metis-mcci-architecture). MCCI acrhitecture facilitates smart contract development by composititing independent components. Here are a list of components currently implemented:

- ERC20 and its expansion components
- ERC721 and its expansion components
- ERC777 and its expansion components
- ERC1155 and its expansion components
- Ownable
- AccessControl
- TimelockController
- Escrow(PullPayment)
- support(ERC165)
- ReentrancyGuard
- Pausable

For detailed usages and implemented examples, please refer [Metis Documentation](https://patractlabs.github.io/metis/index.html).

During the development of Metis, we have refined the smart contract testing procedures based on Redspot by tweaking the underlying mechanism. For usages of testing purposes, please refer [Example](https://github.com/patractlabs/metis/tree/master/example).

> **NOTE** Please be aware that due to large volume of Metis's testcases, we should run tests separately for each contract. For detailed commands, please refer [Metis Example README](https://github.com/patractlabs/metis/blob/master/example/README.md)

## 1. Metis's future development plan

- ~~**[M1]** Implement basic macros and implementations for components; improve component testing support; developers can build regular DAPPs based on Metis~~
- **[M2]** Complete component macros; complete component development support so that developers can build custom components; complete the api support corresponding to the metis component.
- **[M3]** Rich component library; complete component and API support for governance and financial mechanism; thorough mathematical library for contract development to support DeFi-type contracts that require complex calculations.

## 2. Report

### 2.1 Implement basic component macros

We have implemented the following marcos for components development:

- `contract` : to define the contract following metis contract standard.
- `import` : to generate code to implement the components.
- `metis` : to define the metis component.
- `stub` : to implement stub in metis.
- `reentrancy_guard` : helper macro for the `reentrancy_guard` component.
- `supports` : helper macro for the erc165 supports api.
- `hash` : to calculate the hash of a string during compilation.
- `selector_id` : to calculate the `selector_id`  of a `message`.

**NOTE** The currently available macros listed above are minimal implementations which will be extended and fortified in [M2] milestone, please refer [Use Component](https://patractlabs.github.io/metis/use-component.html)

### 2.2 Components


The most important work in this version is implementing the Metis components for constructing smart contracts.

#### Metis-MCCI architecture

- `M` : Data model. Most contracts read and write contract environmental states. These states map to specific data models. Each model is associated with only one component.
- `C` : component. A component is a reusable, independent implementation unit that encapsulates data and methods but maintains orthogonality with other components.
- `C` : controller. The controller coordinates the components and implements the contract interface.
- `I` : interface. The interface is the user interface of the contract. The interface defines the interactions of the contract and further defines the metadata.

```txt
┌───────┐          ┌───────────────┬────────────────────────────────┐
│       │          │ Interface     │ Control                        │
│       │          │               │  ┌─────────────────────┐       │
│       │          │  Constructor  │  │ Component           │       │
│ User  │  Call    │               │  │ ┌───────────────────┴──┐    │
│       ├─────────►│  Messages     │  │ │ Component            │    │
│       │          │               │  │ │ ┌────────────────────┴─┐  │
│       │          │  Events       │  │ │ │ Component            │  │
├───────┤          │               │  │ │ │        ┌───────────┐ │  │
│       │  Call    │               │  │ │ │ Msgs   │           │ │  │
│       ├─────────►│               │  │ │ │        │ Module    │ │  │
│       │          │               │  │ │ │ Apis   │           │ │  │
│ Apps  │          │               │  │ │ │        │           │ │  │
│       │  Event   │               │  └─┤ │ Events └───────────┘ │  │
│       │◄─────────┤               │    └─┤                      │  │
│       │          │               │      └──────────────────────┘  │
│       │          │               │                                │
└───────┘          └───────────────┴────────────────────────────────┘
```

As shown in the figure, under the MCCI architecture, a contract is composed of a series of reusable components. The contract interaction is implemented through the interconnection of components and defined by interface and controller.

The contract's interface defines the contract's interaction, including:

- constructor
- message
- event

A user can interact with smart contract based on these three things. In fact, these three things also constitute `ink!'`s macros as the main part of contract metadata.

For a contract, these three things are guaranteed to be deterministic, unambiguous, and easy to understand. Therefore, the interface of the contract code needs to stay cohesive.

The contract controller is responsible for integrating the components. We break the main logic of the contract down into a series of reusable components, which can **extend** and **compose** based on other components.

A data model is the encapsulation of contract state from contract logic.  Each contract component requires different attributes in its data model. Therefore, a complete contract will be composed of multiple data models. 

In generally, the data model also contributes to the contract interaction, formulating the contract interface, but in most case, external applications and users will not interact with blockchain states which stores contract data. Therefore, the external encapsulation of the data model is not emphasized here.

#### Inheritance Vs Composition

In contract development, we emphasize the audibility of contracts but the use of inheritance feature in solidity makes contract hard for code auditing: The contract logic is spread into multiple files or even in different projects. Therefore, in Metis, we do not directly inherit the interface and implementation of the contract, but in instead components and data model are introduced to composite the final contract.

Each component implements a series of functions including the methods for messages and apis. Components can **extend** and **compose** based on other components.

Most components look like this:

```rust
/// The `EventEmit` impl the event emit api for ownable component.
pub trait EventEmit<E: Env>: EnvAccess<E> {
    /// Emit OwnershipTransferred event
    fn emit_event_ownership_transferred(
        &mut self,
        previous_owner: Option<E::AccountId>,
        new_owner: Option<E::AccountId>,
    );
}

/// The `Impl` define ownable component impl funcs
pub trait Impl<E: Env>: Storage<E, Data<E>> + EventEmit<E> {
    /// init Initializes the contract setting the deployer as the initial owner.
    fn init(&mut self) {
        // logic
    }

    /// Message impl 
    fn one_message_impl(&mut self) -> Result<()> {
        // msg impl which will call by ```xxx::Impl::one_message_impl(self)```

        // use the hook
        self.hook(xxx)?

        Ok(())
    }

    /// Message for Query impl
    fn one_query_impl(& self, param_acc: &E::AccountId) -> Data {
        Data::default()
    }

    /// API for other message
    fn check_xxx(&self, owner: &E::AccountId) {
    }

    // Hook which need impl by contract
    fn hook(&mut self, params: &E::Balance) -> Result<()>;
}

```

Some components contain a default implementation:

```rust
// a default impl, each contract which impl storage and event emitter can be component
impl<E: Env, T: Storage<E, Data<E>> + EventEmit<E>> Impl<E> for T {}
```

To use this component, we can import this to contract:

```rust
#![cfg_attr(not(feature = "std"), no_std)]

#[metis_lang::contract] // use `metis_lang::contract`
pub mod contract {
    // use the component: xxx1 and xxx2
    use metis_component_xxx1 as xxx1;
    use metis_component_xxx2 as xxx2;

    // use `import` and `metis` marco
    use metis_lang::{
        import,
        metis,
    };

    #[ink(storage)]
    #[import(xxx1, xxx2)] // import the component
    pub struct Contract {
        // add data to storage, which use Contract as Env to Data
        xxx1: xxx1::Data<Contract>,
        xxx2: xxx2::Data<Contract>,
    }

    /// add event for component
    /// in emit it will be emit_event_ownership_transferred
    #[ink(event)]
    #[metis(xxx1)] // event for xxx1
    pub struct OwnershipTransferred {
        /// previous owner account id
        #[ink(topic)]
        previous_owner: Option<AccountId>,
        /// new owner account id
        #[ink(topic)]
        new_owner: Option<AccountId>,
    }

    /// Event emitted when payee withdraw
    #[ink(event)]
    #[metis(xxx2)] // event for xxx1
    pub struct OtherEvent {
        #[ink(topic)]
        pub payee: AccountId,
        pub amount: Balance,
    }

    impl xxx1::Impl<Contract> for Contract {
        fn hook(
            &mut self,
            params: &E::Balance
        ) -> Result<()> {
            // some logic

            Ok(())
        }
    }

    // impl
    impl Contract {
        #[ink(constructor)]
        pub fn new() -> Self {
            // impl for default
            let mut instance = Self {
                xxx1: xxx1::Data::new(),
                xxx2: xxx2::Data::new(),
            };

            // init call
            xxx1::Impl::init(&mut instance);
            xxx2::Impl::init(&mut instance);

            // return instance
            instance
        }

        /// commits for one_message_impl
        #[ink(message)]
        pub fn one_message_impl(&mut self) -> Result<()> {
            // some other check
            xxx2::Impl::do_some_check(self);
            xxx1::Impl::one_message_impl(self)
        }

        /// commits for one_query_impl
        #[ink(message, payable)]
        pub fn one_query_impl(&self, payee: AccountId) {
            xxx1::Impl::one_query_impl(self, payee)
        }

        /// commits for other_message_impl
        #[ink(message)]
        pub fn other_message_impl(&mut self, payee: AccountId) {
            xxx1::Impl::check_xxx(self)
            // other logic
        }
    }

    #[cfg(test)]
    mod tests {
        // test for contract
    }
}
```

#### Hook and Impl

In the previous example, we can see the function `hook`:

```rust
    // Hook which need impl by contract
    fn hook(&mut self, params: &E::Balance) -> Result<()>;
```

In some components, the hook has a default implementation:

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

The hook will be called automatically by component functions. User can define their own hook. Here is an example in Pausable ERC20 component:

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

The Pausable ERC20 component extends the native erc20 component by implementing the hook.

#### Metis Contract component

In future versions of Metis, we will first fully implement openZeppelin-contracts components for developers to use. These components include:

- Token: ERC20, ERC721, ERC777, ERC1155 and extensions of the above Token contracts
- Access: Ownable, AccessControl, TimelockController
- Security: PullPayment, ReentrancyGuard, Pausable

Metis will implement a set of common components, similar to the OpenZeppelin-Contracts library. All library code are ensured to be fully tested and audited,
These components will be kept as consistent as possible with OpenZeppelin-contracts to flat the developer's learning curve by absorbing the experience learned from Solidity Ecology:

- [ERC20](https://patractlabs.github.io/metis/tokens/erc20.html)
- [ERC721](https://patractlabs.github.io/metis/tokens/erc721.html)
- [ERC777](https://patractlabs.github.io/metis/tokens/erc777.html)
- [ERC1155](https://patractlabs.github.io/metis/tokens/erc1155.html)
- [Ownable](https://patractlabs.github.io/metis/access-control/ownable.html)
- [AccessControl](https://patractlabs.github.io/metis/access-control/access-control.html)
- [Access Control Enumerable](https://patractlabs.github.io/metis/access-control/access-control-enumerable.html#access-control-enumerable)
- [TimelockController](https://patractlabs.github.io/metis/governance/timelock-controller.html)
- [Escrow(PullPayment)](https://patractlabs.github.io/metis/utilities/escrow.html)
- [Support(ERC165)](https://patractlabs.github.io/metis/tools/erc165.html)
- [ReentrancyGuard](https://patractlabs.github.io/metis/security/reentrancy-guard.html)
- [Pausable](https://patractlabs.github.io/metis/security/pausable.html)

Please refer to the documentation for details of each component.

### 2.3 Examples and tests

Each component is shipped with examples of default implementation and testcases by ink! offchain test environments and redspot.