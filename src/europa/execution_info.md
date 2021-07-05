# Europa 合约执行日志分析

## 背景信息

当前Europa的`pallet-contract`中记录合约执行信息的结构体如下所示。

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

该结构对应的日志示例如下。

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

## **日志字段说明**

| 关键字            |                                                              |
| ----------------- | ------------------------------------------------------------ |
| 1: NestedRuntime  | 调用深度为1的合约执行日志。                                  |
| ext_result        | 合约在`pallet-contract`层的执行结果，有success和failed两种情况。 success只能说明在`pallet-contract`层是执行成功的，但是合约本身的业务逻辑可能是抛出Error的。`ExecResultValue {flag:0, data: 0x...}`中的data值也许是合约的返回值，也许是合约内定义的Error的枚举值。 failed后面会跟随一个`ExecError {.. }`，错误信息是定义在`pallet-contracts`中的。 |
| caller            | 该合约的调用者，可能是用户，也可能是另外一个合约账户。当该值为`0x000...`时，是被RPC调用的。 |
| self_account      | 当前合约账户。                                               |
| selector          | 传递给合约的函数标识，在合约的metadata.json中查询到对应关系。 |
| args              | 传递给合约调用函数的参数。                                   |
| value             | 给当前合约转账数量。                                         |
| gas_limit         | 当前合约最多可以使用的gas数量。                              |
| gas_left          | 退出当前合约时，还剩余的gas数量。                            |
| env_trace         | 在当前合约执行过程中，host_function的调用栈，详细地给出了每个function的参数。以`seal_call`为例，如果输入为Some(xxx)，输出为空，那么可能是在合约互相调用过程中出错了。 |
| trap_reason       | 在执行host_function过程中，遇到trap的原因。 Return & Termination & Restoration：是合约执行的正常退出策略，不是Error。 SupervisorError：定义在`pallet_contracts`中的DispatchError。 |
| wasm_error        | 如果合约内部出现了Wasm执行错误，会将Wasm调用栈打印在该字段中。当且仅当`ext_result`是failed。 |
| sandbox_result_ok | 假如在host_function执行过程中没有`trap`，并且没有`wasm_error`，那么认为合约执行成功，打印该字段。该字段携带一个`ReturnValue`的信息，在`ink!`中，如果返回的value值不为0，那么可能是出现了一个`ink!`内定义的Error，需要查询相应的[DispatchError ](https://github.com/paritytech/ink/blob/abd5cf14c0883cb2d5acf81f2277aeec330aa843/crates/lang/src/error.rs#L66-L80)。 |
| nest              | 嵌套调用的合约日志。如果当前合约调用了其他合约，那么被调用合约的执行日志会被嵌套在该字段之中。 |

## **合约嵌套调用**

合约间的互相调用，示例如下。

* 在合约A中，调用合约B之后再调用合约C。

  ![](C:\Users\lizhaoyang\workspace\substrate-contracts-book\src\europa\imgs\call_other_1.png)



日志如下。

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

* 在合约A中，调用合约B，在合约B中，调用合约C。

  ![](C:\Users\lizhaoyang\workspace\substrate-contracts-book\src\europa\imgs\call_other_2.png)

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



