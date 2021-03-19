# ink! eDSL basic elements

The elements of ink! eDSL design are actually relatively similar to those of Solidity, because the contract model structure of Contracts Pallet and the contract model of EVM are relatively similar.

Therefore, the design of ink! can find a lot of shadows similar to Solidity (the same applies to the Runtime design of Substrate). When describing the ink characteristics later, I will try to compare with the characteristics of Solidity, which is convenient for readers to understand.

## Elements of eDSL

From the example provided by ink! documentation or ink!, the code shows that ink! also proposes the following three basic elements on the Contracts Pallet model:

* `constructor`/`message`
* `storage`
* `event`

However, due to the design relationship of the Rust process macro, you can see that ink! First requires a contract to be under a `mod`, and add the `#[ink::contract]` macro to this `mod`:
```rust,ignore
#[ink::contract]
mod erc20 {
    // ...
}
```

In this way, it is equivalent to telling ink! What is in this mod is to be processed according to the eDSL of ink.

### `#[ink::contract]`

Therefore, when you encounter the macro `#[ink::contract]`, it appears that this is the "contract part" identified by ink!. Therefore, we can see that many imports of `use xxx` will be placed under the scope of `mod` in `#[ink::contract]`.

And the current ink! design is that, under a `crate` package, only one `#[ink::contract]` can appear, so it means that ink! thinks that the dimension of a contract is based on rust's `crate`, that is If in the same `crate`, whether in the same file (for example, under `lib.rs`) or in different files, more than two are defined by `#[ink::contract]` The `mod`, for example:

```rust,ignore
#[ink::contract]
mod erc20 {
    // ...
}

#[ink::contract]
mod another_define {
    // ...
}
```
Analogous to solidity:

```solidity,ignore
// a.sol defines multiple `contract` in the same file
contract A {

}
contract B {

}
```

Then in the compilation of ink!, this situation will be considered illegal.

Of course, as opposed to this, as long as there is only one `mod` modified by `#[ink::contract]` in the current `crate`, other `mod`s should be used normally, so the contract modified by ink! `crate` can still do a good job of code isolation, enhance readability and maintainability**. This ability is important for **maintaining large and complex contracts**, such as:

```rust,ignore
#[ink::contract]
mod erc20 {
    use crete::another_define::*;
}

mod another_define {
    // ...
}
```

For example, the following example:

```rust,ignore
mod fxck {
    use crate::erc20::Erc20;
    use ::ink_lang::Env; // Note that `ink_lang::Env` needs to be introduced here
    impl Erc20 {
        pub fn tmp(&self) {
            self.env().caller(); // 
        }
    }
}

#[ink::contract]
mod erc20 {
    #[ink(storage)]
    pub struct Erc20 {...}

    impl Erc20 {
        #[ink(constructor)]
        pub fn new(initial_supply: Balance) -> Self {...}
        #[ink(message)]
        pub fn transfer(&mut self, initial_supply: Balance) -> Self {
            self.tmp(); // call methods defined in other `mod`
        }
    }
}
```

