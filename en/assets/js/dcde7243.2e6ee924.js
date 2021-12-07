"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[5234],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),p=a,b=m["".concat(l,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6357:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={},l="Environment Variables",s={unversionedId:"ask/guides/global",id:"ask/guides/global",isDocsHomePage:!1,title:"Environment Variables",description:"Environment Variables are variables globally available in @contract class",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/ask/guides/global.md",sourceDirName:"ask/guides",slug:"/ask/guides/global",permalink:"/substrate-contracts-book/en/ask/guides/global",editUrl:"https://github.com/patractlabs/substrate-contracts-book/edit/master/docs/ask/guides/global.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Ask! vs ink!",permalink:"/substrate-contracts-book/en/ask/guides/ask-ink"},next:{title:"ask-cli",permalink:"/substrate-contracts-book/en/ask/guides/ask-cli"}},u=[{value:"block",id:"block",children:[{value:"<code>block.timestamp (u64)</code>",id:"blocktimestamp-u64",children:[]},{value:"<code>block.number (u32)</code>",id:"blocknumber-u32",children:[]}]},{value:"msg",id:"msg",children:[{value:"<code>msg.value (u128)</code>",id:"msgvalue-u128",children:[]},{value:"<code>msg.sender (AccountId)</code>",id:"msgsender-accountid",children:[]},{value:"<code>msg.sig (u8)</code>",id:"msgsig-u8",children:[]},{value:"<code>msg.data (u8)</code>",id:"msgdata-u8",children:[]}]}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"environment-variables"},"Environment Variables"),(0,o.kt)("p",null,"Environment Variables are variables globally available in ",(0,o.kt)("inlineCode",{parentName:"p"},"@contract")," class\nIt's advised to use those variables under ",(0,o.kt)("inlineCode",{parentName:"p"},"@contructor")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@message")," methods"),(0,o.kt)("h2",{id:"block"},"block"),(0,o.kt)("h3",{id:"blocktimestamp-u64"},(0,o.kt)("inlineCode",{parentName:"h3"},"block.timestamp (u64)")),(0,o.kt)("p",null,"current block timestamp as seconds since unix epoch"),(0,o.kt)("h3",{id:"blocknumber-u32"},(0,o.kt)("inlineCode",{parentName:"h3"},"block.number (u32)")),(0,o.kt)("p",null,"current block number"),(0,o.kt)("h2",{id:"msg"},"msg"),(0,o.kt)("h3",{id:"msgvalue-u128"},(0,o.kt)("inlineCode",{parentName:"h3"},"msg.value (u128)")),(0,o.kt)("p",null,"seal_value_transferred"),(0,o.kt)("h3",{id:"msgsender-accountid"},(0,o.kt)("inlineCode",{parentName:"h3"},"msg.sender (AccountId)")),(0,o.kt)("p",null,"sender of the message (current call)"),(0,o.kt)("h3",{id:"msgsig-u8"},(0,o.kt)("inlineCode",{parentName:"h3"},"msg.sig (u8)")),(0,o.kt)("p",null," first four bytes of the calldata (i.e. function identifier)"),(0,o.kt)("h3",{id:"msgdata-u8"},(0,o.kt)("inlineCode",{parentName:"h3"},"msg.data (u8)")),(0,o.kt)("p",null," complete calldata"))}m.isMDXComponent=!0}}]);