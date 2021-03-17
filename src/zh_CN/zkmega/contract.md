# Contract

> Currently we (Patract) support zkMega in testnet Jupiter ([https://github.com/patractlabs/jupiter](https://github.com/patractlabs/jupiter)) and contract debug 
> sandbox Europa ([https://github.com/patractlabs/europa](https://github.com/patractlabs/europa)). And any substrate based chain which uses `pallet-contracts` v3.0.0 could integrate zkMega.
> 
> if the `pallet-contracts` Wasm contract chain use zkMega, then the following contract could run normally in those chain.

## Example

TODO this example is wrong for current version!

```rust,ignore
#![cfg_attr(not(feature = "std"), no_std)]

#[ink::contract]
mod altbn128 {
    use ink_env::zk_snarks::AltBn128;
    use ink_prelude::string::String;

    #[ink(storage)]
    pub struct Altbn128 {
        value: String,
    }

    impl Altbn128 {
        #[ink(constructor)]
        pub fn new(init_value: String) -> Self {
            Self { value: init_value }
        }

        #[ink(constructor)]
        pub fn default() -> Self {
            Self::new("hello, world".into())
        }

        #[ink(message)]
        pub fn bn_256_add(&mut self) {
            let mut result = [0; 64];
            ink_env::inflect_add::<AltBn128>(&[], &[], &mut result);
            self.value = ink_prelude::format!("0x{:x?}", result);
        }

        #[ink(message)]
        pub fn get(&self) -> String {
            ink_prelude::format!("{}", &self.value)
        }
    }
}
```

[paritytech/substrate]: https://github.com/paritytech/substrate.git
[patractlabs/jupiter]: https://github.com/paritytech/jupiter.git