This model can achieve some code isolation that cannot be done under Solidity, and enhance maintainability. (Because Solidity's library can only be used for pure function calculations)

In summary, under the ink! system:
* A contract is in a `crate` unit, and only one `#[ink::contract]` definition can appear in a `crate`;
* `#[ink::contract]` modified `mod` represents the content of the contract, and also represents **the basic elements of the contract must be defined under this `mod`**;
* All parts other than `mod` modified by `#[ink::contract]` (other `mod`, functions, types) follow the rules of rust, and good code isolation can be done to improve maintainability;
* In practice, the `mod` modified by `#[ink::contract]` can be used as the entry point of the contract, and the implemented logic can be distributed to other `mod`s.

The following uses "contract mod" to indicate a `mod` modified by `#[ink::contract]`

### `storage`

In the contract mod, a structure must be defined, and this structure is modified by `#[ink(storage)]`, indicating that the storage of the contract is defined.

At the same time, this structure definition modified by `#[ink(storage)]` is also regarded as an operable contract entity**, so all contract-related resources, types, and operations will be ** and this structure The body is bound together**. When the contract calls the contract, the type of the called contract is also represented by this structure.

Therefore, this structure can be understood as a contract entity.

> Although the part that modifies `mod` is the contract, because `mod` can only represent the scope in rust, so for practical use, use the structure modified by `#[ink(storage)]` to indicate that it can be operated Contract entity.
>
> In this context, the `mod` modified by `#[ink::contract]` can be understood as the concept of "opening the contract domain", while the `stuct` modified by `#[ink(storage)]` It is a contract under this contract domain.

Here, the concept of storage defined by ink! is consistent with the concept of “storage” defined in Solidity, which means that the attributes defined here are the final state written to the **chain**. The purpose of writing all contract logic is to modify the state defined here.

However, because the current ink! uses a structure to carry the contract state, all the states of the current contract can only be defined in this structure. When the contract is designed to be relatively large and complicated, the maintainability here will decrease.

An example of defining storage is as follows:

```rust,ignore
#[ink(storage)]
pub struct Erc20 {
    /// Total token supply.
    total_supply: Lazy<Balance>,
    /// Mapping from owner to number of owned token.
    balances: StorageHashMap<AccountId, Balance>,
    /// Mapping of the token amount which an account is allowed to withdraw
    /// from another account.
    allowances: StorageHashMap<(AccountId, AccountId), Balance>,
}
```

Structures modified by `#[ink(storage)]` are collectively referred to as contract structures in the following text.

Here are a few features that need to be paid special attention to:

1. The type of the attribute defined in the contract structure must be a type that has implemented `SpreadLayout` (or more accurately, a type that implements `PackedLayout`, because `PackedLayout` is inherited from the definition of `SpreadLayout`):

    ```rust,ignore
    /// Types that can be stored to and loaded from the contract storage.
    pub trait SpreadLayout {
    }
    ```

    > The reason why only the type that implements this trait can be used here is very simple, because storage is different from the general type, it must contain the information of the "chain" in it, so the contract implementation of different chains must have a part for processing The storage (that is, state) allocation problem in the contract.
    >
    > For example, during the compilation process of Solidity, the key of the state is actually assigned according to the upper and lower order defined by the storage in the contract. If the `SpredLayout` or `PackedLayout` type has been implemented here, there will be an approximate process for state allocation.

    Ink! has done basic implementations for general types, but **for collection types (`Vec`, `HashMap`, etc.), because the state of the contract needs to hook the process of reading and writing**, it cannot be implemented for collection types This `trait`. Therefore, in ink!, all the commonly used collection types in the standard library have been re-implemented, and the attribute types of the structure modified by `#[ink(storage)]` must be used if the collection type is used. The collection type provided by ink!**.

    > Since Solidity is relatively rudimentary, the storage map defined by Solidity cannot be traversed. (Caused by a defect in the Solidity design)
    >
    > ink! has done a lot of things when designing this piece, so the collection types `Vec`, `BTreeMap`, `HashMap` and so on provided by ink! are all **traversable**. Compared with the functions that Solidity can achieve, it is a considerable improvement.

2. Even based on the above design, the nested collection type is still difficult to implement (because the state structure of Substrate uses the k/v model). Therefore, in the design, we can only try to avoid nested collection types. If you must nest the collection type, you need to flatten the nesting level, merge the second-level key and the first-level key together, and use tuples instead (equivalent to `double_map` in Substrate Runtime)

    ```Solidity,ignore
    // solidity
    contract A {
        mapping (uint => mapping (uint => uint))
    }
    ```

    The similar code in ink! should be:
    
    ```rust,ignore
    #[ink(storage)]
    pub struct Erc20 {
        // Note that the key here uses the tuple `(AccountId, AccountId)`
        allowances: StorageHashMap<(AccountId, AccountId), Balance>,
    }
    ```

3. A model of `Lazy` is provided in storage, which allows developers to use `Lazy` to wrap a type so that the state data can be loaded when it is used:

    ```rust,ignore
    /// A lazy storage entity.
    ///
    /// This loads its value from storage upon first use.
    ///
    /// # Note
    ///
    /// Use this if the storage field doesn't need to be loaded in some or most cases.
    #[derive(Debug)]
    pub struct Lazy<T>
    where
        T: SpreadLayout,
    {
        cell: LazyCell<T>,
    }
    ```

    How to use:

    ```rust,ignore
    #[ink(storage)]
    pub struct Erc20 {
        /// Total token supply.
        total_supply: Lazy<Balance>,
    }
    ```

### `constructor`/`message`

`constructor`/`message` is the entry function that triggers the contract state change. In other words, `constructor`/`message` is the state transition function of the contract state.

`constructor`/`message` can only modify the methods of the contract structure**, and cannot be used to modify the methods of other structures or other pure functions.

In the contract mod, there is at least one method for the contract structure modified by `constructor` and `message`. If there are less than one respectively, it will cause compilation error.

among them:
* `constructor` corresponds to the constructor in the Solidity contract. When the contract is deployed (in Contracts Pallet currently represents the process of doing `instantiate` from the uploaded contract code), a call to the corresponding constructor will be triggered.

    > It needs to be emphasized here that the call of the constructor and the instantiation of the contract are two conceptual things. This process is **not atomic** in the coordination process of ink! and Contracts Pallet. Therefore, the constructor may not be called, but the contract address will be generated, and the contract instance for which the constructor has not been called can be called normally.
    >
    > A typical example is the wrong code parameter passed in when calling `instantiate`.

* `message` corresponds to the call methods such as `public`/`external` in the Solidity contract. Due to the characteristics of Rust's mutable/immutable methods, `message` uses the ** feature to indicate whether this method will modify the state of the contract**.

    So if the method of `message` modification is
    ```rust,ignore
    // Note that the first parameter of the method is `&self`
    #[ink(message)]
    pub fn total_supply(&self) -> Balance {
        *self.total_supply
    }
    ```

    It means that the call of this method will not modify the state (controlled by the rust syntax), which is consistent with Ethereum. This type of method is mostly used for rpc calls to return the storage of a contract or return some storage-based calculation results.

    If the modification is

    ```rust,ignore
    // Note that the first parameter of the method is `&mut self`
    pub fn transfer(&mut self, to: AccountId, value: Balance) -> Result<()> {
        let from = self.env().caller();
        self.transfer_from_to(from, to, value)
    }
    ```

    It means that the call of this method will modify the state, so if this method is called and executed in the form of a packaged transaction call, it will trigger a state change. If it is called by rpc, it means that the simulation has been executed once.

    At the same time, metadata.json (corresponding to the ABI of Solidity) will be generated after the contract is compiled. In this metadata, there will be a `mutates` field for the message part to indicate whether the method is variable.

#### message's `selector`
For the generation of the ABI of the contract method, Solidity uses the method name plus the parameter type as a function signature to piece together into a string and then make a hash to take the first 4 bytes.

```text
call = "func_name(param1_type,param2_type,...)"
bytes4(keccak256(call), a, b)
```

In ink!, this concept that allows contracts to distinguish call trigger points is called `selector`.

Since rust does not support function overloading, a relatively simple design is adopted in ink!, which directly hashes the string of the function name and takes the first 4 bytes:

```text
call = "func_name"
blake2_512(call)[0..4]
```

> The author believes that this design has caused problems with other contract language designs. Because rust does not support overloading, it does not mean that other languages ​​do not support overloading. After Solang compiles Solidity to Wasm, if it wants to be compatible with ink!'s metadata, problems will arise when calling each other.

On the other hand, `selector` can also run the contract developer's own definition

```rust,json
#[ink(message, selector = "0xCAFEBABE")]
pub fn was_it_ten(&self) -> bool {...}
```

#### message of `payable`

There is a `payable` modifier for the method in Solidity, which is used to indicate that the method can accept a certain amount of money.

Therefore, `payable` is also provided in ink! to indicate whether it is possible to transfer a certain amount of **local currency** while calling this method. In the current design of ink!, if a non-payable message is called with an amount at the same time, the calling process will be regarded as an error.

By default, `paybale` is considered to be `false`, and it is `true` only when the contract developer specifies `payable`.

The case for specifying a message to be callable is:
```rust,json
#[ink(message, playable)]
pub fn was_it_ten(&self) -> bool {...}
```

On the other hand, in metadata, there will be a `payable` field for the message part to indicate whether this method requires payment.

### `event`

The concept of event is not necessary in the state machine model. However, because **blockchain is an asynchronous system**, after sending a transaction to trigger a state change, the result of the change cannot be immediately known, and it can only rely on monitoring an element to determine the execution result. `event` is an element designed at the stage of Solidity, and this design is also inherited from Substrate Runtime and ink!.

> I don't think event is a good design. In theory, there are other better ways, or variants of event. Event will cause abuse by developers to a certain extent.

The `event` of ink! in Contracts Pallet finally prints the event defined by the contract to the event of the chain through the `host function`.

The event design of ink! is nothing special compared to Solidity, but because it is a contract running in Wasm, the event of the printing contract needs to interact with the chain through the host function, so the calling method needs to be passed through. env()` to call.

```rust,ignore
Self::env().emit_event(...);
// or use
self.env().emit_event(...);
```