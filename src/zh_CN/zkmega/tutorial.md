# tutorial

## 基于 Substrate 的链引入　zkMega 的零知识原语

具备`pallet-contracts`的链集成 zkMega 可以参照 Jupiter 的集成方式: [https://github.com/patractlabs/jupiter/blob/master/primitives/chain-extension/src/lib.rs](https://github.com/patractlabs/jupiter/blob/master/primitives/chain-extension/src/lib.rs)

其主要步骤主要分为以下几步：

1. 设计一个实现于 `ChainExtension` 的结构体
2. 在`ChainExtension`的`call`的实现中判断 `func_id` 的范围，按照 [PIP-101](https://github.com/patractlabs/PIPs/blob/main/PIPs/pip-101.md) 中的描述，当前使用 zkMega 需要的范围为 `0x01000000..=0x010000ff`。因此可以在实现中引入：

    ```rust
    match func_id {
            // 0x01000000-0x010000ff Patract ZKP Support
            0x01000000..=0x010000ff => {

            }
    }
    ```

3. 然后在 `0x01000000..=0x010000ff` 的代码块中引入 gas 计费的方式。不同的链可能会对 zkMega 调用的方法设计不同的计费方式。在Jupiter的案例中仅最简单的设计了一个固定消耗gas的方式：

    ```rust
    let simple_weight = match func_id & 0x01 {
            0 => 100_000,   // add, In ethereum: 500
            1 => 8_000_000, // 80x then add, In ethereum: 40000
            2 => {/* ...*/ }
            _ => return Err(DispatchError::Other("Unimplemented Patract ZKP func_id"));
        };
    env.charge_weight(simple_weight)?;
    ```

4. 根据链自身需要 Native 的调用还是 Wasm 的调用进行不同的实现：

    例如如果该链只想支持 Wasm 的调用，则使用如下方式：

    ```rust
    zkmega_arkworks::call(&func_id, &input);
    ```

    若该链希望将调用放到 Native 上执行，则可以类似于Jupiter一致，设计 `runtime_inferface` 包裹`zkmega_arkworks::call` 的调用，将调用过程放到 std 下编译。然后在 `ChainExtensions`的实现中调用 `runtime_interface` 导出的方法即可。

## 合约中调用 zkMega 的零知识原语的接口

合约中使用 zkMega 就比较简单。首先在合约依赖中引入`megaclite-arkworks`

```toml
[dependencies]
megaclite-arkworks = { git = "https://github.com/patractlabs/zkmega", features = [ "ink" ], default-features = false }
```

请注意引入 zkMega 库的时候需要使用 `ink` feature。

之后在合约里即可以使用 zkMega 提供的方法：

```rust
megaclite_arkworks::verify(...);
```

如果是比较底层的调用，则可以直接通过`call`来调用：

```rust
let func_id = /*id defined in PIP-101*/
megaclite_arkworks::verify(func_id, ...);
```
