# Contract language

## Background Information

Corresponding to the concept of contract model, the concept of contract language can be derived.  In the previous chapter, we have separated the structure of the contract sandbox and contract model. In practical applications, some new contract platforms do not invent a new Solidity contract language like EVM, but choose some existing languages, such as Rust, C++,  AssemblyScript  and other languages. Based on this language, it adds contract-related constraints and functional logic to the existing language in the dimensions of hack syntax analysis and macros. Therefore, in many cases, it will exist in the form of frameworks, libraries, etc., such as the Rust contract language framework ink! of Frame Contract Pallet. And this kind of frameworks and libraries are not the dimensions of libraries used in usual program development. Some contract languages need to be modified to the compiler dimension, Therefore, we sometimes call it the contract language framework.

## Correspondence between contract language and contract model

![](./imgs/language_1.jpg)

As shown in the figure above, the upper part describes the relationship between EVM and Solidity. EVM and Solidity proposed earlier, and their model is consistent with the usual model relationship between computer virtual machine and language. The lower part is the correspondence between the language part after separating the contract model. Here, I will focus on the lower part of the figure. In the upper part, you can analyze it based on your own experience in Ethereum  contract development compared with the introduction later.

In the system of compiled languages, for the convenience of the following introduction, first briefly define the following concepts (non-rigorous terms):

* S language: The original language (Source) for programmers to write code. For example, if C++ is compiled into assembly, then C++ is the original language S.
* T language: the language (Target) generated after the original language is compiled by the compiler. For example, if C++ is compiled into assembly, the assembly is the target language T.

The previous article introduced that the environment for running the contract system can be logically split into a contract model and a contract virtual machine. The contract model manages the business logic of the contract, and the contract virtual machine manages how to run the code of the contract. Correspondingly, the contract language part can also be split into the contract language and the S language compiled into the contract virtual machine.

According to this definition, it is clear that Solidity is a product that has both contract language and S language features.

1. Solidity has a Turing complete language system, so Solidity is a language (compared with BTC scripts).
2. The grammar of Solidity has many keywords with contract characteristics, corresponding to the concept of contract language. Such as：
| keywords              | Description                         |
|:----|:----|
|mapping|Typical case of contract storage|
|msg.sender、msg.value|Variables related to contract calls|
|view、pure|Modifier，Play a modifying role|
|call、delegate_cal|Keywords related to contract call|

The above concept does not exist to support the logic that the Solidity language can execute, but to serve the business logic of the Ethereum contract virtual machine.

The purpose of the contract language is to correspond to the business logic of the contract model. What kind of contract model requires what kind of contract language. For example, the bottom layer of EVM is K/V type storage, so the `mapping` designed in Solidity cannot be traversed unless extra storage is attached. The contract model of EVM contract interaction is designed as a contract calling contract mode, so the `call` and `delegate_call` keywords are provided in Solidity. The same applies to other contract systems.

The contract language is an additional function built on the S language, so the functions provided by the contract language are ultimately compiled to the T language corresponding to the S language. Some of the features required by the Blockchain, such as deterministic requirements and interface features that do not allow the use of operating system calls, will be constrained at this level. Therefore, in addition to the contract language itself providing the contract model function for the S language itself, it also needs to impose certain constraints on the language itself. This step is also a difficult place in the development and understanding of the contract language. At the same time, it is precisely because of this that contract developers have a lot of discomfort in the process of using the contract model framework. Languages such as Solidity and Move are new languages developed for contract platforms. Although there are traces of grammatical simulation of other languages, they are more friendly to contract developers in terms of constraints. The contract language that adds the contract language function to the existing language does not handle this aspect very well, which is one of the reasons why it is more difficult for contract developers to use the framework function.

Take ink! as an example:

