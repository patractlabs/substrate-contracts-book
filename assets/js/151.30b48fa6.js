(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{706:function(t,n,e){"use strict";e.r(n);var a=e(6),r=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"contract"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contract"}},[t._v("#")]),t._v(" Contract")]),t._v(" "),e("blockquote",[e("p",[t._v("Currently we (Patract) support zkMega in testnet Jupiter ("),e("a",{attrs:{href:"https://github.com/patractlabs/jupiter",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/patractlabs/jupiter"),e("OutboundLink")],1),t._v(") and contract debug\nsandbox Europa ("),e("a",{attrs:{href:"https://github.com/patractlabs/europa",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/patractlabs/europa"),e("OutboundLink")],1),t._v("). And any substrate based chain which uses "),e("code",[t._v("pallet-contracts")]),t._v(" v3.0.0 could integrate zkMega.")]),t._v(" "),e("p",[t._v("if the "),e("code",[t._v("pallet-contracts")]),t._v(" Wasm contract chain use zkMega, then the following contract could run normally in those chain.")])]),t._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("p",[t._v("TODO this example is wrong for current version!")]),t._v(" "),e("div",{staticClass:"language-rust,ignore extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('#![cfg_attr(not(feature = "std"), no_std)]\n\n#[ink::contract]\nmod altbn128 {\n    use ink_env::zk_snarks::AltBn128;\n    use ink_prelude::string::String;\n\n    #[ink(storage)]\n    pub struct Altbn128 {\n        value: String,\n    }\n\n    impl Altbn128 {\n        #[ink(constructor)]\n        pub fn new(init_value: String) -> Self {\n            Self { value: init_value }\n        }\n\n        #[ink(constructor)]\n        pub fn default() -> Self {\n            Self::new("hello, world".into())\n        }\n\n        #[ink(message)]\n        pub fn bn_256_add(&mut self) {\n            let mut result = [0; 64];\n            ink_env::inflect_add::<AltBn128>(&[], &[], &mut result);\n            self.value = ink_prelude::format!("0x{:x?}", result);\n        }\n\n        #[ink(message)]\n        pub fn get(&self) -> String {\n            ink_prelude::format!("{}", &self.value)\n        }\n    }\n}\n')])])])])}),[],!1,null,null,null);n.default=r.exports}}]);