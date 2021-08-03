"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[8186],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=i(r),f=o,g=d["".concat(c,".").concat(f)]||d[f]||l[f]||p;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var i=2;i<p;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1708:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var n=r(7462),o=r(3366),p=(r(7294),r(3905)),a=["components"],s={},c="@redspot_gas-reporter \u63d2\u4ef6",i={unversionedId:"redspot/plugin/redspot-gas-reporter",id:"redspot/plugin/redspot-gas-reporter",isDocsHomePage:!1,title:"@redspot_gas-reporter \u63d2\u4ef6",description:"\u80cc\u666f\u4fe1\u606f",source:"@site/docs/redspot/plugin/redspot-gas-reporter.md",sourceDirName:"redspot/plugin",slug:"/redspot/plugin/redspot-gas-reporter",permalink:"/substrate-contracts-book/redspot/plugin/redspot-gas-reporter",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/redspot/plugin/redspot-gas-reporter.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"@redspot_chai\u63d2\u4ef6",permalink:"/substrate-contracts-book/redspot/plugin/redspot-chai"},next:{title:"@redspot_patract\u63d2\u4ef6",permalink:"/substrate-contracts-book/redspot/plugin/redspot-patract"}},u=[{value:"\u80cc\u666f\u4fe1\u606f",id:"\u80cc\u666f\u4fe1\u606f",children:[]},{value:"\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6\uff1f",id:"\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6\uff1f",children:[]}],l={toc:u};function d(e){var t=e.components,s=(0,o.Z)(e,a);return(0,p.kt)("wrapper",(0,n.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"redspot_gas-reporter-\u63d2\u4ef6"},"@redspot_gas-reporter \u63d2\u4ef6"),(0,p.kt)("h2",{id:"\u80cc\u666f\u4fe1\u606f"},"\u80cc\u666f\u4fe1\u606f"),(0,p.kt)("p",null,"\u8be5\u63d2\u4ef6\u4f1a\u5728\u6d4b\u8bd5\u5b8c\u6210\u65f6\uff0c\u6253\u5370\u51fa\u6240\u8c03\u7528\u7684\u5408\u7ea6\u7684\u4ea4\u6613\u7684gas\u4f7f\u7528\u91cf\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{src:r(3958).Z})),(0,p.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6\uff1f"},"\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6\uff1f"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u5bfc\u5165@redspot/gas-reporter \u63d2\u4ef6\u3002"),(0,p.kt)("li",{parentName:"ol"},"\u5728",(0,p.kt)("inlineCode",{parentName:"li"},"redspot.config.ts"),"\u4e2d\u52a0\u5165\u6b64\u63d2\u4ef6\uff0c\u5373\u53ef\u81ea\u52a8\u8fd0\u884c\u3002",(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"// redspot.config.ts\nimport { RedspotUserConfig } from 'redspot/types';\nimport '@redspot/gas-reporter';\nexport default {\n ...\n} as RedspotUserConfig;\n")))))}d.isMDXComponent=!0},3958:function(e,t,r){t.Z=r.p+"assets/images/gas-01baae48bc4d15248c09ec875e37fc5a.png"}}]);