(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{687:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"配置信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置信息"}},[t._v("#")]),t._v(" 配置信息")]),t._v(" "),a("p",[t._v("运行Redspot时，它将从当前工作目录开始搜索最接近的redspot.config.js文件，该文件通常位于项目的根目录下。该文件中包含整个Redspot设置信息，例如配置、插件和自定义任务等。")]),t._v(" "),a("h2",{attrs:{id:"配置选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置选项"}},[t._v("#")]),t._v(" 配置选项")]),t._v(" "),a("p",[t._v("要设置配置，需要从redspot.config.ts中导出对象（Object）。")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" RedspotUserConfig "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'redspot/types'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  defaultNetwork"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'development'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  contract"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ink"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      toolchain"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nightly'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      sources"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'contracts/**/*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    solang"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      sources"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'contracts/**/*.sol'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  networks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    development"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      endpoint"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ws://127.0.0.1:9944'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      types"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      gasLimit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'400000000000'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    substrate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      endpoint"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ws://127.0.0.1:9944'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      gasLimit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'400000000000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      accounts"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//Alice'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tomato mad peasant blush poem obtain inspire distance attitude mercy return marriage"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x26aa394eea5630e07c48ae0c9558cef70a98fdbe9ce6c55837576c60c7af3850"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      types"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  paths"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    artifacts"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"artifacts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    tests"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tests"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  mocha"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    timeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60000")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" RedspotUserConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("您可在"),a("code",[t._v(".js")]),t._v("文件中，通过"),a("code",[t._v("config")]),t._v("获取配置信息。")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"redspot"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"defaultnetwork"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defaultnetwork"}},[t._v("#")]),t._v(" defaultNetwork")]),t._v(" "),a("p",[t._v("您可以通过配置中的"),a("code",[t._v("defaultNetwork")]),t._v("字段来定义运行Redspot时默认使用的网络。如果省略此配置，则其默认值为localhost。")]),t._v(" "),a("h2",{attrs:{id:"networks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#networks"}},[t._v("#")]),t._v(" networks")]),t._v(" "),a("p",[a("code",[t._v("networks")]),t._v("配置字段是一个可选对象，网络名称会映射到其配置。默认的localhost的配置信息如下。")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  localhost"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    gasLimit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"400000000000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    accounts"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"//Alice"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"//Bob"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"//Charlie"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"//Dave"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"//Eve"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"//Ferdie"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    endpoint"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ws://127.0.0.1:9944"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    types"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("您也可以配置其他网络名称，例如配置mainnet，某个网络的名字some_network_name等。")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mainnet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    some_network_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("下文介绍了network部分的配置选项。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("配置字段")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("[network].gasLimit")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("用于设置实例化或通过交易调用合约的时需要提供的gaslimit的默认值。这个值必须是整数，没有精度。如果这个值过小，将返回contracts.OutOfGas错误。最大的gaslimit是这条Substrate的链在Runtime中用于DispatchClass::Normal的最大值。例如在Substrate的Node节点的配置中是NORMAL_DISPATCH_RATIO * MAXIMUM_BLOCK_WEIGHT = 75% * 2000000000000。建议此值设置高一点。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("[network].accounts")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是由"),a("a",{attrs:{href:"https://polkadot.js.org/docs/keyring/start/suri/",target:"_blank",rel:"noopener noreferrer"}},[t._v("suri"),a("OutboundLink")],1),t._v("或"),a("a",{attrs:{href:"https://polkadot.js.org/docs/keyring/start/create/#adding-a-pair",target:"_blank",rel:"noopener noreferrer"}},[t._v("KeyringPair"),a("OutboundLink")],1),t._v('组成的一个列表。accounts 默认为 ["//Alice", "//Bob", "//Charlie", "//Dave", "//Eve", "//Ferdie"]，详情请参见'),a("a",{attrs:{href:"https://docs.patract.io/redspot/runtime-environment.html#%E8%AE%BF%E9%97%AE-rse",target:"_blank",rel:"noopener noreferrer"}},[t._v("Runtime-environment"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("[network].endpoint")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("指明了在当前网络配置中开发者想要连接的节点。当前，只支持 WebSockets 类型的 RPC连接，即只支持 "),a("code",[t._v("wss://")]),t._v(" 或 "),a("code",[t._v("ws://")]),t._v("开头的链接协议。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("[network].types")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("type是Polkadot.js中定义的概念，详情可参见"),a("a",{attrs:{href:"https://polkadot.js.org/docs/api/start/types.extend/",target:"_blank",rel:"noopener noreferrer"}},[t._v("types.extend"),a("OutboundLink")],1),t._v('。 您还可以设置[network].typesbundle、[network].typesSpec等。 如果遇到类似于No such variant in enum MultiSignature的错误，您可以在 type 中添加{ Address: "AccountId", LookupSource: "AccountId"}，详情请参见'),a("a",{attrs:{href:"https://polkadot.js.org/docs/api/start/types.extend/#impact-on-extrinsics",target:"_blank",rel:"noopener noreferrer"}},[t._v("impact-on-extrinsics"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("[network].rpc")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("和types类似，RPC用来指定polkadot.js的自定义RPC。详情请参见"),a("a",{attrs:{href:"https://polkadot.js.org/docs/api/start/rpc.custom",target:"_blank",rel:"noopener noreferrer"}},[t._v("rpc.custom"),a("OutboundLink")],1),t._v("。")])])])]),t._v(" "),a("h2",{attrs:{id:"contract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contract"}},[t._v("#")]),t._v(" contract**")]),t._v(" "),a("p",[t._v("在contract中，您可以设置编译器的选项，目前支持"),a("a",{attrs:{href:"https://github.com/paritytech/ink",target:"_blank",rel:"noopener noreferrer"}},[t._v("ink"),a("OutboundLink")],1),t._v("和"),a("a",{attrs:{href:"https://github.com/hyperledger-labs/solang",target:"_blank",rel:"noopener noreferrer"}},[t._v("solang"),a("OutboundLink")],1),t._v("。您也可以将ink合约和solang合约放在同一项目下一起编译，详情可参见"),a("a",{attrs:{href:"https://github.com/patractlabs/redspot/tree/master/examples/multi-contract",target:"_blank",rel:"noopener noreferrer"}},[t._v("多合约的编译示例"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("选项")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("[contract].ink.toolchain")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置"),a("a",{attrs:{href:"https://github.com/paritytech/cargo-contract",target:"_blank",rel:"noopener noreferrer"}},[t._v("cargo-contract"),a("OutboundLink")],1),t._v("编译合约时，所使用的 toolchain。通常都是nightly。您也可以指定为nightly-YYYY-MM-DD。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("[contract].ink.sources")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置编译时查找的ink合约的目录。glob语法。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("[contract].solang.sources<")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置编译时查找的solang合约的目录。glob语法。")])])])]),t._v(" "),a("h2",{attrs:{id:"paths"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#paths"}},[t._v("#")]),t._v(" Paths")]),t._v(" "),a("p",[t._v("Paths可以设置artifacts和tests文件的目录名。通常情况下，您无需对此进行更改。")]),t._v(" "),a("h2",{attrs:{id:"mocha"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mocha"}},[t._v("#")]),t._v(" mocha")]),t._v(" "),a("p",[t._v("Redspot使用mocha作为测试框架，这里的所有选项，都会传递给mocha 。更多详情，请参见"),a("a",{attrs:{href:"https://mochajs.org/api/mocha",target:"_blank",rel:"noopener noreferrer"}},[t._v("mocha"),a("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);s.default=e.exports}}]);