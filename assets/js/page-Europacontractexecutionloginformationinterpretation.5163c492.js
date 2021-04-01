(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{496:function(t,s,a){t.exports=a.p+"assets/img/call_other_1.5616f10c.png"},497:function(t,s,a){t.exports=a.p+"assets/img/call_other_2.647505f1.png"},568:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"europa-contract-execution-log-information-interpretation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#europa-contract-execution-log-information-interpretation"}},[t._v("#")]),t._v(" Europa contract execution log information interpretation")]),t._v(" "),n("p",[t._v("The structure for recording contract execution information in the current Europa "),n("code",[t._v("pallet-contract")]),t._v(" is as follows. The notes briefly explain the information that each attribute represents:")]),t._v(" "),n("div",{staticClass:"language-rust line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-rust"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Record the contract execution context.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("NestedRuntime")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Current depth")]),t._v("\n    depth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("usize")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The current contract execute result")]),t._v("\n\text_result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecResultTrace")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The value in sandbox successful result")]),t._v("\n\tsandbox_result_ok"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Option")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReturnValue")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Who call the current contract")]),t._v("\n    caller"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AccountId32")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The account of the current contract")]),t._v("\n    self_account"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Option")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AccountId32")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The input selector")]),t._v("\n    selector"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Option")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HexVec")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The input arguments")]),t._v("\n    args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Option")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HexVec")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The value in call or the endowment in instantiate")]),t._v("\n    value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u128")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The gas limit when this contract is called")]),t._v("\n    gas_limit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Gas")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The gas left when this contract return")]),t._v("\n    gas_left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Gas")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The host function call stack")]),t._v("\n    env_trace"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EnvTraceList")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The error in wasm")]),t._v("\n    wasm_error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Option")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WasmErrorWrapper")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The trap in host function execution")]),t._v("\n    trap_reason"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Option")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TrapReason")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Nested contract execution context")]),t._v("\n    nest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vec")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NestedRuntime")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br")])]),n("h2",{attrs:{id:"log-example-corresponding-to-this-structure"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#log-example-corresponding-to-this-structure"}},[t._v("#")]),t._v(" Log example corresponding to this structure:")]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(": NestedRuntime "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ext_result: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("success"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" ExecReturnValue "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" flags: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", data:  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n    caller: d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("5GrwvaEF"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n    self_account: 0144d6fc570d7bddda6f8e36141f179cd172324599b556ef514193f3105865f6 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("5C6NMXaS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n    selector: 0x9bae9d5e,\n    args: 0x40420f00000000000000000000000000,\n    value: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000000000000000")]),t._v(",\n    gas_limit: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200000000000")]),t._v(",\n    gas_left: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("190018947968")]),t._v(",\n    env_trace: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        seal_input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x9bae9d5e40420f00000000000000000000000000"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v(",\n        seal_caller"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v(",\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n       seal_set_storage"),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("((")]),t._v("Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x0300000001000000000000000000000000000000000000000000000000000000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x000000000000000000000000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n    sandbox_result_ok: Value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        I32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(",\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n    nest: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br")])]),n("h2",{attrs:{id:"log-field-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#log-field-description"}},[t._v("#")]),t._v(" Log field description:")]),t._v(" "),n("ul",[n("li",[n("p",[n("code",[t._v("1: NestedRuntime")]),t._v(": The contract execution log with a call depth of 1.")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("ext_result")]),t._v(": The execution result of the contract at the "),n("code",[t._v("pallet-contract")]),t._v(" level, there are two cases: "),n("code",[t._v("[success]")]),t._v(" and "),n("code",[t._v("[failed]")]),t._v(".")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("[success]")]),t._v(" can only indicate that the execution was successful at the "),n("code",[t._v("pallet-contract")]),t._v(" level, but the business logic of the contract itself may throw an Error. The data value in "),n("code",[t._v("ExecResultValue {flag:0, data: 0x...}")]),t._v(" may be the return value of the contract, or the enumeration value of Error defined in the contract.")]),t._v(" "),n("li",[n("code",[t._v("[failed]")]),t._v(" will be followed by an "),n("code",[t._v("ExecError {.. }")]),t._v(", the error message is defined in "),n("code",[t._v("pallet-contracts")]),t._v(".")])])]),t._v(" "),n("li",[n("p",[n("code",[t._v("caller")]),t._v(": The caller of the contract, which may be a user or another contract account. When the value is "),n("code",[t._v("0x000...")]),t._v(", it is called by rpc.")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("self_account")]),t._v(": The current contract account.")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("selector")]),t._v(": The function identifier passed to the contract, and the corresponding relationship can be queried in the contract's metadata.json.")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("args")]),t._v(": The parameters passed to the contract calling function.")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("value")]),t._v(": transfer amount to the current contract.")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("gas_limit")]),t._v(": The maximum amount of gas that can be used by the current contract.")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("gas_left")]),t._v(": The amount of gas remaining when exiting the current contract.")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("env_trace")]),t._v(": During the execution of the current contract, the call stack of host_function gives the parameters of each function in detail. Take "),n("code",[t._v("seal_call")]),t._v(" as an example. If input is Some(xxx) and output is None, then there may be an error in the process of calling each other between the contracts.")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("trap_reason")]),t._v(": The reason for trap encountered during host_function execution.")]),t._v(" "),n("ul",[n("li",[t._v("Return & Termination & Restoration: It is the normal exit strategy executed by the contract, not Error.")]),t._v(" "),n("li",[t._v("SupervisorError: DispatchError defined in "),n("code",[t._v("pallet_contracts")]),t._v(".")])])]),t._v(" "),n("li",[n("p",[n("code",[t._v("wasm_error")]),t._v(": If a wasm execution error occurs in the contract, the wasm call stack will be printed in this field. If and only if "),n("code",[t._v("ext_result")]),t._v(" is "),n("code",[t._v("[failed]")]),t._v(".")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("sandbox_result_ok")]),t._v(": If there is no "),n("code",[t._v("trap")]),t._v(" and no "),n("code",[t._v("wasm_error")]),t._v(" during the execution of host_function, then the contract is considered to be executed successfully and this field is printed. This field carries a "),n("code",[t._v("ReturnValue")]),t._v(" information. In "),n("code",[t._v("ink!")]),t._v(", if the value returned is not 0, then an Error defined in "),n("code",[t._v("ink!")]),t._v(" may have occurred, and the corresponding ["),n("code",[t._v("DispatchError")]),t._v("] needs to be queried. (https://github.com/paritytech/ink/blob/abd5cf14c0883cb2d5acf81f2277aeec330aa843/crates/lang/src/error.rs#L66-L80).")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("nest")]),t._v(": The contract log of nested calls. If the current contract calls other contracts, the execution log of the called contract will be nested in this field.")]),t._v(" "),n("p",[t._v('For a detailed explanation of this part, please refer to the subsequent chapter "Contract Nested Call".')])])]),t._v(" "),n("h2",{attrs:{id:"contract-nested-call"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#contract-nested-call"}},[t._v("#")]),t._v(" Contract nested call")]),t._v(" "),n("p",[t._v("The logs of the mutual calls between the contracts are as follows:")]),t._v(" "),n("ul",[n("li",[t._v("In contract A, call contract C after calling contract B")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(496),alt:"call_other_1"}})]),t._v(" "),n("p",[t._v("The log is as follows:")]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(": NestedRuntime "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tself_account: A,\n\tnest:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(": NestedRuntime "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tself_account: B,\n\t\t\tnest:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(": NestedRuntime "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tself_account: C,\n\t\t\tnest:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br")])]),n("ul",[n("li",[t._v("In contract A, call contract B, in contract B, call contract C")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(497),alt:"call_other_2"}})]),t._v(" "),n("p",[t._v("The log is as follows:")]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(": NestedRuntime "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tself_account: A,\n\tnest:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(": NestedRuntime "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tself_account: B,\n\t\t\tnest:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(": NestedRuntime "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tself_account: C,\n\t\t\t\tnest:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);