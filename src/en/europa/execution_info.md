# Europa contract execution log analysis

The structure for recording contract execution information in the current Europa `pallet-contract` is as follows.

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

The log example corresponding to this structure is as follows.

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

## **Log field description**

- - - - - - | Field             | Description                                                  |
            | ----------------- | ------------------------------------------------------------ |
            | 1: NestedRuntime  | Call the contract execution log with a depth of 1.           |
            | ext_result        | The execution result of the contract at the `pallet-contract` level, there are two  cases: `[success]` and `[failed]`. `[success]` can only indicate that the execution was successful at the `pallet-contract` level, but the business logic of the contract itself may throw an Error. The data value in `ExecResultValue {flag:0, data: 0x...}` may be the return value of the contract, or the enumeration value of Error defined in the contract. `[failed]` will be followed by an `ExecError {.. }`, the error message is defined in `pallet-contracts`. |
            | caller            | The caller of this contract may be the user or another contract account. When the value is `0x000...`, it is called by RPC. |
            | self_account      | Current contract account.                                    |
            | selector          | The function identifier passed to the contract, and the corresponding relationship can be queried in the metadata.json of the contract. |
            | args              | The parameters passed to the contract calling function.      |
            | value             | Transfer amount to the current contract.                     |
            | gas_limit         | The maximum amount of gas that can be used by the current contract. |
            | gas_left          | The amount of gas remaining when exiting the current contract. |
            | env_trace         | During the execution of the current contract, the call stack of host_function gives the parameters of each function in detail. Take seal_call as an example. If the input is Some(xxx) and the output is empty, then there may be an error in the process of calling each other between the contracts. |
            | trap_reason       | The reason for trap encountered during host_function execution.<br /> Return & Termination & Restoration: It is the normal exit strategy executed by the contract, not Error. <br />SupervisorError: DispatchError defined in `pallet_contracts`. |
            | wasm_error        | If a Wasm execution error occurs in the contract, the Wasm call stack will be printed in this field. If and only if `ext_result` is `[failed]`. |
            | sandbox_result_ok | If there is no `trap` and no `wasm_error` during the execution of host_function, then the contract is considered to be executed successfully and this field is printed. This field carries a `ReturnValue` information. In `ink!`, if the value returned is not 0, then an Error defined in `ink!` may have occurred, and the corresponding  [DispatchError](https://github.com/paritytech/ink/blob/abd5cf14c0883cb2d5acf81f2277aeec330aa843/crates/lang/src/error.rs#L66-L80) needs to be queried. |
            | nest              | Contract log of nested calls. If the current contract calls other contracts, the execution log of the called contract will be nested in this field. |


## **Contract nested call**

Examples of mutual calls between contracts are as follows.

* In contract A, call contract C after calling contract B.

  ![call_other_1](https://patractlabs.github.io/substrate-contracts-book/assets/img/call_other_1.5616f10c.png)

The log is as follows.

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

* In contract A, call contract B, in contract B, call contract C

  ![call_other_2](https://patractlabs.github.io/substrate-contracts-book/assets/img/call_other_2.647505f1.png)


The log is as follows.

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



