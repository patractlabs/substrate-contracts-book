# Europa tutorial

## 搭建开发环境

* Europa搭建

  ```
  $ git clone https://github.com/patractlabs/europa
  $ cd europa
  $ cargo build --release
  ```

  也直接使用`cargo install`的方式安装Europa。

  运行Europa：

  ```
  $ ./target/release/europa --log=runtime=debug -d ./europa_database
  ```

  

* 安装  [PatractLabs's `cargo-contract`](https://github.com/patractlabs/cargo-contract/tree/cmd/debug)

  ```
  $ cargo install cargo-contract --git https://github.com/patractlabs/cargo-contract --branch=v0.10.0
  ```

  如果你已经安装了官方的`cargo-contract`并且不想覆盖安装，可以采取手动编译的方式：
  
  ```bash
  $ git clone https://github.com/patractlabs/cargo-contract --branch=v0.10.0
  $ cd cargo-contract
  $ cargo build --release
  ```


* 编译合约

  ```bash
  $ cargo-contract build --debug
  # or
  $ cargo +nightly contract build --debug
  ```
  
  `-d/--debug`能够在`target/ink`目录下生成另一份`*.src.wasm`，其中包含了"name section"部分，用来帮助分析wasm调用栈的信息。
  
  >  如果没有使用PatractLabs's `cargo-contract`或者不是`*.src.wasm`，在出现wasm panic时，可能出现如下日志：
  >
  > ```
  > wasm_error: Error::WasmiExecution(Trap(Trap { kind: Unreachable }))
  >    wasm backtrace:
  >    |  <unknown>[...]
  >    |  <unknown>[...]
  >    ╰─><unknown>[...]
  > ```
  
  

## 部署合约

你可以使用[Redspot](https://redspot.patract.io/zh-CN/tutorial/)或者[Substrate Protal](https://polkadot.js.org/apps/#/explorer)来部署合约。

注意，Europa的`extending types`如下：

```json
{
  "LookupSource": "MultiAddress",
  "Address": "MultiAddress"
}
```



例如使用Redspot部署，使用apps执行交易和查看状态。

Redspot部署一个合约：

```bash
$ npx redspot run scripts/deploy.js
```

获取到部署成功的合约地址，在apps上添加一个已存在的合约：

![add_exist](/Users/jenner/codes/substrate-contracts-book/src/zh_CN/europa/img/add_exist.png)



## 分析日志

```rust
/// Record the contract execution context.
pub struct NestedRuntime {
	/// Current depth
    depth: usize,
	/// The current contract execute result
	ext_result: ExecResultTrace,
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

日志的打印效果举例：

```bash
1: NestedRuntime {
    ext_result: [success] ExecReturnValue { flags: 0, data:  },
    caller: d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d (5GrwvaEF...),
    self_account: 0144d6fc570d7bddda6f8e36141f179cd172324599b556ef514193f3105865f6 (5C6NMXaS...),
    selector: 0x9bae9d5e,
    args: 0x40420f00000000000000000000000000,
    value: 10000000000000000,
    gas_limit: 200000000000,
    gas_left: 190018947968,
    env_trace: [
        seal_input(Some(0x9bae9d5e40420f00000000000000000000000000)),
        seal_caller(Some(0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d)),
        ...
       seal_set_storage((Some(0x0300000001000000000000000000000000000000000000000000000000000000), Some(0x000000000000000000000000))),
    ],
    sandbox_result_ok: Value(
        I32(
            0,
        ),
    ),
    nest: [],
}
```

### Contract执行日志

说明：

* `1: NestedRuntime`：调用深度为1的合约执行日志。

* `ext_result`：合约在`pallet-contract`层的执行结果，有`[success]`和`[failed]`两种情况。

  * `[success]`只能说明在`pallet-contract`层是执行成功的，但是合约本身的业务逻辑可能是抛出Error的。`ExecResultValue {flag:0, data: 0x...}`中的data值也许是合约的返回值，也许是合约内定义的Error的枚举值。
  * `[failed]`后面会跟随一个`ExecError {.. }`，错误信息是定义在`pallet-contracts`中的。

* `caller`：该合约的调用者，可能是用户，也可能是另外一个合约账户。当该值为`0x000...`时，是被rpc调用的。

* `self_account`：当前合约账户。

* `selector`：传递给合约的函数标识，在合约的metadata.json中查询到对应关系。

* `args`：传递给合约调用函数的参数。

* `value`：给当前合约转账数量。

* `gas_limit`：当前合约最多可以使用的gas数量。

* `gas_left`：退出当前合约时，还剩余的gas数量。

* `env_trace`：在当前合约执行过程中，host_function的调用栈，详细地给出了每个function的参数。以`seal_call`为例，如果input为Some(xxx)而output为None，那么可能是在合约互相调用过程中出错了。

* `trap_reason`：在执行host_function过程中，遇到trap的原因。

  * Return & Termination & Restoration：是合约执行的正常退出策略，不是Error。
  * SupervisorError：定义在`pallet_contracts`中的DispatchError。

* `wasm_error`：如果合约内部出现了wasm执行错误，会将wasm调用栈打印在该字段中。当且仅当`ext_result`是`[failed]`。

* `sandbox_result_ok`：假如在host_function执行过程中没有`trap`，并且没有`wasm_error`，那么认为合约执行成功，打印该字段。该字段携带一个`ReturnValue`的信息，在`ink!`中，如果返回的value值不为0，那么可能是出现了一个`ink!`内定义的Error，需要查询相应的[`DispatchError`](https://github.com/paritytech/ink/blob/abd5cf14c0883cb2d5acf81f2277aeec330aa843/crates/lang/src/error.rs#L66-L80)。

* `nest`：嵌套调用的合约日志。如果当前合约调用了其他合约，被调用合约的执行日志会被嵌套在该字段之中。

  合约间的互相调用，日志如下：

  * 在合约A中，调用合约B之后再调用合约C

    ![call_other_1](/Users/jenner/codes/substrate-contracts-book/src/zh_CN/europa/img/call_other_1.png)

    日志如下：

    ```bash
    1: NestedRuntime {
     self_account: A,
     nest:[
         2: NestedRuntime {
             self_account: B,
             nest:[],
         },
         2: NestedRuntime {
             self_account: C,
             nest:[],
         }
     ]
    }
    ```

    

  * 在合约A中，调用合约B，在合约B中，调用合约C

    ![call_other_2](/Users/jenner/codes/substrate-contracts-book/src/zh_CN/europa/img/call_other_2.png)

    日志如下：

    ```bash
    1: NestedRuntime {
     self_account: A,
     nest:[
         2: NestedRuntime {
             self_account: B,
             nest:[
                 3: NestedRuntime {
                    self_account: C,
                    nest:[],
                }
             ],
         }  
     ]
    }
    ```

    

注意，当在apps上查看contracts中的messages时，apps会自动调用读取类的messages，导致Europa日志中会出现一些读取调用。

### wasmi panic backtrace

假设在`ink!`中编写合约的方法如下：

```rust
#[ink(message)]
pub fn transfer(&mut self, to: AccountId, value: Balance) -> Result<()> {
    let from = self.env().caller();
    self.transfer_from_to(from, to, value)?;
    panic!("123");
    Ok(())
}
```

调用该方法时，Europa中会打印如下日志：

```bash
1: NestedRuntime {
	ext_result: [failed] ExecError { error: DispatchError::Module {index:5, error:17, message: Some("ContractTrapped"), orign: ErrorOrigin::Caller }}
    caller: d43593c715fdd31c61141abd04a99fd6822...(5GrwvaEF...),
    self_account: b6484f58b7b939e93fff7dc10a654af7e.... (5GBi41bY...),
    selector: 0xfae3a09d,
    args: 0x1cbd2d43530a44705ad088af313e18f80b5....,
    value: 0,
    gas_limit: 409568000000,
    gas_left: 369902872067,
    env_trace: [
        seal_value_transferred(Some(0x00000000000000000000000000000000)),
        seal_input(Some(0xfae3a09d1cbd.....)),
        seal_get_storage((Some(0x0100000000000....), Some(0x010000000100000001000000))),
        # ...
        seal_caller(Some(0xd43593c715fdd31c61141abd...)),
        seal_hash_blake256((Some(0x696e6b20686173....), Some(0x0873b31b7a3cf....))),
      	# ...  
        seal_deposit_event((Some([0x45726332303a....00000000000]), Some(0x000..))),
    ],
	trap_reason: TrapReason::SupervisorError(DispatchError::Module { index: 5, error: 17, message: Some("ContractTrapped") }),
    wasm_error: Error::WasmiExecution(Trap(Trap { kind: Unreachable }))
        wasm backtrace: 
        |  core::panicking::panic[28]
        |  erc20::erc20::_::<impl erc20::erc20::Erc20>::transfer[1697]
        |  <erc20::erc20::_::__ink_Msg<[(); 2644567034]> as ink_lang::traits::MessageMut>::CALLABLE::{{closure}}[611]
        |  core::ops::function::FnOnce::call_once[610]
        |  <erc20::erc20::_::_::__ink_MessageDispatchEnum as ink_lang::dispatcher::Execute>::execute::{{closure}}[1675]
        |  ink_lang::dispatcher::execute_message_mut[1674]
        |  <erc20::erc20::_::_::__ink_MessageDispatchEnum as ink_lang::dispatcher::Execute>::execute[1692]
        |  erc20::erc20::_::<impl ink_lang::contract::DispatchUsingMode for erc20::erc20::Erc20>::dispatch_using_mode[1690]
        |  call[1691]
        ╰─><unknown>[2387]
    ,
    nest: [],
}
```

从Europa的日志中，我们可以分析出如下调用过程：

```bash
call -> dispatch_using_mode -> ... -> transfer -> panic 
```

以上为简单的日志分析说明，更多特殊的情况将在下一节“示例”中介绍。

## 自定义ChainExtensions

### ink logger

查看[ink-log](https://github.com/patractlabs/ink-log)。

### ZKP feature

查看 [megaclite](https://github.com/patractlabs/megaclite)，相关合约示例[metis/groth16](https://github.com/patractlabs/metis/tree/master/groth16)。