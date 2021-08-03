"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8305],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1041:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],p={},c="Plug-in",s={unversionedId:"redspot/plugin",id:"redspot/plugin",isDocsHomePage:!1,title:"Plug-in",description:"Background Information",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/redspot/plugin.md",sourceDirName:"redspot",slug:"/redspot/plugin",permalink:"/en/redspot/plugin",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/redspot/plugin.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Common problem",permalink:"/en/redspot/q-and-a"},next:{title:"@redspot_decimals plug-in",permalink:"/en/redspot/plugin/redspot-decimals"}},l=[{value:"Background Information",id:"background-information",children:[]}],u={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"plug-in"},"Plug-in"),(0,a.kt)("h2",{id:"background-information"},"Background Information"),(0,a.kt)("p",null,"The core functions of Redspot include Redspot runtime environment, compiling contracts, running tests and running scripts. Other functions, such as the test suite with the contract, contract interaction, access to the contract, and configuration of different chains, are all provided by the plug-in, and you can choose the plug-ins according to your needs. The way to introduce a plug-in is very simple, add it as a dependency of npm, and then add it in ",(0,a.kt)("inlineCode",{parentName:"p"},"redspot.config.ts"),". The example is as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { RedspotUserConfig } from 'redspot/types';\nimport '@redspot/patract'; // introduce the @redspot/patract plugin\nimport '@redspot/chai'; // import @redspot/chai plugin\nexport default {\n ...\n} as RedspotUserConfig;\n")),(0,a.kt)("p",null,"The following plug-ins are now provided."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.patract.io/redspot/plugin/redspot-chai.html"},"@redspot/chai")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.patract.io/redspot/plugin/redspot-decimals.html"},"@redspot/decimals")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.patract.io/redspot/plugin/redspot-explorer.html"},"@redspot/explorer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.patract.io/redspot/plugin/redspot-gas-reporter.html"},"@redspot/gas-reporter")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.patract.io/redspot/plugin/redspot-known-types.html"},"@redspot/known-types")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.patract.io/redspot/plugin/redspot-patract.html"},"@redspot/patract"))))}d.isMDXComponent=!0}}]);