* The use of float should be avoided in the blockchain, because floating-point numbers may produce indeterminate behavior. Therefore, in contract/runtime development, if you need to use floating-point numbers, or when overflowing numbers are multiplied and divided, you need to introduce fixed-point numbers to deal with. Therefore, the fixed-point library provided by Substrate runtime can be introduced into the ink! contract for processing.
* Since the contract model of `pallet-contracts` is basically the same as EVM, the contract storage of `pallet-contracts` is also composed of K/V. Then the contract model framework needs to deal with the various collection types provided in the standard library. Therefore, the collection types that may be used in the standard library are rewritten in ink!, and the process of processing the collection element types into K/V data is added. Therefore, in the ink! contract storage, if a collection type is designed, then only the types provided in the ink! standard library can be used. On the other hand, since the return value of ink! needs to export metadata for third-party processing, and the current metadata interface implementation is only implemented for the collection in the standard library, so the collection of the return value of the ink! method can only use the collection type of the standard library. The code example is as follows.
```plain
#[ink::contract]
mod test {
    // 引入 ink 实现的 Vec
    use ink_storage::collections::Vec as StorageVec;
    // 引入标准库的Vec
    use ink_prelude::vec::Vec;
    #[ink(storage)]
    pub struct Test {
        owners: StorageVec<AccountId>, // 只能使用 ink的Vec
    }
    impl Test {
        #[ink(message)]
        pub fn get_owners(&self) -> Vec<AccountId> {
            // 将 ink 实现的 Vec 转换为 标准库实现的 Vec
            self.owners.iter().map(Clone::clone).collect()
        }
    }
}
```

In summary, in the model structure:

* The contract language and the contract model are in correspondence, and the characteristics of the contract language will match the contract model.
* The contract language provides the S language with business functions for the contract model. At the same time, it also restricts the S language itself according to the requirements of the contract business logic.

Because Solidity itself is positioned as a language designed for contract writing, many contract-related functions can be designed as keywords. If a language itself is not designed for contracts, then a contract language corresponding to the contract model needs to be designed based on this contract. Because it is adding new functions to this language, it is generally difficult to integrate with the language itself deeply. The final result is related to the ability of this language to expand the syntax tree. If the language itself provides more flexible interfaces (macros, plug-ins, etc.) for modifying or adding syntax trees, then the contract language can achieve more functions. If the language itself provides few such extensibility functions, then the contract language can only consider modifying the syntax required by the compiler and extensions to support the contract model, so that the final language becomes a dialect of the original language. Therefore, the former can exist in the form of a library/framework, while the latter becomes a new language, which is why this model is called a contract language.

## **Pallet-contracts and the corresponding contract language**

![](./imgs/englanguage_2.jpg)

With the concept of the contract language model, we can nest the contract model framework on Substrate's Wasm contract system.

The realization of ink! The whole system corresponds to the contract model of `pallet-contracts`. ink! 3.0 introduces the functional logic corresponding to `pallet-contracts` into Rust through the system of process macros (2.0 through declaration macros). Therefore, the S language in this system is Rust, and the T language is Wasm bytecode. Ink! uses the auxiliary tool `cargo-contract` to compile the Rust code using the ink! framework into the Wasm bytecode of the contract. The environment in which Wasm  bytecode runs on the chain is wasmi. In the future, JIT-type operating environments such as Wasmtime will also be introduced.

And because the execution environment of `pallet-contracts`  is Wasm bytecode, a language that can be compiled into Wasm bytecode and a contract language that conforms to the `pallet-contracts` contract model can be generated and run on the contract platform of `pallet-contracts`  Contract. For `pallet-contracts`, you can design a contract system in different languages for you to choose, and you can use different languages to develop Wasm contracts.

## More information

In addition to Rust's ink!, the contract languages currently supported to run on pallet-contracts also have the following projects:

* Ask!：Developed by Patract, it is a contract language based on the  AssemblyScript language . (It is being developed)
* Solang： It is a tool that is developed by hyperledger-labs and supports the compilation of Solidity to Wasm of pallet-contracts.
