"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[4875],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var i=n.createContext({}),u=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},s=function(t){var e=u(t.components);return n.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),f=u(r),m=o,b=f["".concat(i,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(b,c(c({ref:e},s),{},{components:r})):n.createElement(b,c({ref:e},s))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,c=new Array(a);c[0]=f;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:o,c[1]=l;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6942:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],l={},i="pallet-contracts \u5408\u7ea6\u6a21\u5757",u={unversionedId:"pallet-contracts/introduction",id:"pallet-contracts/introduction",isDocsHomePage:!1,title:"pallet-contracts \u5408\u7ea6\u6a21\u5757",description:"pallet-contracts\u5408\u7ea6\u6a21\u5757, \u4e00\u822c\u79f0\u547c\u4e3a\u201cContracts Pallet\u201d \u6216\u8005 \u201cFRAME Contracts pallet\u201d\uff0c\u53c8\u6216\u8005\u79f0\u547c\u4e3a\u201cSubstrate Smart Contracts\u201d\uff0c\u662fparity\u5b98\u65b9\u7814\u53d1\u7684Wasm\u5408\u7ea6\u6a21\u5757\u3002",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/pallet-contracts/introduction.md",sourceDirName:"pallet-contracts",slug:"/pallet-contracts/introduction",permalink:"/substrate-contracts-book/en/pallet-contracts/introduction",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/pallet-contracts/introduction.md",version:"current",frontMatter:{}},s=[],p={toc:s};function f(t){var e=t.components,r=(0,o.Z)(t,c);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pallet-contracts-\u5408\u7ea6\u6a21\u5757"},"pallet-contracts \u5408\u7ea6\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pallet-contracts"),"\u5408\u7ea6\u6a21\u5757, \u4e00\u822c\u79f0\u547c\u4e3a",(0,a.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/smart-contracts/contracts-pallet"},"\u201cContracts Pallet\u201d")," \u6216\u8005 \u201cFRAME Contracts pallet\u201d\uff0c\u53c8\u6216\u8005\u79f0\u547c\u4e3a\u201cSubstrate Smart Contracts\u201d\uff0c\u662fparity\u5b98\u65b9\u7814\u53d1\u7684Wasm\u5408\u7ea6\u6a21\u5757\u3002"),(0,a.kt)("p",null,"\u4f9d\u636eSubstrate knowledgebase\u7684\u4ecb\u7ecd\uff0cContracts Pallet\u5177\u5907\u5982\u4e0b\u7279\u6027\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Are inherently safer to the network."),(0,a.kt)("li",{parentName:"ul"},"Have built in economic incentives against abuse."),(0,a.kt)("li",{parentName:"ul"},"Have computational overhead to support graceful failures in logic."),(0,a.kt)("li",{parentName:"ul"},"Have a lower bar to entry for development."),(0,a.kt)("li",{parentName:"ul"},"Enable fast pace community interaction through a playground to write new logic.")))}f.isMDXComponent=!0}}]);