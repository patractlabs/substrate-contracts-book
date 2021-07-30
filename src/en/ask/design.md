# Design

## Ask! design overview

AssemblyScript uses the asc compiler to compile AssemblyScript files into WebAssembly bytecode, but it cannot directly generate Wasm bytecode and `metadata.json` meta-information files that conform to the `pallet-contract` ABI, so you need to write AS transform to intervene in the compiler. Compile the process, generate and export ABI-related code at a suitable location, and generate `metadata.json` after the type information is determined.

## Design ideas

Ask! provides two libraries, `ask-transform` (referred to as `transform` in the following description) and `ask-lang`.
In addition, we will provide a build tool called `ask-cli` in the follow-up. This tool is similar to ink!'s `cargo-contract` to help build and manage Wasm smart contracts written with Ask!.

The functions of Ask! are implemented as follows:

- The main function of `ask-lang` is to provide high-level APIs for writing smart contracts, including high-level encapsulation of `pallet-contract` primitives, scale coding, K/V storage abstraction, common basic types and common interfaces. You can automatically derive a combination of these basic classes by decorators.
- The main function of `ask-transform` is based on the decorator used in the Ask! code to generate code that conforms to the `pallet-contract` specification and the `metadata.json` meta-information file. This part implements the following functions:
  - Analyze contract interfaces and parameters, and generate metadata files.
  - Analyze custom contract decorators and generate corresponding logic codes.
  - According to the definition of storage, read/write contract storage according to a certain process.
