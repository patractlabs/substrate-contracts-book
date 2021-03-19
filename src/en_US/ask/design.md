# Design

## Ask! Design Overview

AssemblyScript uses the asc compiler to compile TypeScript (TS) files into WebAssembly bytecode. However, asc is a general-purpose compilation tool, and the smart contract structure cannot be used to directly compile TS files into WASM bytecode and metadata information. Therefore, in order for asc to recognize and parse the contract-related annotations and specific grammar provided by Ask!, asc needs to be modified.

## Design

ask! will provide two components, `Contract Framework` (referred to as `Framework` in the following description) and `Contract PreProcessor` (referred to as `PreProcessor` in the following description). In addition, we will also provide a support tool called ask-cli (similar to ink!'s `cargo-contract`) to help build and manage Ask! Wasm smart contract written.

The functions of Ask! are implemented as follows:

* The main function of `Framework` is to provide advanced packaging for on-chain APIs, and then provide specifications for writing contracts through annotation types. It needs to complete the following tasks:

    * Define the annotation-based contract writing specification
    * Define the description specification of the contract interface in the metadata
    * Encapsulate the detailed information of the data interaction between the contract and the chain, such as the definition of the key generation rules in the contract storage and the storage read and write
    * Encapsulate functional components on the chain, such as Balance, AccountId, Block, Crypto, etc.
    * Compile the AS contract into Wasm code according to the semantics of the contract, and include the link symbol of the interactive interface with the FRAME contract.

* The main function of `PreProcessor` is to parse the annotations defined in the framework and generate corresponding logic codes for these annotations. According to the contract interface specification in the framework, a metadata file is generated. This part needs to complete the following tasks:

    * Parse the annotations in the contract and generate the corresponding logic code
    * Analyze contract interfaces and parameters, and generate metadata files
    * Parse the custom contract grammar (syntactic sugar) and generate the corresponding logic code
    * Automatically store and load data

* The main function of `ask-cli` is to manage the Ask! project in cli, which includes the following functions:

    * Create ask! contract template.
    * Simplify ask! During the project compilation process, the detailed information of the preprocessing and compilation process is hidden.
    * Manage the version dependency of `Framework`, `PreProcessor` and Compiler.
    * Check the legality of the generated Wasm code.