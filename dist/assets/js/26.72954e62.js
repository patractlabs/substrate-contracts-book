(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{521:function(t,a,s){t.exports=s.p+"assets/img/add_exist.b0ae5b26.png"},605:function(t,a,s){"use strict";s.r(a);var n=s(6),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"europa-tutorial"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#europa-tutorial"}},[t._v("#")]),t._v(" Europa tutorial")]),t._v(" "),n("h2",{attrs:{id:"background-information"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#background-information"}},[t._v("#")]),t._v(" Background Information")]),t._v(" "),n("p",[t._v("Europa is a simulated node sandbox environment with contract functions. Its interfaces (mainly RPC) are compatible with most third-party tools, so Europa can be regarded as an independent node for operation.")]),t._v(" "),n("h2",{attrs:{id:"set-up-a-development-environment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#set-up-a-development-environment"}},[t._v("#")]),t._v(" Set up a development environment")]),t._v(" "),n("p",[t._v("Europa's environment is roughly the same as that of normal use of node debugging contracts. The only difference is that if you need to print Wasm's backtrace, you need to use a fork version of cargo-contract provided by Patract until the official cargo-contract merges the functions submitted by Patract. If you don't need to print the Wasm backtract when the contract execution crashes, just use the official cargo-contract.")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("Compile and run Europa node")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --recurse-submodules https://github.com/patractlabs/europa.git\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## or do following commands")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/patractlabs/europa.git\n$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" europa/vendor\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule update --init --recursive\n")])])])])]),t._v(" "),n("p",[t._v("You can also install Europa directly using "),n("code",[t._v("cargo install")]),t._v(", but you need to add "),n("code",[t._v("--locked")]),t._v(" to use the Substrate version that Europa currently depends on.")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ cargo "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" europa --git"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://github.com/patractlabs/europa.git --force --locked\n")])])]),n("p",[t._v("Run Europa")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ ./target/release/europa --log"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("runtime"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("debug -d ./europa_database\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# If there is no need to retain data, you can also use `--tmp` to run Europa")]),t._v("\n$ ./target/release/europa --log"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("runtime"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("debug --tmp\n")])])]),n("ul",[n("li",[t._v("Install PatractLabs's cargo-contract (optional, only needed if the Wasm contract executes the backtrace when it crashes)"),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ cargo "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" cargo-contract --git https://github.com/patractlabs/cargo-contract --branch"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tag-v0.12.0 --force\n")])])])])]),t._v(" "),n("p",[t._v("If you have already installed the official cargo-contract and do not want to overwrite the installation, you can take the way of  manual compilation.")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/patractlabs/cargo-contract --branch"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("v0.10.0\n$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" cargo-contract\n$ cargo build --release\n")])])]),n("ul",[n("li",[t._v("Compile the contract")])]),t._v(" "),n("p",[t._v("The "),n("code",[t._v("--debug")]),t._v(" option is provided by the cargo-contract of Patract. If the official cargo-contract is used, the "),n("code",[t._v("--debug")]),t._v("option is not required in the following execution commands.")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ cargo-contract build --debug\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n$ cargo +nightly contract build --debug\n")])])]),n("p",[n("code",[t._v("-d/--debug")]),t._v(" can replace the original "),n("code",[t._v("*.wasm")]),t._v(" and "),n("code",[t._v("*.contract")]),t._v("files in the "),n("code",[t._v("target/ink")]),t._v(" directory. The replaced Wasm and Contract files close the code optimization conditions during the compilation process, and include the name section part, used to help analyze Wasm call stack information.")]),t._v(" "),n("p",[t._v("If the cargo-contract in the Patract repository is not used when compiling the contract, and the contract is compiled with the "),n("code",[t._v("-d/--debug")]),t._v(" parameter, if a Wasm panic occurs during the execution of the contract, the following log information may appear.")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("wasm_error: Error::WasmiExecution"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Trap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Trap "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" kind: Unreachable "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v("\n   wasm backtrace:\n   "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("unknown"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("unknown"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n   ╰─"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("unknown"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),n("p",[t._v("The compiled file generated after adding "),n("code",[t._v("-d/--debug")]),t._v(" is generally several hundred times the original file. Because the new file is not optimized, and a lot of debugging information is retained. Therefore, you can roughly judge whether it is a file generated after adding the "),n("code",[t._v("-d/--debug")]),t._v(" option by the file size.")]),t._v(" "),n("h2",{attrs:{id:"deployment-contract"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#deployment-contract"}},[t._v("#")]),t._v(" Deployment contract")]),t._v(" "),n("p",[t._v("You can use "),n("a",{attrs:{href:"https://redspot.patract.io/zh-CN/tutorial/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redspot"),n("OutboundLink")],1),t._v(" or "),n("a",{attrs:{href:"https://polkadot.js.org/apps/#/explorer",target:"_blank",rel:"noopener noreferrer"}},[t._v("Substrate Protal"),n("OutboundLink")],1),t._v(" to deploy contracts.")]),t._v(" "),n("p",[t._v("The extending types of Europa are as follows.")]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"LookupSource"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MultiAddress"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Address"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MultiAddress"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("For example, use Redspot to deploy, use apps to execute transactions and view status.")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("Use Redspot to deploy a contract.")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ npx redspot run scripts/deploy.js\n")])])])]),t._v(" "),n("li",[n("p",[t._v("Obtain the successfully deployed contract address and add an existing contract to apps.")]),t._v(" "),n("p",[n("img",{attrs:{src:s(521),alt:""}})])])]),t._v(" "),n("h2",{attrs:{id:"analyze-the-log"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#analyze-the-log"}},[t._v("#")]),t._v(" Analyze the log")]),t._v(" "),n("p",[t._v("During the process of deploying and executing the contract with Europa, detailed logs will be printed, and you can quickly locate problems in the contract based on these logs. Through these logs, the execution process of the contract is no longer a black box.")]),t._v(" "),n("p",[t._v("An example of log printing is as follows.")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(": NestedRuntime "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ext_result: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("success"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" ExecReturnValue "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" flags: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", data:  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n    caller: d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("5GrwvaEF"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n    self_account: 0144d6fc570d7bddda6f8e36141f179cd172324599b556ef514193f3105865f6 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("5C6NMXaS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n    selector: 0x9bae9d5e,\n    args: 0x40420f00000000000000000000000000,\n    value: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000000000000000")]),t._v(",\n    gas_limit: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200000000000")]),t._v(",\n    gas_left: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("190018947968")]),t._v(",\n    env_trace: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        seal_input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x9bae9d5e40420f00000000000000000000000000"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v(",\n        seal_caller"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v(",\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n       seal_set_storage"),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("((")]),t._v("Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x0300000001000000000000000000000000000000000000000000000000000000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x000000000000000000000000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n    sandbox_result_ok: Value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        I32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(",\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n    nest: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"contract-execution-log"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#contract-execution-log"}},[t._v("#")]),t._v(" Contract execution log")]),t._v(" "),n("p",[t._v("According to the above log content, the following information can be analyzed.")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("ext_result")]),t._v("：The execution result of contract call execution (through transaction call and RPC call belong to contract call).")]),t._v(" "),n("li",[n("code",[t._v("caller")]),t._v("：The public key of the caller, and the contract calling contract is the public key of the parent contract (consistent with the EVM model).")]),t._v(" "),n("li",[n("code",[t._v("self_account")]),t._v("：The address of this contract.")]),t._v(" "),n("li",[n("code",[t._v("selector")]),t._v(": The selector of the called method can be used to judge which method of the contract this call is based on this attribute.")]),t._v(" "),n("li",[n("code",[t._v("args")]),t._v("、"),n("code",[t._v("value")]),t._v("、"),n("code",[t._v("gas_limit")]),t._v("、"),n("code",[t._v("gas_limit")]),t._v("：The related parameters and gas consumption of this execution are indicated.")]),t._v(" "),n("li",[n("code",[t._v("env_trace、sandbox_result_ok")]),t._v("：The interaction information between contract Wasm execution and pallet-contracts, and the final result of Wasm executor (Wasm executor result and contract execution result are different concepts).")]),t._v(" "),n("li",[n("code",[t._v("nest")]),t._v("：Describes the relationship between the contract calling the contract. Since this is empty, it appears that this call only involves the execution of one contract. See the following text for details.")])]),t._v(" "),n("p",[t._v("According to the contract log provided by Europa, you can see the detailed process of a contract call. If you have a good understanding of the contract module pallet-contracts, you can get a lot of important debugging information to assist in locating contract problems. If you don't know much about the contract module, information such as selector, caller, nest can also be of great help to you, reducing the time to debug the contract.")]),t._v(" "),n("p",[n("strong",[t._v("Note")]),t._v(" When viewing messages in contracts on apps, apps will automatically call the read-only messages of the contract to obtain some values of the current contract, causing Europa to display some logs of read calls, which interferes with normal judgment. So you need to distinguish clearly which piece of log is what you need. If you use a third-party client whose sending request can be controlled by itself, there is no concern in this regard.")]),t._v(" "),n("h2",{attrs:{id:"how-to-identify-the-required-log-in-europa-when-sending-a-request-using-apps"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-identify-the-required-log-in-europa-when-sending-a-request-using-apps"}},[t._v("#")]),t._v(" How to identify the required log in Europa when sending a request using apps?")]),t._v(" "),n("p",[t._v("There is a "),n("code",[t._v("selector")]),t._v(" field under the "),n("code",[t._v("NestedRuntime {}")]),t._v(" block, which indicates the selector used for this contract execution. You can find out what the selector corresponding to the currently called method name is in the "),n("code",[t._v("messages")]),t._v(" section of metadata.json. The example is as follows.")]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"messages"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"flip"')]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"selector"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x633aa551"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),n("p",[t._v("Therefore, the selector field can be compared with the selector in the log to judge the part of the log corresponding to the current contract call issued through apps.")]),t._v(" "),n("h2",{attrs:{id:"wasmi-panic-backtrace"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wasmi-panic-backtrace"}},[t._v("#")]),t._v(" wasmi panic backtrace")]),t._v(" "),n("p",[t._v("Suppose the method of writing a contract in ink! is as follows.")]),t._v(" "),n("div",{staticClass:"language-rust extra-class"},[n("pre",{pre:!0,attrs:{class:"language-rust"}},[n("code",[n("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[ink(message)]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("transfer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" to"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AccountId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Balance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Result")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" from "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("caller")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("transfer_from_to")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("from"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" to"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("panic!")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ok")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("When this method is called, the following log will be printed in Europa.")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(": NestedRuntime "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ext_result: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("failed"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" ExecError "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" error: DispatchError::Module "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("index:5, error:17, message: Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ContractTrapped"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", orign: ErrorOrigin::Caller "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    caller: d43593c715fdd31c61141abd04a99fd6822"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("5GrwvaEF"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n    self_account: b6484f58b7b939e93fff7dc10a654af7e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("5GBi41bY"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n    selector: 0xfae3a09d,\n    args: 0x1cbd2d43530a44705ad088af313e18f80b5"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(",\n    value: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(",\n    gas_limit: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("409568000000")]),t._v(",\n    gas_left: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("369902872067")]),t._v(",\n    env_trace: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        seal_value_transferred"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x00000000000000000000000000000000"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v(",\n        seal_input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0xfae3a09d1cbd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v(",\n        seal_get_storage"),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("((")]),t._v("Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x0100000000000")]),t._v("...."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x010000000100000001000000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n        seal_caller"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0xd43593c715fdd31c61141abd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v(",\n        seal_hash_blake256"),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("((")]),t._v("Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x696e6b20686173")]),t._v("...."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x0873b31b7a3cf")]),t._v("...."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n              "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...  ")]),t._v("\n        seal_deposit_event"),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("((")]),t._v("Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("["),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x45726332303a")]),t._v("..."),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".00000000000")]),t._v("]"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x000")]),t._v(".."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n        trap_reason: TrapReason::SupervisorError"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DispatchError::Module "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" index: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(", error: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(", message: Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ContractTrapped"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n    wasm_error: Error::WasmiExecution"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Trap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Trap "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" kind: Unreachable "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v("\n        wasm backtrace: \n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  core::panicking::panic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  erc20::erc20::_::"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("impl erc20::erc20::Erc2"),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("0")]),t._v(">")]),t._v("::transfer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1697")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("erc20::erc20::_::__ink_Msg"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2644567034")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" as ink_lang::traits::MessageMut"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("::CALLABLE::"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("closure"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("611")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  core::ops::function::FnOnce::call_once"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("610")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("erc20::erc20::_::_::__ink_MessageDispatchEnum as ink_lang::dispatcher::Execute"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("::execute::"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("closure"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1675")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ink_lang::dispatcher::execute_message_mut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1674")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("erc20::erc20::_::_::__ink_MessageDispatchEnum as ink_lang::dispatcher::Execute"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("::execute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1692")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  erc20::erc20::_::"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("impl ink_lang::contract::DispatchUsingMode "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" erc20::erc20::Erc2"),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("0")]),t._v(">")]),t._v("::dispatch_using_mode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1690")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  call"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1691")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        ╰─"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("unknown"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2387")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    ,\n    nest: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("strong",[t._v("Note")]),t._v(" The current contract needs to use Patract's "),n("code",[t._v("cargo-contract")]),t._v(" to print Wasm's Backtrace.")]),t._v(" "),n("p",[t._v("From Europa's log, the following calling process can be analyzed.")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("call -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" dispatch_using_mode -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" transfer -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" panic \n")])])]),n("p",[t._v("Therefore, you can locate the cause of the panic because of the panic in the transfer function.")]),t._v(" "),n("h2",{attrs:{id:"custom-chainextensions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#custom-chainextensions"}},[t._v("#")]),t._v(" Custom ChainExtensions")]),t._v(" "),n("h3",{attrs:{id:"ink-logger"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ink-logger"}},[t._v("#")]),t._v(" ink logger")]),t._v(" "),n("p",[t._v("Check the "),n("a",{attrs:{href:"https://github.com/patractlabs/ink-log",target:"_blank",rel:"noopener noreferrer"}},[t._v("ink-log"),n("OutboundLink")],1),t._v("。")]),t._v(" "),n("h3",{attrs:{id:"zkp-feature"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zkp-feature"}},[t._v("#")]),t._v(" ZKP feature")]),t._v(" "),n("p",[t._v("Check the "),n("a",{attrs:{href:"https://github.com/patractlabs/zkmega",target:"_blank",rel:"noopener noreferrer"}},[t._v("zkMega"),n("OutboundLink")],1),t._v("，For examples of related contracts, see "),n("a",{attrs:{href:"https://github.com/patractlabs/metis/tree/master/groth16",target:"_blank",rel:"noopener noreferrer"}},[t._v("metis/groth16"),n("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);a.default=e.exports}}]);