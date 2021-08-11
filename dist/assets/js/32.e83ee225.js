(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{546:function(t,s,a){t.exports=a.p+"assets/img/process.61e0536f.jpg"},688:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"控制台"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#控制台"}},[t._v("#")]),t._v(" 控制台")]),t._v(" "),n("p",[t._v("Redspot提供了一个功能强大的控制台，允许您使用命令与合约做操作，也可调用位于scripts目录下的脚本做重复性的工作等。Redspot的控制台还有很多丰富的特性，例如：")]),t._v(" "),n("ul",[n("li",[t._v("提供了强大的Tab补全能力。")]),t._v(" "),n("li",[t._v("控制台记录了命令历史，您可查看"),n("code",[t._v("cache/console-history.txt")]),t._v("文件获取历史执行命令，也可以通过"),n("code",[t._v("↑")]),t._v("按键找到需要的历史命令，将来控制台也会提供快捷键索引历史命令的功能。")])]),t._v(" "),n("h2",{attrs:{id:"启动控制台"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动控制台"}},[t._v("#")]),t._v(" 启动控制台")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ npx redspot console\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 若已经确定在`artifacts`目录下编译好的合约符合自己预期，则可以加上 --no-compile 参数不进行合约编译")]),t._v("\n$ npx redspot console --no-compile\n")])])]),n("p",[t._v("此时执行"),n("code",[t._v(".help")]),t._v("命令可以看到相应的帮助信息。")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" .help\n.break    Sometimes you get stuck, this gets you out\n.clear    Alias "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" .break\n.editor   Enter editor mode\n.exit     Exit the repl\n.help     Print this "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" message\n.load     Load JS from a "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" into the REPL session\n.save     Save all evaluated commands "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" this REPL session to a "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n")])])]),n("h2",{attrs:{id:"常用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),n("p",[t._v("控制台默认导入了Redspot库下的供合约交互的组件，例如：")]),t._v(" "),n("ul",[n("li",[t._v("patract")]),t._v(" "),n("li",[t._v("network")])]),t._v(" "),n("p",[t._v("与在scripts目录下的脚本一致，通过这些组件可以调用许多功能，例如和合约交互、查询信息、查看网络等。")]),t._v(" "),n("h2",{attrs:{id:"常用工作流"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用工作流"}},[t._v("#")]),t._v(" 常用工作流")]),t._v(" "),n("p",[t._v("如果您要调试erc20合约，那么在合约编译好后，可以在artifacts目录下看到erc20.json和erc20.wasm文件。加载合约相关的操作需要以这里的文件名为标示。")]),t._v(" "),n("p",[t._v("如果仿照scripts目录下的deploy.ts部署脚本，您可以直接在控制台执行部署合约并调用的命令。")]),t._v(" "),n("div",{staticClass:"language-typescript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" factory "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" patract"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContractFactory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'erc20'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// erc20与文件名一致")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" contract "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" factory"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("deployed")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'new'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上传代码并实例化这个合约")]),t._v("\n")])])]),n("p",[t._v("如果已知一个合约的地址，想在先加载这个合约实例则可以通过以下方式。")]),t._v(" "),n("div",{staticClass:"language-typescript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" factory "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" patract"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContractFactory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'erc20'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// erc20与文件名一致")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" contract "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" factory"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("attach")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'16DHBsUan9GoedoTYJmbyBZJMmN39ZpKUPvYeAGMTXCgxLQe'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加载合约地址")]),t._v("\n")])])]),n("p",[t._v("此时这里的contract对象就是一个实例化好的对象。后面可以直接用这个contract对象与合约进行交互，例如调用一个转账功能：")]),t._v(" "),n("div",{staticClass:"language-typescript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ret "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" contract"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("transfer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"15Jbynf3EcRqdHV1K14LXYh7PQFTbp5wiXfrc4kbMReR9KxA"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nret"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("events "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打印events的信息")]),t._v("\n")])])]),n("p",[t._v("通过RPC调用获取执行某个方法的结果。")]),t._v(" "),n("div",{staticClass:"language-typescript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ret "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" contract"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("balanceOf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"15Jbynf3EcRqdHV1K14LXYh7PQFTbp5wiXfrc4kbMReR9KxA"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nret"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("output"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("如果这个过程是比较固定的，则可以把以上命令写到一个文件中放到scripts目录下，例如命名为scripts/do_something.ts。")]),t._v(" "),n("div",{staticClass:"language-typescript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" factory "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" patract"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContractFactory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'erc20'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" contract "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" factory"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("deployed")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'new'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ret "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" contract"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("transfer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"15Jbynf3EcRqdHV1K14LXYh7PQFTbp5wiXfrc4kbMReR9KxA"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nret"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("events\n")])])]),n("p",[t._v("然后使用以下命令即可自动化执行一系列过程。")]),t._v(" "),n("div",{staticClass:"language-typescript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load scripts"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("do_something"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ts\n")])])]),n("p",[t._v("综上所述，控制台辅助的功能如下。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(546),alt:""}})])])}),[],!1,null,null,null);s.default=e.exports}}]);