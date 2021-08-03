"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6088],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7764:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={},p="Jupiter testnet",c={unversionedId:"jupiter/introduction",id:"jupiter/introduction",isDocsHomePage:!1,title:"Jupiter testnet",description:"Overview",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/jupiter/introduction.md",sourceDirName:"jupiter",slug:"/jupiter/introduction",permalink:"/en/jupiter/introduction",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/jupiter/introduction.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Report for Elara v0.2",permalink:"/en/elara/reports/v0.2Report"},next:{title:"quickstart",permalink:"/en/jupiter/quickstart"}},u=[{value:"Overview",id:"overview",children:[]},{value:"ChangeLog",id:"changelog",children:[]},{value:"Contract",id:"contract",children:[]}],s={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"jupiter-testnet"},"Jupiter testnet"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Jupiter is a ",(0,i.kt)("strong",{parentName:"p"},"contract test network")," that is maintained by Patract, contains Patract contract design specifications and is compatible with the latest pallet-contracts module. Jupiter has three types of nodes, namely:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jupiter-dev")," node suitable for ",(0,i.kt)("strong",{parentName:"li"},"local quick test"),"."),(0,i.kt)("li",{parentName:"ul"},"Independently run the ",(0,i.kt)("inlineCode",{parentName:"li"},"jupiter-prep")," ",(0,i.kt)("strong",{parentName:"li"},"independent testnet")," that provides the latest contract functions to the outside world."),(0,i.kt)("li",{parentName:"ul"},"Parachain of ",(0,i.kt)("inlineCode",{parentName:"li"},"jupiter")," contract running on ",(0,i.kt)("strong",{parentName:"li"},"relay-chain"),".")),(0,i.kt)("p",null,"The key configuration of those three block chain network are basically the same, such as contract weight, block limit size etc. The specific configuration need to check ",(0,i.kt)("a",{parentName:"p",href:"/en/jupiter/network"},"Jupiter network"),"."),(0,i.kt)("p",null,"The repository of Jupiter is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/jupiter"},"https://github.com/patractlabs/jupiter"),"."),(0,i.kt)("p",null,"After compile jupiter successfully, there are there executable file: ",(0,i.kt)("inlineCode",{parentName:"p"},"jupiter-dev"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"jupiter-prep"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"jupiter")," in target/release directory."),(0,i.kt)("p",null,"In the repository above, The Node implementation of those there network are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"directory ",(0,i.kt)("inlineCode",{parentName:"li"},"bin/node-dev"),": local develop mode, convenient for developer to test contract quickly"),(0,i.kt)("li",{parentName:"ul"},"directory ",(0,i.kt)("inlineCode",{parentName:"li"},"bin/node-prep"),": testnet mode\uff0cuse PoA authorities, support contract deploy, invoke"),(0,i.kt)("li",{parentName:"ul"},"directory ",(0,i.kt)("inlineCode",{parentName:"li"},"bin/node"),": parachain testnet mode\uff0cuse Aura authorities, support contract deploy, invoke")),(0,i.kt)("p",null,"And the Runtime implementation of those there network are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"directory ",(0,i.kt)("inlineCode",{parentName:"li"},"runtime/jupiter-dev")),(0,i.kt)("li",{parentName:"ul"},"directory ",(0,i.kt)("inlineCode",{parentName:"li"},"runtime/jupiter-prep")),(0,i.kt)("li",{parentName:"ul"},"directory ",(0,i.kt)("inlineCode",{parentName:"li"},"runtime/jupiter"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: for the third mode, as currently relaychain(such as Westend) don't support Sandbox HostFunction, we're running our own private Westend testnet. Once relaychain support this feature afterward, we'll switchover to official relaychain.")),(0,i.kt)("h2",{id:"changelog"},"ChangeLog"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1.0.0: Jupiter PoA network release, including jupiter-prep and jupiter-dev"),(0,i.kt)("li",{parentName:"ul"},"1.0.1: Setting Jupiter PoA ss58prefix to 26, from now on Jupiter will use 26 as address ss58prefix"),(0,i.kt)("li",{parentName:"ul"},"1.0.2: Support Zero-Knowledge\u3001randomness"),(0,i.kt)("li",{parentName:"ul"},"1.0.3: Add Parachain feature, and Jupiter PC1 network release")),(0,i.kt)("h2",{id:"contract"},"Contract"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Patract's FRAME contracts pallet (We will name it as pallet-patracts in future)")),(0,i.kt)("p",null,"Patract FRAME contracts pallet contains our ChainExtension to provide many particular features for contracts, and contains some compatible modifications."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ChainExtension",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Contract Logger support, refer to this project link ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/ink-log"},"ink-log")),(0,i.kt)("li",{parentName:"ul"},"Zero-Knowledge support, refer to this link ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/PIPs/blob/main/PIPs/pip-101.md"},"PIP-101")))),(0,i.kt)("li",{parentName:"ul"},"Patract modifications (pallet-patracts)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"// No features for now.")))),(0,i.kt)("p",null,'Thus we call "src pallet-contract" for the pallet-contract module which comes from substrate directly, and call "modified pallet-contracts" for the pallet-contract which comes from our forked substrate repo in vendor directory.'),(0,i.kt)("p",null,"Inside:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src pallet-contract"),": support Patract ",(0,i.kt)("inlineCode",{parentName:"li"},"ChainExtension")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"modified pallet-contract"),": support Patract ",(0,i.kt)("inlineCode",{parentName:"li"},"ChainExtension")," and Patract modifications")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note1\uff1aPatract intergration of contract module\uff0crefer to this project link ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/patracts"},"patracts"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note2\uff1aThe ChainExtension of Zero-Knowledge refer to this link ",(0,i.kt)("a",{parentName:"p",href:"https://docs.patract.io/zkmega/tutorial.html"},"zkmega"))))}d.isMDXComponent=!0}}]);