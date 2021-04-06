(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{523:function(t,s,a){t.exports=a.p+"assets/img/call_other_1.5616f10c.png"},524:function(t,s,a){t.exports=a.p+"assets/img/call_other_2.647505f1.png"},613:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"europa-合约执行日志信息解释"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#europa-合约执行日志信息解释"}},[t._v("#")]),t._v(" Europa 合约执行日志信息解释")]),t._v(" "),n("p",[t._v("当前Europa的"),n("code",[t._v("pallet-contract")]),t._v("中记录合约执行信息的结构体如下所示。注释简要说明了每个属性代表记录的信息：")]),t._v(" "),n("div",{staticClass:"language-rust extra-class"},[n("pre",{pre:!0,attrs:{class:"language-rust"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Record the contract execution context.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("NestedRuntime")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Current depth")]),t._v("\n    depth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("usize")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The current contract execute result")]),t._v("\n\text_result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecResultTrace")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The value in sandbox successful result")]),t._v("\n\tsandbox_result_ok"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Option")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReturnValue")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Who call the current contract")]),t._v("\n    caller"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AccountId32")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The account of the current contract")]),t._v("\n    self_account"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Option")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AccountId32")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The input selector")]),t._v("\n    selector"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Option")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HexVec")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The input arguments")]),t._v("\n    args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Option")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HexVec")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The value in call or the endowment in instantiate")]),t._v("\n    value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u128")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The gas limit when this contract is called")]),t._v("\n    gas_limit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Gas")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The gas left when this contract return")]),t._v("\n    gas_left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Gas")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The host function call stack")]),t._v("\n    env_trace"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EnvTraceList")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The error in wasm")]),t._v("\n    wasm_error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Option")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WasmErrorWrapper")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The trap in host function execution")]),t._v("\n    trap_reason"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Option")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TrapReason")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Nested contract execution context")]),t._v("\n    nest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vec")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NestedRuntime")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"该结构对应的日志示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#该结构对应的日志示例"}},[t._v("#")]),t._v(" 该结构对应的日志示例：")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(": NestedRuntime "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ext_result: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("success"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" ExecReturnValue "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" flags: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", data:  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n    caller: d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("5GrwvaEF"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n    self_account: 0144d6fc570d7bddda6f8e36141f179cd172324599b556ef514193f3105865f6 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("5C6NMXaS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n    selector: 0x9bae9d5e,\n    args: 0x40420f00000000000000000000000000,\n    value: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000000000000000")]),t._v(",\n    gas_limit: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200000000000")]),t._v(",\n    gas_left: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("190018947968")]),t._v(",\n    env_trace: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        seal_input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x9bae9d5e40420f00000000000000000000000000"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v(",\n        seal_caller"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v(",\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n       seal_set_storage"),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("((")]),t._v("Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x0300000001000000000000000000000000000000000000000000000000000000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x000000000000000000000000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n    sandbox_result_ok: Value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        I32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(",\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n    nest: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"日志字段说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#日志字段说明"}},[t._v("#")]),t._v(" 日志字段说明：")]),t._v(" "),n("ul",[n("li",[n("p",[n("code",[t._v("1: NestedRuntime")]),t._v("：调用深度为1的合约执行日志。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("ext_result")]),t._v("：合约在"),n("code",[t._v("pallet-contract")]),t._v("层的执行结果，有"),n("code",[t._v("[success]")]),t._v("和"),n("code",[t._v("[failed]")]),t._v("两种情况。")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("[success]")]),t._v("只能说明在"),n("code",[t._v("pallet-contract")]),t._v("层是执行成功的，但是合约本身的业务逻辑可能是抛出Error的。"),n("code",[t._v("ExecResultValue {flag:0, data: 0x...}")]),t._v("中的data值也许是合约的返回值，也许是合约内定义的Error的枚举值。")]),t._v(" "),n("li",[n("code",[t._v("[failed]")]),t._v("后面会跟随一个"),n("code",[t._v("ExecError {.. }")]),t._v("，错误信息是定义在"),n("code",[t._v("pallet-contracts")]),t._v("中的。")])])]),t._v(" "),n("li",[n("p",[n("code",[t._v("caller")]),t._v("：该合约的调用者，可能是用户，也可能是另外一个合约账户。当该值为"),n("code",[t._v("0x000...")]),t._v("时，是被rpc调用的。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("self_account")]),t._v("：当前合约账户。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("selector")]),t._v("：传递给合约的函数标识，在合约的metadata.json中查询到对应关系。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("args")]),t._v("：传递给合约调用函数的参数。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("value")]),t._v("：给当前合约转账数量。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("gas_limit")]),t._v("：当前合约最多可以使用的gas数量。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("gas_left")]),t._v("：退出当前合约时，还剩余的gas数量。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("env_trace")]),t._v("：在当前合约执行过程中，host_function的调用栈，详细地给出了每个function的参数。以"),n("code",[t._v("seal_call")]),t._v("为例，如果input为Some(xxx)而output为None，那么可能是在合约互相调用过程中出错了。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("trap_reason")]),t._v("：在执行host_function过程中，遇到trap的原因。")]),t._v(" "),n("ul",[n("li",[t._v("Return & Termination & Restoration：是合约执行的正常退出策略，不是Error。")]),t._v(" "),n("li",[t._v("SupervisorError：定义在"),n("code",[t._v("pallet_contracts")]),t._v("中的DispatchError。")])])]),t._v(" "),n("li",[n("p",[n("code",[t._v("wasm_error")]),t._v("：如果合约内部出现了wasm执行错误，会将wasm调用栈打印在该字段中。当且仅当"),n("code",[t._v("ext_result")]),t._v("是"),n("code",[t._v("[failed]")]),t._v("。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("sandbox_result_ok")]),t._v("：假如在host_function执行过程中没有"),n("code",[t._v("trap")]),t._v("，并且没有"),n("code",[t._v("wasm_error")]),t._v("，那么认为合约执行成功，打印该字段。该字段携带一个"),n("code",[t._v("ReturnValue")]),t._v("的信息，在"),n("code",[t._v("ink!")]),t._v("中，如果返回的value值不为0，那么可能是出现了一个"),n("code",[t._v("ink!")]),t._v("内定义的Error，需要查询相应的"),n("a",{attrs:{href:"https://github.com/paritytech/ink/blob/abd5cf14c0883cb2d5acf81f2277aeec330aa843/crates/lang/src/error.rs#L66-L80",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("DispatchError")]),n("OutboundLink")],1),t._v("。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("nest")]),t._v("：嵌套调用的合约日志。如果当前合约调用了其他合约，被调用合约的执行日志会被嵌套在该字段之中。")]),t._v(" "),n("p",[t._v("该部分详细解释请参照后续章节“合约嵌套调用”部分。")])])]),t._v(" "),n("h2",{attrs:{id:"合约嵌套调用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#合约嵌套调用"}},[t._v("#")]),t._v(" 合约嵌套调用")]),t._v(" "),n("p",[t._v("合约间的互相调用，日志如下：")]),t._v(" "),n("ul",[n("li",[t._v("在合约A中，调用合约B之后再调用合约C")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(523),alt:"call_other_1"}})]),t._v(" "),n("p",[t._v("日志如下：")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(": NestedRuntime "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tself_account: A,\n\tnest:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(": NestedRuntime "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tself_account: B,\n\t\t\tnest:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(": NestedRuntime "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tself_account: C,\n\t\t\tnest:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("ul",[n("li",[t._v("在合约A中，调用合约B，在合约B中，调用合约C")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(524),alt:"call_other_2"}})]),t._v(" "),n("p",[t._v("日志如下：")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(": NestedRuntime "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tself_account: A,\n\tnest:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(": NestedRuntime "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tself_account: B,\n\t\t\tnest:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(": NestedRuntime "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tself_account: C,\n\t\t\t\tnest:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);