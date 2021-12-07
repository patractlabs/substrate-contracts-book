"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[5109],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),h=o,u=m["".concat(s,".").concat(h)]||m[h]||d[h]||i;return n?a.createElement(u,r(r({ref:t},p),{},{components:n})):a.createElement(u,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7085:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],l={},s="ink! eDSL basic elements",c={unversionedId:"ink/edsl-basic",id:"ink/edsl-basic",isDocsHomePage:!1,title:"ink! eDSL basic elements",description:"The elements of ink! eDSL design are actually relatively similar to those of Solidity, because the contract model structure of Contracts Pallet and the contract model of EVM are relatively similar.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/ink/edsl-basic.md",sourceDirName:"ink",slug:"/ink/edsl-basic",permalink:"/substrate-contracts-book/en/ink/edsl-basic",editUrl:"https://github.com/patractlabs/substrate-contracts-book/edit/master/docs/ink/edsl-basic.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"ink! Framework",permalink:"/substrate-contracts-book/en/ink/framework"},next:{title:"Cross-call for ink!",permalink:"/substrate-contracts-book/en/ink/call-contracts"}},p=[{value:"Elements of eDSL",id:"elements-of-edsl",children:[{value:"<code>#[ink::contract]</code>",id:"inkcontract",children:[]},{value:"<code>storage</code>",id:"storage",children:[]},{value:"<code>constructor</code>/<code>message</code>",id:"constructormessage",children:[]},{value:"<code>event</code>",id:"event",children:[]}]}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ink-edsl-basic-elements"},"ink! eDSL basic elements"),(0,i.kt)("p",null,"The elements of ink! eDSL design are actually relatively similar to those of Solidity, because the contract model structure of Contracts Pallet and the contract model of EVM are relatively similar."),(0,i.kt)("p",null,"Therefore, the design of ink! can find a lot of shadows similar to Solidity (the same applies to the Runtime design of Substrate). When describing the ink characteristics later, I will try to compare with the characteristics of Solidity, which is convenient for readers to understand."),(0,i.kt)("h2",{id:"elements-of-edsl"},"Elements of eDSL"),(0,i.kt)("p",null,"From the example provided by ink! documentation or ink!, the code shows that ink! also proposes the following three basic elements on the Contracts Pallet model:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"constructor"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"message")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"storage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event"))),(0,i.kt)("p",null,"However, due to the design relationship of the Rust process macro, you can see that ink! First requires a contract to be under a ",(0,i.kt)("inlineCode",{parentName:"p"},"mod"),", and add the ",(0,i.kt)("inlineCode",{parentName:"p"},"#[ink::contract]")," macro to this ",(0,i.kt)("inlineCode",{parentName:"p"},"mod"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust,ignore"},"#[ink::contract]\nmod erc20 {\n    // ...\n}\n")),(0,i.kt)("p",null,"In this way, it is equivalent to telling ink! What is in this mod is to be processed according to the eDSL of ink."),(0,i.kt)("h3",{id:"inkcontract"},(0,i.kt)("inlineCode",{parentName:"h3"},"#[ink::contract]")),(0,i.kt)("p",null,"Therefore, when you encounter the macro ",(0,i.kt)("inlineCode",{parentName:"p"},"#[ink::contract]"),', it appears that this is the "contract part" identified by ink!. Therefore, we can see that many imports of ',(0,i.kt)("inlineCode",{parentName:"p"},"use xxx")," will be placed under the scope of ",(0,i.kt)("inlineCode",{parentName:"p"},"mod")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"#[ink::contract]"),"."),(0,i.kt)("p",null,"And the current ink! design is that, under a ",(0,i.kt)("inlineCode",{parentName:"p"},"crate")," package, only one ",(0,i.kt)("inlineCode",{parentName:"p"},"#[ink::contract]")," can appear, so it means that ink! thinks that the dimension of a contract is based on rust's ",(0,i.kt)("inlineCode",{parentName:"p"},"crate"),", that is If in the same ",(0,i.kt)("inlineCode",{parentName:"p"},"crate"),", whether in the same file (for example, under ",(0,i.kt)("inlineCode",{parentName:"p"},"lib.rs"),") or in different files, more than two are defined by ",(0,i.kt)("inlineCode",{parentName:"p"},"#[ink::contract]")," The ",(0,i.kt)("inlineCode",{parentName:"p"},"mod"),", for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust,ignore"},"#[ink::contract]\nmod erc20 {\n    // ...\n}\n\n#[ink::contract]\nmod another_define {\n    // ...\n}\n")),(0,i.kt)("p",null,"Analogous to solidity:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity,ignore"},"// a.sol defines multiple `contract` in the same file\ncontract A {\n\n}\ncontract B {\n\n}\n")),(0,i.kt)("p",null,"Then in the compilation of ink!, this situation will be considered illegal."),(0,i.kt)("p",null,"Of course, as opposed to this, as long as there is only one ",(0,i.kt)("inlineCode",{parentName:"p"},"mod")," modified by ",(0,i.kt)("inlineCode",{parentName:"p"},"#[ink::contract]")," in the current ",(0,i.kt)("inlineCode",{parentName:"p"},"crate"),", other ",(0,i.kt)("inlineCode",{parentName:"p"},"mod"),"s should be used normally, so the contract modified by ink! ",(0,i.kt)("inlineCode",{parentName:"p"},"crate")," can still do a good job of code isolation, enhance readability and maintainability",(0,i.kt)("strong",{parentName:"p"},". This ability is important for "),"maintaining large and complex contracts**, such as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust,ignore"},"#[ink::contract]\nmod erc20 {\n    use crete::another_define::*;\n}\n\nmod another_define {\n    // ...\n}\n")),(0,i.kt)("p",null,"For example, the following example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust,ignore"},"mod fxck {\n    use crate::erc20::Erc20;\n    use ::ink_lang::Env; // Note that `ink_lang::Env` needs to be introduced here\n    impl Erc20 {\n        pub fn tmp(&self) {\n            self.env().caller(); // \n        }\n    }\n}\n\n#[ink::contract]\nmod erc20 {\n    #[ink(storage)]\n    pub struct Erc20 {...}\n\n    impl Erc20 {\n        #[ink(constructor)]\n        pub fn new(initial_supply: Balance) -> Self {...}\n        #[ink(message)]\n        pub fn transfer(&mut self, initial_supply: Balance) -> Self {\n            self.tmp(); // call methods defined in other `mod`\n        }\n    }\n}\n")),(0,i.kt)("p",null,"This model can achieve some code isolation that cannot be done under Solidity, and enhance maintainability. (Because Solidity's library can only be used for pure function calculations)"),(0,i.kt)("p",null,"In summary, under the ink! system:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A contract is in a ",(0,i.kt)("inlineCode",{parentName:"li"},"crate")," unit, and only one ",(0,i.kt)("inlineCode",{parentName:"li"},"#[ink::contract]")," definition can appear in a ",(0,i.kt)("inlineCode",{parentName:"li"},"crate"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"#[ink::contract]")," modified ",(0,i.kt)("inlineCode",{parentName:"li"},"mod")," represents the content of the contract, and also represents ",(0,i.kt)("strong",{parentName:"li"},"the basic elements of the contract must be defined under this ",(0,i.kt)("inlineCode",{parentName:"strong"},"mod")),";"),(0,i.kt)("li",{parentName:"ul"},"All parts other than ",(0,i.kt)("inlineCode",{parentName:"li"},"mod")," modified by ",(0,i.kt)("inlineCode",{parentName:"li"},"#[ink::contract]")," (other ",(0,i.kt)("inlineCode",{parentName:"li"},"mod"),", functions, types) follow the rules of rust, and good code isolation can be done to improve maintainability;"),(0,i.kt)("li",{parentName:"ul"},"In practice, the ",(0,i.kt)("inlineCode",{parentName:"li"},"mod")," modified by ",(0,i.kt)("inlineCode",{parentName:"li"},"#[ink::contract]")," can be used as the entry point of the contract, and the implemented logic can be distributed to other ",(0,i.kt)("inlineCode",{parentName:"li"},"mod"),"s.")),(0,i.kt)("p",null,'The following uses "contract mod" to indicate a ',(0,i.kt)("inlineCode",{parentName:"p"},"mod")," modified by ",(0,i.kt)("inlineCode",{parentName:"p"},"#[ink::contract]")),(0,i.kt)("h3",{id:"storage"},(0,i.kt)("inlineCode",{parentName:"h3"},"storage")),(0,i.kt)("p",null,"In the contract mod, a structure must be defined, and this structure is modified by ",(0,i.kt)("inlineCode",{parentName:"p"},"#[ink(storage)]"),", indicating that the storage of the contract is defined."),(0,i.kt)("p",null,"At the same time, this structure definition modified by ",(0,i.kt)("inlineCode",{parentName:"p"},"#[ink(storage)]")," is also regarded as an operable contract entity",(0,i.kt)("strong",{parentName:"p"},", so all contract-related resources, types, and operations will be ")," and this structure The body is bound together**. When the contract calls the contract, the type of the called contract is also represented by this structure."),(0,i.kt)("p",null,"Therefore, this structure can be understood as a contract entity."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Although the part that modifies ",(0,i.kt)("inlineCode",{parentName:"p"},"mod")," is the contract, because ",(0,i.kt)("inlineCode",{parentName:"p"},"mod")," can only represent the scope in rust, so for practical use, use the structure modified by ",(0,i.kt)("inlineCode",{parentName:"p"},"#[ink(storage)]")," to indicate that it can be operated Contract entity."),(0,i.kt)("p",{parentName:"blockquote"},"In this context, the ",(0,i.kt)("inlineCode",{parentName:"p"},"mod")," modified by ",(0,i.kt)("inlineCode",{parentName:"p"},"#[ink::contract]"),' can be understood as the concept of "opening the contract domain", while the ',(0,i.kt)("inlineCode",{parentName:"p"},"stuct")," modified by ",(0,i.kt)("inlineCode",{parentName:"p"},"#[ink(storage)]")," It is a contract under this contract domain.")),(0,i.kt)("p",null,"Here, the concept of storage defined by ink! is consistent with the concept of \u201cstorage\u201d defined in Solidity, which means that the attributes defined here are the final state written to the ",(0,i.kt)("strong",{parentName:"p"},"chain"),". The purpose of writing all contract logic is to modify the state defined here."),(0,i.kt)("p",null,"However, because the current ink! uses a structure to carry the contract state, all the states of the current contract can only be defined in this structure. When the contract is designed to be relatively large and complicated, the maintainability here will decrease."),(0,i.kt)("p",null,"An example of defining storage is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust,ignore"},"#[ink(storage)]\npub struct Erc20 {\n    /// Total token supply.\n    total_supply: Lazy<Balance>,\n    /// Mapping from owner to number of owned token.\n    balances: StorageHashMap<AccountId, Balance>,\n    /// Mapping of the token amount which an account is allowed to withdraw\n    /// from another account.\n    allowances: StorageHashMap<(AccountId, AccountId), Balance>,\n}\n")),(0,i.kt)("p",null,"Structures modified by ",(0,i.kt)("inlineCode",{parentName:"p"},"#[ink(storage)]")," are collectively referred to as contract structures in the following text."),(0,i.kt)("p",null,"Here are a few features that need to be paid special attention to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The type of the attribute defined in the contract structure must be a type that has implemented ",(0,i.kt)("inlineCode",{parentName:"p"},"SpreadLayout")," (or more accurately, a type that implements ",(0,i.kt)("inlineCode",{parentName:"p"},"PackedLayout"),", because ",(0,i.kt)("inlineCode",{parentName:"p"},"PackedLayout")," is inherited from the definition of ",(0,i.kt)("inlineCode",{parentName:"p"},"SpreadLayout"),"):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust,ignore"},"/// Types that can be stored to and loaded from the contract storage.\npub trait SpreadLayout {\n}\n")),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},'The reason why only the type that implements this trait can be used here is very simple, because storage is different from the general type, it must contain the information of the "chain" in it, so the contract implementation of different chains must have a part for processing The storage (that is, state) allocation problem in the contract.'),(0,i.kt)("p",{parentName:"blockquote"},"For example, during the compilation process of Solidity, the key of the state is actually assigned according to the upper and lower order defined by the storage in the contract. If the ",(0,i.kt)("inlineCode",{parentName:"p"},"SpredLayout")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"PackedLayout")," type has been implemented here, there will be an approximate process for state allocation.")),(0,i.kt)("p",{parentName:"li"},"Ink! has done basic implementations for general types, but ",(0,i.kt)("strong",{parentName:"p"},"for collection types (",(0,i.kt)("inlineCode",{parentName:"strong"},"Vec"),", ",(0,i.kt)("inlineCode",{parentName:"strong"},"HashMap"),", etc.), because the state of the contract needs to hook the process of reading and writing"),", it cannot be implemented for collection types This ",(0,i.kt)("inlineCode",{parentName:"p"},"trait"),". Therefore, in ink!, all the commonly used collection types in the standard library have been re-implemented, and the attribute types of the structure modified by ",(0,i.kt)("inlineCode",{parentName:"p"},"#[ink(storage)]")," must be used if the collection type is used. The collection type provided by ink!**."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Since Solidity is relatively rudimentary, the storage map defined by Solidity cannot be traversed. (Caused by a defect in the Solidity design)"),(0,i.kt)("p",{parentName:"blockquote"},"ink! has done a lot of things when designing this piece, so the collection types ",(0,i.kt)("inlineCode",{parentName:"p"},"Vec"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"BTreeMap"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"HashMap")," and so on provided by ink! are all ",(0,i.kt)("strong",{parentName:"p"},"traversable"),". Compared with the functions that Solidity can achieve, it is a considerable improvement."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Even based on the above design, the nested collection type is still difficult to implement (because the state structure of Substrate uses the k/v model). Therefore, in the design, we can only try to avoid nested collection types. If you must nest the collection type, you need to flatten the nesting level, merge the second-level key and the first-level key together, and use tuples instead (equivalent to ",(0,i.kt)("inlineCode",{parentName:"p"},"double_map")," in Substrate Runtime)"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-Solidity,ignore"},"// solidity\ncontract A {\n    mapping (uint => mapping (uint => uint))\n}\n")),(0,i.kt)("p",{parentName:"li"},"The similar code in ink! should be:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust,ignore"},"#[ink(storage)]\npub struct Erc20 {\n    // Note that the key here uses the tuple `(AccountId, AccountId)`\n    allowances: StorageHashMap<(AccountId, AccountId), Balance>,\n}\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A model of ",(0,i.kt)("inlineCode",{parentName:"p"},"Lazy")," is provided in storage, which allows developers to use ",(0,i.kt)("inlineCode",{parentName:"p"},"Lazy")," to wrap a type so that the state data can be loaded when it is used:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust,ignore"},"/// A lazy storage entity.\n///\n/// This loads its value from storage upon first use.\n///\n/// # Note\n///\n/// Use this if the storage field doesn't need to be loaded in some or most cases.\n#[derive(Debug)]\npub struct Lazy<T>\nwhere\n    T: SpreadLayout,\n{\n    cell: LazyCell<T>,\n}\n")),(0,i.kt)("p",{parentName:"li"},"How to use:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust,ignore"},"#[ink(storage)]\npub struct Erc20 {\n    /// Total token supply.\n    total_supply: Lazy<Balance>,\n}\n")))),(0,i.kt)("h3",{id:"constructormessage"},(0,i.kt)("inlineCode",{parentName:"h3"},"constructor"),"/",(0,i.kt)("inlineCode",{parentName:"h3"},"message")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"constructor"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"message")," is the entry function that triggers the contract state change. In other words, ",(0,i.kt)("inlineCode",{parentName:"p"},"constructor"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"message")," is the state transition function of the contract state."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"constructor"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"message")," can only modify the methods of the contract structure**, and cannot be used to modify the methods of other structures or other pure functions."),(0,i.kt)("p",null,"In the contract mod, there is at least one method for the contract structure modified by ",(0,i.kt)("inlineCode",{parentName:"p"},"constructor")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"message"),". If there are less than one respectively, it will cause compilation error."),(0,i.kt)("p",null,"among them:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"constructor")," corresponds to the constructor in the Solidity contract. When the contract is deployed (in Contracts Pallet currently represents the process of doing ",(0,i.kt)("inlineCode",{parentName:"p"},"instantiate")," from the uploaded contract code), a call to the corresponding constructor will be triggered."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"It needs to be emphasized here that the call of the constructor and the instantiation of the contract are two conceptual things. This process is ",(0,i.kt)("strong",{parentName:"p"},"not atomic")," in the coordination process of ink! and Contracts Pallet. Therefore, the constructor may not be called, but the contract address will be generated, and the contract instance for which the constructor has not been called can be called normally."),(0,i.kt)("p",{parentName:"blockquote"},"A typical example is the wrong code parameter passed in when calling ",(0,i.kt)("inlineCode",{parentName:"p"},"instantiate"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"message")," corresponds to the call methods such as ",(0,i.kt)("inlineCode",{parentName:"p"},"public"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"external")," in the Solidity contract. Due to the characteristics of Rust's mutable/immutable methods, ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," uses the ",(0,i.kt)("strong",{parentName:"p"}," feature to indicate whether this method will modify the state of the contract"),"."),(0,i.kt)("p",{parentName:"li"},"  So if the method of ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," modification is"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust,ignore"},"// Note that the first parameter of the method is `&self`\n#[ink(message)]\npub fn total_supply(&self) -> Balance {\n    *self.total_supply\n}\n")),(0,i.kt)("p",{parentName:"li"},"  It means that the call of this method will not modify the state (controlled by the rust syntax), which is consistent with Ethereum. This type of method is mostly used for rpc calls to return the storage of a contract or return some storage-based calculation results."),(0,i.kt)("p",{parentName:"li"},"  If the modification is"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust,ignore"},"// Note that the first parameter of the method is `&mut self`\npub fn transfer(&mut self, to: AccountId, value: Balance) -> Result<()> {\n    let from = self.env().caller();\n    self.transfer_from_to(from, to, value)\n}\n")),(0,i.kt)("p",{parentName:"li"},"  It means that the call of this method will modify the state, so if this method is called and executed in the form of a packaged transaction call, it will trigger a state change. If it is called by rpc, it means that the simulation has been executed once."),(0,i.kt)("p",{parentName:"li"},"  At the same time, metadata.json (corresponding to the ABI of Solidity) will be generated after the contract is compiled. In this metadata, there will be a ",(0,i.kt)("inlineCode",{parentName:"p"},"mutates")," field for the message part to indicate whether the method is variable."))),(0,i.kt)("h4",{id:"messages-selector"},"message's ",(0,i.kt)("inlineCode",{parentName:"h4"},"selector")),(0,i.kt)("p",null,"For the generation of the ABI of the contract method, Solidity uses the method name plus the parameter type as a function signature to piece together into a string and then make a hash to take the first 4 bytes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'call = "func_name(param1_type,param2_type,...)"\nbytes4(keccak256(call), a, b)\n')),(0,i.kt)("p",null,"In ink!, this concept that allows contracts to distinguish call trigger points is called ",(0,i.kt)("inlineCode",{parentName:"p"},"selector"),"."),(0,i.kt)("p",null,"Since rust does not support function overloading, a relatively simple design is adopted in ink!, which directly hashes the string of the function name and takes the first 4 bytes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'call = "func_name"\nblake2_512(call)[0..4]\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The author believes that this design has caused problems with other contract language designs. Because rust does not support overloading, it does not mean that other languages \u200b\u200bdo not support overloading. After Solang compiles Solidity to Wasm, if it wants to be compatible with ink!'s metadata, problems will arise when calling each other.")),(0,i.kt)("p",null,"On the other hand, ",(0,i.kt)("inlineCode",{parentName:"p"},"selector")," can also run the contract developer's own definition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust,json"},'#[ink(message, selector = "0xCAFEBABE")]\npub fn was_it_ten(&self) -> bool {...}\n')),(0,i.kt)("h4",{id:"message-of-payable"},"message of ",(0,i.kt)("inlineCode",{parentName:"h4"},"payable")),(0,i.kt)("p",null,"There is a ",(0,i.kt)("inlineCode",{parentName:"p"},"payable")," modifier for the method in Solidity, which is used to indicate that the method can accept a certain amount of money."),(0,i.kt)("p",null,"Therefore, ",(0,i.kt)("inlineCode",{parentName:"p"},"payable")," is also provided in ink! to indicate whether it is possible to transfer a certain amount of ",(0,i.kt)("strong",{parentName:"p"},"local currency")," while calling this method. In the current design of ink!, if a non-payable message is called with an amount at the same time, the calling process will be regarded as an error."),(0,i.kt)("p",null,"By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"paybale")," is considered to be ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", and it is ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," only when the contract developer specifies ",(0,i.kt)("inlineCode",{parentName:"p"},"payable"),"."),(0,i.kt)("p",null,"The case for specifying a message to be callable is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust,json"},"#[ink(message, playable)]\npub fn was_it_ten(&self) -> bool {...}\n")),(0,i.kt)("p",null,"On the other hand, in metadata, there will be a ",(0,i.kt)("inlineCode",{parentName:"p"},"payable")," field for the message part to indicate whether this method requires payment."),(0,i.kt)("h3",{id:"event"},(0,i.kt)("inlineCode",{parentName:"h3"},"event")),(0,i.kt)("p",null,"The concept of event is not necessary in the state machine model. However, because ",(0,i.kt)("strong",{parentName:"p"},"blockchain is an asynchronous system"),", after sending a transaction to trigger a state change, the result of the change cannot be immediately known, and it can only rely on monitoring an element to determine the execution result. ",(0,i.kt)("inlineCode",{parentName:"p"},"event")," is an element designed at the stage of Solidity, and this design is also inherited from Substrate Runtime and ink!."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"I don't think event is a good design. In theory, there are other better ways, or variants of event. Event will cause abuse by developers to a certain extent.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"event")," of ink! in Contracts Pallet finally prints the event defined by the contract to the event of the chain through the ",(0,i.kt)("inlineCode",{parentName:"p"},"host function"),"."),(0,i.kt)("p",null,"The event design of ink! is nothing special compared to Solidity, but because it is a contract running in Wasm, the event of the printing contract needs to interact with the chain through the host function, so the calling method needs to be passed through. env()` to call."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust,ignore"},"Self::env().emit_event(...);\n// or use\nself.env().emit_event(...);\n")))}m.isMDXComponent=!0}}]);