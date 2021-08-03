"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3726],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),s=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:e},p),{},{components:n})):a.createElement(h,i({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6879:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],c={},l="go-patract",s={unversionedId:"himalia/go-patract",id:"himalia/go-patract",isDocsHomePage:!1,title:"go-patract",description:"Intruduction",source:"@site/docs/himalia/go-patract.md",sourceDirName:"himalia",slug:"/himalia/go-patract",permalink:"/himalia/go-patract",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/himalia/go-patract.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"tutorial",permalink:"/himalia/tutorial"},next:{title:"py-patract",permalink:"/himalia/py-patract"}},p=[{value:"Intruduction",id:"intruduction",children:[]},{value:"Design",id:"design",children:[]}],u={toc:p};function d(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"go-patract"},"go-patract"),(0,o.kt)("h2",{id:"intruduction"},"Intruduction"),(0,o.kt)("p",null,"Most contract behaviors are highly related to context. In addition to interacting with the chain, user-oriented contract applications also need to provide users with current relevant context status information:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+--DAPP-Front-End--------------+        +---Chain-------------------------+\n|                              |        |                                 |\n| +----+  +------------------+ |        | +-------+     +-------+         |\n| |    |  |                  | | Commit | |       |     |       |         |\n| |    |  |   Polkadot-JS    +------------\x3e Node  +----\x3e+ Node  |         |\n| |    +->+                  | |   Tx   | |       |     |       |         |\n| |    |  |                  | |        | +-------+     +----+-++         |\n| |    |  +------------------+ |        |                    ^ |          |\n| | UI |                       |        +---------------------------------+\n| |    |  +------------------+ |                             | |\n| |    |  |                  | |        +--DAPP-Server--------------------+\n| |    |  |                  | |  Push  | +--------+     +-----v-------+  |\n| |    +<-+   Model          +<-----------+        +-----+             |  |\n| |    |  |                  | |        | | Server |     |  PatractGo  |  |\n| |    |  |                  +------------\x3e        +-----+             |  |\n| +----+  +------------------+ | Query  | +----+---+     +-----+-------+  |\n+------------------------------+        |      |               |          |\n                                        |      |         +-----v-------+  |\n                                        |      |         |             |  |\n                                        |      +--------\x3e+   DataBase  |  |\n                                        |                |             |  |\n                                        |                +-------------+  |\n                                        |                                 |\n                                        +---------------------------------+\n")),(0,o.kt)("p",null,"PatractGo is mainly responsible for implementing micro-services in a DApp. Unlike querying the state of the chain API, PatractGo can monitor the calls and events generated by the specified contract. Developers can obtain the state storage based on this information to maintain consistent state with the chain. Through data services based on a typical API-DB architecture, the front-end DApp can efficiently and concisely obtain the state on the chain as context information."),(0,o.kt)("p",null,"Based on the API of chain nodes, PatractGo obtains block information and summarizes and filters it, and sends contract-related messages and events based on metadata analysis to the handler protocol specified by the developer. For example, for a typical ERC20 contract, the developer can use the channel to subscribe to all transfer events that occur, and then synchronize them into the database, so that other microservices can provide services corresponding to the token data of the account, such as querying the current token holding distribution and other logics."),(0,o.kt)("p",null,"Therefor, PatractGo will achieve the following support:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Complete the secondary packaging of the contract module interface, complete operations such as ",(0,o.kt)("inlineCode",{parentName:"li"},"put_code"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"call"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"instantiate"),", etc."),(0,o.kt)("li",{parentName:"ul"},"Parse the metadata.json information of the contract, and support the automatic generation of http service interface for the metadata corresponding contract"),(0,o.kt)("li",{parentName:"ul"},"Scanning and monitoring support of the contract status on the chain for statistics and analysis"),(0,o.kt)("li",{parentName:"ul"},"Basic command line tool support for native interaction with the contract, mainly used to test the security of the contract"),(0,o.kt)("li",{parentName:"ul"},"SDK development examples for ERC20 contract support")),(0,o.kt)("h2",{id:"design"},"Design"),(0,o.kt)("p",null,"PatractGo consists of the following packages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"patractgo/metadata")," contract metadata processing, and metadata-based contract processing"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"patractgo/rpc/native")," re-encapsulation of the contract module interface to provide the contract-related interaction based on chain RPC"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"patractgo/rpc")," implement the interaction with the contract based on metadata"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"patractgo/rest")," implements an http service based on metadata to interact with the contract"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"patractgo/observer")," Monitoring and Scanning support for contract status on the chain"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"patractgo/contracts/erc20")," supports ERC20 contracts and examples"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"patractgo/tools")," some tools for contracts develop")),(0,o.kt)("p",null,"Currently, we haven't designed the module which could ",(0,o.kt)("strong",{parentName:"p"},"auto-gen code")," for a contract based on a metadata, thus we provide\n",(0,o.kt)("inlineCode",{parentName:"p"},"patractgo/contracts/erc20")," as an example to show how to warp a contract as a go source file."),(0,o.kt)("p",null,"This ",(0,o.kt)("strong",{parentName:"p"},"auto contract code generator")," feature would be developed with ",(0,o.kt)("inlineCode",{parentName:"p"},"java-patract")," repo later (in next version), ",(0,o.kt)("strong",{parentName:"p"},"for their have same logic to generate the code for contracts"),"."))}d.isMDXComponent=!0}}]);