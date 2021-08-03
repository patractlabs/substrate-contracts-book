"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9421],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(n),h=r,k=m["".concat(c,".").concat(h)]||m[h]||u[h]||o;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5564:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],p={},c="zkMega",l={unversionedId:"zkmega/introduction",id:"zkmega/introduction",isDocsHomePage:!1,title:"zkMega",description:"zkMega is a zero-knowledge proof tool set building for the Polkadot ecology.",source:"@site/docs/zkmega/introduction.md",sourceDirName:"zkmega",slug:"/zkmega/introduction",permalink:"/zkmega/introduction",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/zkmega/introduction.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Europa v0.3\u62a5\u544a",permalink:"/europa/reports/v0.3Report"},next:{title:"tutorial",permalink:"/zkmega/tutorial"}},s=[{value:"ZK Rollup Introduction",id:"zk-rollup-introduction",children:[]},{value:"What zkMega does",id:"what-zkmega-does",children:[]},{value:"LICENSE",id:"license",children:[]},{value:"zkMega\u8bae\u4f1a\u63d0\u6848\u62a5\u544a",id:"zkmega\u8bae\u4f1a\u63d0\u6848\u62a5\u544a",children:[]}],u={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"zkmega"},"zkMega"),(0,o.kt)("p",null,"zkMega is a zero-knowledge proof tool set building for the Polkadot ecology. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Polkadot Treasury report for v0.1: ",(0,o.kt)("a",{parentName:"li",href:"https://polkadot.polkassembly.io/post/221"},"https://polkadot.polkassembly.io/post/221"),". ")),(0,o.kt)("h2",{id:"zk-rollup-introduction"},"ZK Rollup Introduction"),(0,o.kt)("p",null,"Compared with the privacy function, the performance improvement brought by Rollup is the\nearly application direction of zero-knowledge proof. At present, the Layer 2 expansion\nplan of the blockchain is to transfer a considerable part of the on-chain workload to\noff-chain to complete, and the most watched one is ZK Rollup. The essence of ZK Rollup\nis to compress the application on-chain state and store it in a Merkle tree, and move\nthe state transition funtions to off-chain. At the same time, the correctness of the\noff-chain state transition process is guaranteed through the proof of zkSNARK. Compared\nwith the high cost of directly processing state changes on the chain, the ZK Proof's\non-chain smart contract verification is extremely cost low. At the same time, the\ncompressed information will also be submitted to the chain together with the proof,\nwhich ensures data availability and obtains the same level of security as Layer 1."),(0,o.kt)("p",null,"The Ethereum Layer 2 protocols related to ZK Rollup are: ",(0,o.kt)("a",{parentName:"p",href:"https://zksync.io/"},"zkSync"),", ",(0,o.kt)("a",{parentName:"p",href:"https://aztec.network/"},"aztec"),",\netc. Their contract verification modules share a part of the elliptic curve's basic algorithms.\nIn 2017, Ethereum integrated three basic cryptographic calculation units of the alt\nbn128 curve in the form of pre-compiled contracts, which are ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-196.md"},"EIP196"),"\u2019s ADD and Scalar_MUL\nalgorithms, and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-197.md"},"EIP197"),"\u2019s Pairing algorithm. On top of this, due to the lack of rapid\nupgrade capabilities of Ethereum, the community can only encapsulate some  tool libraries\nthrough costly Solidity contracts. On top of these basic contract  libraries, many DApps can combine\nZK Rollup technology to achieve some innovations, such as ",(0,o.kt)("a",{parentName:"p",href:"https://loopring.org/"},"loopring"),", ",(0,o.kt)("a",{parentName:"p",href:"https://gitcoin.co/"},"gitcoin"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"https://uniswap.org/"},"uniswap")," etc. However, in the past 3 years, ZK technology has further developed,\nsuch as the more practical ",(0,o.kt)("a",{parentName:"p",href:"https://electriccoin.co/blog/new-snark-curve/"},"BLS curve"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2019/953/20190827:165656"},"PLONK algorithm")," etc.\nEthereum has not yet supported it."),(0,o.kt)("h2",{id:"what-zkmega-does"},"What zkMega does"),(0,o.kt)("p",null,"zkMega \u76ee\u7684\u662f\u4e3a\u4e86\u7ed9Wasm\u5408\u7ea6\u751f\u6001",(0,o.kt)("strong",{parentName:"p"},"\u5f15\u5165\u96f6\u77e5\u8bc6\u539f\u8bed"),"\uff0c\u7c7b\u4f3c\u4e8e Ethereum\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u5728\u5408\u7ea6\u751f\u6001\u4e2d\u57fa\u4e8e\u96f6\u77e5\u8bc6\u539f\u8bed\u6784\u5efa\u51fa\u96f6\u77e5\u8bc6\u7684dapp\u53ca\u670d\u52a1\u4e8e\u90e8\u5206Layer2\u7684\u9700\u6c42\u3002\u56e0\u6b64 zkMega \u5728\u94fe\u7684\u89d2\u5ea6\u4e0a\u5b9e\u73b0\u7684\u529f\u80fd\u4e3a\u51e0\u4e2a\u57fa\u672c\u7684 \u96f6\u77e5\u8bc6\u539f\u8bed \u7684\u8c03\u7528\u63a5\u53e3\u3002\u800c\u540e\u7eed\u5c06\u4f1a\u7ee7\u7eed\u63d0\u4f9b\u94fe\u4e0b\u5f00\u53d1\u96f6\u77e5\u8bc6\u5408\u7ea6\u529f\u80fd\u7684\u5de5\u5177\u5305\u7ec4\u4ef6\u7b49\u3002"),(0,o.kt)("p",null,"zkMega \u9996\u5148\u4f1a\u5b9e\u73b0\u94fe\u4e0a\u7684\u96f6\u77e5\u8bc6\u7684\u63a5\u53e3\u8c03\u7528\u529f\u80fd\uff0c\u5e76\u63d0\u4f9b\u5408\u7ea6\u793a\u4f8b\u3002\u96f6\u77e5\u8bc6\u7684\u63a5\u53e3\u8c03\u7528\u529f\u80fd\u5206\u4e3a Runtime \u7684\u5b9e\u73b0\u4ee5\u53ca ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet-contracts"),"\u5408\u7ea6\u63a5\u53e3\u7684\u5b9e\u73b0\u3002\u800c ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet-contracts"),"\u7684\u5b9e\u73b0\u672c\u8d28\u4e0a\u662f\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"ChainExtentions"),"\u8c03\u7528\u4e86Runtime\u7684\u5b9e\u73b0\u3002"),(0,o.kt)("p",null,"\u800c zkMega \u5b9e\u73b0\u96f6\u77e5\u8bc6\u7684\u65b9\u5f0f\u662f\u4f7f\u7528\u4e86 arkwork \u7684\u96f6\u77e5\u8bc6\u5b9e\u73b0\u5e93\uff0c\u8be5\u5e93\u53ef\u4ee5\u7f16\u8bd1\u6210 Wasm \u88ab\u4f7f\u7528\u3002\u56e0\u6b64 zkMega \u505a\u4e86\u5bf9\u4e8e Native \u6267\u884c\u96f6\u77e5\u8bc6\u8c03\u7528\u4e0e Wasm \u4e2d\u6267\u884c\u96f6\u77e5\u8bc6\u8c03\u7528\u7684\u6027\u80fd\u5bf9\u6bd4\uff08benchmark\uff09\u3002\u57fa\u4e8eSubstrate\u7684\u94fe\u5f15\u5165 zkMega \u65f6\uff0c\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u662f\u5426\u613f\u610f\u5bfc\u51fa zkMega \u4f7f\u7528\u7684\u96f6\u77e5\u8bc6\u7684 host_function\uff0c\u6765\u4ee5 Wasm \u6216\u662f Native \u7684\u5f62\u5f0f\u8fd0\u884c\u96f6\u77e5\u8bc6\u7684\u8ba1\u7b97\u8fc7\u7a0b\u3002\u8be6\u60c5\u8bf7\u53c2\u7167\u6587\u6863 ",(0,o.kt)("a",{parentName:"p",href:"/zkmega/benchmark"},"benchmark"),"\u3002"),(0,o.kt)("p",null,"\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"pallet-contracts"),"\u7684\u6a21\u5757\u5f15\u5165\u4e86 zkMega \u7684\u94fe\u4e2d\uff0c\u90e8\u7f72\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"pallet-contracts"),"\u4e2d\u7684\u5408\u7ea6\u6a21\u5757\u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"ChainExtentions"),"\u5728\u5408\u7ea6\u4e2d\u8c03\u7528\u94fe\u91cc zkMega \u63d0\u4f9b\u7684\u96f6\u77e5\u8bc6\u7684\u529f\u80fd\u3002\u7531\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"ChainExtentions"),"\u662f\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"func_id"),"\u6765\u533a\u5206\u8c03\u7528\u7684\u65b9\u6cd5\uff0c\u56e0\u6b64 Patract \u5e0c\u671b\u901a\u8fc7 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/pips"},"Patract/pallet-contracts/Polkadot Improvement Proposals (PIPs)")," \u6765\u534f\u5b9a func_id \u4e0e\u53c2\u6570\u3002\u56e0\u6b64 Patract \u901a\u8fc7 Pip-101 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/PIPs/blob/main/PIPs/pip-101.md"},"Function ids for Patract Labs zkMega")," \u6765\u7ea6\u5b9a zkMega \u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"ChainExtentions")," \u90e8\u5206\u4f7f\u7528\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"func_id"),"\u3002"),(0,o.kt)("p",null,"\u53e6\u4e00\u65b9\u9762 zkMega \u4e3a\u4e86\u4e30\u5bcc\u5f00\u53d1\u4eba\u5458\u7684\u57fa\u7840\u5e93\uff0c\u4eff\u7167 Ethereum \u751f\u6001\u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"libsnark")," \u5e93\uff0c\u63d0\u4f9b\u4e86\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"MIMC"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Merkle Tree")," \u7b49\u5b9e\u7528\u516c\u5171\u51fd\u6570\u3002\u8fd9\u4e9b\u5e93\u53ef\u4ee5\u76f4\u63a5\u5728ink!\u4e2d\u88ab\u8c03\u7528\u3002\u8be6\u60c5\u53ef\u4ee5\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"/zkmega/example"},"example"),"\u3002"),(0,o.kt)("h2",{id:"license"},"LICENSE"),(0,o.kt)("p",null,"Apache-2.0"),(0,o.kt)("h2",{id:"zkmega\u8bae\u4f1a\u63d0\u6848\u62a5\u544a"},"zkMega\u8bae\u4f1a\u63d0\u6848\u62a5\u544a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zkmega/reports/v0.1Report"},"v0.1Report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zkmega/reports/v0.2Report"},"v0.2Report"))))}m.isMDXComponent=!0}}]);