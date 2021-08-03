"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8408],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),h=n,m=d["".concat(i,".").concat(h)]||d[h]||u[h]||o;return a?r.createElement(m,l(l({ref:t},c),{},{components:a})):r.createElement(m,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1534:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),l=["components"],s={},i=void 0,p={unversionedId:"elara/reports/v0.1Report",id:"elara/reports/v0.1Report",isDocsHomePage:!1,title:"v0.1Report",description:"Report for Elara v0.1",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/elara/reports/v0.1Report.md",sourceDirName:"elara/reports",slug:"/elara/reports/v0.1Report",permalink:"/en/elara/reports/v0.1Report",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/elara/reports/v0.1Report.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Report for Elara proposals",permalink:"/en/elara/reports"},next:{title:"Report for Elara v0.2",permalink:"/en/elara/reports/v0.2Report"}},c=[{value:"Report for Elara v0.1",id:"report-for-elara-v01",children:[]},{value:"Start Elara On Your Own Computer",id:"start-elara-on-your-own-computer",children:[]},{value:"What we have implemented for v0.1",id:"what-we-have-implemented-for-v01",children:[]}],u={toc:c};function d(e){var t=e.components,a=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"report-for-elara-v01"},"Report for Elara v0.1"),(0,o.kt)("p",null,"Overview"),(0,o.kt)("p",null,"Five weeks ago, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/patractlabs"},"Patract Labs")," applied a ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/post/103"},"treasury proposal #103")," for Elara v0.1, which will be an instant and scalable Polkadot API service. "),(0,o.kt)("p",null,"In the proposal, we promised to finish the following works (referring to ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/motion/31"},"motion #31"),"):"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"v0.1: Implement Substrate node access")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Create a server-side framework to develop proxy access, automatic monitoring and data statistics to the RPC service of the Substrate node"),(0,o.kt)("li",{parentName:"ul"},"Support developers to use http and web-socket protocols to uniformly access the network through the server framework"),(0,o.kt)("li",{parentName:"ul"},"Develop a front-end dashboard to display relevant monitoring statistics of the RPC service of the Substrate node")),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"How to verify v0.1: Youtube demo video & Github source")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"The Substrate node of the service can be accessed through http and web-socket protocols"),(0,o.kt)("li",{parentName:"ul"},"Can monitor RPC requests of Substrate nodes"),(0,o.kt)("li",{parentName:"ul"},"Can view the relevant monitoring statistics from the dashboard"))),(0,o.kt)("p",null,"By now, we have finished all the development requirements for Elara v0.1 on time. There is a demo video to show all the features on YouTube in ",(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/7UhsUEqk1pQ"},"https://youtu.be/7UhsUEqk1pQ"),". The Github repo is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/elara"},"https://github.com/patractlabs/elara"),", and the homepage of a demo dashboard to show the current statistics is in ",(0,o.kt)("a",{parentName:"p",href:"https://elara.patract.io/"},"https://elara.patract.io/"),". "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5023721/97083914-fc841080-1645-11eb-9478-306fc9b1dcc4.png",alt:"image"})),(0,o.kt)("p",null,"Then, Let's show you how Elara works:"),(0,o.kt)("h2",{id:"start-elara-on-your-own-computer"},"Start Elara On Your Own Computer"),(0,o.kt)("p",null,"Elara v0.1 can be used for any Substrate blockchain. For example, if you want to run a Polkadot or Kusama node to provide a public RPC endpoint node, then you what to monitor how many times and what kind of RPC calls had been called in one day, you can do the following steps to start Elara:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The node server should already have ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"node")," command.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Git clone Elara into this server:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/patractlabs/elara.git\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Install Elara\u2019s dependencies:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd elara\nyarn install\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Install database:")),(0,o.kt)("p",null,"Currently, Elara use ",(0,o.kt)("inlineCode",{parentName:"p"},"Redis")," memory database to provide the back-end DB to store all data. We will support other database like MongoDB or PostgreSQL in the future, but now we just support Redis DB and the corresponding configs. If you need persistent data,  using redis\u2019 persistent feature is good enough."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# for ubuntu or debian\nsudo apt install redis\n# other system just replace to related command to install redis\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Notice: we advice to config password for Redis if you use Elara in production environment *")),(0,o.kt)("p",null,"And on the other hand, the Redis server instance can be replaced by cloud service. In this way, DevOps can save some time and lot of troubles."),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Start Polkadot or Kusama, or any other substrate node that you want to monitor.")),(0,o.kt)("p",null,"Please notice that all Substrate node will export ",(0,o.kt)("inlineCode",{parentName:"p"},"ws-port")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"rpc-port"),", and can set some limit for commands, like ",(0,o.kt)("inlineCode",{parentName:"p"},"--rpc-cors"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"--rpc-methods")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"--unsafe-rpc-external"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"--unsafe-ws-external")," or something else."),(0,o.kt)("p",null,"For more information, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/wiki/Public-RPC"},"https://github.com/paritytech/substrate/wiki/Public-RPC"),"."),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Modify Elara\u2019s config file:")),(0,o.kt)("p",null,"By now, Elara has provided a real RPC / web-socket service for outside users, and Elara can connect with Substrate node directly. Elara is doing like a proxy to transmit client requests to the node, at the same time, logging, monitoring, and counting all the requests."),(0,o.kt)("p",null,"So you need to modify config file for Elara:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vim config/env/dev.env.js\n")),(0,o.kt)("p",null,"And you can see:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"process.env.DEBUG = process.env.DEBUG || 'dev-errer:*'\n\nmodule.exports = {\n    keys: ['elara@#^*&'],\n    name: 'elara',\n    port: 8001,  // this port is elara server, receive all client request(inlude rpc and websocket) and dashbord server port\n    pid:'00000000000000000000000000000000',\n    chain: {\n        'substrate': {\n            'rpc': ['localhost:9933'], // the substrate node rpc port\n            'ws': ['localhost:9944'] // the substrate node websocket port\n        }\n    },\n    redis: { // the redis config\n        host: '127.0.0.1',\n        port: '6379',\n        password: ''\n    },\n    timeout: 10000,// ms\n    requests: 1000//\n}\n")),(0,o.kt)("p",null,"In this config file, you should pay attention to 3 fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"port")," : This field is used for Elara server, all client requests will go through this port, including RPC requests and web-socket requests."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"chain/substrate"),": This field is used to connect with the Substrate node, so it should match its  ",(0,o.kt)("inlineCode",{parentName:"li"},"--ws-port")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"--rpc-port"),".  If the Substrate node doesn\u2019t set those two parameters, the default values are ",(0,o.kt)("inlineCode",{parentName:"li"},"9944")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"9933"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"redis"),": This field is used to connect with the Redis instance.")),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Start Elara\u2019s service and dashboard:")),(0,o.kt)("p",null,"In Elara\u2019s root directory, you can start in the current process:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"node app.js\n")),(0,o.kt)("p",null,"Or use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Unitech/pm2"},"pm2")," to management the process"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pm2 start pm2.json --env dev\n")),(0,o.kt)("p",null,"You can find the running log in  ",(0,o.kt)("inlineCode",{parentName:"p"},"elara/logs/")),(0,o.kt)("p",null,"And then you can start the dashboard:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ./daemon\nnohub node dashboard.js &\n")),(0,o.kt)("p",null,"Now open ",(0,o.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8001/demo")," in your browser, you can see the dashboard and all the statistics for requests."),(0,o.kt)("p",null,"Please notice that the client request\u2019s endpoint should be ",(0,o.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8001")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ws://127.0.0.1:8001")," to start the RPC or web-socket request, otherwise the request can't be monitored by Elara."),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"Start requesting from client:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you provide RPC service for developers:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Method 1 : using curl to send HTTP requests:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'      #curl http\n      curl --location --request POST \'http://localhost:8001\' \\\n          --header \'Content-Type: application/json\' \\\n          --data-raw \'{\n              "id":1,\n              "jsonrpc":"2.0",\n              "method":"chain_getBlock",\n              "params":[]\n          }\'\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Method 2: using ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/websockets/wscat"},"wscat")," to send websocket request:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'    parachain@ubuntu:~/elara$ wscat  -c ws://localhost:8001/\n    Connected (press CTRL+C to quit)\n    > {"id":1,"jsonrpc":"2.0","method":"chain_getBlock","params":[]}\n    < {Response data...}\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Method 3 : Using the SDK. You can refer to ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/polkadot-js"},"polkadot-js"),", using the following and similar code to access the node by HTTP or websocket\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"    const { ApiPromise, WsProvider } = require('@polkadot/api');\n    const { HttpProvider } = require('@polkadot/rpc-provider');\n    \n    (async function () {\n    // Http\n    const httpProvider = new HttpProvider('http://localhost:8001')\n    const hash = await httpProvider.send('chain_getBlockHash', [])\n    console.log('latest block Hash', hash)\n    \n    // Websocket\n    const wsProvider = new WsProvider('ws://localhost:8001')\n    const api = await ApiPromise.create({ provider: wsProvider })\n    //Do something\n    })()\n")),(0,o.kt)("p",null,"We also provide reference examples under ",(0,o.kt)("inlineCode",{parentName:"p"},"elara/example/"),". Examples can be executed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"    node client.js\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you provide access endpoint to the ",(0,o.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/"},"Official Polkadot Portal"),", any other wallets or blockchain explorers:")),(0,o.kt)("p",null,"You must remember that the current endpoint is provided by elara, suck as ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8001"),". You can config ",(0,o.kt)("inlineCode",{parentName:"p"},"ws://127.0.0.1:8001")," in your ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"https://polkadot.js.org/apps/")," website."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5023721/97085134-06117680-164e-11eb-9ae4-e01ab2474d3a.png",alt:"image"})),(0,o.kt)("p",null,"Then in your dashboard, you can see all the statistics."),(0,o.kt)("h2",{id:"what-we-have-implemented-for-v01"},"What we have implemented for v0.1"),(0,o.kt)("p",null,"As we describe above, we have implemented all features required in proposal."),(0,o.kt)("p",null,(0,o.kt)("del",{parentName:"p"},"The Substrate node of the service can be accessed through http and websocket protocols")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"Official Polkadot Portal")," can directly use Elara as an endpoint.")),(0,o.kt)("p",null,(0,o.kt)("del",{parentName:"p"},"Can monitor RPC requests of Substrate nodes")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We can see all the statistics in Redis or on dashboard.")),(0,o.kt)("p",null,(0,o.kt)("del",{parentName:"p"},"Can view the relevant monitoring statistics from the dashboard")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We have provided a demo video to show this dashboard.")),(0,o.kt)("p",null,"Overall, we believe that the node services, wallets, blockchain explorers and other service providers can benefit from Elara! We have done the design of Elara v0.2, Please see the next treasury proposal ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/post/141"},"https://polkadot.polkassembly.io/post/141"),"."))}d.isMDXComponent=!0}}]);