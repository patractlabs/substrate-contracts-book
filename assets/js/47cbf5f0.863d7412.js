"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[7419],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),u=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),m=u(r),f=a,b=m["".concat(l,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(b,i(i({ref:e},p),{},{components:r})):n.createElement(b,i({ref:e},p))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6446:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={},l="Himalia\u8bae\u4f1a\u63d0\u6848\u62a5\u544a",u={unversionedId:"himalia/reports",id:"himalia/reports",isDocsHomePage:!1,title:"Himalia\u8bae\u4f1a\u63d0\u6848\u62a5\u544a",description:"\u63d0\u6848\u62a5\u544a\u662fPatract\u5411Polkdaot/Kusama\u8d22\u653f\u63d0\u4ea4\u7533\u8bf7\u540e\uff0c\u5728\u7ed3\u675f\u6c47\u62a5\u9636\u6bb5\u63d0\u4ea4\u8bc4\u5ba1\u7684\u6587\u6863\u3002\u6bcf\u4e00\u671f\u6587\u6863\u6db5\u76d6\u4e86\u672c\u6b21\u63d0\u6848\u4e2d\u7684\u8bbe\u8ba1\u601d\u8def\uff0c\u5b8c\u6210\u7684\u4e3b\u8981\u5185\u5bb9\u3002",source:"@site/docs/himalia/reports.md",sourceDirName:"himalia",slug:"/himalia/reports",permalink:"/substrate-contracts-book/himalia/reports",editUrl:"https://github.com/patractlabs/substrate-contracts-book/edit/master/docs/himalia/reports.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"py-patract",permalink:"/substrate-contracts-book/himalia/py-patract"},next:{title:"Patract Hub's treasury report for Himalia v0.1 & v0.2(Contract SDKs)",permalink:"/substrate-contracts-book/himalia/reports/v0.1Report"}},p=[],s={toc:p};function m(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"himalia\u8bae\u4f1a\u63d0\u6848\u62a5\u544a"},"Himalia\u8bae\u4f1a\u63d0\u6848\u62a5\u544a"),(0,o.kt)("p",null,"\u63d0\u6848\u62a5\u544a\u662fPatract\u5411Polkdaot/Kusama\u8d22\u653f\u63d0\u4ea4\u7533\u8bf7\u540e\uff0c\u5728\u7ed3\u675f\u6c47\u62a5\u9636\u6bb5\u63d0\u4ea4\u8bc4\u5ba1\u7684\u6587\u6863\u3002\u6bcf\u4e00\u671f\u6587\u6863\u6db5\u76d6\u4e86\u672c\u6b21\u63d0\u6848\u4e2d\u7684\u8bbe\u8ba1\u601d\u8def\uff0c\u5b8c\u6210\u7684\u4e3b\u8981\u5185\u5bb9\u3002"),(0,o.kt)("p",null,"\u62a5\u544a\u4ee3\u8868\u7740\u672c\u6b21Patract\u56e2\u961f\u7684\u5de5\u4f5c\u6210\u679c\uff0c\u540c\u65f6\u4e5f\u662f\u5f88\u597d\u7684\u53c2\u8003\u6587\u6863\u3002"),(0,o.kt)("p",null,"\u5f53\u524dHimalia\u7684\u63d0\u6848\u62a5\u544a\u6709\u5982\u4e0b\u5185\u5bb9\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/substrate-contracts-book/himalia/reports/v0.1Report"},"v0.1&v0.2Report"))))}m.isMDXComponent=!0}}]);