(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{625:function(e,t,a){"use strict";a.r(t);var v=a(6),n=Object(v.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"ink-edsl基础元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ink-edsl基础元素"}},[e._v("#")]),e._v(" ink! eDSL基础元素")]),e._v(" "),a("p",[e._v("ink! eDSL设计的元素与Solidity的元素其实比较近似，因为Contracts Pallet的合约模型结构和EVM的合约模型就是比较近似的。")]),e._v(" "),a("p",[e._v("因此ink!的设计可以找到很多和Solidity相似的影子（Substrate 的 Runtime 设计同理）。后文描述ink特性时会尝试跟Solidity的特性进行对比，方便读者理解。")]),e._v(" "),a("h2",{attrs:{id:"edsl-的元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#edsl-的元素"}},[e._v("#")]),e._v(" eDSL 的元素")]),e._v(" "),a("p",[e._v("由ink!文档或ink!提供的example，代码可以看出，ink!在Contracts Pallet的模型上，同样提出了以下三点基础元素：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("constructor")]),e._v("/"),a("code",[e._v("message")])]),e._v(" "),a("li",[a("code",[e._v("storage")])]),e._v(" "),a("li",[a("code",[e._v("event")])])]),e._v(" "),a("p",[e._v("不过由于Rust过程宏的设计关系，可以看到ink!首先要求一个合约需要处于一个"),a("code",[e._v("mod")]),e._v("下，并且在这个"),a("code",[e._v("mod")]),e._v("的上面添加上"),a("code",[e._v("#[ink::contract]")]),e._v("宏：")]),e._v(" "),a("div",{staticClass:"language-rust,ignore extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#[ink::contract]\nmod erc20 {\n    // ...\n}\n")])])]),a("p",[e._v("这样，相当于告知ink!从这个mod里面的东西就是要依据ink的eDSL处理的部分。")]),e._v(" "),a("h3",{attrs:{id:"ink-contract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ink-contract"}},[e._v("#")]),e._v(" "),a("code",[e._v("#[ink::contract]")])]),e._v(" "),a("p",[e._v("因此当遇到宏"),a("code",[e._v("#[ink::contract]")]),e._v("，即表面这是在ink!所识别的“合约部分”。因此我们可以看到，很多"),a("code",[e._v("use xxx")]),e._v("的导入都会放到处于"),a("code",[e._v("#[ink::contract]")]),e._v("的"),a("code",[e._v("mod")]),e._v("作用域下。")]),e._v(" "),a("p",[e._v("并且当前ink!设计为，在一个"),a("code",[e._v("crate")]),e._v("包下，只能出现一个"),a("code",[e._v("#[ink::contract]")]),e._v("，因此代表着ink!认为一个合约的维度是以rust的"),a("code",[e._v("crate")]),e._v("为单位，即如果在同一个"),a("code",[e._v("crate")]),e._v("中，无论是在同一个文件（比如都在"),a("code",[e._v("lib.rs")]),e._v("下）或者是在不同的文件中定义了2个以上的被"),a("code",[e._v("#[ink::contract]")]),e._v("修饰的"),a("code",[e._v("mod")]),e._v("，例如：")]),e._v(" "),a("div",{staticClass:"language-rust,ignore extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#[ink::contract]\nmod erc20 {\n    // ...\n}\n\n#[ink::contract]\nmod another_define {\n    // ...\n}\n")])])]),a("p",[e._v("类比于solidity的：")]),e._v(" "),a("div",{staticClass:"language-solidity,ignore extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// a.sol 在同一个文件中定义多个 `contract`\ncontract A {\n\n}\ncontract B {\n\n}\n")])])]),a("p",[e._v("那么在ink!的编译中会认为这种情况是非法的。")]),e._v(" "),a("p",[e._v("当然与之相对的，只要在当前"),a("code",[e._v("crate")]),e._v("中只有一个"),a("code",[e._v("#[ink::contract]")]),e._v("修饰的"),a("code",[e._v("mod")]),e._v("，其他"),a("code",[e._v("mod")]),e._v("该怎么正常使用就正常使用，"),a("strong",[e._v("因此ink!修饰的合约"),a("code",[e._v("crate")]),e._v("依然可以很好的做好代码隔离，增强可读性和可维护性")]),e._v("。这个能力对于"),a("strong",[e._v("维护大型复杂合约比较重要")]),e._v("，例如：")]),e._v(" "),a("div",{staticClass:"language-rust,ignore extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#[ink::contract]\nmod erc20 {\n    use crete::another_define::*;\n}\n\nmod another_define {\n    // ...\n}\n")])])]),a("p",[e._v("例如如下实例：")]),e._v(" "),a("div",{staticClass:"language-rust,ignore extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mod fxck {\n    use crate::erc20::Erc20;\n    use ::ink_lang::Env; // 注意这里需要引入 `ink_lang::Env`\n    impl Erc20 {\n        pub fn tmp(&self) {\n            self.env().caller(); // \n        }\n    }\n}\n\n#[ink::contract]\nmod erc20 {\n    #[ink(storage)]\n    pub struct Erc20 { ... }\n\n    impl Erc20 {\n        #[ink(constructor)]\n        pub fn new(initial_supply: Balance) -> Self { ... }\n        #[ink(message)]\n        pub fn transfer(&mut self, initial_supply: Balance) -> Self {\n            self.tmp(); // 调用在其他`mod`里定义的方法\n        }\n    }\n}\n")])])]),a("p",[e._v("这种模型可以做到一些在Solidity下做不到的代码隔离，增强可维护性。（因为Solidity的library只能用于纯函数计算）")]),e._v(" "),a("p",[e._v("总结而言，在ink!体系下：")]),e._v(" "),a("ul",[a("li",[e._v("一个合约以一个"),a("code",[e._v("crate")]),e._v("的单位，一个"),a("code",[e._v("crate")]),e._v("内只能出现一个"),a("code",[e._v("#[ink::contract]")]),e._v("定义；")]),e._v(" "),a("li",[a("code",[e._v("#[ink::contract]")]),e._v("修饰的"),a("code",[e._v("mod")]),e._v("代表合约的内容，同时也代表了"),a("strong",[e._v("合约的基础元素都必须定义到这个"),a("code",[e._v("mod")]),e._v("下")]),e._v("；")]),e._v(" "),a("li",[e._v("除"),a("code",[e._v("#[ink::contract]")]),e._v("修饰的"),a("code",[e._v("mod")]),e._v("以外的部分（其他"),a("code",[e._v("mod")]),e._v("，函数，类型）皆遵循rust的规则，可以做好良好的代码隔离提升可维护性；")]),e._v(" "),a("li",[e._v("实践中可以将"),a("code",[e._v("#[ink::contract]")]),e._v("修饰的"),a("code",[e._v("mod")]),e._v("当做合约的入口，将实现的逻辑分散到其他"),a("code",[e._v("mod")]),e._v("下。")])]),e._v(" "),a("p",[e._v("以下使用“合约mod”表示被"),a("code",[e._v("#[ink::contract]")]),e._v("修饰的"),a("code",[e._v("mod")])]),e._v(" "),a("h3",{attrs:{id:"storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage"}},[e._v("#")]),e._v(" "),a("code",[e._v("storage")])]),e._v(" "),a("p",[e._v("在合约mod中，一定需要定义一个结构体，且这个结构体被"),a("code",[e._v("#[ink(storage)]")]),e._v("所修饰，表示定义了该合约的存储。")]),e._v(" "),a("p",[e._v("同时这个被"),a("code",[e._v("#[ink(storage)]")]),e._v("修饰的结构体定义，"),a("strong",[e._v("也被视作一个可操作的合约实体")]),e._v("，因此所有与合约相关的资源，类型，操作都会"),a("strong",[e._v("和这个结构体绑定在一起")]),e._v("，当在合约调用合约的情景中，被调用的合约的类型也由这个结构体来表示。")]),e._v(" "),a("p",[e._v("因此这个结构体可以理解为是合约实体。")]),e._v(" "),a("blockquote",[a("p",[e._v("虽然修饰"),a("code",[e._v("mod")]),e._v("的部分才是合约，但是因为"),a("code",[e._v("mod")]),e._v("在rust中只能代表作用域，因此为了实践使用，使用"),a("code",[e._v("#[ink(storage)]")]),e._v("修饰的结构体表示能够进行操作的合约实体。")]),e._v(" "),a("p",[e._v("在这种语境下，可以将"),a("code",[e._v("#[ink::contract]")]),e._v("修饰的"),a("code",[e._v("mod")]),e._v("理解为“开启了合约域”的概念，而"),a("code",[e._v("#[ink(storage)]")]),e._v("修饰的"),a("code",[e._v("stuct")]),e._v("是在这个合约域下的合约。")])]),e._v(" "),a("p",[e._v("这里ink!定义的storage的概念和Solidity中定义“存储”的概念一致，表示定义在这里的属性即是最终写到"),a("strong",[e._v("链上的状态")]),e._v("。一切合约逻辑编写的目的最后都是为了对这里定义的状态的修改。")]),e._v(" "),a("p",[e._v("不过由于当前ink!采用使用一个结构体来承载合约状态的方案，因此当前这个合约所有的状态都只能定义在这个结构体中。当合约设计得比较大，比较复杂的时候会导致这里的可维护性下降。")]),e._v(" "),a("p",[e._v("定义storage的示例如下：")]),e._v(" "),a("div",{staticClass:"language-rust,ignore extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#[ink(storage)]\npub struct Erc20 {\n    /// Total token supply.\n    total_supply: Lazy<Balance>,\n    /// Mapping from owner to number of owned token.\n    balances: StorageHashMap<AccountId, Balance>,\n    /// Mapping of the token amount which an account is allowed to withdraw\n    /// from another account.\n    allowances: StorageHashMap<(AccountId, AccountId), Balance>,\n}\n")])])]),a("p",[e._v("被"),a("code",[e._v("#[ink(storage)]")]),e._v("修饰的结构体在后文统称为合约结构体。")]),e._v(" "),a("p",[e._v("这里尤其需要注意几个特性：")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("在该合约结构体内定义的属性的类型必须是实现过"),a("code",[e._v("SpreadLayout")]),e._v("的类型（或者更准确说是实现了"),a("code",[e._v("PackedLayout")]),e._v("的类型，因为"),a("code",[e._v("PackedLayout")]),e._v("是继承于"),a("code",[e._v("SpreadLayout")]),e._v("的定义）：")]),e._v(" "),a("div",{staticClass:"language-rust,ignore extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/// Types that can be stored to and loaded from the contract storage.\npub trait SpreadLayout {\n}\n")])])]),a("blockquote",[a("p",[e._v("这里只能使用实现过这个trait的类型的理由很简单，因为storage和一般的类型不同，其必须含有“链”的信息在其中，因此不同的链的合约实现都必须有一个部分用于处理合约中的storage（即状态）的分配问题。")]),e._v(" "),a("p",[e._v("例如Solidity在编译过程给实际上是按storage在合约中定义的上下顺序，做偏移分配该状态的key。这里实现过"),a("code",[e._v("SpredLayout")]),e._v("或者说"),a("code",[e._v("PackedLayout")]),e._v("类型的都会有一个近似的过程来进行状态的分配。")])]),e._v(" "),a("p",[e._v("ink!对于一般类型已经都做过基础实现，但是"),a("strong",[e._v("对于集合类型（"),a("code",[e._v("Vec")]),e._v("，"),a("code",[e._v("HashMap")]),e._v("等）而言，由于合约的状态需要hook读写的过程")]),e._v("，因此无法对集合类型实现这个"),a("code",[e._v("trait")]),e._v("。所以在ink!中，对标准库中常用的集合类型重新全部做了一次实现，且位于"),a("code",[e._v("#[ink(storage)]")]),e._v("修饰的结构体的属性类型，"),a("strong",[e._v("若使用集合类型时，必须使用ink!提供的集合类型")]),e._v("。")]),e._v(" "),a("blockquote",[a("p",[e._v("由于Solidity比较简陋，因此Solidity定义的存储map是无法进行遍历的。（由Solidity设计的缺陷导致）")]),e._v(" "),a("p",[e._v("ink!在设计的这块的时候进一步做了很多事情，因此ink!提供的集合类型"),a("code",[e._v("Vec")]),e._v("，"),a("code",[e._v("BTreeMap")]),e._v("，"),a("code",[e._v("HashMap")]),e._v("等等都是"),a("strong",[e._v("可以遍历")]),e._v("的。相较于Solidity能实现的功能而言是相当大的进步。")])])]),e._v(" "),a("li",[a("p",[e._v("即便基于以上的设计，嵌套集合类型依然很难实现（因为Substrate的状态结构采用了k/v模型）。因此在设计中还是只能尽量避免嵌套集合类型。如果一定需要嵌套集合类型，需要将嵌套的层次打平（flat），将第二层的key和第一层的key合并一起，使用元组替代（相当于Substrate Runtime中的"),a("code",[e._v("double_map")]),e._v("）")]),e._v(" "),a("div",{staticClass:"language-Solidity,ignore extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// solidity\ncontract A {\n    mapping (uint => mapping (uint => uint))\n}\n")])])]),a("p",[e._v("在ink!中类似的代码应该为:")]),e._v(" "),a("div",{staticClass:"language-rust,ignore extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#[ink(storage)]\npub struct Erc20 {\n    // 注意这里的key采用了元组 `(AccountId, AccountId)`\n    allowances: StorageHashMap<(AccountId, AccountId), Balance>,\n}\n")])])])]),e._v(" "),a("li",[a("p",[e._v("storage中提供了一种"),a("code",[e._v("Lazy")]),e._v("的模型，允许开发者使用"),a("code",[e._v("Lazy")]),e._v("包裹一个类型，可以让状态数据在使用到的情况下再加载：")]),e._v(" "),a("div",{staticClass:"language-rust,ignore extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/// A lazy storage entity.\n///\n/// This loads its value from storage upon first use.\n///\n/// # Note\n///\n/// Use this if the storage field doesn't need to be loaded in some or most cases.\n#[derive(Debug)]\npub struct Lazy<T>\nwhere\n    T: SpreadLayout,\n{\n    cell: LazyCell<T>,\n}\n")])])]),a("p",[e._v("使用方式：")]),e._v(" "),a("div",{staticClass:"language-rust,ignore extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#[ink(storage)]\npub struct Erc20 {\n    /// Total token supply.\n    total_supply: Lazy<Balance>,\n}\n")])])])])]),e._v(" "),a("h3",{attrs:{id:"constructor-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constructor-message"}},[e._v("#")]),e._v(" "),a("code",[e._v("constructor")]),e._v("/"),a("code",[e._v("message")])]),e._v(" "),a("p",[a("code",[e._v("constructor")]),e._v("/"),a("code",[e._v("message")]),e._v("就是触发合约状态变更的入口函数。也就是说"),a("code",[e._v("constructor")]),e._v("/"),a("code",[e._v("message")]),e._v("即是合约状态的状态转换函数。")]),e._v(" "),a("p",[a("code",[e._v("constructor")]),e._v("/"),a("code",[e._v("message")]),e._v("只能修饰"),a("strong",[e._v("合约结构体的方法")]),e._v("，不能用来修饰其他结构体的方法，或者其他纯函数。")]),e._v(" "),a("p",[e._v("在合约mod中，被"),a("code",[e._v("constructor")]),e._v("和"),a("code",[e._v("message")]),e._v("修饰的合约结构体的方法至少各有一个，若分别少于1个都会导致编译错误。")]),e._v(" "),a("p",[e._v("其中：")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("constructor")]),e._v(" 即对应着 Solidity 合约中的构造函数。当合约被部署的时候（在Contracts Pallet中当前代表着从已上传的合约代码中做"),a("code",[e._v("instantiate")]),e._v("的过程），会触发对应构造函数的调用。")]),e._v(" "),a("blockquote",[a("p",[e._v("这里需要强调，构造函数的调用与合约实例化是2个概念的事情，这个过程在ink!和Contracts Pallet的协调过程中"),a("strong",[e._v("并非原子化")]),e._v("。因此会出现构造函数没有被调用，但是合约地址会生成，也可以正常调用这个未调用过构造函数的合约实例的情况。")]),e._v(" "),a("p",[e._v("典型的例子是在调用"),a("code",[e._v("instantiate")]),e._v("的时候传入的错误编码的参数。")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("message")]),e._v("即对应着 Solidity 合约中的 "),a("code",[e._v("public")]),e._v("/"),a("code",[e._v("external")]),e._v("等 的 call 方法。由于Rust可变/不可变方法的特性，"),a("code",[e._v("message")]),e._v("利用了"),a("strong",[e._v("这个特性来表示这个方法是否会修改合约的状态")]),e._v("。")]),e._v(" "),a("p",[e._v("因此若"),a("code",[e._v("message")]),e._v("修饰的方法是")]),e._v(" "),a("div",{staticClass:"language-rust,ignore extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 注意方法的第一个参数是`&self`\n#[ink(message)]\npub fn total_supply(&self) -> Balance {\n    *self.total_supply\n}\n")])])]),a("p",[e._v("则表示这个方法的调用不会修改状态（由rust语法所控制），和以太坊一致，这类方法多用于rpc调用返回一个合约的存储，或返回一些基于存储的计算结果。")]),e._v(" "),a("p",[e._v("若修饰的是")]),e._v(" "),a("div",{staticClass:"language-rust,ignore extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 注意方法的第一个参数是 `&mut self`\npub fn transfer(&mut self, to: AccountId, value: Balance) -> Result<()> {\n    let from = self.env().caller();\n    self.transfer_from_to(from, to, value)\n}\n")])])]),a("p",[e._v("则表示这个方法的调用会修改状态，因此这个方法如果是以交易调用被打包的形式被调用执行时，会触发状态的改变。若是以rpc调用时，表示是模拟执行了一次。")]),e._v(" "),a("p",[e._v("同时在合约编译后会生成metadata.json（对应Solidity的ABI），在这个metadata中对于message部分会有一个"),a("code",[e._v("mutates")]),e._v("的字段来标示这个方法是否是可变的。")])])]),e._v(" "),a("h4",{attrs:{id:"message的selector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#message的selector"}},[e._v("#")]),e._v(" message的"),a("code",[e._v("selector")])]),e._v(" "),a("p",[e._v("Solidity对于合约方法的ABI的产生使用的是将方法名加上参数类型作为函数签名拼凑成为字符串然后做hash取前4字节。")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('call = "func_name(param1_type,param2_type,...)"\nbytes4(keccak256(call), a, b)\n')])])]),a("p",[e._v("在ink!中这种让合约区分调用触发点的概念叫做"),a("code",[e._v("selector")]),e._v("。")]),e._v(" "),a("p",[e._v("由于rust不支持函数重载，因此在ink!中采用了比较简陋的设计，直接对函数名字的字符串做hash取前4字节：")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('call = "func_name"\nblake2_512(call)[0..4]\n')])])]),a("blockquote",[a("p",[e._v("笔者认为这种设计造成了其他合约语言设计的困扰。因为rust不支持重载不代表别的语言不支持重载。当前Solang将Solidity编译到Wasm的过程后，想和ink!的metadata做兼容，互相调用就会出现问题。")])]),e._v(" "),a("p",[e._v("另一方面"),a("code",[e._v("selector")]),e._v("也可以运行合约开发者自己定义的")]),e._v(" "),a("div",{staticClass:"language-rust,json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('#[ink(message, selector = "0xCAFEBABE")]\npub fn was_it_ten(&self) -> bool { ... }\n')])])]),a("h4",{attrs:{id:"message的payable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#message的payable"}},[e._v("#")]),e._v(" message的"),a("code",[e._v("payable")])]),e._v(" "),a("p",[e._v("Solidity中对于方法会有一个"),a("code",[e._v("payable")]),e._v("的修饰符，用于表示这个方法可以接受一定金额。")]),e._v(" "),a("p",[e._v("因此在ink!中也提供"),a("code",[e._v("payable")]),e._v("来表示调用这个方法的同时是否可以附带转移一定的"),a("strong",[e._v("本币的金额")]),e._v("。在ink!当前的设计中，若在调用一个非"),a("code",[e._v("payable")]),e._v("的message时同时附带了金额时，这个调用过程会认为是错误的。")]),e._v(" "),a("p",[e._v("默认情况下认为"),a("code",[e._v("paybale")]),e._v("是"),a("code",[e._v("false")]),e._v("的，只有当合约开发者指定了"),a("code",[e._v("payable")]),e._v("后才是"),a("code",[e._v("true")]),e._v("。")]),e._v(" "),a("p",[e._v("指定一个message是可调用的案例是：")]),e._v(" "),a("div",{staticClass:"language-rust,json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#[ink(message, playable)]\npub fn was_it_ten(&self) -> bool { ... }\n")])])]),a("p",[e._v("另一方面在metadata中，对于message部分会有一个"),a("code",[e._v("payable")]),e._v("的字段来标示这个方法是否是需要付费的。")]),e._v(" "),a("h3",{attrs:{id:"event"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event"}},[e._v("#")]),e._v(" "),a("code",[e._v("event")])]),e._v(" "),a("p",[a("code",[e._v("event")]),e._v("的概念在状态机模型中其实并不是必须的。但是由于"),a("strong",[e._v("区块链是一个异步系统")]),e._v("，因此在发送交易去触发状态变更后，并不能马上知道变更结果，只能依赖监听某个元素来判定执行结果。"),a("code",[e._v("event")]),e._v("便是在Solidity的阶段设计的元素，这个设计同样被继承到了Substrate Runtime中，以及ink!中。")]),e._v(" "),a("blockquote",[a("p",[e._v("笔者不觉得event是一个很好的设计，理论上有其他更好的方式，或者event的变种。event一定程度上会造成开发者的滥用。")])]),e._v(" "),a("p",[e._v("ink!的"),a("code",[e._v("event")]),e._v("在Contracts Pallet中最后是通过"),a("code",[e._v("host function")]),e._v("将合约定义的event打印到了链的event当中。")]),e._v(" "),a("p",[e._v("ink!的event设计和Solidity相比就没有什么特别的地方了，不过由于是在Wasm中运行的合约，因此打印合约的event需要通过"),a("code",[e._v("host function")]),e._v("与链进行交互，因此调用的方式需要通过"),a("code",[e._v("env()")]),e._v("去调用。")]),e._v(" "),a("div",{staticClass:"language-rust,ignore extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Self::env().emit_event(...);\n// or use\nself.env().emit_event(...);\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);