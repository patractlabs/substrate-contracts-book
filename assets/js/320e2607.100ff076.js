"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[1978],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,p(p({ref:t},l),{},{components:r})):n.createElement(m,p({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4875:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),p=["components"],i={},s="\u4ecb\u7ecd",c={unversionedId:"redspot/overview",id:"redspot/overview",isDocsHomePage:!1,title:"\u4ecb\u7ecd",description:"Redspot \u7684\u67b6\u6784",source:"@site/docs/redspot/overview.md",sourceDirName:"redspot",slug:"/redspot/overview",permalink:"/substrate-contracts-book/redspot/overview",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/redspot/overview.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Redspot \u6559\u7a0b",permalink:"/substrate-contracts-book/redspot/tutorial"},next:{title:"\u914d\u7f6e\u4fe1\u606f",permalink:"/substrate-contracts-book/redspot/configuration"}},l=[{value:"Redspot \u7684\u67b6\u6784",id:"redspot-\u7684\u67b6\u6784",children:[]},{value:"\u4efb\u52a1",id:"\u4efb\u52a1",children:[]},{value:"\u63d2\u4ef6",id:"\u63d2\u4ef6",children:[]}],u={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("h2",{id:"redspot-\u7684\u67b6\u6784"},"Redspot \u7684\u67b6\u6784"),(0,a.kt)("p",null,"Redspot\u662f\u56f4\u7ed5\u4efb\u52a1\uff08Tasks\uff09\u548c\u63d2\u4ef6\uff08Plugins\uff09\u7684\u6982\u5ff5\u8bbe\u8ba1\u7684\u3002Redspot\u7684\u5927\u90e8\u5206\u529f\u80fd\u6765\u81ea\u63d2\u4ef6\uff0c\u4f60\u53ef\u6309\u9700\u9009\u62e9\u8981\u4f7f\u7528\u7684\u63d2\u4ef6\u3002"),(0,a.kt)("h2",{id:"\u4efb\u52a1"},"\u4efb\u52a1"),(0,a.kt)("p",null,"\u6bcf\u6b21\u4eceterminal\u8fd0\u884cRedspot\u65f6\uff0c\u4f60\u90fd\u5728\u8fd0\u884c\u4efb\u52a1\u3002\u4f8b\u5982\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"npx redspot compile"),"\u547d\u4ee4\u662f\u8fd0\u884c\u7f16\u8bd1\u4efb\u52a1\u3002 \u8981\u67e5\u770b\u9879\u76ee\u4e2d\u5f53\u524d\u53ef\u7528\u7684\u4efb\u52a1\uff0c\u53ef\u8fd0\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"npx redspot"),"\u547d\u4ee4\u3002 \u901a\u8fc7\u8fd0\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"npx redspot help [task]"),"\u53ef\u4ee5\u67e5\u770b\u4efb\u4f55\u4efb\u52a1\u7684\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,a.kt)("h2",{id:"\u63d2\u4ef6"},"\u63d2\u4ef6"),(0,a.kt)("p",null,"Redspot\u9ed8\u8ba4\u5b89\u88c5\u4e86\u4e00\u4e9b\u63d2\u4ef6\uff0c\u5982\u679c\u4f60\u9700\u8981\u624b\u52a8\u5b89\u88c5\u6216\u5347\u7ea7\u5b83\u4eec\uff0c\u8bf7\u53c2\u89c1\u4ee5\u4e0b\u6b65\u9aa4\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\u5b89\u88c5@redspot/patract \u548c@redspot/chai\u63d2\u4ef6\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @redspot/patract @redspot/chai\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u5728\u9879\u76ee\u7684\u76ee\u5f55\u4e2d\u7684redspot \u914d\u7f6e\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"li"},"redspot.config.js"),"\u4e2d\u5bfc\u5165\u63d2\u4ef6\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { RedspotUserConfig } from 'redspot/types';\nimport '@redspot/patract';\nimport '@redspot/chai';\nexport default {\n ...\n} as RedspotUserConfig;\n")))}d.isMDXComponent=!0}}]);