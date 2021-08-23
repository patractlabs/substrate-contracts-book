"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[8715],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,k=m["".concat(s,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(k,c(c({ref:t},p),{},{components:r})):n.createElement(k,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5984:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],i={},s="Ask-cli",l={unversionedId:"ask/ask-cli",id:"ask/ask-cli",isDocsHomePage:!1,title:"Ask-cli",description:"Currently only a simple cli is provided to compile contracts. Ask! provides the ask command to compile the Ask\uff01 contract.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/ask/ask-cli.md",sourceDirName:"ask",slug:"/ask/ask-cli",permalink:"/substrate-contracts-book/en/ask/ask-cli",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/ask/ask-cli.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Storage",permalink:"/substrate-contracts-book/en/ask/storage-data-structure"},next:{title:"Ask! and ink! Comparison of characteristics",permalink:"/substrate-contracts-book/en/ask/ask-vs-ink"}},p=[],u={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ask-cli"},"Ask-cli"),(0,a.kt)("p",null,"Currently only a simple cli is provided to compile contracts. Ask! provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"ask")," command to compile the Ask\uff01 contract."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx ask path/to/as-file\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note")," You need to use ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"npx")," to execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"ask")," command to prevent repetitive errors of AssemblyScript dependency."))}m.isMDXComponent=!0}}]);