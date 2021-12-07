"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[2666],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),k=a,m=d["".concat(l,".").concat(k)]||d[k]||u[k]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7925:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={},l="ask-cli",s={unversionedId:"ask/guides/ask-cli",id:"ask/guides/ask-cli",isDocsHomePage:!1,title:"ask-cli",description:"Usage",source:"@site/docs/ask/guides/ask-cli.md",sourceDirName:"ask/guides",slug:"/ask/guides/ask-cli",permalink:"/substrate-contracts-book/ask/guides/ask-cli",editUrl:"https://github.com/patractlabs/substrate-contracts-book/edit/master/docs/ask/guides/ask-cli.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Environment Variables",permalink:"/substrate-contracts-book/ask/guides/global"},next:{title:"Decorators overview",permalink:"/substrate-contracts-book/ask/guides/decorators/overview"}},p=[{value:"Usage",id:"usage",children:[]},{value:"init",id:"init",children:[]},{value:"compile",id:"compile",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ask-cli"},"ask-cli"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"npx pl-ask-cli xxx\n")),(0,o.kt)("h2",{id:"init"},"init"),(0,o.kt)("p",null,"initialize a ask project with node packages and create directory structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx pl-ask-cli init\n")),(0,o.kt)("p",null,"Will create the directory structure like"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"project\n\u2502   package-lock.json  \n|\n\u2514\u2500\u2500\u2500node_modules\n\u2502\n\u2514\u2500\u2500\u2500contracts\n")),(0,o.kt)("h2",{id:"compile"},"compile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx pl-ask-cli compile source-file [--debug|--release]\n")),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"npx pl-ask-cli compile")," will compile in release mode."),(0,o.kt)("p",null,"For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"npx pl-ask-cli compile contracts/index.ts")," will yield."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"project\n\u2502   package-lock.json  \n|\n\u2514\u2500\u2500\u2500node_modules\n\u2502\n\u2514\u2500\u2500\u2500contracts\n\u2502   \u251c\u2500\u2500 index.ts\n\u2502   \u2514\u2500\u2500 erc20.ts\n\u2502\n\u2514\u2500\u2500\u2500build\n\u2502   \u251c\u2500\u2500 index.wasm\n\u2502   \u2514\u2500\u2500 metadata.json\n")),(0,o.kt)("p",null,"For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"npx pl-ask-cli compile contracts/index.ts --debug")," will yield."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"project\n\u2502   package-lock.json  \n|\n\u2514\u2500\u2500\u2500node_modules\n\u2502\n\u2514\u2500\u2500\u2500contracts\n\u2502   \u251c\u2500\u2500 index.ts\n\u2502   \u2514\u2500\u2500 erc20.ts\n\u2502\n\u2514\u2500\u2500\u2500build\n\u2502   \u2514\u2500\u2500\u2500extension\n\u2502       \u2502   ERC20.ts  \n\u2502       \u2502   index.ts\n\u2502   \u251c\u2500\u2500 index.wasm\n\u2502   \u2514\u2500\u2500 metadata.json\n\u2502   \u2514\u2500\u2500 index.wast\n")))}d.isMDXComponent=!0}}]);