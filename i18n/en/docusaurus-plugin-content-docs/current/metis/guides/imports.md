# Use Metis components

!> Warnning: We can redefine the name of metis component, but we should keep in mind that all component names should be changed after import.

**Note** this:

```rust
    use metis_component_xxx1 as xxx1;
```

if we use the `xxx1` be the alias of the `metis_component_xxx1`, so the all tag of components should be `xxx1`:

- The `import` marco for contract
- The name of item in contract struct type
- The `metis` marco for event

For example:

```rust
pub mod contract {
    // use the component: xxx1 and xxx2
    use metis_component_xxx1 as xxx1;

    ...

    #[ink(storage)]
    #[import(xxx1)] // The `import` marco for contract, should be xxx1
    pub struct Contract {
        //  The name of item in contract struct type, should be xxx1
        xxx1: xxx1::Data<Contract>,
    }

    ...

    #[ink(event)]
    #[metis(xxx1)] // The `metis` marco for event
    pub struct OwnershipTransferred {
    }

    ...
}
```
