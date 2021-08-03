"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[7333],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7423:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={},p="Redspot v0.1 \u62a5\u544a",l={unversionedId:"redspot/reports/v0.1Report",id:"redspot/reports/v0.1Report",isDocsHomePage:!1,title:"Redspot v0.1 \u62a5\u544a",description:"Proposal overview",source:"@site/docs/redspot/reports/v0.1Report.md",sourceDirName:"redspot/reports",slug:"/redspot/reports/v0.1Report",permalink:"/substrate-contracts-book/redspot/reports/v0.1Report",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/redspot/reports/v0.1Report.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Redspot \u8bae\u4f1a\u63d0\u6848\u62a5\u544a",permalink:"/substrate-contracts-book/redspot/reports"},next:{title:"Redspot v0.2 \u62a5\u544a",permalink:"/substrate-contracts-book/redspot/reports/v0.2Report"}},c=[{value:"Proposal overview",id:"proposal-overview",children:[]},{value:"Redspot v0.1 introduction",id:"redspot-v01-introduction",children:[]},{value:"Using Redspot on your computer",id:"using-redspot-on-your-computer",children:[]},{value:"What we have done in this version",id:"what-we-have-done-in-this-version",children:[]},{value:"What features we will add in the next proposals",id:"what-features-we-will-add-in-the-next-proposals",children:[]}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"redspot-v01-\u62a5\u544a"},"Redspot v0.1 \u62a5\u544a"),(0,r.kt)("h2",{id:"proposal-overview"},"Proposal overview"),(0,r.kt)("p",null,"Patract Labs (",(0,r.kt)("a",{parentName:"p",href:"https://patract.network/"},"https://patract.network"),") provides solutions for Polkadot's parachain smart contract ecosystem. Three weeks ago, we applied a ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/motion/7"},"treasury proposal")," for Redspot v0.1. Here is a ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/oPsD2W0mAQs"},"youtube video")," for overall demonstration. Now, we have finished all the features on time. We ask the councillors to check our work and give feedbacks. Welcome to our ",(0,r.kt)("a",{parentName:"p",href:"https://app.element.io/#/room/!RZjiuwwssNFJZxaTjg:matrix.org"},"riot room")," to talk about smart contract development."),(0,r.kt)("p",null,"Redspot is inspired by Ethereum's Truffle. Redspot is a development environment, testing framework and asset pipeline for pallet-contracts. Redspot is trying to let the development of ink! be projectized and simplify the testing and interacting with contracts. The source code is in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/redspot"},"https://github.com/patractlabs/redspot"),"."),(0,r.kt)("p",null,"Jupiter is a long term Substrate testnet, dedicated in WASM smart contract development. We also host a public node in develop mode for deploying and testing smart contract. The source code is in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/jupiter"},"https://github.com/patractlabs/jupiter"),"."),(0,r.kt)("h2",{id:"redspot-v01-introduction"},"Redspot v0.1 introduction"),(0,r.kt)("p",null,"Except the requirements in the proposal, ",(0,r.kt)("strong",{parentName:"p"},"we have provided an objectified way to operate with contracts, which has not been implemented in Polkadot-js SDK yet"),". For more information, please check out ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/Redspot#contractapi"},"contractApi"),". Most of the requirements are finished, expect some issues because ink! is a little unstable."),(0,r.kt)("p",null,"Redspot's ",(0,r.kt)("inlineCode",{parentName:"p"},"migration")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," can be used just like web3.js. Developer can write scripts like this rather than using raw ",(0,r.kt)("inlineCode",{parentName:"p"},"call")," to build raw extrinsic or RPC parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// contractApi can be obtained by contract.load and contract.deployed, it can call the methods of the contract.\n// It calls the balanceOf method of the contract and returns the corresponding type by rpc.\ncontractApi.messages.balanceOf(Alice.publicKey).call(<option>) \n// It sends a contract transfer to the chain and get a Result type.\ncontractApi.messages.transfer(Bob.publicKey, '100000').send(<option>) \n")),(0,r.kt)("p",null,"And then, We will show you the details about how Redspot works:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/69485494/92663743-34651c00-f356-11ea-8b30-facff1958d04.gif",alt:"how Redspot works"})),(0,r.kt)("p",null,"Currently, Redspot only support macOS and Linux, without Windows (waiting for ink! to support)."),(0,r.kt)("h2",{id:"using-redspot-on-your-computer"},"Using Redspot on your computer"),(0,r.kt)("p",null,"Now, let's assume that you are a new developer for ",(0,r.kt)("inlineCode",{parentName:"p"},"pallet-contracts"),". You know nothing about Substrate, hasn't prepared the developing environment for contracts. But, you had read some guides or cookbooks, and known a little about ink!. Then, you try to write WASM contracts for ",(0,r.kt)("inlineCode",{parentName:"p"},"pallet-contracts"),"."),(0,r.kt)("p",null,"Just follow us to use Redspot and build your own contracts!"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You ",(0,r.kt)("strong",{parentName:"p"},"do not need to clone Redspot project"),", just need to check whether there is a ",(0,r.kt)("inlineCode",{parentName:"p"},"npx")," command on your machine."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"npx")," is a package running tool that comes with ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," 5.2+ and higher, it ensures that you always install the latest version."),(0,r.kt)("p",{parentName:"blockquote"},"if you don't have ",(0,r.kt)("inlineCode",{parentName:"p"},"npx")," command, just do ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install -g npx"))),(0,r.kt)("p",{parentName:"li"},"If you have installed ",(0,r.kt)("inlineCode",{parentName:"p"},"npx"),", you must already have ",(0,r.kt)("inlineCode",{parentName:"p"},"npm"),", or you could install ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn")," command, which is also what we recommend to use.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install and use Redspot to pull a contract project template"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"npx redspot-new \\<app-name",">"," --template \\<template-name",">")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"npx")," would automatically download the newest ",(0,r.kt)("inlineCode",{parentName:"p"},"redspot-now")," on your machine, and could use it in any place. So, you do not need to compile or build Redspot project."),(0,r.kt)("p",{parentName:"li"},"For example, if you want to create a contract project named ",(0,r.kt)("inlineCode",{parentName:"p"},"myerc20")," and use the erc20 template as initial contract project framework, you could use the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx redspot-new myerc20 --template erc20\n")),(0,r.kt)("p",{parentName:"li"},"If you don't add ",(0,r.kt)("inlineCode",{parentName:"p"},"--template"),", Redspot would use ",(0,r.kt)("inlineCode",{parentName:"p"},"flipper")," as default template."),(0,r.kt)("p",{parentName:"li"},"Awesome, the ",(0,r.kt)("inlineCode",{parentName:"p"},"myerc20")," is your own contract project, you could start developing contracts from now!"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx Redspot-new myerc20 --template erc20\nnpx: installed 43 in 2.664s\n   \n\u2728  Creating a new Project in /myerc20.\nInstalling packages. This might take a while.\nyarn add v1.22.5\ninfo No lockfile found.\n[1/4] Resolving packages...\n# ...\nDone in 2.80s.\n   \n\ud83c\udf89  Success! Created myerc20 at /myerc20\n\ud83d\udc49  Inside that directory, you can run several commands to help you develop the contract:\n   \n  yarn build\n    Compile the contract.\n   \n  yarn test\n    Test the contract.\n   \n  yarn Migrate\n    Migrate the contract\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Then, there is a template contract project in you current directory."),(0,r.kt)("p",{parentName:"li"},"The directory structure is similar with the directory that truffle generated, including ",(0,r.kt)("inlineCode",{parentName:"p"},"migartions"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"tests"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Redspot-config.js")," and so on. But currently, We can't support a ",(0,r.kt)("inlineCode",{parentName:"p"},"contracts")," directory due to ",(0,r.kt)("inlineCode",{parentName:"p"},"ink!"),"'s limit. After ",(0,r.kt)("inlineCode",{parentName:"p"},"ink!")," become stable in the future, we will move all the contracts into ",(0,r.kt)("inlineCode",{parentName:"p"},"contracts")," directory and organise contracts. About more information, please refer to this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cargo-contract/issues/60"},"ink Issue"),"."),(0,r.kt)("p",{parentName:"li"},"Same with Truffle, the config file ",(0,r.kt)("inlineCode",{parentName:"p"},"Redspot-config.js")," is the most important file in the project, which would let Redspot to identity the contract project."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If you want to know more about config file, please refer to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/Redspot#project-config"},"Project config"),"."),(0,r.kt)("li",{parentName:"ul"},"For the project structure, please refer to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/Redspot#directory-tree"},"Directory tree"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now, ",(0,r.kt)("inlineCode",{parentName:"p"},"lib.rs")," is your contract file in your directory."),(0,r.kt)("p",{parentName:"li"},"This file will be changed in the future. You can just write you custom contract logic in it. For more information, please refer to ",(0,r.kt)("inlineCode",{parentName:"p"},"ink!"),", and we advice new developers to look through all example in ",(0,r.kt)("inlineCode",{parentName:"p"},"ink!"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Compile your contract!"),(0,r.kt)("p",{parentName:"li"},"In the current directory, you could use those commands to compile you contract:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n# or \nyarn build\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"That means you could use ",(0,r.kt)("inlineCode",{parentName:"em"},"npm run")," or ",(0,r.kt)("inlineCode",{parentName:"em"},"yarn")," to do the same operation. Later, we will use ",(0,r.kt)("inlineCode",{parentName:"em"},"yarn")," to represent all cases for ",(0,r.kt)("inlineCode",{parentName:"em"},"npm run"))),(0,r.kt)("p",{parentName:"li"},"However you may haven't installed contract compile toolchain, then you would get:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm run build\n   \n> myerc20@0.1.0 build /myerc20\n> Redspot build\n   \n/bin/sh: 1: cargo: not found\nERROR: No `cargo-contract` found\nRun the following command to install it:\n$ cargo install --git https://github.com/paritytech/cargo-contract cargo-contract --force\nnpm ERR! code ELIFECYCLE\nnpm ERR! errno 1\nnpm ERR! myerc20@0.1.0 build: `Redspot build`\nnpm ERR! Exit status 1\nnpm ERR! \nnpm ERR! Failed at the myerc20@0.1.0 build script.\nnpm ERR! This is probably not a problem with npm. There is likely additional logging output above.\n   \nnpm ERR! A complete log of this run can be found in:\nnpm ERR!     /root/.npm/_logs/2020-09-11T10_03_43_152Z-debug.log\n")),(0,r.kt)("p",{parentName:"li"},"Currently we just print some errors to advice developers to download toolchain, because ",(0,r.kt)("inlineCode",{parentName:"p"},"ink!")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo-contract")," is not stable now. In the future, we would automatically download all toolchains and install them, without bothering developers."),(0,r.kt)("p",{parentName:"li"},"After installing all toolchains, you could continue following steps."),(0,r.kt)("p",{parentName:"li"},"If compilation is done, you could get the artifacts in ",(0,r.kt)("inlineCode",{parentName:"p"},"artifacts")," directory."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn build\nyarn run v1.22.4\n$ Redspot build\n\u2728  Detect contracts: erc20(/.../.../myerc20/Cargo.toml)\n   \n===== Compile erc20 =====\n   \ncargo +nightly contract build\n [1/3] Building cargo project\n   Compiling serde_derive v1.0.116\n# ...\n   Compiling erc20 v2.1.0 (/tmp/cargo-contract_OOAxF6)\n    Finished release [optimized] target(s) in 14.86s\n [2/3] Post processing wasm file\n [3/3] Optimizing wasm file\n Original wasm size: 59.8K, Optimized: 37.6K\n   \nYour contract is ready. You can find it here:\n/.../.../erc20/target/erc20.wasm\n   \n===== Generate metadata erc20 =====\n   \ncargo +nightly contract generate-metadata\n  Generating metadata\n [1/3] Building cargo project\n    Finished release [optimized] target(s) in 0.03s\n [2/3] Post processing wasm file\n [3/3] Optimizing wasm file\n Original wasm size: 59.8K, Optimized: 37.6K\n    Updating git repository `https://github.com/paritytech/ink`\n    Updating crates.io index\n   Compiling serde v1.0.116\n# ...\n   Compiling metadata-gen v0.1.0 (/tmp/cargo-contract_VQK5N3/.ink/metadata_gen)\n    Finished release [optimized] target(s) in 21.21s\n     Running `target/release/metadata-gen`\n        Your metadata file is ready.\nYou can find it here:\n/.../.../myerc20/target/metadata.json\n   \n\ud83d\ude9a  Copy wasm files: erc20.wasm\n\ud83d\ude9a  Copy abi files: metadata.json\n\ud83c\udf89  Compile successfully! You can find them at /.../.../myerc20/artifacts\n   \nDone in 59.94s.\n")),(0,r.kt)("p",{parentName:"li"},"In our case, the ",(0,r.kt)("inlineCode",{parentName:"p"},"artifacts ")," directory contains:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"artifacts\n    |- erc20.json\n    |- erc20.wasm\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deploy your contracts."),(0,r.kt)("p",{parentName:"li"},"After development, it's time to deploy you contracts. ",(0,r.kt)("strong",{parentName:"p"},"But before your deployment, please checkout ",(0,r.kt)("inlineCode",{parentName:"strong"},"Redspot-config.js")),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  outDir: './artifacts',\n  networks: {\n      // this is the network config, same to truffle, the migaration/test command would connect network dependent on this config.\n    development: {\n        // `types` is related to connected chain, this is important for polkadot.js\n      types: { \n        Address: \"AccountId\",\n        LookupSource: \"AccountId\",\n      },\n        //`prefix` is the ss58check Version for chain address, this would affect the scripts in migrations/tests\n      prefix: 42, \n      endpoints: ['ws://127.0.0.1:9944'], // please check endpoints, it's the websocket address for blockchain\n        // accounts is the key pair for migrations/tests\n      accounts: [\n        {\n          name: 'alice',\n          publicKey: '0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d',\n          secretKey: '0x98319d4ff8a9508c4bb0cf0b5a78d760a0b2082c02775e6e82370816fedfff48925a225d97aa00682d6a59b95b18780c10d7032336e88f3442b42361f4a66011',\n        },\n        // ...\n      ],\n    },\n  },\n};\n")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"networks")," is as same as Truffle, will be used when set ",(0,r.kt)("inlineCode",{parentName:"p"},"--network")," parameter for migaration/test commands."),(0,r.kt)("p",null,"However, developers should be concerned with ",(0,r.kt)("inlineCode",{parentName:"p"},"types")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"prefix"),". Those two parts are related to the connected blockchain. For example, If you want to connect with polkadot mainnet work, you should set ",(0,r.kt)("inlineCode",{parentName:"p"},"types")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")," and set ",(0,r.kt)("inlineCode",{parentName:"p"},"prefix")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," . If you want to connect with a custom Substrate blockchain, I should set ",(0,r.kt)("inlineCode",{parentName:"p"},"types")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"prefix")," to matching value. For the types, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/api/start/types.extend.html"},"this link"),"."),(0,r.kt)("p",null,'We recommend developers to use "',(0,r.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/jupiter"},"Jupiter"),'" as the testnet, because Jupiter contains a node in develop mode, which ',(0,r.kt)("strong",{parentName:"p"},"doesn't need interval time to produce blocks.")," This feature will save lot of time for developing contracts."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: if you use Jupiter as the testnet, please make sure the ",(0,r.kt)("inlineCode",{parentName:"p"},"types")," is the correct json.")),(0,r.kt)("p",null,"If we assume the node is running on your machine, now you could deploy the myerc20 contract by doing ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn migarate"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn migrate\nyarn run v1.22.4\n$ Redspot migrate\n\ud83d\udc49  Running migration: 1_deploy_contracts.js\n\n===== PutCode erc20 =====\nWasmCode: 0x0061736d01000000015f1060027f7f......000006000000070041b080040b0102\n\u27a4 erc20 codeHash: 0x9e05d9d5119b97343e69ed8ca68182639242c278ba04a753c36eeb44ba760fb1\n\n===== Instantiate erc20 =====\nEndowment:   50000000000\nGasRequired: 100000000000\nCodeHash:    0x9e05d9d5119b97343e69ed8ca68182639242c278ba04a753c36eeb44ba760fb1\nInputData:   80,65,230,145,252,0,0,100,167,179,182,224,13,0,0,0,0,0,0,0,0\n\u27a4 erc20 contract address: 5D2z2wBACmwVCFBzSGjWbEhtQnxQuFiJNXoEJZeMyzeDd1rk\nDone in 1.73s.\n")),(0,r.kt)("p",null,"Please notice that this command would automatically find the WASM file in ",(0,r.kt)("inlineCode",{parentName:"p"},"artifacts ")," directory, find the deploy script in ",(0,r.kt)("inlineCode",{parentName:"p"},"migarations")," directory, and executive it. The node where the WASM would be deployed is the ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"Redspot-config.js")," file."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Test your contracts."),(0,r.kt)("p",{parentName:"li"},"The most important thing in contract development is testing. ",(0,r.kt)("inlineCode",{parentName:"p"},"ink!")," has already provided a way to write unit case to test contracts. However, simple unit test can't cover many complex situations, like multiple contracts project, the contracts related to block height, and so on. Thus, there must be a way for integration testing."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"yarn test")," is the command for contract integration test. It would execute all scripts in ",(0,r.kt)("inlineCode",{parentName:"p"},"tests")," directory."),(0,r.kt)("p",{parentName:"li"},"Please notice that the default logic for contract address determiner is currently dependent on ",(0,r.kt)("inlineCode",{parentName:"p"},"code_hash"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"data_hash")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"origin")," (refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/blob/master/frame/contracts/src/lib.rs#L389"},(0,r.kt)("inlineCode",{parentName:"a"},"SimpleAddressDeterminer")),"), so that ",(0,r.kt)("strong",{parentName:"p"},"using same code and same init data from same sender")," could only ",(0,r.kt)("inlineCode",{parentName:"p"},"instantiate")," ",(0,r.kt)("strong",{parentName:"p"},"once")," for a contract, so that the testing scripts should be careful to handle ",(0,r.kt)("inlineCode",{parentName:"p"},"instantiate"),"(meaning deploy a contract) , like using different sender in different tests or using same deployed contract address when the contract could call more than once."),(0,r.kt)("p",{parentName:"li"},"Redspot hasn't implemented the same feature yet, which is like ",(0,r.kt)("inlineCode",{parentName:"p"},"migration.sol")," in truffle, so Redspot can't automatically distinguish whether current contract has already been deployed. In the future, we would support this feature to help testing and instantiating (deploying)."),(0,r.kt)("p",{parentName:"li"},"But now, if the tests are not complex, developers could start blockchain node using ",(0,r.kt)("inlineCode",{parentName:"p"},"--tmp")," parameter. This parameter would start new chain without old data, thus developers could restart the blockchain node each time when they test.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"objectified way to operate contracts"),(0,r.kt)("p",{parentName:"li"},"Developer could use an objectified way to operate contracts in ",(0,r.kt)("inlineCode",{parentName:"p"},"migarate")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," scripts. In the future, this feature could be used in interactive console. Currently, we show an example like this:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// load contractApi from artifacts, this would auto parse information from contract abi file\nconst erc20 = artifacts.require('erc20');\ntest('contract test', async () => {\n  const Alice = config.pairs[0];\n  const Bob = config.pairs[1];\n  // call put_code in low level (note currently if upload same code would not cause extrinsic failed)\n  const code_hash = await erc20.putCode(Alice);\n  const erc20Api = await erc20.deployed(\n    Alice,\n    code_hash,\n    erc20.abi.constructors[0]('1000000000000000016'), // instantiate parameters \n    \"50000000000\", // endowment\n    \"100000000000\"  // gas limit\n  );\n    \n  // call rpc `call` to run contracts and get value\n  const totalSupply = await erc20Api.messages.totalSupply().call();\n  // create an extrinsic and wait to block to pack and return the result of extrinsic result.\n  const transferResult = await erc20Api.messages.transfer(Bob.publicKey, '100000').send({\n    from: Alice,\n    gasLimit:\"100000000000\",\n  });\n}\n")),(0,r.kt)("p",null,"From the example, we could see that developers do not need to care about how to parse ABI files and build call parameters, just operate a contract like an object."),(0,r.kt)("h2",{id:"what-we-have-done-in-this-version"},"What we have done in this version"),(0,r.kt)("p",null,"As we described above, we have implemented all features required in the proposal. Except some issues due to the unstable ",(0,r.kt)("inlineCode",{parentName:"p"},"ink!"),". Redspot could achieve a basic contract developing framework like how Truffle does in Ethereum. Maybe some features need to be improved. But currently, Redspot is a complete tool framework which could help developers to improve developing process for contracts."),(0,r.kt)("p",null,"We hope all contract developers could benefit from Redspot!"),(0,r.kt)("h2",{id:"what-features-we-will-add-in-the-next-proposals"},"What features we will add in the next proposals"),(0,r.kt)("p",null,"We will apply a new detailed proposal for ",(0,r.kt)("strong",{parentName:"p"},"Redspot v0.2"),". Briefly, we will add a migrations framework to control whether a contracts has beed deployed. We will find a way to solve repeat instantiate and do not need to restart the blockchain. We will provide an interactive console for directly interact with contract."),(0,r.kt)("p",null,"We will apply a new detailed proposal for ",(0,r.kt)("strong",{parentName:"p"},"Europa v0.1")," (firstly introduced in ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/post/15"},"Post #15"),'). Europa is a sandbox of Substrate runtime environment, which would be used to simplify the developing, debugging, and integration test when developers develop Substrate runtime applications and test pallet-contracts. We will provide an independent runtime execution environment, allowing developers to use some special operation to operate the blockchain, like "jump to height" and "revert to height". We will provide an independent database for blockchain to establish other indexes, like index for extrinics. We will export stored key/value directly.'))}m.isMDXComponent=!0}}]);