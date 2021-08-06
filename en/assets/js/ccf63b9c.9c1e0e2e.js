"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[7204],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:e},p),{},{components:r})):n.createElement(f,i({ref:e},p))}));function d(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3916:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={},c="Metis",l={unversionedId:"metis/introduction",id:"metis/introduction",isDocsHomePage:!1,title:"Metis",description:"Metis is the contract standard implementation and example case library led by Patract. In this warehouse, contract language frameworks such as ink!, Ask! that can run on pallet-contracts will be provided with the implementation of corresponding contract standards and common cases.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/metis/introduction.md",sourceDirName:"metis",slug:"/metis/introduction",permalink:"/substrate-contracts-book/en/metis/introduction",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/metis/introduction.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Report for  Himalia v0.1 & v0.2",permalink:"/substrate-contracts-book/en/himalia/reports/v0.1Report"},next:{title:"Report for Metis proposals",permalink:"/substrate-contracts-book/en/metis/reports/reports"}},p=[{value:"GitHub Repo Address",id:"github-repo-address",children:[]},{value:"Documents",id:"documents",children:[]},{value:"Report for Metis proposals",id:"report-for-metis-proposals",children:[]}],u={toc:p};function m(t){var e=t.components,r=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"metis"},"Metis"),(0,a.kt)("p",null,"Metis is the contract standard implementation and example case library led by Patract. In this warehouse, contract language frameworks such as ink!, Ask! that can run on ",(0,a.kt)("inlineCode",{parentName:"p"},"pallet-contracts")," will be provided with the implementation of corresponding contract standards and common cases."),(0,a.kt)("p",null,"Metis is similar to OpenZepplin-contracts in the Ethereum ecosystem, providing contract developers with reusable wheels without having to write contract code from scratch. Developers who are new to Polkadot's ecological trial contract development can quickly build common applications with the help of the code in this warehouse after learning simple basic knowledge."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Since the current ink! contract is not yet stable and the Ask! contract is still under development, neither platform has yet to make standards. Therefore, the current implementations provided in Metis are some mimic implementations that imitate the EIP-related standards in Solidity.")),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("h2",{id:"github-repo-address"},"GitHub Repo Address"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/metis"},"https://github.com/patractlabs/metis")),(0,a.kt)("h2",{id:"documents"},"Documents"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"All Metis documents are migrated to:")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://patractlabs.github.io/metis/overview"},"https://patractlabs.github.io/metis/overview")),(0,a.kt)("h2",{id:"report-for-metis-proposals"},"Report for Metis proposals"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/substrate-contracts-book/en/metis/reports/M1Report"},"M1Report"))))}m.isMDXComponent=!0}}]);