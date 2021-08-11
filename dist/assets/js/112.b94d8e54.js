(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{663:function(t,a,e){"use strict";e.r(a);var i=e(6),s=Object(i.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"himalia"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#himalia"}},[t._v("#")]),t._v(" Himalia")]),t._v(" "),e("p",[t._v("Himalia 是 Patract 构建的一系列不同语言的访问链"),e("code",[t._v("pallet-contracts")]),t._v("合约模块的sdk库的总称。对于Substrate而言，已经存在了一些面向不同语言的访问链的sdk。但是由于"),e("code",[t._v("pallet-contracts")]),t._v("模块的特殊性，需要继续构建基于访问链的sdk上的访问合约模块的sdk。其特殊性主要表现在：")]),t._v(" "),e("ul",[e("li",[t._v("合约的部署与调用（包含rpc调用与交易调用）需要依据合约的metadata.json（类似于Solidity的abi文件）提供的信息组装参数的顺序的与编码，而链的metadata只能告知链的sdk该链上存在合约模块的"),e("code",[t._v("instantiate")]),t._v("，"),e("code",[t._v("call")]),t._v("等方法，不可能告知某个合约的调用参数的信息。因此对于合约，需要构建能解析并支持合约metadata的功能。")]),t._v(" "),e("li",[t._v("合约的Event也需要依据合约的metadata.json进行解析。因此若使用链的sdk，只能监听到出现了合约模块的event，但是却无法解析出event中的内容。因此需要提供合约的sdk支持event的监听。")]),t._v(" "),e("li",[t._v("合约的状态（存储）位于子树，且其key的编码与分配方式与runtime不一致。合约存储的key的编码分配方式与该合约所使用的合约语言框架有关（例如Ask!的实现有可能与ink!不一样），因此需要针对不同的合约语言框架实现对应的存储解析方式。同时这个解析过程也十分依赖合约本身提供的metadata。")]),t._v(" "),e("li",[t._v("合约的开发者为广大的项目方，而链的开发者大部分情况下为开发链的项目方。因此在管理私钥的场景方面会出现比较大的区别。很多情况下与链高权限相关的私钥管理为节点自身，数量比较少且门槛高，或者很多情况下都依托于多签或者投票控制。而合约的开发者很广泛，后台安全管理质量参差不齐，另一方面很多合约都只有一个私钥进行控制。因此在对于合约模块的调用上，在私钥管理方面更需要一个高安全低门槛的解决方案。因此合约sdk可以在这些场景上做特殊处理，以减少合约开发者安全管理的门槛。")])]),t._v(" "),e("p",[t._v("因此 Himalia 是有十分重要的存在理由的。Himalia的定位类似于 Ethereum 生态里的 Web3J, Web3py 等等。")]),t._v(" "),e("h2",{attrs:{id:"项目仓库地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目仓库地址"}},[t._v("#")]),t._v(" 项目仓库地址")]),t._v(" "),e("p",[t._v("当前 Himalia 提供的不同语言的合约sdk有如下版本：")]),t._v(" "),e("ul",[e("li",[t._v("go: https://github.com/patractlabs/go-patract")]),t._v(" "),e("li",[t._v("python: https://github.com/patractlabs/py-patract")]),t._v(" "),e("li",[t._v("java: 还未实现")]),t._v(" "),e("li",[t._v("c#(.net): 还未实现")])])])}),[],!1,null,null,null);a.default=s.exports}}]);