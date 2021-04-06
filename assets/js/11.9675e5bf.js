(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{512:function(e,t,a){e.exports=a.p+"assets/img/language_1.4f60c61c.jpg"},513:function(e,t,a){e.exports=a.p+"assets/img/language_2.6d40898f.jpg"},559:function(e,t,a){"use strict";a.r(t);var o=a(6),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"contract-language-framework"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#contract-language-framework"}},[e._v("#")]),e._v(" Contract language (framework)")]),e._v(" "),o("p",[e._v('Corresponding to the concept of "contract model" (operating platform), we can derive the concept of contract language (framework) (writing code that can run on the platform).')]),e._v(" "),o("p",[e._v('Instead of simply using "contract language", we use words like "contract language (framework)" because we have separated the "contract sandbox" and "contract model" in the previous chapter. Structure level, so in fact, some new contract platforms did not "invent" a new Solidity contract language like EVM, but chose some languages ​​(such as Rust, C++, AssemblyScript, etc.) based on this language. "hack syntax analysis", "macro", and other dimensions add contract-related constraints and functional logic to existing languages. Therefore, in many cases, it will exist in the form of "frame", "library", etc. (such as Frame Contract Pallet\'s rust contract language framework ink!). And this "framework/library" is not the dimension of libraries used in usual program development. Some contract language frameworks need to be modified to the compiler dimension, so we prefer to call them "language frameworks".')]),e._v(" "),o("h2",{attrs:{id:"correspondence-between-contract-language-framework-and-contract-model"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#correspondence-between-contract-language-framework-and-contract-model"}},[e._v("#")]),e._v(" Correspondence between contract language (framework) and contract model")]),e._v(" "),o("p",[o("img",{attrs:{src:a(512),alt:"language 1"}})]),e._v(" "),o("p",[e._v("As shown in the figure above, the upper part is the relationship between EVM and Solidity. Since EVM/Solidity was proposed earlier, its model is consistent with the usual model relationship between computer virtual machines and languages. The lower part is the correspondence between the language framework part after separating the contract model.")]),e._v(" "),o("p",[e._v("Here we will focus on the second half. The readers of the first half can analyze according to their own experience in Ethereum contract development compared with the introduction in the following text.")]),e._v(" "),o("p",[e._v("In the system of compiled language, first simply define the following nouns (not rigorously speaking, defined only for the following introduction):")]),e._v(" "),o("ul",[o("li",[e._v("S language: the original language (source) for programmers to write code, for example, to compile C++ into assembly, then C++ is the original language S")]),e._v(" "),o("li",[e._v("T language: The language (target) produced after S language is compiled by a compiler, for example, if C++ is compiled into assembly, then assembly is the target language T")])]),e._v(" "),o("p",[e._v('The previous article has introduced that the environment for running the contract system can be logically split into a "contract model" and a "contract virtual machine". The former manages the business logic of the contract, and the latter manages how to run the code of the contract, so the corresponding contract language The part can also be disassembled into "contract language framework" and "S language compiled into contract virtual machine".')]),e._v(" "),o("p",[e._v('According to this definition, it is clear that Solidity is a product that has the characteristics of both "contract language framework" and "S language":')]),e._v(" "),o("ol",[o("li",[o("p",[e._v('Solidity has a Turing complete language system, so Solidity is a "language" (relative to the BTC script)')])]),e._v(" "),o("li",[o("p",[e._v('The grammar of Solidity has many keywords with contract characteristics, corresponding to the concept of "contract language framework", such as:')]),e._v(" "),o("ul",[o("li",[o("code",[e._v("mapping")]),e._v(": A typical case of contract storage")]),e._v(" "),o("li",[o("code",[e._v("msg.sender")]),e._v(", "),o("code",[e._v("msg.value")]),e._v(": variables related to contract calls")]),e._v(" "),o("li",[o("code",[e._v("view")]),e._v(", "),o("code",[e._v("pure")]),e._v(" and other modifiers")]),e._v(" "),o("li",[o("code",[e._v("call")]),e._v(", "),o("code",[e._v("delegate_call")]),e._v(" and other keywords related to contract calls")])]),e._v(" "),o("p",[e._v("These concepts do not exist to support the logic of the Solidity language, but to serve the business logic of the Ethereum contract virtual machine.")])])]),e._v(" "),o("p",[e._v('The purpose of the "contract language framework" is to correspond to the business logic of the contract model. What kind of contract model requires what kind of contract language framework. For example, the bottom layer of EVM is k/v type storage, so the '),o("code",[e._v("mapping")]),e._v(" designed in Solidity cannot be traversed (unless extra storage is attached). For example, the contract model of EVM contract interaction is designed as a contract calling contract mode, so Solidity provides "),o("code",[e._v("call")]),e._v(" and "),o("code",[e._v("delegate_call")]),e._v(". "),o("strong",[e._v("The same applies to other contract systems")]),e._v(".")]),e._v(" "),o("p",[e._v("On the other hand, the contract language framework is an additional function built on the S language, so the functions provided by the contract language framework are ultimately compiled to the T language corresponding to the S language. Some of the features required by the blockchain, such as deterministic requirements, not allowed to use the interface called by the operating system, etc., will be "),o("strong",[e._v("constrained")]),e._v(" at this level. Therefore, the contract language framework not only provides the function of the contract model for the S language itself, but also needs to impose certain constraints on the language itself. This step is also a difficult place to develop and understand the contract language framework. At the same time, it is precisely because of this point that causes many awkward situations in the process of contract developers using the contract model framework. Languages ​​such as Solidity or Move are new languages ​​developed for contract platforms. Even though their grammar will have many traces of simulating other languages, they can be more friendly to contract developers in terms of constraints. However, it is difficult to deal with the contract language that adds the contract language framework function to the existing language, and this is one of the reasons why it is difficult for contract developers to use the framework function.")]),e._v(" "),o("p",[e._v("Take ink! for example:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Float should be avoided in the blockchain, because floating-point numbers may produce non-deterministic behavior. Therefore, in contract/runtime development, if you need to use floating-point numbers, or multiply and divide overflow numbers, you need to introduce fixed-point numbers for processing. Therefore, the fixed-point library provided by Substrate runtime can be introduced into the ink! contract for processing.")])]),e._v(" "),o("li",[o("p",[e._v("Since the contract model of "),o("code",[e._v("pallet-contracts")]),e._v(" is basically the same as EVM, the contract storage of "),o("code",[e._v("pallet-contracts")]),e._v(" is also composed of K/V. Then the contract model framework needs to deal with the various collection types provided in the standard library. Therefore, the collection types that may be used in the standard library are rewritten in "),o("strong",[e._v("ink!")]),e._v(", and the process of processing the collection element types into K/V data is added. Therefore, in the ink! contract storage, if a collection type is designed, only the types provided in the ink! standard library can be used. On the other hand, since the return value of ink! needs to export metadata for third-party processing, and the current metadata interface implementation is only implemented for the collection in the standard library, so the collection of the return value of the ink! method can only use the collection of the standard library. Types of. So the following code will appear:")]),e._v(" "),o("div",{staticClass:"language-rust,ignore extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("#[ink::contract]\nmod test {\n    // Introduce Vec realized by ink\n    use ink_storage::collections::Vec as StorageVec;\n    // Introduce the Vec of the standard library\n    use ink_prelude::vec::Vec;\n    #[ink(storage)]\n    pub struct Test {\n        owners: StorageVec<AccountId>, // Only ink's Vec can be used\n    }\n    impl Test {\n        #[ink(message)]\n        pub fn get_owners(&self) -> Vec<AccountId> {\n            // Convert Vec implemented by ink to Vec implemented by standard library\n            self.owners.iter().map(Clone::clone).collect()\n        }\n    }\n}\n")])])])])]),e._v(" "),o("p",[e._v("So in summary, in the model structure, developers need to understand:")]),e._v(" "),o("ul",[o("li",[e._v("The contract language framework corresponds to the contract model, and the characteristics of the language framework will match the model one by one;")]),e._v(" "),o("li",[e._v("The contract language framework provides the S language with business functions for the contract model, and it also restricts the S language itself according to the requirements of the contract business logic.")])]),e._v(" "),o("p",[e._v('However, because Solidity itself is positioned as a language designed for writing contracts, many contract-related functions can be designed as keywords. And if a language itself is not designed for contracts, it is necessary to design a "contract language framework" corresponding to the contract model based on this contract. Since new functions are added to this language, it is generally difficult to integrate with the language itself in depth. Therefore, the final result is related to the ability of this language to '),o("strong",[e._v("expand the syntax tree")]),e._v('. The language itself provides more flexible interfaces (macros, plug-ins, etc.) for modifying/adding the syntax tree, the more functions the contract language framework can achieve. The less the language itself provides such extensibility functions, the contract language framework can only consider modifying the compiler and extending the required grammar to support the contract model, so that the final language becomes a "dialect" of the original language. Up. Therefore, the former can exist in the form of a library/framework, while the latter becomes a new language. '),o("strong",[e._v('This is why we call this model the "contract language framework"')]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"pallet-contracts-and-the-corresponding-contract-language-framework"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pallet-contracts-and-the-corresponding-contract-language-framework"}},[e._v("#")]),e._v(" "),o("code",[e._v("pallet-contracts")]),e._v(" and the corresponding contract language framework")]),e._v(" "),o("p",[o("img",{attrs:{src:a(513),alt:"language 2"}})]),e._v(" "),o("p",[e._v("After explaining the contract language framework model above, we can apply the contract model framework to Substrate's Wasm contract system.")]),e._v(" "),o("p",[e._v("Obviously, the realization of the ink! system corresponds to the contract model of pallet-contracts. ink! 3.0 introduces the functional logic corresponding to "),o("code",[e._v("pallet-contracts")]),e._v(" into rust through the system of process macros (2.0 through god declaration macros). Therefore, the S language in this system is rust, and the T language is Wasm bytecode. With the help of an auxiliary tool "),o("code",[e._v("cargo-contract")]),e._v(", the rust code using the ink! framework is compiled into the Wasm bytecode of the contract. The environment in which Wasm bytecode runs on the chain is wasmi (Wasmtime and other JIT execution environments will also be introduced in the future).")]),e._v(" "),o("p",[e._v("And because the execution environment of "),o("code",[e._v("pallet-contracts")]),e._v(" is Wasm bytecode, the language that can be compiled into Wasm bytecode is matched with a contract language framework that conforms to the "),o("code",[e._v("pallet-contracts")]),e._v(" contract model, and it can be generated that can run on "),o("code",[e._v("pallet. -contracts")]),e._v(" The contracts on this contract platform. So for "),o("code",[e._v("pallet-contracts")]),e._v(", it is completely possible to design contract systems in different languages ​​to provide multiple options for development and use different languages ​​to develop Wasm contracts.")]),e._v(" "),o("p",[e._v("In addition to rust's ink!, the contract language framework that currently supports running on "),o("code",[e._v("pallet-contracts")]),e._v(" also has the following items:")]),e._v(" "),o("ul",[o("li",[e._v("Ask!, developed by Patract, is a contract language framework based on the AssemblyScript language. (Currently under development)")]),e._v(" "),o("li",[e._v("Solang, developed by hyperledger-labs, supports to compile Solidity to Wasm tool of "),o("code",[e._v("pallet-contracts")]),e._v(".")])])])}),[],!1,null,null,null);t.default=n.exports}}]);