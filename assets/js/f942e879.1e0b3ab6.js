"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[6862],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return r?a.createElement(f,u(u({ref:t},l),{},{components:r})):a.createElement(f,u({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,u=new Array(o);u[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,u[1]=i;for(var c=2;c<o;c++)u[c]=r[c];return a.createElement.apply(null,u)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8415:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),u=["components"],i={},p=void 0,c={unversionedId:"europa/introduction",id:"europa/introduction",isDocsHomePage:!1,title:"introduction",description:"\u80cc\u666f\u4fe1\u606f",source:"@site/docs/europa/introduction.md",sourceDirName:"europa",slug:"/europa/introduction",permalink:"/substrate-contracts-book/europa/introduction",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/europa/introduction.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Redspot v0.4 \u62a5\u544a",permalink:"/substrate-contracts-book/redspot/reports/v0.4Report"},next:{title:"Europa\u6559\u7a0b",permalink:"/substrate-contracts-book/europa/tutorial"}},l=[{value:"\u80cc\u666f\u4fe1\u606f",id:"\u80cc\u666f\u4fe1\u606f",children:[]},{value:"\u4f5c\u4e3aSubstrate runtime\u7684\u6846\u67b6",id:"\u4f5c\u4e3asubstrate-runtime\u7684\u6846\u67b6",children:[]},{value:"\u4f5c\u4e3a<code>Frame Contracts pallet</code>\u7684\u6c99\u76d2\u73af\u5883",id:"\u4f5c\u4e3aframe-contracts-pallet\u7684\u6c99\u76d2\u73af\u5883",children:[]},{value:"\u66f4\u591a\u4fe1\u606f",id:"\u66f4\u591a\u4fe1\u606f",children:[]},{value:"Europa \u8bae\u4f1a\u63d0\u6848\u62a5\u544a",id:"europa-\u8bae\u4f1a\u63d0\u6848\u62a5\u544a",children:[]}],s={toc:l};function m(e){var t=e.components,r=(0,n.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u80cc\u666f\u4fe1\u606f"},"\u80cc\u666f\u4fe1\u606f"),(0,o.kt)("p",null,"Europa\u662f\u4e00\u4e2a\u8fd0\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"FRAME Contracts pallet"),"\u5e76\u6a21\u62df\u8282\u70b9\u7684\u6c99\u76d2\u73af\u5883\uff0c\u540c\u65f6\u4e5f\u662f\u4e00\u4e2a\u8fd0\u884cSubstrate runtime\u7684\u6846\u67b6\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5c06Europa\u4f5c\u4e3a\u5408\u7ea6\u8c03\u8bd5\u7684\u6c99\u76d2\u65f6\uff0cEuropa\u4fee\u6539\u4e86",(0,o.kt)("inlineCode",{parentName:"li"},"FRAME Contracts pallet"),"\u6a21\u5757\u4ee5\u8ddf\u8e2a\u5408\u7ea6\u6267\u884c\u8fc7\u7a0b\uff0c\u80fd\u591f\u7ed9\u60a8\u63d0\u4f9b\u4e30\u5bcc\u7684\u5408\u7ea6\u6267\u884c\u4e2d\u7684\u4fe1\u606f\uff0c\u8ba9\u5408\u7ea6\u7684\u6267\u884c\u8fc7\u7a0b\u4e0d\u518d\u662f\u4e00\u4e2a\u9ed1\u76d2\uff0c\u5e2e\u52a9\u5408\u7ea6\u60a8\u8c03\u8bd5Wasm\u5408\u7ea6\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528Europa\u4f5c\u4e3aSubstrate\u7684\u6846\u67b6\u65f6\uff0c\u60a8\u53ef\u4ee5\u5728\u4e0d\u53d7Wasm\u7f16\u8bd1\u95ee\u9898\u7684\u5e72\u6270\u4e0b\u505aSubstrate Runtime\u5f00\u53d1\uff08\u591a\u7528\u4e8e\u5b9e\u9a8c\u6027\u529f\u80fd\uff09\u3002")),(0,o.kt)("h2",{id:"\u4f5c\u4e3asubstrate-runtime\u7684\u6846\u67b6"},"\u4f5c\u4e3aSubstrate runtime\u7684\u6846\u67b6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Europa\u79fb\u9664\u4e86\u4e00\u4e9b\u4e0d\u5fc5\u8981\u7684\u529f\u80fd\u6a21\u5757\uff0c\u4f8b\u5982Wasm executor\u3001p2p\u7b49\uff0c\u4ec5\u4fdd\u7559\u4e86native\u7684\u6267\u884c\u73af\u5883\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4e86",(0,o.kt)("inlineCode",{parentName:"li"},"manual_seal"),"\u7684\u51fa\u5757\u65b9\u5f0f\uff0c\u5f53\u6536\u5230\u65b0\u4ea4\u6613\u65f6\u5c31\u89e6\u53d1\u51fa\u5757\uff0c\u4f7f\u60a8\u4e0d\u5fc5\u53d7\u5171\u8bc6\u51fa\u5757\u7684\u5f71\u54cd\uff0c\u80fd\u66f4\u4e13\u6ce8\u4e8e\u5408\u7ea6\u7684\u5f00\u53d1\u8c03\u8bd5\u4e0e\u65e5\u5fd7\u5206\u6790\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u4e86",(0,o.kt)("inlineCode",{parentName:"li"},"state-kv"),"\u6570\u636e\u5e93\uff0c\u8bb0\u5f55\u4e86\u6bcf\u4e2a\u533a\u5757\u7684\u72b6\u6001\u53d8\u66f4\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# print the modified state kvs for block 1\n$ ./target/debug/europa state-kv 1 -d europa_database\nNov 12 15:53:27.699  INFO modified state for block:0x6c119a8f7de42e330aca8b9d3587937aacbbc203cc21650b60644c2f2d33e7fb    \nNov 12 15:53:27.699  INFO       key:26aa394eea5630e07c48ae0c9558cef702a5c1b19ab7a04f536c519aca4983ac|value:[DELETED]    \nNov 12 15:53:27.699  INFO       key:26aa394eea5630e07c48ae0c9558cef70a98fdbe9ce6c55837576c60c7af3850|value:05000000\n# ... \n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Europa\u9664\u4e86\u63d0\u4f9bSubstrate\u6846\u67b6\u4e2d\u7684\u57fa\u7840RPC\u4e4b\u5916\uff0c\u8fd8\u6709\u4e00\u4e9b\u7279\u6b8a\u7684RPC\u3002\n| \u53c2\u6570                                                         | \u8bf4\u660e                                                   |\n|:----|:----|\n|",(0,o.kt)("inlineCode",{parentName:"p"},"europa_forwardToHeight (params: [height: NumberOf<B>])"),"|\u5c06\u533a\u5757\u5feb\u8fdb\u5230\u6307\u5b9a\u9ad8\u5ea6\uff0c\u53ef\u5e2e\u52a9\u6d4b\u8bd5\u8ddf\u533a\u5757\u9ad8\u5ea6\u76f8\u5173\u7684\u529f\u80fd\u3002|\n|",(0,o.kt)("inlineCode",{parentName:"p"},"europa_backwardToHeight (params: [height: NumberOf<B>])"),"|\u5c06\u533a\u5757\u56de\u9000\u5230\u6307\u5b9a\u9ad8\u5ea6\uff0c\u4e3b\u8981\u7528\u6765\u6062\u590d\u72b6\u6001\u3002|\n|",(0,o.kt)("inlineCode",{parentName:"p"},"europa_modifiedStateKvs (params: [number_or_hash: NumberOrHash<B>])"),"|\u63d0\u4f9b\u533a\u5757\u9ad8\u5ea6\u6216\u533a\u5757\u54c8\u5e0c\uff0c\u67e5\u8be2\u5bf9\u5e94\u533a\u5757\u4e2d\u7684\u72b6\u6001\u53d8\u66f4\u3002|")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Europa\u9664\u4e86\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"-d/--base-path"),"\u7684\u53ef\u9009\u9879\u547d\u4ee4\u5212\u5206\u4e0d\u540c\u7684\u5de5\u4f5c\u76ee\u5f55\uff0c\u8fd8\u80fd\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"-w/--workspace"),"\u5728\u5de5\u4f5c\u76ee\u5f55\u4e0b\u58f0\u660e\u4e0d\u540c\u7684\u5de5\u4f5c\u7a7a\u95f4\u3002"))),(0,o.kt)("h2",{id:"\u4f5c\u4e3aframe-contracts-pallet\u7684\u6c99\u76d2\u73af\u5883"},"\u4f5c\u4e3a",(0,o.kt)("inlineCode",{parentName:"h2"},"Frame Contracts pallet"),"\u7684\u6c99\u76d2\u73af\u5883"),(0,o.kt)("p",null,"\u5f00\u53d1\u5408\u7ea6\u65f6\uff0cEuropa\u4e3a\u60a8\u63d0\u4f9b\u4e86\u66f4\u8be6\u7ec6\u7684\u65e5\u5fd7\u6253\u5370\uff0c\u5305\u62eccontracts\u6267\u884c\u65e5\u5fd7\u548cWasm\u6267\u884c\u6808\u3002\u540c\u65f6\u8fd9\u4e2a\u6c99\u76d2\u73af\u5883\u4e5f\u5177\u5907\u4e0a\u8ff0Europa\u6846\u67b6\u7684\u529f\u80fd\uff0c\u4f8b\u5982\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"europa_forwardToHeight"),"\u7b49RPC\u6765\u63a7\u5236\u5408\u7ea6\u7684\u6267\u884c\u60c5\u51b5\u3002"),(0,o.kt)("p",null,"\u5408\u7ea6\u9519\u8bef\u53ef\u80fd\u53d1\u751f\u5728ink!\u5c42\u3001\u5408\u7ea6\u5185\u90e8\u4e1a\u52a1\u903b\u8f91\u3001pallet_contracts\u5c42\u3002\u6709\u4e86\u8be6\u7ec6\u7684\u65e5\u5fd7\u4fe1\u606f\uff0c\u60a8\u5728\u8c03\u8bd5\u65f6\u80fd\u591f\u5feb\u901f\u5b9a\u4f4d\u95ee\u9898\u3002\u7279\u522b\u662f\u5728\u5408\u7ea6\u95f4\u4e92\u76f8\u8c03\u7528\u7684\u60c5\u51b5\u4e0b\uff0cEuropa\u80fd\u591f\u5927\u5e45\u5ea6\u63d0\u5347\u5f00\u53d1\u4f53\u9a8c\u3002"),(0,o.kt)("p",null,"\u76ee\u524d\uff0c\u5728Europa\u4e0a\u6709\u4e24\u4e2a\u81ea\u5b9a\u4e49\u7684ChainExtension\u53ef\u4f9b\u4f7f\u7528\uff0c\u5206\u522b\u662fContract logger\u548cZKP feature\u3002"),(0,o.kt)("h2",{id:"\u66f4\u591a\u4fe1\u606f"},"\u66f4\u591a\u4fe1\u606f"),(0,o.kt)("p",null,"native(native exectuion evnironment, native runtime)\u6307\u5c06Substrate Runtime\u7f16\u8bd1\u4e3a\u672c\u5730\u673a\u5668\u7801\u8fdb\u884c\u6267\u884c\u7684\u5f62\u5f0f\u3002"),(0,o.kt)("p",null,"\u672c\u4e66\u4e3b\u8981\u5173\u6ce8\u70b9\u662fSubstrate\u7684Wasm\u5408\u7ea6\uff0c\u6240\u4ee5\u540e\u9762\u7ae0\u8282\u7684Europa\u76f8\u5173\u7684\u4ecb\u7ecd\u5747\u56f4\u7ed5\u4e0e\u4f7f\u7528Europa\u5408\u7ea6\u8c03\u8bd5\u76f8\u5173\u3002"),(0,o.kt)("h2",{id:"europa-\u8bae\u4f1a\u63d0\u6848\u62a5\u544a"},"Europa \u8bae\u4f1a\u63d0\u6848\u62a5\u544a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/substrate-contracts-book/europa/reports/v0.1Report"},"v0.1Report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/substrate-contracts-book/europa/reports/v0.2Report"},"v0.2Report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/substrate-contracts-book/europa/reports/v0.3Report"},"v0.3Report"))))}m.isMDXComponent=!0}}]);