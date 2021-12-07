"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[7601],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8203:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={},c="Europa CLI",s={unversionedId:"europa/intro/europa-cli",id:"europa/intro/europa-cli",isDocsHomePage:!1,title:"Europa CLI",description:"Setup environment",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/europa/intro/europa-cli.md",sourceDirName:"europa/intro",slug:"/europa/intro/europa-cli",permalink:"/substrate-contracts-book/en/europa/intro/europa-cli",editUrl:"https://github.com/patractlabs/substrate-contracts-book/edit/master/docs/europa/intro/europa-cli.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Europa UI",permalink:"/substrate-contracts-book/en/europa/intro/europa-ui"},next:{title:"Architeture",permalink:"/substrate-contracts-book/en/europa/guides/architecture"}},p=[{value:"Setup environment",id:"setup-environment",children:[]},{value:"Install Europa",id:"install-europa",children:[]},{value:"Start Europa CLI",id:"start-europa-cli",children:[]},{value:"Install Cargo Contract",id:"install-cargo-contract",children:[]},{value:"Compile the contract with debug info",id:"compile-the-contract-with-debug-info",children:[]},{value:"Deploy contract to Europa",id:"deploy-contract-to-europa",children:[]},{value:"Decode the log",id:"decode-the-log",children:[]},{value:"How to identify which contract function<code>selector</code> refers to?",id:"how-to-identify-which-contract-functionselector-refers-to",children:[]},{value:"Wasmtime panic backtrace",id:"wasmtime-panic-backtrace",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"europa-cli"},"Europa CLI"),(0,o.kt)("h2",{id:"setup-environment"},"Setup environment"),(0,o.kt)("p",null,"Europa's environment is the same as any other Substrate Projects. Please follow the official ",(0,o.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/getting-started/"},"instruction")," on Substrate Dev Hub to setup the required enviroment."),(0,o.kt)("h2",{id:"install-europa"},"Install Europa"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cargo install europa --git=https://github.com/patractlabs/europa.git --force --locked\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"NOTE")," "),(0,o.kt)("p",null,"ink! Stabilize ",(0,o.kt)("inlineCode",{parentName:"p"},"seal_debug_message")," after pr ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/commit/fdae16d7a9384ae4d475b99a7d86f72e1927e665"},"paritytech/ink#902"),". Thus, if use the ink! which after this commit, the pallet-contracts should support stable seal_debug_message either. "),(0,o.kt)("p",null,"To use ink! supports ",(0,o.kt)("inlineCode",{parentName:"p"},"seal_debug_message"),", making sure running Europa >= v0.3.4 or node will report ",(0,o.kt)("inlineCode",{parentName:"p"},"Error: Other"),". Otherwise, use Europa <= v0.3.3"),(0,o.kt)("h2",{id:"start-europa-cli"},"Start Europa CLI"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ europa --log=runtime=debug -d ./europa_database\n# If there is no need to retain data, you can also use `--tmp` to run Europa\n$ europa --log=runtime=debug --tmp\n")),(0,o.kt)("p",null,"You should see the following output from CLI once Europa is started:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ europa --log=runtime=debug -d ./europa_database\n2021-09-12 20:07:32.201  INFO main ec_cli::runner: Europa Dev Node    \n2021-09-12 20:07:32.201  INFO main ec_cli::runner: \u270c\ufe0f  version 0.3.4-031c246-x86_64-linux-gnu    \n2021-09-12 20:07:32.201  INFO main ec_cli::runner: \u2764\ufe0f  by patract labs <https://github.com/patractlabs>, 2020-2021    \n2021-09-12 20:07:32.201  INFO main ec_cli::runner: \ud83d\udccb Chain specification: Development    \n2021-09-12 20:07:32.201  INFO main ec_cli::runner: \ud83d\udcbe Database: RocksDb at ./europa_database/default/chains/dev/db    \n2021-09-12 20:07:32.201  INFO main ec_cli::runner: \ud83d\udcd6 Workspace: default | Current workspace list: ["default"]    \n2021-09-12 20:07:32.201  INFO main ec_cli::runner: \u26d3  Native runtime: europa-4 (europa-1.tx1.au1)    \n2021-09-12 20:07:32.258  INFO main ec_service::builder: \ud83d\udce6 Highest known block at #0    \n2021-09-12 20:07:32.259  INFO main parity_ws: Listening for new connections on 127.0.0.1:9944.  \n')),(0,o.kt)("h2",{id:"install-cargo-contract"},"Install Cargo Contract"),(0,o.kt)("p",null,"Please follow the official ",(0,o.kt)("a",{parentName:"p",href:"https://substrate.dev/substrate-contracts-workshop/#/0/setup"},"instruction")," on Ink! to install Cargo Contract"),(0,o.kt)("h2",{id:"compile-the-contract-with-debug-info"},"Compile the contract with debug info"),(0,o.kt)("p",null,"Europa provides more detailed log than default Substrate Chain. However, the compilation process is a litlle different."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cargo +nightly contract build --keep-debug-symbols --optimization-passes=0\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--keep-debug-symbols --optimization-passes=0")," replaces the original ",(0,o.kt)("inlineCode",{parentName:"p"},"*.wasm")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"*.contract  "),"files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"target/ink")," directory. It disables code optimization during compilation and includes the name section part to help analyze Wasm call stack information."),(0,o.kt)("p",null,"The compiled file with ",(0,o.kt)("inlineCode",{parentName:"p"},"--keep-debug-symbols --optimization-passes=0")," is much larger than the original file, because the new file is not optimized and retaines a lot of debugging information. Therefore, you can roughly judge whether this contract file contains debugging information by the file size."),(0,o.kt)("h2",{id:"deploy-contract-to-europa"},"Deploy contract to Europa"),(0,o.kt)("p",null,"We suggest using our ",(0,o.kt)("a",{parentName:"p",href:"../../redspot/intro/quick-start"},"Redspot")," development suites for better contract deployment experience.\nYou can use ",(0,o.kt)("a",{parentName:"p",href:"https://redspot.patract.io/zh-CN/tutorial/"},"Redspot")," or ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/explorer"},"Substrate Protal")," to deploy contracts."),(0,o.kt)("p",null,"The extending types of Europa are as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "LookupSource": "MultiAddress",\n  "Address": "MultiAddress"\n}\n')),(0,o.kt)("p",null,"First, follow the instruction on ",(0,o.kt)("a",{parentName:"p",href:"../../redspot/intro/quick-start"},"Redspot")," to setup a Redspot Project"),(0,o.kt)("p",null,"Once you are in the Redspot project directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd contract\n$ cargo +nightly contract build --keep-debug-symbols --optimization-passes=0\n")),(0,o.kt)("p",null,"To use Redspot default script for deployment, we need to copy the contract files to dir ",(0,o.kt)("inlineCode",{parentName:"p"},"artifacts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ mkdir ../artifacts\n$ cp ./target/ink/erc20.contract ../artifacts/\n\n# *notice*: must rename metadata.json to erc20.json\n$ cp ./target/ink/metadata.json ../artifacts/erc20.json \n")),(0,o.kt)("p",null,"Finally, deploy the project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cd ../\n$ npx redspot run scripts/deploy.ts --no-compile\n")),(0,o.kt)("h2",{id:"decode-the-log"},"Decode the log"),(0,o.kt)("p",null,"When deploying or executing contract using Europa, detailed logs will be printed to allow developers quickly locate problems in the contract based on these logs.\nAn example of log printing is as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"1: NestedRuntime {\n    ext_result: [success] ExecReturnValue { flags: 0, data:  },\n    caller: d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d (5GrwvaEF...),\n    self_account: 0144d6fc570d7bddda6f8e36141f179cd172324599b556ef514193f3105865f6 (5C6NMXaS...),\n    selector: 0x9bae9d5e,\n    args: 0x40420f00000000000000000000000000,\n    value: 10000000000000000,\n    gas_limit: 200000000000,\n    gas_left: 190018947968,\n    env_trace: [\n        seal_input(Some(0x9bae9d5e40420f00000000000000000000000000)),\n        seal_caller(Some(0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d)),\n        ...\n       seal_set_storage((Some(0x0300000001000000000000000000000000000000000000000000000000000000), Some(0x000000000000000000000000))),\n    ],\n    sandbox_result_ok: Value(\n        I32(\n            0,\n        ),\n    ),\n    nest: [],\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ext_result"),"\uff1aThe execution result of contract call execution (through transaction call and RPC call belong to contract call)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"caller"),"\uff1aThe public key of the caller, and the contract calling contract is the public key of the parent contract (consistent with the EVM model)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"self_account"),"\uff1aThe address of this contract."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"selector"),":Which method of contract is called upon"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"args"),"\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"value"),": related parameters of this contract call"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"gas_limit"),"\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"gas_left"),"\uff1agas consumption"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"env_trace"),"\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"sandbox_result_ok"),"\uff1aTracing interaction between contract Wasm execution and ",(0,o.kt)("inlineCode",{parentName:"li"},"pallet-contracts"),", "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sandbox_result_ok"),": The final result of Wasm executor (Wasm executor result and contract execution result are different)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nest"),"\uff1aDescribes the nested relationship when contract calling another contract. Since this is empty, it appears that this call only involves the execution of one contract. See the following text for details.")),(0,o.kt)("p",null,"For more detailed explaination, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/substrate-contracts-book/en/europa/guides/contract-log"},"Europa Execution Log")),(0,o.kt)("p",null,"Through Europa's contract log, you can inspect the details of what happened during a contract call."),(0,o.kt)("p",null," With a good understanding of the contract module pallet-contracts, you can grab a lot of useful debugging information to assist in locating contract errors. Even you are unfamiliar with pallet-contracts, information such as ",(0,o.kt)("inlineCode",{parentName:"p"},"selector"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"caller"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"nest")," can also bring great help to debug contracts."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")," When inspecting contracts using RPC, it will automatically call the read-only methods of the contract to obtain values, causing Europa to display some logs of read-only rpc calls, which may interfere normal judgment. So making sure distinguish clearly which piece of log is what you need. If you use a third-party client fully controls the calls it made, this shouldnt be the concern."),(0,o.kt)("h2",{id:"how-to-identify-which-contract-functionselector-refers-to"},"How to identify which contract function",(0,o.kt)("inlineCode",{parentName:"h2"},"selector")," refers to?"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"selector")," field under the ",(0,o.kt)("inlineCode",{parentName:"p"},"NestedRuntime {}")," block indicates the selector used for contract execution. You can find out which contract function the ",(0,o.kt)("inlineCode",{parentName:"p"},"selector")," refers to in the ",(0,o.kt)("inlineCode",{parentName:"p"},"messages")," section of ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata.json")," generated by cargo-contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"messages": [\n    {\n      "name": [\n        "flip"\n      ],\n      "selector": "0x633aa551"\n    }\n]\n')),(0,o.kt)("p",null,"Therefore, by comparing ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata.json"),", you are able to locate the coresponding contract function.  "),(0,o.kt)("h2",{id:"wasmtime-panic-backtrace"},"Wasmtime panic backtrace"),(0,o.kt)("p",null,"Suppose following contract method written in ink!:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[ink(message)]\npub fn transfer(&mut self, to: AccountId, value: Balance) -> Result<()> {\n    let from = self.env().caller();\n    self.transfer_from_to(from, to, value)?;\n    panic!("123");\n    Ok(())\n}\n')),(0,o.kt)("p",null,"When this method is called, the following log will be printed in Europa."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'1: NestedRuntime {\n        trap_reason: TrapReason::SupervisorError(DispatchError::Module { index: 5, error: 17, message: Some("ContractTrapped") }),\n    wasm_error: Error::WasmiExecution(Trap(Trap { kind: Unreachable }))\n        wasm backtrace: \n        |  core::panicking::panic[28]\n        |  erc20::erc20::_::<impl erc20::erc20::Erc20>::transfer[1697]\n        |  <erc20::erc20::_::__ink_Msg<[(); 2644567034]> as ink_lang::traits::MessageMut>::CALLABLE::{{closure}}[611]\n        |  core::ops::function::FnOnce::call_once[610]\n        |  <erc20::erc20::_::_::__ink_MessageDispatchEnum as ink_lang::dispatcher::Execute>::execute::{{closure}}[1675]\n        |  ink_lang::dispatcher::execute_message_mut[1674]\n        |  <erc20::erc20::_::_::__ink_MessageDispatchEnum as ink_lang::dispatcher::Execute>::execute[1692]\n        |  erc20::erc20::_::<impl ink_lang::contract::DispatchUsingMode for erc20::erc20::Erc20>::dispatch_using_mode[1690]\n        |  call[1691]\n        \u2570\u2500><unknown>[2387]\n    ,\n    nest: [],\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")," ",(0,o.kt)("inlineCode",{parentName:"p"},"--keep-debug-symbols --optimization-passes=0")," parameters need to be placed when using ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo +nightly contract build")," to enable backtrace."),(0,o.kt)("p",null,"From Europa's log, the order of execution is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"call -> dispatch_using_mode -> ... -> transfer -> panic \n")),(0,o.kt)("p",null,"Europa, together with debug option enabled when compiling,"))}d.isMDXComponent=!0}}]);