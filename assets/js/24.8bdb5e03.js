(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{525:function(t,a,s){t.exports=s.p+"assets/img/add_exist.b0ae5b26.png"},616:function(t,a,s){"use strict";s.r(a);var n=s(6),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"europa-tutorial"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#europa-tutorial"}},[t._v("#")]),t._v(" Europa tutorial")]),t._v(" "),n("p",[t._v("Europa 作为一个模拟具备合约功能的节点沙盒环境，其接口（主要是rpc）对于大部分第三方工具都保持兼容，因此可以将Europa视为一个独立的节点进行操作。")]),t._v(" "),n("h2",{attrs:{id:"搭建开发环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#搭建开发环境"}},[t._v("#")]),t._v(" 搭建开发环境")]),t._v(" "),n("p",[t._v("Europa的环境与正常使用节点调试合约的环境无异，唯一的差别在于若需要打印Wasm的backtrace时，需要使用Patract提供的一个fork版本的"),n("code",[t._v("cargo-contract")]),t._v("，直到parity（官方）的"),n("code",[t._v("cargo-contract")]),t._v("合并Patract提交的功能之前。若不需要打印合约执行崩溃时的Wasm backtract，则使用官方提供的"),n("code",[t._v("cargo-contract")]),t._v("即可。")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("编译并运行 Europa 节点")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --recurse-submodules https://github.com/patractlabs/europa.git\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## or do following commands")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/patractlabs/europa.git\n$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" europa/vendor\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule update --init --recursive\n")])])]),n("p",[t._v("也直接使用"),n("code",[t._v("cargo install")]),t._v("的方式安装Europa。（注意要添加上"),n("code",[t._v("--locked")]),t._v("以使用Europa当前依赖的Substrate版本）")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ cargo "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" europa --git"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://github.com/patractlabs/europa.git --force --locked\n")])])]),n("p",[t._v("运行Europa：")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ ./target/release/europa --log"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("runtime"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("debug -d ./europa_database\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 若没有需要保留数据的需求，也可以使用`--tmp`运行Europa")]),t._v("\n$ ./target/release/europa --log"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("runtime"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("debug --tmp\n")])])])]),t._v(" "),n("li",[n("p",[t._v("安装 "),n("a",{attrs:{href:"https://github.com/patractlabs/cargo-contract",target:"_blank",rel:"noopener noreferrer"}},[t._v("PatractLabs's "),n("code",[t._v("cargo-contract")]),n("OutboundLink")],1),t._v(" （可选，若需要Wasm合约执行崩溃时的backtrace时才需要）")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$ cargo install cargo-contract --git https://github.com/patractlabs/cargo-contract --branch=v0.10.0 --force\n")])])]),n("p",[t._v("如果开发者已经安装了官方的"),n("code",[t._v("cargo-contract")]),t._v("并且不想覆盖安装，可以采取手动编译的方式：")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/patractlabs/cargo-contract --branch"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("v0.10.0\n$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" cargo-contract\n$ cargo build --release\n")])])])]),t._v(" "),n("li",[n("p",[t._v("编译合约")]),t._v(" "),n("p",[n("code",[t._v("--debug")]),t._v("选项是Patract的"),n("code",[t._v("cargo-contract")]),t._v("提供的，若使用parity提供的"),n("code",[t._v("cargo-contract")]),t._v("则下面执行命令中都不需要"),n("code",[t._v("--debug")]),t._v("的选项。")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ cargo-contract build --debug\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n$ cargo +nightly contract build --debug\n")])])]),n("p",[n("code",[t._v("-d/--debug")]),t._v("能够在"),n("code",[t._v("target/ink")]),t._v("目录下"),n("strong",[t._v("替换")]),t._v("原本的"),n("code",[t._v("*.wasm")]),t._v("及"),n("code",[t._v("*.contract")]),t._v('文件，替换后的Wasm、Contract文件关闭了编译过程中的代码优化条件，且包含了"name section"部分，用来帮助分析wasm调用栈的信息。')]),t._v(" "),n("blockquote",[n("p",[t._v("如果在编译合约的时候没有使用Patract仓库中的"),n("code",[t._v("cargo-contract")]),t._v("并携带"),n("code",[t._v("-d/--debug")]),t._v("参数进行合约编译，则在合约执行过程中若出现wasm panic时，可能出现如下日志：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("wasm_error: Error::WasmiExecution(Trap(Trap { kind: Unreachable }))\n   wasm backtrace:\n   |  <unknown>[...]\n   |  <unknown>[...]\n   ╰─><unknown>[...]\n")])])])]),t._v(" "),n("blockquote",[n("p",[t._v("添加了"),n("code",[t._v("-d/--debug")]),t._v("后产生的编译产物一般比原产物大几百倍（例如原产物2.5k，新产物700k），因为新产物没有进行优化，且保留了大量调试信息。因此开发者也可以通过产物大小粗略判定是否是添加了"),n("code",[t._v("-d/--debug")]),t._v("选项后的产物。")])])])]),t._v(" "),n("h2",{attrs:{id:"部署合约"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部署合约"}},[t._v("#")]),t._v(" 部署合约")]),t._v(" "),n("p",[t._v("开发者可以使用"),n("a",{attrs:{href:"https://redspot.patract.io/zh-CN/tutorial/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redspot"),n("OutboundLink")],1),t._v("或者"),n("a",{attrs:{href:"https://polkadot.js.org/apps/#/explorer",target:"_blank",rel:"noopener noreferrer"}},[t._v("Substrate Protal"),n("OutboundLink")],1),t._v("来部署合约。")]),t._v(" "),n("p",[t._v("注意，Europa的"),n("code",[t._v("extending types")]),t._v("如下：")]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"LookupSource"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MultiAddress"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Address"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MultiAddress"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("例如使用Redspot部署，使用apps执行交易和查看状态。")]),t._v(" "),n("p",[t._v("Redspot部署一个合约：")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ npx redspot run scripts/deploy.js\n")])])]),n("p",[t._v("获取到部署成功的合约地址，在apps上添加一个已存在的合约：")]),t._v(" "),n("p",[n("img",{attrs:{src:s(525),alt:"add_exist"}})]),t._v(" "),n("h2",{attrs:{id:"分析日志"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分析日志"}},[t._v("#")]),t._v(" 分析日志")]),t._v(" "),n("p",[t._v("使用Europa部署及执行合约的过程中会有如下详细信息的打印，这些信息是合约执行中的信息，可以方便的帮助开发人员定位合约中出现的问题。通过这些信息，合约的执行过程就不再是一个黑盒了。")]),t._v(" "),n("p",[t._v("日志的打印效果举例：")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(": NestedRuntime "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ext_result: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("success"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" ExecReturnValue "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" flags: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", data:  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n    caller: d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("5GrwvaEF"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n    self_account: 0144d6fc570d7bddda6f8e36141f179cd172324599b556ef514193f3105865f6 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("5C6NMXaS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n    selector: 0x9bae9d5e,\n    args: 0x40420f00000000000000000000000000,\n    value: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000000000000000")]),t._v(",\n    gas_limit: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200000000000")]),t._v(",\n    gas_left: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("190018947968")]),t._v(",\n    env_trace: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        seal_input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x9bae9d5e40420f00000000000000000000000000"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v(",\n        seal_caller"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v(",\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n       seal_set_storage"),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("((")]),t._v("Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x0300000001000000000000000000000000000000000000000000000000000000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x000000000000000000000000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n    sandbox_result_ok: Value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        I32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(",\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n    nest: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"contract执行日志"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#contract执行日志"}},[t._v("#")]),t._v(" Contract执行日志")]),t._v(" "),n("p",[t._v("上面列举的日志案例，我们可以简单分析出以下信息：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("ext_result")]),t._v("： 可以表面这次合约调用执行的执行结果（通过交易调用与rpc调用都属于合约调用）；")]),t._v(" "),n("li",[n("code",[t._v("caller")]),t._v("： 表面了调用者的公钥，合约调用合约则为父合约的公钥（与EVM的模型一致）；")]),t._v(" "),n("li",[n("code",[t._v("self_account")]),t._v("：表面本合约的地址；")]),t._v(" "),n("li",[n("code",[t._v("selector")]),t._v(": 被调用的方法的selector，通过这个属性可以判断出这次的调用是合约的哪个方法；")]),t._v(" "),n("li",[n("code",[t._v("args")]),t._v("，"),n("code",[t._v("value")]),t._v("，"),n("code",[t._v("gas_limit")]),t._v("，"),n("code",[t._v("gas_limit")]),t._v("等表明了这次执行的相关参数及gas消耗；")]),t._v(" "),n("li",[n("code",[t._v("env_trace")]),t._v("及"),n("code",[t._v("sandbox_result_ok")]),t._v("：表面了合约Wasm执行与"),n("code",[t._v("pallet-contracts")]),t._v("之间的交互信息，及Wasm执行器最终的结果（Wasm执行器结果与合约执行结果是不同概念）")]),t._v(" "),n("li",[n("code",[t._v("nest")]),t._v("：描述了合约调用合约的关系，由于这里为空，表面这次调用只涉及一个合约执行。详细介绍见后文；")])]),t._v(" "),n("p",[t._v("由此可见，Europa提供的合约日志能够清晰的表面一次合约调用中的很多详细信息。若合约的开发者对合约模块"),n("code",[t._v("pallet-contracts")]),t._v("比较了解，则可以获得许多重要的调试信息以辅助定位合约问题。若合约开发者对合约模块了解较少，则例如"),n("code",[t._v("selector")]),t._v("，"),n("code",[t._v("caller")]),t._v("，"),n("code",[t._v("nest")]),t._v("等信息也能给合约开发过程中带来很大帮助，减少调试合约的时间。")]),t._v(" "),n("p",[n("strong",[t._v("注意，当在apps上查看contracts中的messages时，apps会自动调用合约只读的messages获取当前合约的一些值，导致Europa会出现一些读取调用的日志，干扰正常判断。因此开发者需要辨别清楚哪块日志才是自己所需要的。")]),t._v(" 若使用发送请求都是能被自己控制的第三方客户端，则没有这方面的顾虑。")]),t._v(" "),n("blockquote",[n("p",[t._v("开发者使用apps发送请求时，在Europa中辨别出需要日志的小tip：")]),t._v(" "),n("p",[n("code",[t._v("1: NestedRuntime {}")]),t._v(" 块下有一个"),n("code",[t._v("selector")]),t._v("字段，表示该次合约执行所使用的selector。开发者可以在metadata.json 中的"),n("code",[t._v("messages")]),t._v("部分中，获知当前调用的方法名对应的selector是什么，例如：")]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"messages"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"flip"')]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"selector"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x633aa551"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),n("p",[t._v("因此可以通过"),n("code",[t._v("selector")]),t._v("字段与日志中的"),n("code",[t._v("selector")]),t._v("进行比对，判定出当前通过apps发出的合约调用所对应的日志部分。")])]),t._v(" "),n("h3",{attrs:{id:"wasmi-panic-backtrace"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wasmi-panic-backtrace"}},[t._v("#")]),t._v(" wasmi panic backtrace")]),t._v(" "),n("p",[t._v("假设在"),n("code",[t._v("ink!")]),t._v("中编写合约的方法如下：")]),t._v(" "),n("div",{staticClass:"language-rust extra-class"},[n("pre",{pre:!0,attrs:{class:"language-rust"}},[n("code",[n("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[ink(message)]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("transfer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" to"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AccountId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Balance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Result")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" from "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("caller")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("transfer_from_to")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("from"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" to"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("panic!")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ok")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("调用该方法时，Europa中会打印如下日志（请注意当前该合约需要使用Patract的"),n("code",[t._v("cargo-contract")]),t._v("才会打印Wasm的Backtrace）：")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(": NestedRuntime "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\text_result: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("failed"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" ExecError "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" error: DispatchError::Module "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("index:5, error:17, message: Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ContractTrapped"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", orign: ErrorOrigin::Caller "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    caller: d43593c715fdd31c61141abd04a99fd6822"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("5GrwvaEF"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n    self_account: b6484f58b7b939e93fff7dc10a654af7e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("5GBi41bY"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n    selector: 0xfae3a09d,\n    args: 0x1cbd2d43530a44705ad088af313e18f80b5"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(",\n    value: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(",\n    gas_limit: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("409568000000")]),t._v(",\n    gas_left: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("369902872067")]),t._v(",\n    env_trace: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        seal_value_transferred"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x00000000000000000000000000000000"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v(",\n        seal_input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0xfae3a09d1cbd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v(",\n        seal_get_storage"),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("((")]),t._v("Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x0100000000000")]),t._v("...."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x010000000100000001000000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n        seal_caller"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0xd43593c715fdd31c61141abd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v(",\n        seal_hash_blake256"),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("((")]),t._v("Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x696e6b20686173")]),t._v("...."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x0873b31b7a3cf")]),t._v("...."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n      \t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...  ")]),t._v("\n        seal_deposit_event"),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("((")]),t._v("Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("["),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x45726332303a")]),t._v("..."),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".00000000000")]),t._v("]"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x000")]),t._v(".."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n\ttrap_reason: TrapReason::SupervisorError"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DispatchError::Module "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" index: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(", error: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(", message: Some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ContractTrapped"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n    wasm_error: Error::WasmiExecution"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Trap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Trap "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" kind: Unreachable "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v("\n        wasm backtrace: \n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  core::panicking::panic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  erc20::erc20::_::"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("impl erc20::erc20::Erc2"),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("0")]),t._v(">")]),t._v("::transfer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1697")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("erc20::erc20::_::__ink_Msg"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2644567034")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" as ink_lang::traits::MessageMut"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("::CALLABLE::"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("closure"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("611")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  core::ops::function::FnOnce::call_once"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("610")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("erc20::erc20::_::_::__ink_MessageDispatchEnum as ink_lang::dispatcher::Execute"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("::execute::"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("closure"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1675")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ink_lang::dispatcher::execute_message_mut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1674")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("erc20::erc20::_::_::__ink_MessageDispatchEnum as ink_lang::dispatcher::Execute"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("::execute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1692")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  erc20::erc20::_::"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("impl ink_lang::contract::DispatchUsingMode "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" erc20::erc20::Erc2"),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("0")]),t._v(">")]),t._v("::dispatch_using_mode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1690")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  call"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1691")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        ╰─"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("unknown"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2387")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    ,\n    nest: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("从Europa的日志中，我们可以分析出如下调用过程：")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("call -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" dispatch_using_mode -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" transfer -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" panic \n")])])]),n("p",[t._v("因此合约开发者可以定位到产生这次panic的原因是因为"),n("code",[t._v("transfer")]),t._v("这个函数中出现了"),n("code",[t._v("panic")]),t._v("导致。")]),t._v(" "),n("p",[t._v("以上为简单的日志分析说明，更多特殊的情况将在后面的“示例”章节中介绍。")]),t._v(" "),n("h2",{attrs:{id:"自定义chainextensions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自定义chainextensions"}},[t._v("#")]),t._v(" 自定义ChainExtensions")]),t._v(" "),n("h3",{attrs:{id:"ink-logger"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ink-logger"}},[t._v("#")]),t._v(" ink logger")]),t._v(" "),n("p",[t._v("查看"),n("a",{attrs:{href:"https://github.com/patractlabs/ink-log",target:"_blank",rel:"noopener noreferrer"}},[t._v("ink-log"),n("OutboundLink")],1),t._v("。")]),t._v(" "),n("h3",{attrs:{id:"zkp-feature"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zkp-feature"}},[t._v("#")]),t._v(" ZKP feature")]),t._v(" "),n("p",[t._v("查看 "),n("a",{attrs:{href:"https://github.com/patractlabs/zkmega",target:"_blank",rel:"noopener noreferrer"}},[t._v("zkMega"),n("OutboundLink")],1),t._v("，相关合约示例"),n("a",{attrs:{href:"https://github.com/patractlabs/metis/tree/master/groth16",target:"_blank",rel:"noopener noreferrer"}},[t._v("metis/groth16"),n("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);a.default=e.exports}}]);