# Design

## Ask! Design Overview

AssemblyScript uses the asc compiler to compile AssemblyScript files into WebAssembly bytecode. However, it is not possible to directly generate wasm bytecode and meta-information file that conform to the `pallet-contract` ABI, so need to write AS transform to intervene in the compiler compilation process, generate ABI-related code at a suitable location and export, After the type information is determined, `metadata.json` is generated.

## Design ideas

Ask! provides `ask-transform` (referred to as `transform` in the following description) and `ask-lang` two libraries.
In addition, we will provide a build tool called `ask-cli` (similar to ink!'s `cargo-contract`) in the follow-up to help build and manage Ask! Wasm smart contract written.

The functions of Ask! are implemented as follows:

- The main function of `ask-lang` is to provide high-level APIs for writing smart contracts, including `pallet-contract` primitive high-level encapsulation/scale coding/KV storage abstraction/common basic types/some universal interfaces. Users can automatically derive the combination of these basic classes through decorators.
- The main function of `ask-transform` is to generate code and `metadata.json` meta-information files according to the decorator used in Ask! code. This part needs to complete the following tasks:
  - Analyze contract interfaces and parameters, and generate metadata files
  - Analyze custom contract decorators and generate corresponding logic codes
  - According to the definition of storage, read/write contract storage according to a certain process
