"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7204],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3916:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={},c="Metis",l={unversionedId:"metis/introduction",id:"metis/introduction",isDocsHomePage:!1,title:"Metis",description:"Metis is the contract standard implementation and example case library led by Patract. In this warehouse, contract language frameworks such as ink!, Ask! that can run on pallet-contracts will be provided with the implementation of corresponding contract standards and common cases.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/metis/introduction.md",sourceDirName:"metis",slug:"/metis/introduction",permalink:"/en/metis/introduction",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/metis/introduction.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Report for  Himalia v0.1 & v0.2",permalink:"/en/himalia/reports/v0.1Report"},next:{title:"ERC20",permalink:"/en/metis/tokens"}},p=[{value:"Warehouse Address",id:"warehouse-address",children:[]},{value:"Project structure",id:"project-structure",children:[{value:"trait",id:"trait",children:[]},{value:"stubs",id:"stubs",children:[]},{value:"impls",id:"impls",children:[]}]},{value:"Report for Metis proposals",id:"report-for-metis-proposals",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"metis"},"Metis"),(0,i.kt)("p",null,"Metis is the contract standard implementation and example case library led by Patract. In this warehouse, contract language frameworks such as ink!, Ask! that can run on ",(0,i.kt)("inlineCode",{parentName:"p"},"pallet-contracts")," will be provided with the implementation of corresponding contract standards and common cases."),(0,i.kt)("p",null,"Metis is similar to OpenZepplin-contracts in the Ethereum ecosystem, providing contract developers with reusable wheels without having to write contract code from scratch. Developers who are new to Polkadot's ecological trial contract development can quickly build common applications with the help of the code in this warehouse after learning simple basic knowledge."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Since the current ink! contract is not yet stable and the Ask! contract is still under development, neither platform has yet to make standards. Therefore, the current implementations provided in Metis are some mimic implementations that imitate the EIP-related standards in Solidity.")),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("h2",{id:"warehouse-address"},"Warehouse Address"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/metis"},"https://github.com/patractlabs/metis")),(0,i.kt)("h2",{id:"project-structure"},"Project structure"),(0,i.kt)("p",null,"The metis project is divided into the following three modules: ",(0,i.kt)("inlineCode",{parentName:"p"},"trait"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"stubs"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"impls"),"."),(0,i.kt)("h3",{id:"trait"},"trait"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"trait")," module contains commonly used contract standard definitions, such as: erc20, erc721, etc. The ink! contract defines the common shared contract interface by defining ",(0,i.kt)("inlineCode",{parentName:"p"},"#[ink::trait_definition]")," to achieve the characteristics similar to solidity ",(0,i.kt)("inlineCode",{parentName:"p"},"interface"),"."),(0,i.kt)("p",null,"Metis has formulated some widely used ",(0,i.kt)("inlineCode",{parentName:"p"},"trait_definition")," contract standards based on development practical experience. Developers only need to add the ",(0,i.kt)("inlineCode",{parentName:"p"},"trait")," package defined in metis to their own project's dependencies,\nAnd implement the method defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"#[ink::trait_definition]")," like implementing the rust trait, then a common standard contract can be implemented."),(0,i.kt)("h4",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::trait_definition]\npub trait IErc20 {\n    /// Creates a new ERC-20 contract and initializes it with the initial supply for the instantiator.\n    #[ink(constructor)]\n    fn new(initial_supply: Balance) -> Self;\n\n    /// Returns the total supply.\n    #[ink(message)]\n    fn total_supply(&self) -> Balance;\n\n    /// Transfers'amount' from caller to'to'.\n    #[ink(message, payable)]\n    fn transfer(&mut self, to: AccountId, amount: Balance);\n}\n")),(0,i.kt)("h3",{id:"stubs"},"stubs"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"stubs")," module is a ",(0,i.kt)("inlineCode",{parentName:"p"},"stub")," implementation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"trait definition")," contract defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"trait")," module. The main purpose of stub is to assemble the contract address into a contract object when calling across contracts, and the contract method on the chain corresponding to the contract address can be called through the contract object."),(0,i.kt)("p",null,"Students who are familiar with solidity know that solidity implements inter-contract calls through interface, such as: ",(0,i.kt)("inlineCode",{parentName:"p"},"interfaceContract _interfaceContract = interfaceContract(_addr);"),", so you may have questions here: since ink! has been implemented through ",(0,i.kt)("inlineCode",{parentName:"p"},"#[ink:: trait_definition]")," to implement the contract interface,\nWhy not use ",(0,i.kt)("inlineCode",{parentName:"p"},"trait")," to implement cross-contract calls, but need ",(0,i.kt)("inlineCode",{parentName:"p"},"stub"),"? This is indeed a feature that the official parity needs to implement in the next step, but it is not currently supported. Interested students can track the official implementation (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/issues/631"},"https://github.com/paritytech/ink/issues/631"),")."),(0,i.kt)("p",null,"Therefore, metis implements the function of cross-contract call by providing contract stubs. Developers can introduce stub contracts into the project to implement cross-contract calls."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The structure of the interface definition is exactly the same as that of the contract, but no function implementation is defined, only they are declared. This type of declaration is usually called a ",(0,i.kt)("inlineCode",{parentName:"p"},"stub"),";")),(0,i.kt)("h4",{id:"example-1"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::contract]\nmod erc20 {\n    use ierc20::IErc20;\n\n    #[ink(storage)]\n    pub struct Erc20Stub {}\n\n    impl IErc20 for Erc20Stub {\n        #[ink(constructor)]\n        fn new(initial_supply: Balance) -> Self {unimplemented!()}\n\n        #[ink(message)]\n        fn total_supply(&self) -> Balance {unimplemented!()}\n\n        #[ink(message, payable)]\n        fn transfer(&mut self, to: AccountId, amount: Balance) {unimplemented!()}\n    }\n}\n")),(0,i.kt)("h3",{id:"impls"},"impls"),(0,i.kt)("p",null,"The impls module provides contract development and implementation cases, including the above-mentioned ",(0,i.kt)("inlineCode",{parentName:"p"},"trait"),", the use of packages in the ",(0,i.kt)("inlineCode",{parentName:"p"},"stubs")," module, and contract cases with features such as zkp."),(0,i.kt)("h4",{id:"example-2"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::contract]\nmod erc20 {\n    use ierc20::IErc20;\n\n    #[ink(storage)]\n    pub struct Erc20 {\n        total_supply: Balance,\n        // more fields ...\n    }\n\n    impl IErc20 for Erc20 {\n        #[ink(constructor)]\n        fn new(initial_supply: Balance) -> Self {\n            // implementation ...\n        }\n\n        #[ink(message)]\n        fn total_supply(&self) -> Balance {\n            // implementation ...\n        }\n\n        #[ink(message, payable)]\n        fn transfer(&mut self, to: AccountId, amount: Balance) {\n            // implementation ...\n        }\n    }\n}\n")),(0,i.kt)("h2",{id:"report-for-metis-proposals"},"Report for Metis proposals"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/metis/reports/M1Report"},"M1Report"))))}d.isMDXComponent=!0}}]);