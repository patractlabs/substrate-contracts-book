"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[3363],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),s=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),m=s(n),d=o,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(h,i(i({ref:e},u),{},{components:n})):r.createElement(h,i({ref:e},u))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8363:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={},l="ink",s={unversionedId:"ink/introduction",id:"ink/introduction",isDocsHomePage:!1,title:"ink",description:"ink! is an eDSL to write WebAssembly based smart contracts using the Rust programming language. The compilation target are blockchains built on the Substrate framework.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/ink/introduction.md",sourceDirName:"ink",slug:"/ink/introduction",permalink:"/substrate-contracts-book/en/ink/introduction",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/ink/introduction.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Brief introduction of Wasm",permalink:"/substrate-contracts-book/en/contracts/wasm_first_step"},next:{title:"ink! tutorial",permalink:"/substrate-contracts-book/en/ink/tutorial"}},u=[{value:"ink! The process to the Contracts pallet",id:"ink-the-process-to-the-contracts-pallet",children:[]}],p={toc:u};function m(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ink"},"ink"),(0,a.kt)("p",null,"ink! is an eDSL to write WebAssembly based smart contracts using the Rust programming language. The compilation target are blockchains built on the Substrate framework."),(0,a.kt)("p",null,"Although ink! claims to be a kind of eDSL for writing contracts, I prefer to think that ink! is a contract framework written in Rust language that meets the requirements of Contracts Pallet."),(0,a.kt)("p",null,"For example, for EVM, if the instruction set of the EVM is regarded as a specification (the instruction set of the EVM already contains the information of the EVM contract model), then as long as the language can be compiled into the instruction set of the EVM, it can be said to be able to run on the EVM Contract language on the Internet, for example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Solidity"),(0,a.kt)("li",{parentName:"ul"},"Vyper")),(0,a.kt)("p",null,"And ink! Same here. Contracts Pallet requires Wasm code that can run the Contracts Pallet contract model, so any framework/language/library that can be compiled to meet this Wasm contract model can be called Contracts Pallet's contract language."),(0,a.kt)("p",null,"ink! is to use the Rust language, and on this basis, design a set of eDSL through Rust's ",(0,a.kt)("strong",{parentName:"p"},"hygienic macro system"),", and use this eDSL to write Rust code that meets the requirements of Contracts Pallet. In addition to eDSL, ink! also provides a ",(0,a.kt)("strong",{parentName:"p"},"storage collection type")," suitable for contract models, generating Metadata (corresponding to Solidity's ABI) and other tool libraries."),(0,a.kt)("p",null,"See the official documentation of ink!:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://substrate.dev/docs/en/knowledgebase/smart-contracts/ink-fundamentals"},"ink! Concepts")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://substrate.dev/substrate-contracts-workshop/#/"},"ink! Smart Contracts Tutorial")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://paritytech.github.io/ink-docs/"},"ink! Documentation Portal"))),(0,a.kt)("h2",{id:"ink-the-process-to-the-contracts-pallet"},"ink! The process to the Contracts pallet"),(0,a.kt)("p",null,"An example image is provided in the official parity document:\n",(0,a.kt)("img",{parentName:"p",src:"https://paritytech.github.io/ink-docs/img/how-it-works.svg",alt:"https://paritytech.github.io/ink-docs/how-it-works"})),(0,a.kt)("p",null,"From this figure, we can see that the process of writing and deploying the ink! contract requires"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ink! dependent library: provide ink! eDSL framework and provide corresponding dependent components"),(0,a.kt)("li",{parentName:"ul"},"cargo-contract: tool for compiling ink! contract"),(0,a.kt)("li",{parentName:"ul"},"SDK: SDK that interacts with the chain and deploys the contract to the chain. The official parity mainly provides ",(0,a.kt)("inlineCode",{parentName:"li"},"polkadot.js"),", and Patract provides the Himalia toolkit, including ",(0,a.kt)("inlineCode",{parentName:"li"},"go"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"java"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"python"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"C#")," SDK")),(0,a.kt)("p",null,"This chapter will mainly introduce ink! and ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo-contract")," information, and the information about SDK will be introduced in the following chapters."))}m.isMDXComponent=!0}}]);