# Contract Pallet Implementation
##  On `pallet contracts` layer

During the contract debugging process, Europa believes that developers need:

1. Rich error information: Wasm records the error information during the entire execution process, including Wasm executor errors and host_function errors.
2. Execution in the debugging process: The main modification information of `pallet contracts`, the "contract stack" is used to record the process of contract calling contract, and any information that can assist debugging during the execution of this layer of contract, such as the situation of calling the host_function, selector, and calling contract parameters, etc.

Europa made the following modifications:

### Error on the wasm executor layer：

Europa designed our own `ep-sandbox` to replace the original `sp-sandbox` used by `pallet contracts`, and modified `ep_sandbox::Error`

```rust
pub enum Error {
   Module,
   OutOfBounds,
   Execution,
   /// Wasm inner trap
   Trap(imp::Trap),
}
```

`Trap(imp::Trap)` carries backtrace information of the Wasm layer, it can help developers to get the detailed information for execution stack.

Europa's own `ep-sandbox` only has the `std` version (because Europa has removed all Wasm parts, there is no need for `ep-sandbox` to support `no-std`), so in the future, **`ep-sandbox` can be replaced with different wasm executors to support running tests of different wasm executors, and replaced with wasm executors that support debugging and other features. **

Currently `ep-sandbox` uses a forked version of `wasmi` as the executor, so the error it throws is `WasmiError`. See the next chapter for errors in`wasmi`.

### Error of host_functions:

The host function execution error will cause Trap, and will record `TrapReason`. No modification to the data structure, just record.

### Execution during debugging

The Europa forked version of `pallet-contracts` has designed an object to record any information that can help debugging during contract execution:

```rust
/// Record the contract execution context.
pub struct NestedRuntime {
	/// Current depth
    depth: usize,
	/// The current contract execute result
	ext_result: ExecResult,
	/// The value in sandbox successful result
	sandbox_result_ok: Option<ReturnValue>,
	/// Who call the current contract
    caller: AccountId32,
	/// The account of the current contract
    self_account: Option<AccountId32>,
	/// The input selector
    selector: Option<HexVec>,
	/// The input arguments
    args: Option<HexVec>,
	/// The value in call or the endowment in instantiate
    value: u128,
	/// The gas limit when this contract is called
    gas_limit: Gas,
	/// The gas left when this contract return
    gas_left: Gas,
	/// The host function call stack
    env_trace: EnvTraceList,
	/// The error in wasm
    wasm_error: Option<WasmErrorWrapper>,
	/// The trap in host function execution
    trap_reason: Option<TrapReason>,
	/// Nested contract execution context
    nest: Vec<NestedRuntime>,
}
```

In the model of `pallet contracts`, a contract calling another contract is in the "contract stack" model, so `NestedRuntime` will track the execution process of the entire contract stack, and use the property of `nest` to store a list of `NestedRuntime` to represent other contracts the the contract called.

In the process of executing a contract by `pallet contracts`, Europa records the relevant information in the execution process in the structure of `NestedRuntime` in the form of a bypass, and will print the `NestedRuntime` to the log (show the case later) in a certain format after the contract call ends. Contract developers can analyze the information printed by `NestedRuntime` to obtain various detailed information during the execution of the contract, which can be used in various situations:

1. help to locate where the error occurs, including the following situations:
    1. `pallet contracts` layer
    2. `ink!` layer
    3. The specific position in the contract layer
    4. Locate which level of the contract is when a contract calling another contract
2. Analyze the information during the execution of the contract at this timing:
    1. Analyze the consumption of gas execution
    2. Analyze the call of `get_storage` and `set_storage`, help reconstruct the contract code and analyze the demand of `rent`
    3. According to `selector`, `args` and `value`, analyze and locate whether the transaction parameters of the third-party SDK are legal.
    4. Analyze the execution path of the contract and adjust the contract based on the `nest` information and combined with the `seal_call` information.
    5. etc.

The process of recording `pallet contracts` executing contract to `NestEdRuntime` is relatively fine-grained. 
The process of logging the information of the execution contract of `pallet contracts` to `NestEdRuntime` is relatively fine-grained. Take `seal_call` in `define_env!` as an example:

```rust
pub struct SealCall {
    callee: Option<HexVec>,
    gas: u64,
    value: Option<u128>,
    input: Option<HexVec>,
    output: Option<HexVec>,
}
```

The attributes are basically `Option<>`. For example, before calling the contract, the `input` will be set to `Some`, and the return value will be set after the calling contract is normal. If there is an error in the calling contract, then `output` will remain `None`. Therefore, if `input` is `Some` and `output` is `None`, it means that there is a problem with the called contract during the process of calling the contract.

