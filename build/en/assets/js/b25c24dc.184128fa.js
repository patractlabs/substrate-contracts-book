"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7716],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=d(r),m=o,v=u["".concat(s,".").concat(m)]||u[m]||l[m]||i;return r?n.createElement(v,a(a({ref:t},c),{},{components:r})):n.createElement(v,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5273:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],p={},s=void 0,d={unversionedId:"patra-store/getting-starter",id:"patra-store/getting-starter",isDocsHomePage:!1,title:"getting-starter",description:"Getting started",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/patra-store/getting-starter.md",sourceDirName:"patra-store",slug:"/patra-store/getting-starter",permalink:"/en/patra-store/getting-starter",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/patra-store/getting-starter.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"overview",permalink:"/en/patra-store/overview"},next:{title:"publish-dapps",permalink:"/en/patra-store/publish-dapps"}},c=[{value:"Getting started",id:"getting-started",children:[{value:"Request user authorization",id:"request-user-authorization",children:[]},{value:"Get Injected",id:"get-injected",children:[]},{value:"Signer",id:"signer",children:[]},{value:"Provider(Optional)",id:"provideroptional",children:[]},{value:"Init Api",id:"init-api",children:[]},{value:"More usage",id:"more-usage",children:[]}]}],l={toc:c};function u(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"First of all, please make sure you include ",(0,i.kt)("inlineCode",{parentName:"p"},'<script type="text/javascript" src="https://static.patrastore.io/sdk/store-sdk.min.js"><\/script>')," in the html, In order to ensure that the SDK can work normally, you need to quote it before the business code. A better way is to put it in the ",(0,i.kt)("inlineCode",{parentName:"p"},"head")," tag of html."),(0,i.kt)("p",null,"Make sure you have a certain understanding of the ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs/extension"},"document")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"@polkadot/extension-dapp"),", we will also post a demo below."),(0,i.kt)("p",null,"Install the corresponding dependencies. ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn add @polkadot/extension-dapp"),"."),(0,i.kt)("h3",{id:"request-user-authorization"},"Request user authorization"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"This step is before all the following operations are called. ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import {web3Enable} from'@polkadot/extension-dapp';\n\nawait web3Enable();\n")),(0,i.kt)("h3",{id:"get-injected"},"Get Injected"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import {web3FromSource} from'@polkadot/extension-dapp';\n\n// The injected name of PatraStore is store\nconst injected = await web3FromSource('store');\n")),(0,i.kt)("h3",{id:"signer"},"Signer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const signer = injected.signer;\n")),(0,i.kt)("p",null,"After obtaining the Signer, you can use the signer to retrieve the signature of PatraStore"),(0,i.kt)("h3",{id:"provideroptional"},"Provider(Optional)"),(0,i.kt)("p",null,"The Provider we provide is implemented based on PostMessage. To ensure that Dapp and PatraStore are connected to the same chain, it is recommended that you use this method to instantiate the Provider."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { ProviderInterface } from '@polkadot/rpc-provider/types';\nimport { WsProvider } from '@polkadot/rpc-provider';\nimport { web3ListRpcProviders, web3UseRpcProvider } from '@polkadot/extension-dapp';\n\nlet provider: ProviderInterface;\nconst providers = await web3ListRpcProviders('store');\nif (providers && Object.keys(providers).length > 0) {\n  provider = (await web3UseRpcProvider('store', Object.keys(providers)[0])).provider;\n} else {\n  provider = new WsProvider(url);\n}\n")),(0,i.kt)("h3",{id:"init-api"},"Init Api"),(0,i.kt)("p",null,"After the above steps, we have obtained Provider and Signer. Below is a complete example of instantiating ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiPromise"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import type { ProviderInterface } from \'@polkadot/rpc-provider/types\';\n\nimport { ApiPromise } from \'@polkadot/api/promise\';\nimport { WsProvider } from \'@polkadot/rpc-provider\';\nimport { web3Enable, web3FromSource, web3ListRpcProviders, web3UseRpcProvider } from \'@polkadot/extension-dapp\';\n\nasync function initApi(): ApiPromise {\n  await web3Enable();\n\n  let provider: ProviderInterface;\n  const providers = await web3ListRpcProviders(\'store\');\n  if (providers && Object.keys(providers).length > 0) {\n    provider = (await web3UseRpcProvider(\'store\', Object.keys(providers)[0])).provider;\n  } else {\n    provider = new WsProvider(url);\n  }\n\n  const { signer } = await web3FromSource(\'store\');\n\n  return new ApiPromise({\n    provider,\n    signer,\n    // Jupiter types\n    types: {\n      "LookupSource": "MultiAddress",\n      "Address": "MultiAddress",\n      "FullIdentification": "AccountId",\n      "AuthorityState": {\n        "_enum": [\n          "Working",\n          "Waiting"\n        ]\n      },\n      "EraIndex": "u32",\n      "ActiveEraInfo": {\n        "index": "EraIndex",\n        "start": "Option<u64>"\n      },\n      "UnappliedSlash": {\n        "validator": "AccountId",\n        "reporters": "Vec<AccountId>"\n      }\n    }\n  })\n}\n\nconst api: ApiPromise = await initApi();\n')),(0,i.kt)("h3",{id:"more-usage"},"More usage"),(0,i.kt)("p",null,"Please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs/extension"},"https://polkadot.js.org/docs/extension")))}u.isMDXComponent=!0}}]);