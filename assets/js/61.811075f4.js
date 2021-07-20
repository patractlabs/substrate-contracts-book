(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{606:function(t,a,s){"use strict";s.r(a);var n=s(6),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"europa-debugging-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#europa-debugging-example"}},[t._v("#")]),t._v(" Europa debugging example")]),t._v(" "),s("h2",{attrs:{id:"duplicate-topics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#duplicate-topics"}},[t._v("#")]),t._v(" Duplicate topics")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("checkout "),s("code",[t._v("ink!")]),t._v(" to commit "),s("code",[t._v("8e8fe09565ca6d2fad7701d68ff13f12deda7eed")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ink\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout 8e8fe09565ca6d2fad7701d68ff13f12deda7eed -b tmp\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Change the value to 0_u128 in the Transfer event under ink/examples/erc20/lib.rs:L90.")]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[ink(constructor)]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("new")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("initial_supply"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Balance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Self")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("emit_event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Transfer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        from"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        to"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Some")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("caller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// change this from `initial_supply` to `0_u128`")]),t._v("\n        value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0_u128"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("into")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// initial_supply,")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     instance\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Execute "),s("code",[t._v("cargo +nightly contract build --debug")]),t._v(" to compile the contract.")])]),t._v(" "),s("li",[s("p",[t._v("Use "),s("a",{attrs:{href:"https://redspot.patract.io/en/tutorial/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redspot"),s("OutboundLink")],1),t._v(" or "),s("a",{attrs:{href:"https://polkadot.js.org/apps/#/explorer",target:"_blank",rel:"noopener noreferrer"}},[t._v("Polkadot/Substrate Portal"),s("OutboundLink")],1),t._v(" to deploy the contract.")])])]),t._v(" "),s("p",[s("strong",[t._v("Note")]),t._v(" erc20.wasm must be used here instead of erc20-opt.wasm, otherwise the wasm backtrace cannot be printed normally.")]),t._v(" "),s("p",[t._v("During the deployment process, you will encounter "),s("code",[t._v("DuplicateTopics")]),t._v(" and the Europa log is as follows.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(": NestedRuntime "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#...")]),t._v("\n    env_trace: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        seal_input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Some"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0xd183512b0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v(",\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#...    ")]),t._v("\n\t\tseal_deposit_event"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("((")]),t._v("Some"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("["),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x45726332303a3a5472616e736")]),t._v("....]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" None"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")])]),t._v(",\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n    trap_reason: TrapReason::SupervisorError"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DispatchError::Module "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" index: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(", error: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),t._v(", message: Some"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DuplicateTopics"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n    wasm_error: Error::WasmiExecution"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Trap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Trap "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" kind: Host"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DummyHostError"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v("\n    \twasm backtrace: \n    \t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ink_env::engine::on_chain::ext::deposit_event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1623")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    \t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ink_env::engine::on_chain::impls::"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("impl ink_env::backend::TypedEnvBackend "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" ink_env::engine::on_chain::EnvInstance"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("::emit_event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1564")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    \t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ink_env::api::emit_event::"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("closure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1563")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    \t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ink_env::engine::on_chain::EnvInstance as ink_env::engine::OnInstance"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("::on_instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1562")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    \t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ink_env::api::emit_event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1561")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    \t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  erc20::erc20::_::"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("impl ink_lang::events::EmitEvent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("erc20::erc20::Erc2"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("0")]),t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" ink_lang::env_access::EnvAccess"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v("erc20::erc20::Erc20 as ink_lang::env_access::ContractEnv"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("::Env"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v("::emit_event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1685")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n    \t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  deploy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1691")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    \t╰─"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("unknown"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2385")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    ,\n    nest: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("The last record in "),s("code",[t._v("env_trace")]),t._v(" is "),s("code",[t._v("seal_deposit_event")]),t._v(", not "),s("code",[t._v("seal_return")]),t._v(". If the contract is executed normally, the last record should be "),s("code",[t._v("seal_return")]),t._v(".")]),t._v(" "),s("li",[t._v("The second parameter of "),s("code",[t._v("seal_deposit_event")]),t._v(" is None, which means that the host_function is not executed normally. For more details, please refer to "),s("a",{attrs:{href:"https://github.com/patractlabs/substrate/blob/3624deb47cabe6f6cd44ec2c49c6ae5a29fd2198/frame/contracts/src/wasm/runtime.rs#L1399",target:"_blank",rel:"noopener noreferrer"}},[t._v("the relevant implementation"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("li",[t._v("Combined with wasm backtrace, you can see that the top of the stack is deposit_event.")])]),t._v(" "),s("p",[t._v("In summary, it can be concluded that the error occurred in the host_function of "),s("code",[t._v("seal_deposit_event")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"inconsistent-balance-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inconsistent-balance-types"}},[t._v("#")]),t._v(" Inconsistent balance types")]),t._v(" "),s("p",[t._v("Assuming that the balance on the chain is defined as u64, and the balance in ink! is defined as u128, an ordinary erc20 contract is deployed.")]),t._v(" "),s("p",[t._v("When reading "),s("code",[t._v("total_supply")]),t._v(", the log content in Europa is as follows.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(": NestedRuntime "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ext_result: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("failed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" ExecError "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" error: DispatchError::Module "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" index: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(", error: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(", message: Some"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ContractTrapped"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", origin: ErrorOrigin::Caller "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n    caller: 0000000000000000000000000000000000000000000000000000000000000000 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("5C4hrfjw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n    self_account: 2fe715301c9609c0c5ab75b24f2d8ad7dbe9671d7aebfeed80ed8963bc017955 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("5D9Wkfa3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n    selector: 0xdb6375a8,\n    args: None,\n    value: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(",\n    gas_limit: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4999999999999")]),t._v(",\n    gas_left: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4999865113466")]),t._v(",\n    env_trace: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        seal_value_transferred"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Some"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x0000000000000000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v(",\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n    wasm_error: Error::WasmiExecution"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Trap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Trap "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" kind: Unreachable "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v("\n            wasm backtrace:\n            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  core::panicking::panic_fmt.48"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1956")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  core::result::unwrap_failed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1057")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  core::result::Result"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("T,E"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("::expect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1060")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ink_lang::dispatcher::deny_payment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1878")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  call"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1906")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            ╰─"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("unknown"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2614")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    ,\n    nest: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("When calling "),s("code",[t._v("tranfer")]),t._v(", the log in Europa is as follows.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(": NestedRuntime "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ext_result: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("failed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" ExecError "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" error: DispatchError::Module "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" index: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(", error: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(", message: Some"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ContractTrapped"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", origin: ErrorOrigin::Caller "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n    caller: 0000000000000000000000000000000000000000000000000000000000000000 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("5C4hrfjw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n    self_account: 2fe715301c9609c0c5ab75b24f2d8ad7dbe9671d7aebfeed80ed8963bc017955 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("5D9Wkfa3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n    selector: 0xdb6375a8,\n    args: None,\n    value: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(",\n    gas_limit: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4999999999999")]),t._v(",\n    gas_left: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4999865113466")]),t._v(",\n    env_trace: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        seal_value_transferred"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Some"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x0000000000000000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v(",\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n    wasm_error: Error::WasmiExecution"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Trap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Trap "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" kind: Unreachable "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v("\n            wasm backtrace:\n            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  core::panicking::panic_fmt.48"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1956")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  core::result::unwrap_failed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1057")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  core::result::Result"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("T,E"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("::expect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1060")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ink_lang::dispatcher::deny_payment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1878")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  call"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1906")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            ╰─"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("unknown"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2614")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    ,\n    nest: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("It can be found that whether it is a read operation or a write operation, there will be a "),s("code",[t._v("call -> deny_payment -> expect call")]),t._v(" process. The reason is that in ink!, there are the following codes.")]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[no_mangle]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ink_lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deny_payment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Erc20")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ink_lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ContractEnv")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Env")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"caller transferred value even though all ink! message deny payments"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ink_lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DispatchRetCode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Erc20")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ink_lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DispatchUsingMode")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch_using_mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ink_lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DispatchMode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("to_u32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("deny_payment")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Result")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Environment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" transferred "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ink_env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("transferred_balance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"encountered error while querying transferred balance"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" transferred "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Environment")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Balance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0u32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Err")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DispatchError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PaidUnpayableMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ok")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("In "),s("code",[t._v("ink!")]),t._v(", the timing of "),s("code",[t._v("expect")]),t._v(" is different for "),s("code",[t._v("off_chain")]),t._v(" and "),s("code",[t._v("on_chain")]),t._v(". In "),s("code",[t._v("off_chain")]),t._v(", it is because "),s("code",[t._v("ink_env::transferred_balance::<E>()")]),t._v(" cannot be decoded correctly. In "),s("code",[t._v("on_chain")]),t._v(","),s("code",[t._v("deny_payment")]),t._v(" returns Error due to"),s("code",[t._v("transferred!=0")]),t._v(", and "),s("code",[t._v("expect")]),t._v(" appears in "),s("code",[t._v("call")]),t._v(".It can be seen that the current "),s("code",[t._v("ink!")]),t._v("in "),s("code",[t._v("off_chain")]),t._v(" and "),s("code",[t._v("on_chain")]),t._v(" is not exactly the same for some situations, causing debugging troubles.")])])}),[],!1,null,null,null);a.default=e.exports}}]);