(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{486:function(t,s,a){t.exports=a.p+"assets/img/language_1.4f60c61c.jpg"},487:function(t,s,a){t.exports=a.p+"assets/img/language_2.6d40898f.jpg"},543:function(t,s,a){"use strict";a.r(s);var e=a(1),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"合约语言-框架"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#合约语言-框架"}},[t._v("#")]),t._v(" 合约语言（框架）")]),t._v(" "),e("p",[t._v("与“合约模型”的概念相对应的（运行平台），我们可以衍生出合约语言（框架）的概念（编写能运行于平台上的代码）。")]),t._v(" "),e("p",[t._v("而这里不简单的使用“合约语言”，而是用“合约语言（框架）”这样的词语，是因为由于上一章节中我们已经拆分出了“合约沙盒”与“合约模型”的结构层次，因此实际上一些新型的合约平台并不是像EVM那样“发明”了一套新的Solidity合约语言，而是选择了一些语言（如Rust，C++，AssemblyScript等），基于这门语言在“hack语法解析”，“宏”，等维度上给现有语言添加上合约相关的约束，功能逻辑等。因此许多情况下会以“框架”，“库”等形态存在（如Frame Contract Pallet的rust合约语言框架ink!）。而这种“框架/库”又不是平时程序开发中使用库的维度，有一些合约语言框架需要修改到编译器维度，因此我们更倾向称呼为“语言框架”。")]),t._v(" "),e("h2",{attrs:{id:"合约语言-框架-与合约模型的对应关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#合约语言-框架-与合约模型的对应关系"}},[t._v("#")]),t._v(" 合约语言（框架）与合约模型的对应关系")]),t._v(" "),e("p",[e("img",{attrs:{src:a(486),alt:"language 1"}})]),t._v(" "),e("p",[t._v("如上图所示，上半部分是 EVM 与 Solidity 之间的关系。由于EVM/Solidity提出的时间比较早，因此其模型与通常的计算机虚拟机与语言的模型关系是一致的。而下半部分是在分离了合约模型后，语言框架部分的对应关系。")]),t._v(" "),e("p",[t._v("这里重点介绍下半部分，上半部分读者可以根据自己在以太坊合约开发的经验对比后文的介绍进行分析。")]),t._v(" "),e("p",[t._v("在编译形语言的体系中，先简单定义以下名词（非严谨说法，仅为了后文介绍而定义）：")]),t._v(" "),e("ul",[e("li",[t._v("S语言：程序员编写代码的原语言(source)，例如将C++编译成汇编，那么C++就是原语言S")]),t._v(" "),e("li",[t._v("T语言：S语言通过编译器编译后生产的语言(target)，例如将C++编译成汇编，那么汇编就是目标语言T")])]),t._v(" "),e("p",[t._v("前文已经介绍了运行合约体系的环境可以在逻辑上拆分为“合约模型”与“合约虚拟机”，前者管合约的业务逻辑，后者管如何运行合约的代码，那么相对应的，合约语言部分同样可以拆解为“合约语言框架”和“编译到合约虚拟机的S语言”。")]),t._v(" "),e("p",[t._v("那么根据这种定义，显然，Solidity就是就是一种同时具备“合约语言框架”和“S语言”特性的产物：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Solidity具备图灵完备的语言体系，因此Solidity是一门“语言”（相对于BTC脚本而言）")])]),t._v(" "),e("li",[e("p",[t._v("Solidity的语法中具备很多合约特性的关键字，对应于“合约语言框架”的概念，如：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("mapping")]),t._v("：合约存储的典型案例")]),t._v(" "),e("li",[e("code",[t._v("msg.sender")]),t._v(", "),e("code",[t._v("msg.value")]),t._v("：等与合约调用相关的变量")]),t._v(" "),e("li",[e("code",[t._v("view")]),t._v(","),e("code",[t._v("pure")]),t._v("等修饰符")]),t._v(" "),e("li",[e("code",[t._v("call")]),t._v(","),e("code",[t._v("delegate_call")]),t._v("等与合约调用相关关键字")])]),t._v(" "),e("p",[t._v("这些概念并非是为了支持Solidity这门语言能执行逻辑而存在的，而是为了服务于Ethereum合约虚拟机的业务逻辑而存在的。")])])]),t._v(" "),e("p",[t._v("而“合约语言框架”实现的目的就是为了与合约模型的业务逻辑所对应，什么样的合约模型就需要什么样的合约语言框架。例如EVM底层是k/v类型的存储，因此Solidity中设计的"),e("code",[t._v("mapping")]),t._v("不能遍历（除非附带多余存储）。例如EVM合约交互的合约模型设计为合约调用合约的模式，那么Solidity中就提供了"),e("code",[t._v("call")]),t._v("，"),e("code",[t._v("delegate_call")]),t._v("。"),e("strong",[t._v("对应到其他合约体系也同理")]),t._v("。")]),t._v(" "),e("p",[t._v("而另一方面合约语言框架是架设到S语言上的附加功能，因此合约语言框架提供的功能最终也是编译到S语言对应的T语言上。而区块链所需要的一些特性例如确定性要求，不允许使用操作系统调用的接口等等，会在这个层面上"),e("strong",[t._v("做约束")]),t._v("。因此合约语言框架除了本身对S语言本身提供了合约模型的功能以外，还会需要给语言本身产生一定的约束。这一步也是开发和理解合约语言框架中比较困难的地方。同时也正是由于这个点，造成了合约开发者使用合约模型框架的过程中很多别扭的情况。而Solidity或者Move等语言本身就是针对合约平台开发的新语言，纵使其语法会有很多模拟其他语言的痕迹，但是在做约束的这点上可以做到对合约开发者比较友好。而对现有语言加上合约语言框架功能的合约语言，在这一点上很难处理的很好，而这也是造成合约开发者较难使用框架功能的原因之一。")]),t._v(" "),e("p",[t._v("以ink!举例而言：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("在区块链中应该避免使用float，因为浮点数可能产生非确定性行为。因此在合约/runtime开发中，若需要使用浮点数，或者出现溢出数字乘除的时候就需要引入定点数来处理。因此在ink!的合约中可以引入Substrate runtime提供的定点数的库来处理。")])]),t._v(" "),e("li",[e("p",[t._v("由于"),e("code",[t._v("pallet-contracts")]),t._v("的合约模型与EVM基本相同，因此"),e("code",[t._v("pallet-contracts")]),t._v("的合约存储也是由K/V构成。那么合约模型框架就需要处理标准库里提供的各类集合类型。因此在"),e("strong",[t._v("ink!中将标准库中可能用到的集合类型重写了一遍")]),t._v("，添加了能将集合元素类型处理成K/V数据的过程。因此在ink!的合约存储中，若设计了集合类型，只能使用ink!标准库中提供的类型。而另一方面由于ink!的返回值需要导出metadata令第三方处理，而当前的metadata的接口实现只给标准库中的集合实现，因此ink!方法的返回值的集合只能使用标准库的集合类型。因此就会出现以下代码：")]),t._v(" "),e("div",{staticClass:"language-rust,ignore line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("#[ink::contract]\nmod test {\n    // 引入 ink 实现的 Vec\n    use ink_storage::collections::Vec as StorageVec;\n    // 引入标准库的Vec\n    use ink_prelude::vec::Vec;\n    #[ink(storage)]\n    pub struct Test {\n        owners: StorageVec<AccountId>, // 只能使用 ink的Vec\n    }\n    impl Test {\n        #[ink(message)]\n        pub fn get_owners(&self) -> Vec<AccountId> {\n            // 将 ink 实现的 Vec 转换为 标准库实现的 Vec\n            self.owners.iter().map(Clone::clone).collect()\n        }\n    }\n}\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br")])])])]),t._v(" "),e("p",[t._v("因此总结而言，在模型结构上，开发者需要理解到：")]),t._v(" "),e("ul",[e("li",[t._v("合约语言框架与合约模型是对应关系，语言框架的特性会与模型一一匹配；")]),t._v(" "),e("li",[t._v("合约语言框架对S语言提供了针对合约模型的业务功能，同时也根据合约业务逻辑的需求对S语言本身有约束。")])]),t._v(" "),e("p",[t._v("不过由于Solidity本身定位就是服务于写合约而设计出来的语言，因此许多与合约相关的功能能够设计为"),e("strong",[t._v("关键字")]),t._v("。而若是一门语言本身并不是针对合约设计的，则需要基于这门合约设计对应于合约模型的“合约语言框架”。由于是在这门语言上添加新的功能，因此一般情况下很难与语言本身结合的比较深入。因此最后做到的成果与这门语言提供的能"),e("strong",[t._v("拓展语法树")]),t._v("的能力相关。语言本身提供了越灵活修改/添加语法树的接口（宏，插件等），那么合约语言框架就可以实现越多的功能。语言本身提供这类可扩展性的功能越少，那么合约语言框架就只能考虑修改编译器，扩展需要的语法以支持合约模型，这样最后的语言就变成了原语言的一种“方言”了。因此前者可以以库/框架的形态存在，而后者则变为了一门新的语言，"),e("strong",[t._v("这也是我们将这种模型称为“合约语言框架”的原因")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"pallet-contracts-与对应的合约语言框架"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pallet-contracts-与对应的合约语言框架"}},[t._v("#")]),t._v(" "),e("code",[t._v("pallet-contracts")]),t._v(" 与对应的合约语言框架")]),t._v(" "),e("p",[e("img",{attrs:{src:a(487),alt:"language 2"}})]),t._v(" "),e("p",[t._v("在上文解释了合约语言框架的模型后，我们就可以把合约模型框架套在Substrate的Wasm合约系统上了。")]),t._v(" "),e("p",[t._v("那么显然，ink!这整套系统的实现，就是与"),e("code",[t._v("pallet-contracts")]),t._v("的合约模型相对应的。ink! 3.0通过过程宏（2.0通过神声明宏）的系统，将对应于"),e("code",[t._v("pallet-contracts")]),t._v("的功能逻辑引入到了rust当中。因此这套系统里的S语言就是rust，而T语言就是Wasm字节码。ink!在一个辅助工具"),e("code",[t._v("cargo-contract")]),t._v("的帮助下，将使用了ink!框架的rust代码编译成为了合约的Wasm字字节码。而Wasm字节码在链上运行的环境就是wasmi（将来也会引入Wasmtime等JIT形式的执行环境）。")]),t._v(" "),e("p",[t._v("而由于"),e("code",[t._v("pallet-contracts")]),t._v("的执行环境是Wasm字节码，因此能够编译成Wasm字节码的的语言配套上符合"),e("code",[t._v("pallet-contracts")]),t._v("合约模型的合约语言框架，都可以产生能运行于"),e("code",[t._v("pallet-contracts")]),t._v("这个合约平台上的合约。所以对于"),e("code",[t._v("pallet-contracts")]),t._v("而言，完全可以设计不同语言的合约体系给发开发提供多种选择使用不同的语言开发Wasm合约。")]),t._v(" "),e("p",[t._v("当前支持运行于"),e("code",[t._v("pallet-contracts")]),t._v("的合约语言框架除了对于rust的ink!之外，还有以下项目：")]),t._v(" "),e("ul",[e("li",[t._v("Ask!, 由 Patract 主导开发，是在AssemblyScript语言上的合约语言框架。(当前正在开发中)")]),t._v(" "),e("li",[t._v("Solang, 由 hyperledger-labs 主导开发，支持将 Solidity 编译到 "),e("code",[t._v("pallet-contracts")]),t._v("的Wasm的工具。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);