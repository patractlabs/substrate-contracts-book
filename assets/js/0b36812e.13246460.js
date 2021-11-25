"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[3679],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),h=n,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||r;return a?o.createElement(m,s(s({ref:t},u),{},{components:a})):o.createElement(m,s({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<r;p++)s[p]=a[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9686:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var o=a(7462),n=a(3366),r=(a(7294),a(3905)),s=["components"],i={},l="Report for Europa v0.1",p={unversionedId:"europa/reports/v0.1Report",id:"europa/reports/v0.1Report",isDocsHomePage:!1,title:"Report for Europa v0.1",description:"Patract Hub's treasury report for Europa v0.1",source:"@site/docs/europa/reports/v0.1Report.md",sourceDirName:"europa/reports",slug:"/europa/reports/v0.1Report",permalink:"/substrate-contracts-book/europa/reports/v0.1Report",editUrl:"https://github.com/patractlabs/substrate-contracts-book/edit/master/docs/europa/reports/v0.1Report.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Report for Europa proposals",permalink:"/substrate-contracts-book/europa/reports"},next:{title:"v0.2Report",permalink:"/substrate-contracts-book/europa/reports/v0.2Report"}},u=[{value:"Introduction",id:"introduction",children:[{value:"How to verify v0.1: Youtube demo &amp; Github source",id:"how-to-verify-v01-youtube-demo--github-source",children:[]}]},{value:"Features",id:"features",children:[]},{value:"Start Europa on your own computer",id:"start-europa-on-your-own-computer",children:[{value:"Build",id:"build",children:[]},{value:"Run",id:"run",children:[]},{value:"RPC call",id:"rpc-call",children:[]}]},{value:"What we have implemented for v0.1",id:"what-we-have-implemented-for-v01",children:[]}],c={toc:u};function d(e){var t=e.components,a=(0,n.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"report-for-europa-v01"},"Report for Europa v0.1"),(0,r.kt)("p",null,"Patract Hub's treasury report for Europa v0.1"),(0,r.kt)("p",null,"Patract Hub (",(0,r.kt)("a",{parentName:"p",href:"https://patract.io"},"https://patract.io"),") develops local open source toolkits and one-stop cloud smart IDE, committed to provide free development toolkits and infrastructure services for the entire smart contract ecosystem. Six weeks ago, we applied a ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/motion/28"},"treasury proposal")," for Europa v0.1 , and now we have finished the development (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/europa"},"https://github.com/patractlabs/europa"),") and recorded a YouTube demo video (",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=z1SWq0vfgYY"},"https://www.youtube.com/watch?v=z1SWq0vfgYY"),")."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("blockquote",null,(0,r.kt)("h3",{parentName:"blockquote",id:"summary-of-europas-future-plan"},"Summary of Europa's future plan:"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"v0.1: Have an independent runtime environment to facilitate more subsequent expansion directions."),"\nThe independent runtime environment of excluded nodes can be expanded more without the constraints of the node environment and Wasm compilation, and can be easily integrated with other components. In this version, it is more like simulating the Ganache project in Ethereum ecosystem, enabling contract developers to develop without having to build a contract blockchain. Developers can quickly fire up a personal Substrate chain, which can be used to run tests, execute commands, and inspect state while controlling how the chain operates."))),(0,r.kt)("h3",{id:"how-to-verify-v01-youtube-demo--github-source"},"How to verify v0.1: Youtube demo & Github source"),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Build and run in an independent executable file"),(0,r.kt)("li",{parentName:"ul"},"Can start from different workspaces, and a new workspace is an empty chain"),(0,r.kt)("li",{parentName:"ul"},"Can receive extrinsics to set_code, deploy and call contracts directly"),(0,r.kt)("li",{parentName:"ul"},"Can interact with Redspot"),(0,r.kt)("li",{parentName:"ul"},"Can use RPC to jump over some blocks and revert to a specified height to revert states"))),(0,r.kt)("p",null,"Europa is kind of another implementation for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/tree/master/client"},"Substrate client"),' in our design. We know that the runtime of a blockchain is the business logic that defines its behavior, and the Substrate runtime need to run by an executor and environment. So that we design the executor and environment more like a "sandbox" to run a Substrate runtime.'),(0,r.kt)("p",null,'In v0.1, the primary target is to establish this "sandbox" environment to run a runtime. Then only in this way,  we can start to fork the ',(0,r.kt)("inlineCode",{parentName:"p"},"wasmi")," and other components to extends the features or the contracts execution environment."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("p",null,"For this purpose, we implement following features for a sandbox framework:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Europa sandbox framework is another implementation for ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate/tree/master/client"},"Substrate client"),".")),(0,r.kt)("p",null,'In the process of implementation, we move parts of the requirements in v0.3 to v0.1. We regard Europa as a "framework" at start, so that all substrate runtime could integrate Europa client directly.'),(0,r.kt)("p",null,"Same as Substrate, Europa use ",(0,r.kt)("inlineCode",{parentName:"p"},"bin/europa")," as an example for blockchain projects which based on Substrate to show how to use Europa, just like what ",(0,r.kt)("inlineCode",{parentName:"p"},"bin/node")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"bin/node-template"),' do in Substrate. Developers just need to create a new runtime directory, remove the pallets about consensus ("pallet-babe", "pallet-grandpa" and "pallet-session\u201d), because Europa do not have the consensus process. Developers need also ',(0,r.kt)("em",{parentName:"p"},"remove ",(0,r.kt)("inlineCode",{parentName:"em"},"build.rs")," for runtime crate"),", and implement ",(0,r.kt)("inlineCode",{parentName:"p"},"bin")," which contains ",(0,r.kt)("inlineCode",{parentName:"p"},"service.rs")," and other parts. Then the sandbox can run for this blockchain runtime."),(0,r.kt)("p",null,"Thus, we can find that the structure of ",(0,r.kt)("inlineCode",{parentName:"p"},"bin/europa")," is as same as ",(0,r.kt)("inlineCode",{parentName:"p"},"bin/node")," in Substrate."),(0,r.kt)("p",null,"And on the other hand, ",(0,r.kt)("inlineCode",{parentName:"p"},"bin/europa")," is also our particular implementation for ",(0,r.kt)("inlineCode",{parentName:"p"},"pallet-contracts")," smart contracts platform sandbox. It can be used directly to debug smart-contracts for ",(0,r.kt)("inlineCode",{parentName:"p"},"ink!"),"."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sandbox doesn\u2019t need consensus, and can produce block directly.")),(0,r.kt)("p",null,"Sandbox is just used to execute the runtime, so that we remove all components about consensus. Thus, we use ",(0,r.kt)("inlineCode",{parentName:"p"},"sc-consensus-manual-seal")," crate to produce block. This crate have a good abstract, so we do not need to fork it. We just modify the part of commands stream for ",(0,r.kt)("inlineCode",{parentName:"p"},"manual-seal"),". The async stream could receive information from different place (e.g. transaction pool, RPC and others) to drive seal-engine to produce blocks."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Sandbox doesn\u2019t need Wasm.")),(0,r.kt)("p",null,"As sandbox need to be easily debugged, we remove all Wasm components. As we currently know, Wasm causes many problems when debugging in details. At first, We need to extend many features for low level libraries, so if we base on the runtime to do something which need to be compiled into Wasm, we will meet many unexpected problems."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Europa runtime should remove ",(0,r.kt)("inlineCode",{parentName:"em"},"build.rs")," in runtime crate and remove ",(0,r.kt)("inlineCode",{parentName:"em"},"[build-dependencies]")," in runtime crate (cargo.toml file).")),(0,r.kt)("p",null,"On the other hand, a sandbox doesn\u2019t need Wasm features."),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Provide state-kv database.")),(0,r.kt)("p",null,"In Substrate, there is a way to provide all existing state under a block, but there is no way to export the modified state-kvs for a block. However, the developers are concerned mostly about the state changes between blocks. So that, they can check whether the changes match their expectations for debugging."),(0,r.kt)("p",null,"Thus, in europa sandbox, we store the mapping of blockhash and state kvs in the state-kv database, so that developers could export the state changes to look up the details."),(0,r.kt)("p",null,"You can run the export command while the europa node is running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# in a shell window\n$ ./target/debug/europa\nNov 12 17:10:14.524  INFO Europa Dev Node    \nNov 12 17:10:14.524  INFO \u270c\ufe0f  version 0.1.0-7b4463c-x86_64-linux-gnu    \nNov 12 17:10:14.524  INFO \u2764\ufe0f  by patract labs <https://github.com/patractlabs>, 2020-2020    \nNov 12 17:10:14.524  INFO \ud83d\udccb Chain specification: Development    \n# ...\nNov 12 17:21:23.544  INFO Accepted a new tcp connection from 127.0.0.1:44210.    \nNov 12 17:21:32.238  INFO \ud83d\ude4c Starting consensus session on top of parent 0xc7e1ce585807b34b7fecabe1242cafb2628c958b984ec0aee7727cdd34117529    \nNov 12 17:21:32.252  INFO \ud83c\udf81 Prepared block for proposing at 1 [hash: 0x0109608217316a298c88135cf39a87cc31c37729fbe567b4a1a9f8dcdb81ebeb; parent_hash: 0xc7e1\u20267529; extrinsics (2): [0x2194\u2026baf8, 0x0931\u202658bb]]    \nNov 12 17:21:32.267  INFO Instant Seal success: CreatedBlock { hash: 0x0109608217316a298c88135cf39a87cc31c37729fbe567b4a1a9f8dcdb81ebeb, aux: ImportedAux { header_only: false, clear_justification_requests: false, needs_justification: false, bad_justification: false, needs_finality_proof: false, is_new_best: true } }    \n\n# open another shell window, the following command would print the changes for block height 1\n$ ./target/debug/europa state-kv 1 \nNov 12 15:53:27.699  INFO modified state for block:0x6c119a8f7de42e330aca8b9d3587937aacbbc203cc21650b60644c2f2d33e7fb    \nNov 12 15:53:27.699  INFO       key:26aa394eea5630e07c48ae0c9558cef702a5c1b19ab7a04f536c519aca4983ac|value:[DELETED]   \nNov 12 15:53:27.699  INFO       key:26aa394eea5630e07c48ae0c9558cef70a98fdbe9ce6c55837576c60c7af3850|value:05000000\n# ...\n")),(0,r.kt)("p",null,"And Europa also has a RPC method to export the state-kvs while running:"),(0,r.kt)("p",null,"You can call Europa\u2019s RPC like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":100, \n    "jsonrpc":"2.0", \n    "method":"europa_modifiedStateKvs", \n    "params":[ 1 ]\n}\n')),(0,r.kt)("p",null,"will return:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "result": {\n        "0x26aa394eea5630e07c48ae0c9558cef702a5c1b19ab7a04f536c519aca4983ac": null,\n        "0x26aa394eea5630e07c48ae0c9558cef70a98fdbe9ce6c55837576c60c7af3850": "0x05000000",\n        // ...\n    }\n}\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Provide some special RPC method for sandbox.")),(0,r.kt)("p",null,"One feature of sandbox is that the developers can operate blockchain state easily."),(0,r.kt)("p",null,"Assuming a situition like this:"),(0,r.kt)("p",null,"A developer is developing a module which has a call of  ",(0,r.kt)("inlineCode",{parentName:"p"},"foo"),", while the call ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," needs other basic states (e.g. An account could be a validator only if he had registered his information on chain). Then, when this developer does a test and the result doesn\u2019t match his expectation (had modified related states), something must be wrong for ",(0,r.kt)("inlineCode",{parentName:"p"},"foo"),". He found the reason and fixed it, and wanted to try it again to test, however the current state is not the old state."),(0,r.kt)("p",null,'So the sandbox provides a way to "go back" to the old state, allowing developers to do a rollback operation. Thus we provide a RPC method, named: ',(0,r.kt)("inlineCode",{parentName:"p"},"europa_backwardToHeight"),". It allows developers to recover to any old state as the current best state, then the following operations are based on that old state."),(0,r.kt)("p",null,'By contrast, with this "backward\u201d RPC method, we also provide a "forward" method, named  ',(0,r.kt)("inlineCode",{parentName:"p"},"europa_forwardToHeight"),". It sends a command to let Europa to produce a batch of blocks to the height which is assigned by this RPC call. This is very useful for the developments which are related to the block number. Many DeFi DApps need to allow users to claim something after a specific block. So, using this RPC to do integration test is very suitable."),(0,r.kt)("p",null,"And for the feature #4, we also provide a RPC, named ",(0,r.kt)("inlineCode",{parentName:"p"},"europa_modifiedStateKvs")," to export the modified state kvs."),(0,r.kt)("p",null,"As above, in current version, Europa provides 3 RPC methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"europa_forwardToHeight"),": allow Europa to produce empty blocks to reach to the assigned height."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"europa_backwardToHeight"),": allow Europa to revert to the assigned height and state."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"europa_modifiedStateKvs"),": allow Europa to export modified state kvs and child state kvs for a block.")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Provide workspace to isolate different execution environments.")),(0,r.kt)("p",null,"Substrate could use the command ",(0,r.kt)("inlineCode",{parentName:"p"},"-d/--base-path")," to assign a directory to store data, thus different environment could use different directory to distinguish. But ",(0,r.kt)("inlineCode",{parentName:"p"},"-d"),' directory is not recorded, so that developers should manage those different paths by themselves. Europa provide a concept of "workspace" to do this work based on the "base path". Developers could use command ',(0,r.kt)("inlineCode",{parentName:"p"},"-w/--worksace"),' to assign different workspace directory to run different Europa node instance. Europa also provides commands to operate "workspaces\u201d, like setting default workspace, listing all existed workspace, or deleting a workspace.'),(0,r.kt)("p",null,"In our workspace management, developers can switch different environments by setting different workspace. By using this feature, developers can switch between different environments to do test easily. On the other hand, this feature provides a friendly way for integration testing."),(0,r.kt)("h2",{id:"start-europa-on-your-own-computer"},"Start Europa on your own computer"),(0,r.kt)("h3",{id:"build"},"Build"),(0,r.kt)("p",null,"The building process for this project is as same as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/"},"Substrate"),"."),(0,r.kt)("p",null,"When building finished, current executable file in ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," directory is named ",(0,r.kt)("inlineCode",{parentName:"p"},"europa"),"."),(0,r.kt)("h3",{id:"run"},"Run"),(0,r.kt)("h4",{id:"run-europa"},"Run Europa"),(0,r.kt)("p",null,"The following is builded in debug mode. If you want to build in release mode, using ",(0,r.kt)("inlineCode",{parentName:"p"},"release")," to replace ",(0,r.kt)("inlineCode",{parentName:"p"},"debug"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ ./target/debug/europa \n# if you what to specify a directory, add `-d` or `--base-path`\n$ ./target/debug/europa -d database\n")),(0,r.kt)("h4",{id:"access-europa"},"Access Europa"),(0,r.kt)("p",null,"Now, you can use the Official Portal (",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"https://polkadot.js.org/apps/"),") to access Europa:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"click the left tab and switch to ",(0,r.kt)("inlineCode",{parentName:"p"},"DEVELOPMENT")," -  ",(0,r.kt)("inlineCode",{parentName:"p"},"Local Node"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"click ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"Developer"),", and paste:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "Address": "AccountId",\n  "LookupSource": "AccountId"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'click "save" . Then, you can do a transfer as normal.')),(0,r.kt)("p",null,"Other third parties can access Europa like accessing any Substrate node."),(0,r.kt)("h4",{id:"export-modified-state-kvs"},"Export modified state kvs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ ./target/debug/europa state-kv 1\n# if you have specified a directory, add `-d` or `--base-path`\n$ ./target/debug/europa state-kv -d database 1\n")),(0,r.kt)("h3",{id:"rpc-call"},"RPC call"),(0,r.kt)("p",null,"RPC call is same as other RPCs in Substrate. You can do POST requests by rpc/ws like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":1, \n    "jsonrpc":"2.0", \n    "method":"europa_forwardToHeight", \n    "params":[  5  ]\n}\n')),(0,r.kt)("p",null,'Just replace "method" and "params" to corresponding parameters.'),(0,r.kt)("h4",{id:"use-another-workspace"},"Use another workspace"),(0,r.kt)("h5",{id:"specify-another-workspace"},"Specify another workspace"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ ./target/debug/europa -w another-workspace\n# if you have specify a directory, add `-d` or `--base-path`\n$ ./target/debug/europa -d database -w another-workspace\n")),(0,r.kt)("h5",{id:"set-default-workspace"},"Set default workspace"),(0,r.kt)("p",null,"Stop the Europa, then execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# another-workspace is the workspace name that we want to set as default.\n$ ./target/debug/europa workspace default another-workspace\nNov 12 17:28:41.980  INFO Current default workspace:    \nNov 12 17:28:41.981  INFO       default    \nNov 12 17:28:41.981  INFO     \nNov 12 17:28:41.981  INFO Set [another-workspace] as default workspace.  \n")),(0,r.kt)("p",null,'Then, start Europa. Europa will use "another-workspace" as default workspace.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ ./target/debug/europa\n# ...\nNov 12 17:29:33.862  INFO \ud83d\udcbe Database: RocksDb at .sub/another-workspace/chains/dev/db    \nNov 12 17:29:33.862  INFO \ud83d\udcd6 Workspace: another-workspace | Current workspace list: ["default", "another-workspace"]    \nNov 12 17:29:33.862  INFO \u26d3  Native runtime: europa-1 (europa-1.tx1.au1)    \n')),(0,r.kt)("h5",{id:"delete-workspace"},"Delete workspace"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ ./target/debug/europa workspace delete another-workspace\nNov 12 17:30:49.549  INFO Current default workspace:    \nNov 12 17:30:49.549  INFO       another-workspace    \nNov 12 17:30:49.549  INFO     \nNov 12 17:30:49.550  INFO Delete workspace [another-workspace].    \nNov 12 17:30:49.550  INFO       delete default record: [another-workspace]    \nNov 12 17:30:49.550  INFO       delete workspace:[another-workspace] from workspace list\n")),(0,r.kt)("h2",{id:"what-we-have-implemented-for-v01"},"What we have implemented for v0.1"),(0,r.kt)("p",null,"As I describe above, we have implemented all features required in proposal."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Build and run in an independent executable file")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Europa can be compiled and run directly.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Can start from different workspaces, and a new workspace is an empty chain")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Europa can start from different workspaces and do management.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Can receive extrinsics to set_code, deploy and call contracts directly")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Europa can run any Substrate runtime,  and currently Europa has already integrated ",(0,r.kt)("inlineCode",{parentName:"p"},"pallet-contracts"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Can interact with Redspot")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Europa can interact with any third parties, including \u201cOfficial Portal\u201d. Thus Redspot can also access Europa as a normal node.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Can use RPC to jump over some blocks and revert to a specified height to revert states")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Europa has provided some RPCs to support this.\nThat's all, we think Europa can become a very useful tool for Substrate developers. We need some more time to the research for Europa v0.2, then we will post the detailed proposal after a week.")))}d.isMDXComponent=!0}}]);