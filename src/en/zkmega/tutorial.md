# tutorial

## The chain based on Substrate introduces 　zkMega's zero-knowledge primitives

The chain integration zkMega with `pallet-contracts` can refer to Jupiter's integration method: [https://github.com/patractlabs/jupiter/blob/master/primitives/chain-extension/src/lib.rs](https:/ /github.com/patractlabs/jupiter/blob/master/primitives/chain-extension/src/lib.rs)

The main steps are mainly divided into the following steps:

1. Design a structure implemented in `ChainExtension`
2. Determine the range of `func_id` in the implementation of `call` of `ChainExtension`, according to [PIP-101](https://github.com/patractlabs/PIPs/blob/main/PIPs/pip-101.md ), the current range required to use zkMega is `0x01000000..=0x010000ff`. Therefore, it can be introduced in the implementation:

    ```rust
    match func_id {
            // 0x01000000-0x010000ff Patract ZKP Support
            0x01000000..=0x010000ff => {

            }
    }
    ```

3. Then introduce the gas billing method in the code block of `0x01000000..=0x010000ff`. Different chains may design different billing methods for the methods called by zkMega. In Jupiter's case, only the simplest way to design a fixed consumption of gas:

    ```rust
    let simple_weight = match func_id & 0x01 {
            0 => 100_000,   // add, In ethereum: 500
            1 => 8_000_000, // 80x then add, In ethereum: 40000
            2 => {/* ...*/ }
            _ => return Err(DispatchError::Other("Unimplemented Patract ZKP func_id"));
        };
    env.charge_weight(simple_weight)?;
    ```

4. Implement different implementations according to whether the chain itself needs Native call or Wasm call:

    For example, if the chain only wants to support Wasm calls, use the following method:

    ```rust
    zkmega_arkworks::call(&func_id, &input);
    ```

    If the chain wants to execute the call on Native, it can be similar to Jupiter, design `runtime_inferface` to wrap the call of `zkmega_arkworks::call`, and put the call process under std to compile. Then call the method exported by `runtime_interface` in the implementation of `ChainExtensions`.

## The interface for calling zkMega's zero-knowledge primitives in the contract

It is relatively simple to use zkMega in the contract. First introduce `megaclite-arkworks` in contract dependencies

```toml
[dependencies]
megaclite-arkworks = { git = "https://github.com/patractlabs/zkmega", features = [ "ink" ], default-features = false }
```

Please note that you need to use the `ink` feature when importing the zkMega library.

Then you can use the methods provided by zkMega in the contract:

```rust
megaclite_arkworks::verify(...);
```

If it is a relatively low-level call, you can call it directly through `call`:

```rust
let func_id = /*id defined in PIP-101*/
megaclite_arkworks::verify(func_id, ...);
```
