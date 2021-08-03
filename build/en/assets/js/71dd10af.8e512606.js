"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4896],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(a),u=n,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||r;return a?o.createElement(m,i(i({ref:t},p),{},{components:a})):o.createElement(m,i({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<r;l++)i[l]=a[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7992:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var o=a(7462),n=a(3366),r=(a(7294),a(3905)),i=["components"],c={},s=void 0,l={unversionedId:"europa/reports/v0.3Report",id:"europa/reports/v0.3Report",isDocsHomePage:!1,title:"v0.3Report",description:"Report for Europa v0.3",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/europa/reports/v0.3Report.md",sourceDirName:"europa/reports",slug:"/europa/reports/v0.3Report",permalink:"/en/europa/reports/v0.3Report",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/europa/reports/v0.3Report.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"v0.2Report",permalink:"/en/europa/reports/v0.2Report"},next:{title:"zkMega",permalink:"/en/zkmega/introduction"}},p=[{value:"Report for Europa v0.3",id:"report-for-europa-v03",children:[]},{value:"Introduction",id:"introduction",children:[{value:"Summary of Europa&#39;s v0.3 plan:",id:"summary-of-europas-v03-plan",children:[]}]},{value:"Feature",id:"feature",children:[{value:"1. Executable files for windows, macOS, and Ubuntu platforms",id:"1-executable-files-for-windows-macos-and-ubuntu-platforms",children:[]},{value:"2. Start Europa&#39;s related configuration",id:"2-start-europas-related-configuration",children:[]},{value:"3. Feature of Europa-UI",id:"3-feature-of-europa-ui",children:[]}]},{value:"Verification",id:"verification",children:[]}],h={toc:p};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"report-for-europa-v03"},"Report for Europa v0.3"),(0,r.kt)("p",null,"Patract applied the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/treasury/49"},"treasury proposal #49")," for Europa v0.3 , and now we have finished the development at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/europa"},"Europa")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/europa-ui"},"Europa-UI"),". From now on, Europa has been in production level and most of the planned features are delivered."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Europa is kind of another implementation for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/tree/master/client"},"Substrate client"),' in our design. We know that the runtime of a blockchain is the business logic that defines its behavior, and the Substrate runtime need to run by an executor and environment. So that we design the executor and environment more like a "sandbox" to run a Substrate runtime.'),(0,r.kt)("p",null,"In v0.3, Europa\u2019s main goal is to improve the ease of use for developers to use Europa. This version provides a relatively complete front-end interface for analyzing and displaying the details of Europa\u2019s execution of the contract, strengthening the collaboration with other Patract tools, and Provides pre-packaged executable programs for windows, macOS, and Ubuntu platforms. Developers no longer need to build a complex node environment for developing and debugging contracts, but directly download the execution program of the corresponding platform to use."),(0,r.kt)("h3",{id:"summary-of-europas-v03-plan"},"Summary of Europa's v0.3 plan:"),(0,r.kt)("p",null,"The work of Europa v0.3 will be divided into two parts: Europa on the node side and Europa-UI on the UI side. In the following text, Europa is used to represent Europa's node, and Europa-UI represents the product UI work in v0.3."),(0,r.kt)("blockquote",null,(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"Europa-UI: Design and implement UI components and logic for contract functions and Europa functions:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Strengthen functions related to contract logic:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Visualization of contract execution process information;"),(0,r.kt)("li",{parentName:"ol"},"Construct the contract, the relationship between the transaction and the user;"),(0,r.kt)("li",{parentName:"ol"},"Scan the contract code and contract instance on the current chain, build an association relationship with the metadata of the contract, and analyze the attached contract information."))),(0,r.kt)("li",{parentName:"ol"},"Strengthen the relationship with Europa and Redspot tools",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Combine Europa's workspace to divide the workspace;"),(0,r.kt)("li",{parentName:"ol"},"Combine Europa's special RPC calls with UI;"),(0,r.kt)("li",{parentName:"ol"},"Show the state changes in each transaction;"),(0,r.kt)("li",{parentName:"ol"},"Link to the Redspot project and import the contract information of the Redspot project."))))),(0,r.kt)("li",{parentName:"ol"},"Europa:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Refactor part of the node's functions according to Europa-UI's needs, persist the required information and provide the corresponding rpc to Europa-UI"),(0,r.kt)("li",{parentName:"ol"},"Upgrade Europa's ",(0,r.kt)("inlineCode",{parentName:"li"},"pallet-contracts")," module to the latest version and migrate historical changes"))),(0,r.kt)("li",{parentName:"ol"},"Combine Europa and Europa-UI to make binary packages of different platforms for distribution."))),(0,r.kt)("h2",{id:"feature"},"Feature"),(0,r.kt)("p",null,"In 0.3, all completed functions are as follows:"),(0,r.kt)("h3",{id:"1-executable-files-for-windows-macos-and-ubuntu-platforms"},"1. Executable files for windows, macOS, and Ubuntu platforms"),(0,r.kt)("p",null,"Currently, the binary files of the corresponding platform can be downloaded directly from the github repository ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/europa-ui/releases"},"Europa-UI"),". The binary file can be run after clicking it (Linux needs to be given execution permission). The systems supported by the three-terminal platform are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"windows 10 21H1 and above"),(0,r.kt)("li",{parentName:"ul"},"macOS 10.15.7 and above"),(0,r.kt)("li",{parentName:"ul"},"Ubuntu 20.04 and above")),(0,r.kt)("p",null,"Among them, macOS does not support M1, but you can try to use ",(0,r.kt)("strong",{parentName:"p"},"Rosetta")," to run the binary package of macOS, but we do not guarantee all compatibility. For Ubuntu, we only guarantee the normal operation of Ubuntu 20.04 and above. Ubuntu 18.04 and below versions cannot run due to the compatibility of glibc."),(0,r.kt)("h3",{id:"2-start-europas-related-configuration"},"2. Start Europa's related configuration"),(0,r.kt)("p",null,"The Europa node has functions such as data path selection and workspace. Therefore, Europa-UI makes these functions easier to use:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/2844215/126153819-a83a2763-ccce-4363-ba6d-6d9be4b27e39.png",alt:"image"})),(0,r.kt)("p",null,"This is the entry interface of Europa. We can see that Europa is similar to Ganache in the Ethereum ecosystem. Users can choose their own data path and workspace. At the same time, you can also set the Websocket and RPC ports when the Europa node is started."),(0,r.kt)("p",null,"On the other hand, it is worth noting that you can choose to register the Redspot Project path in the startup configuration item, so that starting Europa will be associated with the compiled contract under the Redspot project."),(0,r.kt)("h3",{id:"3-feature-of-europa-ui"},"3. Feature of Europa-UI"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/2844215/126154441-9123e69d-9f14-4f6d-974e-713b1d79917b.png",alt:"image"})),(0,r.kt)("p",null,"The main functions of Europa-UI are similar to ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/post/polkadot.js/apps"},"Polkadot/Substrate Portal")," (collectively referred to as apps). As shown in the figure, the tabs listed are related to blockchain elements. Among them, Contracts is the part that Europa focuses on strengthening for programmers. Explorer is similar to the explorer in apps and is used to display the basic information of the current blockchain. Compared with the basic functions of apps, there are greater enhancements in Blocks, Extrinsic and Event. On the whole, compared to apps, which are designed mainly for users in terms of design ideas, Europa-UI's design focuses on how to more comprehensively display the chain and contract information that developers care about."),(0,r.kt)("h4",{id:"31-explorer"},"3.1 Explorer"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/2844215/126154962-53c1f6b8-b0c1-455d-a9f8-fb3b378f4618.png",alt:"image"})),(0,r.kt)("p",null,"In addition to the basic information of a block displayed by Explorer, Europa-UI provides some operation interfaces for calling Europa's special functions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'The two buttons "Go to Block" and "Back to Block" respectively indicate that Europa can be directly produced to a block of a specified height, and that it can be rolled back to a block of a specified height. Click the corresponding button to call Europa\'s special rpc to generate or roll back blocks.'),(0,r.kt)("li",{parentName:"ol"},'There is a "<-" arrow on the right side of the block number of each block. Click the arrow button to directly scroll back to the corresponding block.')),(0,r.kt)("p",null,'After Europa has packaged the transaction to generate a block (for example, use "go to block" to advance a few blocks), click the transaction name or Events under the block, you can directly display the bar to the transaction or event details page, and see More detailed information.'),(0,r.kt)("h4",{id:"32-account"},"3.2 Account"),(0,r.kt)("p",null,"The function of the Account page is similar to that of Account in apps, you can add or export accounts, and directly call the account for transfer."),(0,r.kt)("h4",{id:"33-contracts"},"3.3 Contracts"),(0,r.kt)("p",null,'The contract interface is much more complicated than the app contract interface. The contract interface is divided into two categories, "Codes" and "Instances", which respectively represent the code of the contract and the instance of the contract.'),(0,r.kt)("h5",{id:"331-codes"},"3.3.1 Codes"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/2844215/126154963-3a3a78c1-851a-48c4-bf06-bb19ed8e1413.png",alt:"image"})),(0,r.kt)("p",null,"In the contract code interface, it is mainly divided into Deployed Codes and Redspot Codes."),(0,r.kt)("p",null,"among them:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deployed Codes: Represents the codes currently deployed on Europa. It represents important information such as the code hash of the contract, the block where it is deployed and the transaction index, and you can click on the corresponding information to index and jump to the corresponding page. The deployed code will be divided into 2 categories:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'One type is a contract deployed through "Upload & deploy contract". This type of contract contains metadata information, such as "flipper", so its performance is consistent with the deployed contract code in apps. You can click deploy to deploy again.'),(0,r.kt)("li",{parentName:"ul"},"The other is the contract deployed in Europa through other methods (such as scripts, etc.). ",(0,r.kt)("strong",{parentName:"li"},"Such contracts cannot be displayed in apps, but can be indexed in europa. "),"As shown in the above picture, ",(0,r.kt)("inlineCode",{parentName:"li"},"<unknown>"),", but because Europa-UI cannot know the metadata information corresponding to this contract, he will ask the developer to upload the corresponding metadata file first."))),(0,r.kt)("li",{parentName:"ul"},"Redspot Codes: This type of contract is a contract indexed from the associated Redspot project. This type of contract has obtained contract metadata information under the Redspot project, so it can directly display the contract information and have a deploy button.")),(0,r.kt)("p",null,'Click code hash to enter the detailed interface of the contract code. Among them, all the contract instances indexed by Europa and associated with this contract code will be listed under the "Instances" column.'),(0,r.kt)("h5",{id:"332-instances"},"3.3.2 Instances"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/2844215/126155281-440ab03c-92b9-499b-8dc1-d7a210d701ee.png",alt:"image"})),(0,r.kt)("p",null,"In the instances interface, it will list all ",(0,r.kt)("strong",{parentName:"p"},"existing contract instances")," in the current Europa, not just the contracts deployed through europa-ui. The current contract without corresponding metadata will be displayed as ",(0,r.kt)("inlineCode",{parentName:"p"},"<unknown>"),", and the contract with existing metadata will display the corresponding name."),(0,r.kt)("p",null,"Click the contract address to enter the detailed information interface of the contract. Among them, Funtions has the same functions as apps, and can directly send call transactions or rpc calls to the contract."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/2844215/126155302-8223de04-29c7-41e5-ad7d-bfd52c56ee5a.png",alt:"image"})),(0,r.kt)("p",null,'However, in addition to the calls consistent with apps, Europa-UI can also call the special rpc provided by Europa through the "Call With Trace" method, and feed back the contract trace called by this contract.'),(0,r.kt)("p",null,"Contract trace is the core function of this time. Its purpose is to change the execution process of the contract from black box to white box execution, so that developers can obtain rich debugging information. In v0.2, contract trace is printed to the console in the form of logs. Developers need to spend energy to identify the required information in many logs. In v0.3, these key debugging information will be directly visible through Europa-UI. The details of contract trace will be explained in detail later."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/2844215/126155326-ed5cd609-b040-4d7b-b68f-bcd17fc4a83d.png",alt:"image"})),(0,r.kt)("p",null,"Under the extrinsics interface, Europa-UI displays all transactions related to this contract, including the instantiation transaction of the contract and all invocation transactions. Click the corresponding transaction to jump to the detailed information page of the transaction."),(0,r.kt)("h5",{id:"333-contract-extrinsic"},"3.3.3 Contract Extrinsic"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/2844215/126155339-f16b995e-e612-4738-b6f2-db9bcef9f1a0.png",alt:"image"})),(0,r.kt)("p",null,'After entering a contract detail interface, you can see that Europa-UI has specialized in contract-related transactions. As shown in the figure, for the contract call transaction, Europa-UI displays all the parameters of this call, especially the data field. Europa-UI parses the data part according to the contract metadata information, showing that the parameters of this contract call are: "to", "value" and their specific values.'),(0,r.kt)("p",null,"Below the parameter table is the contract trace information called by this contract."),(0,r.kt)("p",null,'The contract trace information is divided into primary information and secondary information. The main information includes caller from, target contract to, and gas consumption. Click "More Details" for the secondary information to see:'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/2844215/126155803-bc6d6f0c-3ed0-489d-8c14-8b96cd1ee37b.png",alt:"image"})),(0,r.kt)("p",null,'The detailed information shows the parameter information of this call, the "Trap Reason" of the returned information, and the most important env trace information for debugging. If there is an abnormality in this transaction call, the Wasm backtrace message of Wasm Error will also appear below.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/2844215/126155808-1819e7da-495d-47e6-9736-9a8a3255353d.png",alt:"image"})),(0,r.kt)("p",null,"If this call is a contract calling a contract:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/2844215/126155818-0a35a079-9ea4-48b4-9afd-356065fc44f1.png",alt:"image"})),(0,r.kt)("p",null,'The contract trace information will be displayed as an "indented" relationship between contracts, and the relationship between contract calls can be observed from the from and to of the indented contract. For example, as shown in the figure above, in this call to contract "5EQLt", contract "5EQLt" calls the "5D1cq" contract and the "5FdGb" contract separately through cross-contract calls. It can be seen that this transaction is the method of calling the all contract. The erc20 and miner_erc20 methods are called in the all contract.'),(0,r.kt)("p",null,'Click on their "More Details" information interface respectively, you can get a lot of details through detailed information.'),(0,r.kt)("h4",{id:"34-extrinsic-state"},"3.4 Extrinsic-State"),(0,r.kt)("p",null,"Click State under Extrinsic to enter the state interface of the current transaction change. This function is similar to Etherscan's StateChange, such as this ",(0,r.kt)("a",{parentName:"p",href:"https://etherscan.io/tx/0x820f0c222e3cdcd8890c8f107f08a7a4266d71edd68a611af83ea3e3307ad7fe#statechange"},"link"),". In the v0.2 version of Europa, it is possible to record the state changes in a block, but it is impossible to record the transactions that a single Extrinsic changes during the execution."),(0,r.kt)("p",null,"Therefore, in the v0.3 version, we refer to the implementation of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/pull/7780"},"state_traceBlock"),", introduce the use of tracing to record the state changes of transaction execution, and can change This change is provided for external use in the form of rpc. Europa-UI combines this function and expresses it in Extrinsic-State."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/2844215/126155846-67dffadf-8605-4977-8db4-3e681c5533e4.png",alt:"image"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/2844215/126155860-3019c9a7-0d74-461d-9b34-1c7d68bca0dc.png",alt:"image"})),(0,r.kt)("p",null,"The state changes are divided into 6 categories:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Put: A state has been modified"),(0,r.kt)("li",{parentName:"ul"},"PutChild: A state under a certain sub-tree (sub trie) has been modified, where child_id refers to the index of this sub-tree"),(0,r.kt)("li",{parentName:"ul"},"KillChild: Remove all storage under a certain subtree, which is more common in the case of contract destruction"),(0,r.kt)("li",{parentName:"ul"},"ClearPrefix: delete all the states under the key matching the specified prefix"),(0,r.kt)("li",{parentName:"ul"},"ClearChildPrefix: Delete the state under all keys matching the specified prefix under a certain subtree"),(0,r.kt)("li",{parentName:"ul"},"Append: Append new content to the state under a key, mostly used to add new Event data.")),(0,r.kt)("p",null,"Therefore, on the State page, the current transaction state changes are listed in the form of a table. Among them, if you only care about the storage changes made by contract execution, you only need to track PutChild, KillChild, and ClearChildPrefix."),(0,r.kt)("h4",{id:"35-developer"},"3.5 Developer"),(0,r.kt)("p",null,'The function of Developer is similar to that of apps, but the "Log" page is provided under Developer, which outputs the original log of Europa running to the console in Europa-UI.'),(0,r.kt)("p",null,"Since Europa v0.3 supports the direct printing of ",(0,r.kt)("inlineCode",{parentName:"p"},"seal_debug_message"),", the log information during contract operation (for example, calling ",(0,r.kt)("inlineCode",{parentName:"p"},"ink_env::debug_println!")," in ink! for log printing) will be printed to the console. And Europa-UI took over the startup of Europa, so when you need to consult Europa's log at this time, you can check it on the current Log page."),(0,r.kt)("h2",{id:"verification"},"Verification"),(0,r.kt)("p",null,"The functions shown in Europa v0.3 above can be verified in the following ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Prepare to test the redspot project of Europa v0.3:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/atenjin/redspot-ink-example2\ngit checkout -b europa_v0.3 europa_v0.3\ncd redspot-ink-example2\nyarn\nnpx redspot compile\n")),(0,r.kt)("p",{parentName:"li"},"After the above command, redspot is ready. You can use Europa to test it later.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the release page of Europa-UI ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/europa-ui/releases"},"https://github.com/patractlabs/europa-ui/releases")," to download Europa of the corresponding platform")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start Europa, set the path and workspace information on the start interface, click More Options to add the Redsport project, select the path of the project prepared in 1, and select the redspot.config.ts file under the path. Start Europa.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go back to the redspot project, execute the following commands to deploy and call the test contract"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx redspot run scripts/deploy.ts\n")),(0,r.kt)("p",{parentName:"li"},"The script will deploy 3 contracts all, erc20, and miner_erc20. The all contract holds the addresses of erc20 and miner_erc20. Calling some methods of the all contract will generate cross-contract calls to the erc20 and miner_erc20 contracts.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click Explorer in the sidebar, and click contract.call transaction under block 7. This is an example of calling the miner_erc20 contract through the all contract. You can see the contract trace information introduced above in the details page, and the state change information of this call can be seen in the state page.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Go back to Explorer and click on the contract.call transaction under block 6. This is to call the erc20 contract through the all contract. The erc20 is executed correctly, but an error is encountered in the all contract and the contract trap is called. Expand the "more details" information of the two contracts under the details page, you can see that "Wasm error" appears in the all contract instance, and the details page of erc20 is normal. Indicates that the final cause of the contract execution error was caused by the all contract. Combining the "env trace" information in the all contract details information can further infer the location of the error.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the sidebar to return to the Contracts page, you can see that there are three contracts under the redspot-ink-example2 project under Redspot Codes, all, erc20, and miner_erc20. The Deployed Codes above indicates that the deployed contracts are also these three. Click codehash to see the deployed contract instance of this contract code. Click the address of the instance to jump to the detailed interface of the contract instance. You can see the transaction associated with this contract under the Extrinsics page, and click to jump to the corresponding transaction detail interface. Click on the address of the transaction caller or deployer, and a list of all transactions related to the account will be listed. This process shows that Europa-UI has made all the information that is important to the developer has been linked and jumped.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Go back to Explorer, click "Go to Block", enter a number greater than the current best block, you can see that the current Europa block has been produced and reached the specified block height. Click "Back to Block" to input a block height, or click the "<-" arrow on the right of the block number to roll back the block to the corresponding height.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click Setting in the sidebar, and enter a new workspace name in the workspace input field. After clicking change, go back to Explorer, you can see that the highest block has changed to 0, indicating that this is a brand new Europa environment. This approach allows developers to isolate different test environments. Click Setting again, click on the workspace and select the original workspace name from the drop-down menu that appears. After change, you can see that it is restored to the previous state. And it is normal to try to click the jump of the association relationship at will.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After exiting Europa and entering again, you can find that all the relationships and existing data under the same workspace can be restored, and all the relationships will not be lost after closing."))))}d.isMDXComponent=!0}}]);