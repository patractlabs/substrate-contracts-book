"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[167],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),l=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},s=function(t){var e=l(t.components);return r.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),m=l(n),f=a,b=m["".concat(i,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(b,c(c({ref:e},s),{},{components:n})):r.createElement(b,c({ref:e},s))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,c=new Array(o);c[0]=m;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:a,c[1]=u;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3526:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],u={},i="Contract",l={unversionedId:"zkmega/contract",id:"zkmega/contract",isDocsHomePage:!1,title:"Contract",description:"Currently we (Patract) support zkMega in testnet Jupiter (https://github.com/patractlabs/jupiter) and contract debug",source:"@site/docs/zkmega/contract.md",sourceDirName:"zkmega",slug:"/zkmega/contract",permalink:"/substrate-contracts-book/zkmega/contract",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/zkmega/contract.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"tutorial",permalink:"/substrate-contracts-book/zkmega/tutorial"},next:{title:"Example",permalink:"/substrate-contracts-book/zkmega/example"}},s=[{value:"Example",id:"example",children:[]}],p={toc:s};function m(t){var e=t.components,n=(0,a.Z)(t,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contract"},"Contract"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Currently we (Patract) support zkMega in testnet Jupiter (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/jupiter"},"https://github.com/patractlabs/jupiter"),") and contract debug\nsandbox Europa (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/europa"},"https://github.com/patractlabs/europa"),"). And any substrate based chain which uses ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet-contracts")," v3.0.0 could integrate zkMega."),(0,o.kt)("p",{parentName:"blockquote"},"if the ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet-contracts")," Wasm contract chain use zkMega, then the following contract could run normally in those chain.")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"TODO this example is wrong for current version!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust,ignore"},'#![cfg_attr(not(feature = "std"), no_std)]\n\n#[ink::contract]\nmod altbn128 {\n    use ink_env::zk_snarks::AltBn128;\n    use ink_prelude::string::String;\n\n    #[ink(storage)]\n    pub struct Altbn128 {\n        value: String,\n    }\n\n    impl Altbn128 {\n        #[ink(constructor)]\n        pub fn new(init_value: String) -> Self {\n            Self { value: init_value }\n        }\n\n        #[ink(constructor)]\n        pub fn default() -> Self {\n            Self::new("hello, world".into())\n        }\n\n        #[ink(message)]\n        pub fn bn_256_add(&mut self) {\n            let mut result = [0; 64];\n            ink_env::inflect_add::<AltBn128>(&[], &[], &mut result);\n            self.value = ink_prelude::format!("0x{:x?}", result);\n        }\n\n        #[ink(message)]\n        pub fn get(&self) -> String {\n            ink_prelude::format!("{}", &self.value)\n        }\n    }\n}\n')))}m.isMDXComponent=!0}}]);