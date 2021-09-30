# Custom ChainExtensions

ChainExtensions allow chain authors to be able to augment the seal API with additional functions that provide functionality that goes beyond what is provided by the core API. This allows them to tailor seal to their use case. This customization does not modify the seal pallet. 

## [ink-log](https://github.com/patractlabs/ink-log)

Please check  https://github.com/patractlabs/ink-log for more specifications.

Ink-log provides pretty log printing for [Ink!](https://github.com/paritytech/ink) smart contract，it's implmented by `ChainExtension`.

**dependencies** 
> In newest `pallet-contracts` and ink! version, the log feature has been enhanced. So the `ink-log` is no longer needed.
> 
> We advice developer use `ink_env::debug_println!(...)` instead of this `ink-log`.

## Usage
### 1. Pallet-contracts in Substrate Runtime

`runtime_log`: In the `ink-log/runtime` directory, this library is based on the contents of the `function_id` and `LoggerExt` structures passed from `ChainExtensions` to call the corresponding logs under debug in `frame_support` to print. It is an implementation library of `ink_log` prepared for developers of the chain. **For example, chain developers can use it in their own ChainExtensions:

Add this to your `Cargo.toml`:
```
runtime-log = { version = "0.1", git = "https://github.com/patractlabs/ink-log", default-features = false }

[features]
std = [
    "runtime-log/std",
]
```

**example**
1. If you already have one `CustomExt`, use `runtime_log::logger_ext!` to add to your `CustomExt`.
```rust
pub struct CustomExt;

impl ChainExtension for CustomExt {
	fn call<E: Ext>(func_id: u32, env: Environment<E, InitState>) -> Result<RetVal, DispatchError>
	where
		<E::T as SysConfig>::AccountId: UncheckedFrom<<E::T as SysConfig>::Hash> + AsRef<[u8]>,
	{
		// TODO add other libs
        runtime_log::logger_ext!(func_id, env);

		Ok(RetVal::Converging(0))
	}

	fn enabled() -> bool {
		true
	}
}
```
2. If you don't have any `CustomExt`, use `runtime_log::LoggerExt` to set `ChainExtension`.
```rust
impl pallet_contracts::Config for Runtime {
    // ...... 
    type ChainExtension = runtime_log::LoggerExt;
}
```

### 2. Ink! contract

`ink_log`: In the `ink-log/contracts` directory, provide `info!`, `debug!`, `warn!`, `error!`, `trace!`, same as Rust's log library in the same macro, and the call method of the macro is also the same. These macros are packaged implementations of seal_chain_extensions on the ink! side, and are tool library for contract developers. For example, after this library is introduced in the contract Cargo.toml, the log can be printed as follows:

Add this to your contratc `Cargo.toml`:
```
ink_log = { git = "https://github.com/patractlabs/ink-log", branch = "master", default-features = false, features = ["ink-log-chain-extensions"] }

[features]
std = [
    "ink_log/std",
]
```

Notes: must add feature `ink-log-chain-extensions` feature, only when the feature is available, the ink-log functions is effective.

### example

Use like rust [log](https://github.com/rust-lang/log) macro
```rust
#![cfg_attr(not(feature = "std"), no_std)]

use ink_lang as ink;

#[ink::contract(env = ink_log::CustomEnvironment)]
pub mod flipper {
    #[ink(storage)]
    pub struct Flipper {
        value: bool,
    }

    impl Flipper {
        #[ink(constructor)]
        pub fn new(init_value: bool) -> Self {
            Self { value: init_value }
        }

        #[ink(message)]
        pub fn flip(&mut self) {
            ink_log::info!(target: "flipper-contract", "latest value is: {}", self.value);
            
            self.value = !self.value;
        }
    }
}
```

Output:
```
2020-12-28 17:44:30.274   INFO tokio-runtime-worker flipper-contract:/paritytech/ink/examples/flipper/lib.rs:42:❤️  latest value is: false
```

### 3. log extension func_id
```
0xfeffff00
```
other func_id refer to https://github.com/patractlabs/PIPs/blob/main/PIPs/pip-100.md


## ZKP feature

Check the [zkMega](https://github.com/patractlabs/zkmega)，For examples of related contracts, see [metis/groth16](https://github.com/patractlabs/metis/tree/master/groth16)。