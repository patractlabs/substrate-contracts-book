"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[4356],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7871:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],c={},l="Europa tutorial",s={unversionedId:"europa/tutorial",id:"europa/tutorial",isDocsHomePage:!1,title:"Europa tutorial",description:"Background Information",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/europa/tutorial.md",sourceDirName:"europa",slug:"/europa/tutorial",permalink:"/substrate-contracts-book/en/europa/tutorial",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/europa/tutorial.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"What is Europa\uff1f",permalink:"/substrate-contracts-book/en/europa/introduction"},next:{title:"Europa contract execution log analysis",permalink:"/substrate-contracts-book/en/europa/execution_info"}},u=[{value:"Background Information",id:"background-information",children:[]},{value:"Set up a development environment",id:"set-up-a-development-environment",children:[]},{value:"Deployment contract",id:"deployment-contract",children:[]},{value:"Analyze the log",id:"analyze-the-log",children:[]},{value:"Contract execution log",id:"contract-execution-log",children:[]},{value:"How to identify the required log in Europa when sending a request using apps?",id:"how-to-identify-the-required-log-in-europa-when-sending-a-request-using-apps",children:[]},{value:"wasmi panic backtrace",id:"wasmi-panic-backtrace",children:[]},{value:"Custom ChainExtensions",id:"custom-chainextensions",children:[{value:"ink logger",id:"ink-logger",children:[]},{value:"ZKP feature",id:"zkp-feature",children:[]}]}],p={toc:u};function d(e){var t=e.components,c=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"europa-tutorial"},"Europa tutorial"),(0,r.kt)("h2",{id:"background-information"},"Background Information"),(0,r.kt)("p",null,"Europa is a simulated node sandbox environment with contract functions. Its interfaces (mainly RPC) are compatible with most third-party tools, so Europa can be regarded as an independent node for operation."),(0,r.kt)("h2",{id:"set-up-a-development-environment"},"Set up a development environment"),(0,r.kt)("p",null,"Europa's environment is roughly the same as that of normal use of node debugging contracts. The only difference is that if you need to print Wasm's backtrace, you need to use a fork version of cargo-contract provided by Patract until the official cargo-contract merges the functions submitted by Patract. If you don't need to print the Wasm backtract when the contract execution crashes, just use the official cargo-contract."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Compile and run Europa node"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone --recurse-submodules https://github.com/patractlabs/europa.git\n## or do following commands\n$ git clone https://github.com/patractlabs/europa.git\n$ cd europa/vendor\n$ git submodule update --init --recursive\n")))),(0,r.kt)("p",null,"You can also install Europa directly using ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo install"),", but you need to add ",(0,r.kt)("inlineCode",{parentName:"p"},"--locked")," to use the Substrate version that Europa currently depends on."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cargo install europa --git=https://github.com/patractlabs/europa.git --force --locked\n")),(0,r.kt)("p",null,"Run Europa"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./target/release/europa --log=runtime=debug -d ./europa_database\n# If there is no need to retain data, you can also use `--tmp` to run Europa\n$ ./target/release/europa --log=runtime=debug --tmp\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install PatractLabs's cargo-contract (optional, only needed if the Wasm contract executes the backtrace when it crashes)",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cargo install cargo-contract --git https://github.com/patractlabs/cargo-contract --branch=tag-v0.12.0 --force\n")))),(0,r.kt)("p",null,"If you have already installed the official cargo-contract and do not want to overwrite the installation, you can take the way of  manual compilation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/patractlabs/cargo-contract --branch=v0.10.0\n$ cd cargo-contract\n$ cargo build --release\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Compile the contract")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--debug")," option is provided by the cargo-contract of Patract. If the official cargo-contract is used, the ",(0,r.kt)("inlineCode",{parentName:"p"},"--debug "),"option is not required in the following execution commands."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cargo-contract build --debug\n# or\n$ cargo +nightly contract build --debug\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-d/--debug")," can replace the original ",(0,r.kt)("inlineCode",{parentName:"p"},"*.wasm")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"*.contract  "),"files in the ",(0,r.kt)("inlineCode",{parentName:"p"},"target/ink")," directory. The replaced Wasm and Contract files close the code optimization conditions during the compilation process, and include the name section part, used to help analyze Wasm call stack information."),(0,r.kt)("p",null,"If the cargo-contract in the Patract repository is not used when compiling the contract, and the contract is compiled with the ",(0,r.kt)("inlineCode",{parentName:"p"},"-d/--debug")," parameter, if a Wasm panic occurs during the execution of the contract, the following log information may appear."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wasm_error: Error::WasmiExecution(Trap(Trap { kind: Unreachable }))\n   wasm backtrace:\n   |  <unknown>[...]\n   |  <unknown>[...]\n   \u2570\u2500><unknown>[...]\n")),(0,r.kt)("p",null,"The compiled file generated after adding ",(0,r.kt)("inlineCode",{parentName:"p"},"-d/--debug")," is generally several hundred times the original file. Because the new file is not optimized, and a lot of debugging information is retained. Therefore, you can roughly judge whether it is a file generated after adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"-d/--debug")," option by the file size."),(0,r.kt)("h2",{id:"deployment-contract"},"Deployment contract"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"https://redspot.patract.io/zh-CN/tutorial/"},"Redspot")," or ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/explorer"},"Substrate Protal")," to deploy contracts."),(0,r.kt)("p",null,"The extending types of Europa are as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "LookupSource": "MultiAddress",\n  "Address": "MultiAddress"\n}\n')),(0,r.kt)("p",null,"For example, use Redspot to deploy, use apps to execute transactions and view status."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use Redspot to deploy a contract."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx redspot run scripts/deploy.js\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Obtain the successfully deployed contract address and add an existing contract to apps."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(5275).Z})))),(0,r.kt)("h2",{id:"analyze-the-log"},"Analyze the log"),(0,r.kt)("p",null,"During the process of deploying and executing the contract with Europa, detailed logs will be printed, and you can quickly locate problems in the contract based on these logs. Through these logs, the execution process of the contract is no longer a black box."),(0,r.kt)("p",null,"An example of log printing is as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"1: NestedRuntime {\n    ext_result: [success] ExecReturnValue { flags: 0, data:  },\n    caller: d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d (5GrwvaEF...),\n    self_account: 0144d6fc570d7bddda6f8e36141f179cd172324599b556ef514193f3105865f6 (5C6NMXaS...),\n    selector: 0x9bae9d5e,\n    args: 0x40420f00000000000000000000000000,\n    value: 10000000000000000,\n    gas_limit: 200000000000,\n    gas_left: 190018947968,\n    env_trace: [\n        seal_input(Some(0x9bae9d5e40420f00000000000000000000000000)),\n        seal_caller(Some(0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d)),\n        ...\n       seal_set_storage((Some(0x0300000001000000000000000000000000000000000000000000000000000000), Some(0x000000000000000000000000))),\n    ],\n    sandbox_result_ok: Value(\n        I32(\n            0,\n        ),\n    ),\n    nest: [],\n}\n")),(0,r.kt)("h2",{id:"contract-execution-log"},"Contract execution log"),(0,r.kt)("p",null,"According to the above log content, the following information can be analyzed."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ext_result"),"\uff1aThe execution result of contract call execution (through transaction call and RPC call belong to contract call)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"caller"),"\uff1aThe public key of the caller, and the contract calling contract is the public key of the parent contract (consistent with the EVM model)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"self_account"),"\uff1aThe address of this contract."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"selector"),": The selector of the called method can be used to judge which method of the contract this call is based on this attribute."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"args"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"value"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"gas_limit"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"gas_limit"),"\uff1aThe related parameters and gas consumption of this execution are indicated."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"env_trace\u3001sandbox_result_ok"),"\uff1aThe interaction information between contract Wasm execution and pallet-contracts, and the final result of Wasm executor (Wasm executor result and contract execution result are different concepts)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nest"),"\uff1aDescribes the relationship between the contract calling the contract. Since this is empty, it appears that this call only involves the execution of one contract. See the following text for details.")),(0,r.kt)("p",null,"According to the contract log provided by Europa, you can see the detailed process of a contract call. If you have a good understanding of the contract module pallet-contracts, you can get a lot of important debugging information to assist in locating contract problems. If you don't know much about the contract module, information such as selector, caller, nest can also be of great help to you, reducing the time to debug the contract."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note")," When viewing messages in contracts on apps, apps will automatically call the read-only messages of the contract to obtain some values of the current contract, causing Europa to display some logs of read calls, which interferes with normal judgment. So you need to distinguish clearly which piece of log is what you need. If you use a third-party client whose sending request can be controlled by itself, there is no concern in this regard."),(0,r.kt)("h2",{id:"how-to-identify-the-required-log-in-europa-when-sending-a-request-using-apps"},"How to identify the required log in Europa when sending a request using apps?"),(0,r.kt)("p",null,"There is a ",(0,r.kt)("inlineCode",{parentName:"p"},"selector")," field under the ",(0,r.kt)("inlineCode",{parentName:"p"},"NestedRuntime {}")," block, which indicates the selector used for this contract execution. You can find out what the selector corresponding to the currently called method name is in the ",(0,r.kt)("inlineCode",{parentName:"p"},"messages")," section of metadata.json. The example is as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"messages": [\n    {\n      "name": [\n        "flip"\n      ],\n      "selector": "0x633aa551"\n    }\n]\n')),(0,r.kt)("p",null,"Therefore, the selector field can be compared with the selector in the log to judge the part of the log corresponding to the current contract call issued through apps."),(0,r.kt)("h2",{id:"wasmi-panic-backtrace"},"wasmi panic backtrace"),(0,r.kt)("p",null,"Suppose the method of writing a contract in ink! is as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[ink(message)]\npub fn transfer(&mut self, to: AccountId, value: Balance) -> Result<()> {\n    let from = self.env().caller();\n    self.transfer_from_to(from, to, value)?;\n    panic!("123");\n    Ok(())\n}\n')),(0,r.kt)("p",null,"When this method is called, the following log will be printed in Europa."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'1: NestedRuntime {\n        ext_result: [failed] ExecError { error: DispatchError::Module {index:5, error:17, message: Some("ContractTrapped"), orign: ErrorOrigin::Caller }}\n    caller: d43593c715fdd31c61141abd04a99fd6822...(5GrwvaEF...),\n    self_account: b6484f58b7b939e93fff7dc10a654af7e.... (5GBi41bY...),\n    selector: 0xfae3a09d,\n    args: 0x1cbd2d43530a44705ad088af313e18f80b5....,\n    value: 0,\n    gas_limit: 409568000000,\n    gas_left: 369902872067,\n    env_trace: [\n        seal_value_transferred(Some(0x00000000000000000000000000000000)),\n        seal_input(Some(0xfae3a09d1cbd.....)),\n        seal_get_storage((Some(0x0100000000000....), Some(0x010000000100000001000000))),\n        # ...\n        seal_caller(Some(0xd43593c715fdd31c61141abd...)),\n        seal_hash_blake256((Some(0x696e6b20686173....), Some(0x0873b31b7a3cf....))),\n              # ...  \n        seal_deposit_event((Some([0x45726332303a....00000000000]), Some(0x000..))),\n    ],\n        trap_reason: TrapReason::SupervisorError(DispatchError::Module { index: 5, error: 17, message: Some("ContractTrapped") }),\n    wasm_error: Error::WasmiExecution(Trap(Trap { kind: Unreachable }))\n        wasm backtrace: \n        |  core::panicking::panic[28]\n        |  erc20::erc20::_::<impl erc20::erc20::Erc20>::transfer[1697]\n        |  <erc20::erc20::_::__ink_Msg<[(); 2644567034]> as ink_lang::traits::MessageMut>::CALLABLE::{{closure}}[611]\n        |  core::ops::function::FnOnce::call_once[610]\n        |  <erc20::erc20::_::_::__ink_MessageDispatchEnum as ink_lang::dispatcher::Execute>::execute::{{closure}}[1675]\n        |  ink_lang::dispatcher::execute_message_mut[1674]\n        |  <erc20::erc20::_::_::__ink_MessageDispatchEnum as ink_lang::dispatcher::Execute>::execute[1692]\n        |  erc20::erc20::_::<impl ink_lang::contract::DispatchUsingMode for erc20::erc20::Erc20>::dispatch_using_mode[1690]\n        |  call[1691]\n        \u2570\u2500><unknown>[2387]\n    ,\n    nest: [],\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note")," The current contract needs to use Patract's ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo-contract")," to print Wasm's Backtrace."),(0,r.kt)("p",null,"From Europa's log, the following calling process can be analyzed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"call -> dispatch_using_mode -> ... -> transfer -> panic \n")),(0,r.kt)("p",null,"Therefore, you can locate the cause of the panic because of the panic in the transfer function."),(0,r.kt)("h2",{id:"custom-chainextensions"},"Custom ChainExtensions"),(0,r.kt)("h3",{id:"ink-logger"},"ink logger"),(0,r.kt)("p",null,"Check the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/ink-log"},"ink-log"),"\u3002"),(0,r.kt)("h3",{id:"zkp-feature"},"ZKP feature"),(0,r.kt)("p",null,"Check the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/zkmega"},"zkMega"),"\uff0cFor examples of related contracts, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/metis/tree/master/groth16"},"metis/groth16"),"\u3002"))}d.isMDXComponent=!0},5275:function(e,t,n){t.Z=n.p+"assets/images/add_exist-236e3426ea4edd13a83ee96fac886ca5.png"}}]);