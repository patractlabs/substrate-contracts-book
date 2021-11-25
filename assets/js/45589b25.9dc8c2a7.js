"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[5553],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),p=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},s=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=p(r),f=a,b=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(b,c(c({ref:e},s),{},{components:r})):n.createElement(b,c({ref:e},s))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9764:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),c=["components"],i={},l="Tutorial",p={unversionedId:"elara/tutorial",id:"elara/tutorial",isDocsHomePage:!1,title:"Tutorial",description:"Elara\u7684API\u9700\u8981\u6709\u6548\u7684Project Endpoint\u5305\u542b\u5728\u60a8\u7684\u8bf7\u6c42\u4e2d\u3002\u6b64\u6807\u8bc6\u7b26\u5e94\u9644\u52a0\u5230\u8bf7\u6c42URL\u3002",source:"@site/docs/elara/tutorial.md",sourceDirName:"elara",slug:"/elara/tutorial",permalink:"/substrate-contracts-book/elara/tutorial",editUrl:"https://github.com/patractlabs/substrate-contracts-book/edit/master/docs/elara/tutorial.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Elara",permalink:"/substrate-contracts-book/elara/introduction"},next:{title:"\u8bbe\u8ba1\u7b80\u8ff0",permalink:"/substrate-contracts-book/elara/design"}},s=[{value:"\u83b7\u53d6YOUR-PROJECT-ENDPOINT",id:"\u83b7\u53d6your-project-endpoint",children:[]},{value:"\u53d1\u51fa\u8bf7\u6c42",id:"\u53d1\u51fa\u8bf7\u6c42",children:[]}],u={toc:s};function d(t){var e=t.components,r=(0,a.Z)(t,c);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tutorial"},"Tutorial"),(0,o.kt)("p",null,"Elara\u7684API\u9700\u8981\u6709\u6548\u7684Project Endpoint\u5305\u542b\u5728\u60a8\u7684\u8bf7\u6c42\u4e2d\u3002\u6b64\u6807\u8bc6\u7b26\u5e94\u9644\u52a0\u5230\u8bf7\u6c42URL\u3002"),(0,o.kt)("h2",{id:"\u83b7\u53d6your-project-endpoint"},"\u83b7\u53d6YOUR-PROJECT-ENDPOINT"),(0,o.kt)("p",null,"1.\u4f7f\u7528\u60a8\u7684github\u5e10\u6237\u767b\u5f55",(0,o.kt)("a",{parentName:"p",href:"https://elara.patract.io/"},"Elara\u5b98\u65b9\u7f51\u7ad9")),(0,o.kt)("p",null,"2.\u8fdb\u5165",(0,o.kt)("a",{parentName:"p",href:"https://elara.patract.io/#/dashboard/console"},"Elara Dashboard"),"\uff0c\u5355\u51fb\u4ee5\u9009\u4e2d\u5de6\u4fa7\u8fb9\u680f\u4e2d\u7684\u4e3b\u94fe\u3002"),(0,o.kt)("p",null,"3.\u5355\u51fb\u53f3\u4e0a\u89d2\u7684\u201c\u521b\u5efa\u65b0\u9879\u76ee\u201d\u6309\u94ae\uff0c\u5728\u5f39\u51fa\u5bf9\u8bdd\u6846\u4e2d\u8f93\u5165\u201c PROJECT-NAME\u201d\uff0c\u7136\u540e\u5355\u51fb\u201c\u786e\u5b9a\u201d\u3002\u5982\u679c\u4e00\u5207\u6b63\u5e38\uff0c\u60a8\u5c06\u770b\u5230\u4e00\u6761\u6d88\u606f\uff0c\u8bf4\u660e\u8be5\u9879\u76ee\u5df2\u6210\u529f\u521b\u5efa\u3002"),(0,o.kt)("p",null,"4.\u5728\u9879\u76ee\u5217\u8868\u4e2d\uff0c\u5355\u51fb\u9879\u76ee\u4ee5\u8fdb\u5165\u9879\u76ee\u8be6\u7ec6\u4fe1\u606f\u9875\u9762\n-\u6709\u4e00\u5217\u4fe1\u606f\u663e\u793a\u201c PID\u201d\uff0c\u4e00\u4e32\u957f\u5ea6\u4e3a32\u7684\u5b57\u7b26\u548c\u6570\u5b57\uff0c\u5373\u9879\u76ee\u7684\u201c YOUR-PROJECT-ID\u201d\n-\u6709\u4e00\u5217\u663e\u793a\u201c ENDPOINTS\u201d\u7684\u4fe1\u606f\uff0c\u5305\u62ec\u8bbf\u95eeENDPOINT\u7684\u201c https\u201d\u548c\u201c wss\u201d\u3002\u90a3\u5c31\u662f\u9879\u76ee\u7684\u201c YOUR-PROJECT-ENDPOINT\u201d"),(0,o.kt)("h2",{id:"\u53d1\u51fa\u8bf7\u6c42"},"\u53d1\u51fa\u8bf7\u6c42"),(0,o.kt)("p",null,"\u4f7f\u7528\u8fd9\u4e9bENDPOINT\u4e4b\u4e00\u4f5c\u4e3a\u60a8\u7684\u5ba2\u6237\u7aef\u7a0b\u5e8f\u7684Provider\u3002"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"\u6ce8\u610f\uff1a\u8bf7\u52a1\u5fc5\u5c06YOUR-PROJECT-ENDPOINT\u66ff\u6362\u4e3aElara\u4eea\u8868\u677f\u4e2d\u7684Project Endpoint ")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u65b9\u6cd51\uff1acurl\u53d1\u9001HTTP\u8bf7\u6c42\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'#curl http\ncurl --location --request POST \'https://YOUR-PROJECT-ENDPOINT\' \\\n    --header \'Content-Type: application/json\' \\\n    --data-raw \'{\n        "id":1,\n        "jsonrpc":"2.0",\n        "method":"chain_getBlock",\n        "params":[]\n    }\'\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u65b9\u6cd52\uff1a\u4f7f\u7528wscat\u53d1\u9001websocket\u8bf7\u6c42\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'parachain@ubuntu:~/elara$ wscat  -c wss://YOUR-PROJECT-ENDPOINT\nConnected (press CTRL+C to quit)\n> {"id":1,"jsonrpc":"2.0","method":"chain_getBlock","params":[]}\n< {"jsonrpc":"2.0","result":{"block":{"extrinsics":["0x280402000b901ac96e7601"],"header":{"digest":{"logs":["0x066175726120dfcdf90f00000000","0x05617572610101acb2a4725f0f8945593cea6aa6ef70df2a8fd4a2c4eb1c0d1bf51828f26e371f897473113541f9c0d9f94e51471a3d685a86866a12133ea012d2777bb9709589"]},"extrinsicsRoot":"0xcca5112546305b07d904c2aa26155dffe6c66de043708e1ac89e57609fbcc6d1","number":"0x17922","parentHash":"0xdb798a19707ef9085b97d0b00854c613ae4abdb560e2ea1164f2e7bbfbc288a1","stateRoot":"0xdc575fe975067ded933020df9035db0e496143e6b9a062a4313fd1f6e9d02922"}},"justification":null},"id":1}\n> \n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u65b9\u6cd53\uff1a\u4f7f\u7528SDK")),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u53c2\u8003polkadot-js\uff0c\u4f7f\u7528\u4ee5\u4e0b\u7c7b\u4f3c\u4ee3\u7801\u901a\u8fc7Https\u6216Websocket\u8bbf\u95ee\u8282\u70b9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const { ApiPromise, WsProvider } = require('@polkadot/api');\nconst { HttpProvider } = require('@polkadot/rpc-provider');\n\n(async function () {\n// Http\nconst httpProvider = new HttpProvider('https://YOUR-PROJECT-ENDPOINT')\nconst hash = await httpProvider.send('chain_getBlockHash', [])\nconsole.log('latest block Hash', hash)\n\n// Websocket\nconst wsProvider = new WsProvider('wss://YOUR-PROJECT-ENDPOINT')\nconst api = await ApiPromise.create({ provider: wsProvider })\n//Do something\n\n})()\n")),(0,o.kt)("p",null,"\u8bf7\u52a1\u5fc5\u6ce8\u610f\uff0cJSON-RPC\u8bf7\u6c42\u4e0e\u4f20\u8f93\u65e0\u5173\uff0c\u53ef\u4ee5\u901a\u8fc7HTTPS\uff0cWebsockets\u53d1\u51fa\u76f8\u540c\u7684\u8bf7\u6c42\u3002"))}d.isMDXComponent=!0}}]);