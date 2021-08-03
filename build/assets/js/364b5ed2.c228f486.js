"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[994],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||p;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<p;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8087:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var n=r(7462),o=r(3366),p=(r(7294),r(3905)),a=["components"],i={},s="\u63d2\u4ef6",c={unversionedId:"redspot/plugin",id:"redspot/plugin",isDocsHomePage:!1,title:"\u63d2\u4ef6",description:"\u80cc\u666f\u4fe1\u606f",source:"@site/docs/redspot/plugin.md",sourceDirName:"redspot",slug:"/redspot/plugin",permalink:"/redspot/plugin",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/redspot/plugin.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/redspot/q-and-a"},next:{title:"@redspot_decimals\u63d2\u4ef6",permalink:"/redspot/plugin/redspot-decimals"}},l=[{value:"\u80cc\u666f\u4fe1\u606f",id:"\u80cc\u666f\u4fe1\u606f",children:[]}],u={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,p.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"\u63d2\u4ef6"},"\u63d2\u4ef6"),(0,p.kt)("h2",{id:"\u80cc\u666f\u4fe1\u606f"},"\u80cc\u666f\u4fe1\u606f"),(0,p.kt)("p",null,"Redspot\u7684\u6838\u5fc3\u529f\u80fd\u5305\u62ecRedspot runtime environment\u3001\u7f16\u8bd1\u5408\u7ea6\u3001\u8fd0\u884c\u6d4b\u8bd5\u548c\u8fd0\u884c\u811a\u672c\u3002\u5176\u4ed6\u529f\u80fd\uff0c\u4f8b\u5982\u4e0e\u5408\u7ea6\u7684\u6d4b\u8bd5\u5957\u4ef6\u3001\u5408\u7ea6\u4ea4\u4e92\u3001\u8bbf\u95ee\u5408\u7ea6\u3001\u8bbe\u7f6e\u4e0d\u540c\u7684\u94fe\u7684\u914d\u7f6e\u7b49\uff0c\u90fd\u7531\u63d2\u4ef6\u63d0\u4f9b\uff0c\u60a8\u53ef\u4ee5\u6309\u9700\u9009\u62e9\u3002\u5f15\u5165\u4e00\u4e2a\u63d2\u4ef6\u7684\u65b9\u5f0f\u5f88\u7b80\u5355\uff0c\u5c06\u5b83\u4f5c\u4e3a\u4e00\u4e2anpm\u7684\u4f9d\u8d56\u6dfb\u52a0\uff0c\u7136\u540e\u5728",(0,p.kt)("inlineCode",{parentName:"p"},"redspot.config.ts"),"\u4e2d\u52a0\u5165\u5373\u53ef\u3002\u793a\u4f8b\u5982\u4e0b\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"import { RedspotUserConfig } from 'redspot/types';\nimport '@redspot/patract'; // \u5f15\u5165 @redspot/patract \u63d2\u4ef6\nimport '@redspot/chai'; // \u5f15\u5165 @redspot/chai \u63d2\u4ef6\nexport default {\n ...\n} as RedspotUserConfig;\n")),(0,p.kt)("p",null,"\u73b0\u5728\u63d0\u4f9b\u7684\u6709\u4ee5\u4e0b\u8fd9\u4e9b\u63d2\u4ef6\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://docs.patract.io/redspot/plugin/redspot-chai.html"},"@redspot/chai")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://docs.patract.io/redspot/plugin/redspot-decimals.html"},"@redspot/decimals")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://docs.patract.io/redspot/plugin/redspot-explorer.html"},"@redspot/explorer")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://docs.patract.io/redspot/plugin/redspot-gas-reporter.html"},"@redspot/gas-reporter")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://docs.patract.io/redspot/plugin/redspot-known-types.html"},"@redspot/known-types")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://docs.patract.io/redspot/plugin/redspot-patract.html"},"@redspot/patract"))))}d.isMDXComponent=!0}}]);