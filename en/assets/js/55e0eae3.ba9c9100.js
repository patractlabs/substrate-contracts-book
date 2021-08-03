"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[4815],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?o.createElement(f,i(i({ref:t},l),{},{components:r})):o.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7433:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),i=["components"],c={},s="What is Europa\uff1f",u={unversionedId:"europa/introduction",id:"europa/introduction",isDocsHomePage:!1,title:"What is Europa\uff1f",description:"Background Information",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/europa/introduction.md",sourceDirName:"europa",slug:"/europa/introduction",permalink:"/substrate-contracts-book/en/europa/introduction",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/europa/introduction.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Report for Redspot v0.4",permalink:"/substrate-contracts-book/en/redspot/reports/v0.4Report"},next:{title:"Europa tutorial",permalink:"/substrate-contracts-book/en/europa/tutorial"}},l=[{value:"Background Information",id:"background-information",children:[]},{value:"As the framework of Substrate runtime",id:"as-the-framework-of-substrate-runtime",children:[]},{value:"As a sandbox environment for Frame Contracts pallet",id:"as-a-sandbox-environment-for-frame-contracts-pallet",children:[]},{value:"More information",id:"more-information",children:[]},{value:"Report for Europa proposals",id:"report-for-europa-proposals",children:[]}],p={toc:l};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-europa\uff1f"},"What is Europa\uff1f"),(0,a.kt)("h2",{id:"background-information"},"Background Information"),(0,a.kt)("p",null,"Europa is a sandbox environment that runs ",(0,a.kt)("inlineCode",{parentName:"p"},"FRAME Contracts pallet")," and simulates nodes. It is also a framework for running Substrate runtime."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When Europa is used as a sandbox for contract debugging, Europa modified the ",(0,a.kt)("inlineCode",{parentName:"li"},"FRAME Contracts pallet")," module to track the contract execution process, which can provide you with rich contract execution information, so that the contract execution process is no longer a black box, helping you debug the Wasm contract."),(0,a.kt)("li",{parentName:"ul"},"When using Europa as the framework of Substrate, you can develop Substrate Runtime without being disturbed by Wasm compilation problems (mostly used for experimental functions).")),(0,a.kt)("h2",{id:"as-the-framework-of-substrate-runtime"},"As the framework of Substrate runtime"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Europa removed some unnecessary functional modules, such as Wasm executor, p2p, and only retained the native execution environment."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"manual_seal")," block generation method is used, and the block generation is triggered when a new transaction is received, so that you do not have to be affected by consensus block generation, and can focus more on contract development, debugging and analysis logs."),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"state-kv")," database is provided, which records the state changes of each block.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# print the modified state kvs for block 1\n$ ./target/debug/europa state-kv 1 -d europa_database\nNov 12 15:53:27.699  INFO modified state for block:0x6c119a8f7de42e330aca8b9d3587937aacbbc203cc21650b60644c2f2d33e7fb    \nNov 12 15:53:27.699  INFO       key:26aa394eea5630e07c48ae0c9558cef702a5c1b19ab7a04f536c519aca4983ac|value:[DELETED]    \nNov 12 15:53:27.699  INFO       key:26aa394eea5630e07c48ae0c9558cef70a98fdbe9ce6c55837576c60c7af3850|value:05000000\n# ... \n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In addition to providing basic RPC in the Substrate framework, Europa also has some special RPC.\n| Field                                                        | Description                                                  |\n| :----------------------------------------------------------- | :----------------------------------------------------------- |\n| ",(0,a.kt)("inlineCode",{parentName:"p"},"europa_forwardToHeight (params: [height: NumberOf<B>])"),"       | Fast forward the block to the specified height to help test functions related to the block height. |\n| ",(0,a.kt)("inlineCode",{parentName:"p"},"europa_backwardToHeight (params: [height: NumberOf<B>])"),"      | Return the block to the specified height, mainly used to restore the state. |\n| ",(0,a.kt)("inlineCode",{parentName:"p"},"europa_modifiedStateKvs (params: [number_or_hash: NumberOrHash<B>])")," | Provide block height or block hash, query the state change in the corresponding block. |")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In addition to using the ",(0,a.kt)("inlineCode",{parentName:"p"},"-d/--base-path "),"option command to divide different working directories, Europa can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"-w/--workspace")," to declare different working spaces under the working directory."))),(0,a.kt)("h2",{id:"as-a-sandbox-environment-for-frame-contracts-pallet"},"As a sandbox environment for Frame Contracts pallet"),(0,a.kt)("p",null,"When developing contracts, Europa provides you with more detailed log information, including contracts execution log and Wasm execution stack. At the same time, this sandbox environment also has the functions of the aforementioned Europa framework. For example, you can use RPC such as ",(0,a.kt)("inlineCode",{parentName:"p"},"europa_forwardToHeight")," to control the execution of the contract."),(0,a.kt)("p",null,"Contract errors may occur in the ink! layer, the internal business logic of the contract, and the pallet_contracts layer. With detailed log information, you can quickly locate problems during debugging. Especially in the case of mutual calls between contracts, Europa can greatly improve the development experience."),(0,a.kt)("p",null,"Currently, there are two custom ChainExtensions available on Europa, namely Contract logger and ZKP feature."),(0,a.kt)("h2",{id:"more-information"},"More information"),(0,a.kt)("p",null,"native refers to the form of compiling Substrate Runtime into native machine code for execution."),(0,a.kt)("p",null,"The main focus of this book is Substrate's Wasm contract, so the Europa-related introductions in the following chapters are all related to the use of debugging Europa contract."),(0,a.kt)("h2",{id:"report-for-europa-proposals"},"Report for Europa proposals"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/substrate-contracts-book/en/europa/reports/v0.2Report"},"v0.1Report")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/substrate-contracts-book/en/europa/reports/v0.2Report"},"v0.2Report")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/substrate-contracts-book/en/europa/reports/v0.3Report"},"v0.3Report"))))}d.isMDXComponent=!0}}]);