The current information of `NestedRuntime` is only printed in the log. **In the future, `NestedRuntime` will be stored locally and provide corresponding RPC for external access**. Therefore, in the future, third-party applications can obtain `NestedRuntime` for further processing. For example, in our `Redspot`, a plug-in can be designed to generate a contract call another contract topology based on the information of `NestedRuntime`, and a visual contract call path can be generated on the web wallet interface, etc.

## On `wasmtime` Layer

Currently, europa use wasmtime for execution. And wasmtime support to record the backtrace. europa collects them and record in local.

## Contract Log functions

In the process of contract debugging, you need to know the internal execution of the contract and the intermediate data. Currently, due to lack of debugging conditions (such as using gdb for debugging), log printing is the most convenient way. As mentioned in the Europa v0.2 proposal, the current `pallet contracts` and `ink!` already support `format!`+`seal_println` to format and print strings, but this mode has two defects :

1. All the logs of `seal_println` printed on the node side are `target: runtime` and level `DEBUG`, but when developing complex contracts, a lot of logs will be printed. If you cannot filter by `target` and log level, then the development process will be full of interference from irrelevant information.
2. The contract developer wrote `seal_println` when needed during the development process, but all `seal_println` must be deleted when the contract is released. Although the contract developer can encapsulate a conditionally compiled function to control it, it is more convenient if a tool library already provides such a function.

Therefore, Europa provides a log library [patractlabs/ink-log](https://github.com/patractlabs/ink-log) that mimics Rust's `log` crete to solve the above problems. Its usage is the same as that of Rust. `log` is completely consistent, which reduces the learning cost of developers.

The `ink-log` is generally implemented by the `ChainExtension` of `pallet contracts`, the agreed `function_id` is `0xfeffff00`, and the message is transmitted in the wasm memory through the structure `LoggerExt`. Therefore this library is divided into the following two parts:

### `ink_log`:

In the `ink-log/contracts` directory, provide `info!`, `debug!`, `warn!`, `error!`, `trace!`, same as Rust's `log` library in the same macro, and the call method of the macro is also the same. These macros are packaged implementations of `seal_chain_extensions` on the ink! side, and are **tool library for contract developers**. For example, after this library is introduced in the contract `Cargo.toml`, the log can be printed as follows:

In `Cargo.toml`:

```cargo
[dependencies]
ink_log = { version = "0.1", git = "https://github.com/patractlabs/ink-log", default-features = false, features = ["ink-log-chain-extensions"] }

[features]
default = ["std"]
std = [
 # ...
 "ink_log/std"
]
```

In the contract, you can use the following methods to print logs in the node:

```rust
ink_log::info!(target: "flipper-contract", "latest value is: {}", self.value);
```

### `runtime_log`:
In the `ink-log/runtime` directory, this library is based on the contents of the `function_id` and `LoggerExt` structures passed from `ChainExtensions` to call the corresponding logs under `debug` in `frame_support` to print. It is an implementation library of `ink_log` prepared for developers of the chain. **For example, chain developers can use it in their own `ChainExtensions`:

In `Cargo.toml`：

```rust
[dependencies]
runtime_log = { version = "0.1", git = "https://github.com/patractlabs/ink-log", default-features = false }

[features]
default = ["std"]
std = [
# ...
"runtime_log/std"
]
```

In `ChainExtensions`'s implementation：

```rust
pub struct CustomExt;
impl ChainExtension for CustomExt {
   fn call<E: Ext>(func_id: u32, env: Environment<E, InitState>) -> Result<RetVal, DispatchError>
      where
              <E::T as SysConfig>::AccountId: UncheckedFrom<<E::T as SysConfig>::Hash> + AsRef<[u8]>,
   {
      match func_id {
         ... => {/* other ChainExtension */ }
         0xfeffff00 => {
            // TODO add other libs
            runtime_log::logger_ext!(func_id, env);
            // or use
            // LoggerExt::call::<E>(func_id, env)
            Ok(RetVal::Converging(0))
         }`europa_forwardToHeight`
      }
   }
}
```

**`ink_log` corresponds to `runtime_log`, so if contract developers need to use `ink_log`, they need to pay attention to the chain corresponding to the debugging contract that needs to implement `runtime_log`. **

On the other hand, after contract developers introduce `ink_log`, they need to pay attention to `features = ["ink-log-chain-extensions"]`, `ink_log` will call `seal_chain_extensions` to interact with the chain only when this feature is enabled. Without this feature, `noop` will be used to skip the process of contract printing.

Therefore, contract developers can control the contract to print logs in the debugging environment and the production environment through features. The contract compiled in the debugging environment opens the `"ink-log-chain-extensions"` feature, and the contract compiled in the production environment removes this feature.

For detailed usage examples, please check [Custom ChainExtensions](../extensions/custom-chain-extensions.md)
