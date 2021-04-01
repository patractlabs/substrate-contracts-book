# ink

ink! is an eDSL to write WebAssembly based smart contracts using the Rust programming language. The compilation target are blockchains built on the Substrate framework.

Although ink! claims to be a kind of eDSL for writing contracts, I prefer to think that ink! is a contract framework written in Rust language that meets the requirements of Contracts Pallet.

For example, for EVM, if the instruction set of the EVM is regarded as a specification (the instruction set of the EVM already contains the information of the EVM contract model), then as long as the language can be compiled into the instruction set of the EVM, it can be said to be able to run on the EVM Contract language on the Internet, for example:

- Solidity
- Vyper

And ink! Same here. Contracts Pallet requires Wasm code that can run the Contracts Pallet contract model, so any framework/language/library that can be compiled to meet this Wasm contract model can be called Contracts Pallet's contract language.

ink! is to use the Rust language, and on this basis, design a set of eDSL through Rust's **hygienic macro system**, and use this eDSL to write Rust code that meets the requirements of Contracts Pallet. In addition to eDSL, ink! also provides a **storage collection type** suitable for contract models, generating Metadata (corresponding to Solidity's ABI) and other tool libraries.

See the official documentation of ink!:

- [ink! Concepts](https://substrate.dev/docs/en/knowledgebase/smart-contracts/ink-fundamentals)
- [ink! Smart Contracts Tutorial](https://substrate.dev/substrate-contracts-workshop/#/)
- [ink! Documentation Portal](https://paritytech.github.io/ink-docs/)

## ink! The process to the Contracts pallet

An example image is provided in the official parity document:
![https://paritytech.github.io/ink-docs/how-it-works](https://paritytech.github.io/ink-docs/img/how-it-works.svg)

From this figure, we can see that the process of writing and deploying the ink! contract requires

- ink! dependent library: provide ink! eDSL framework and provide corresponding dependent components
- cargo-contract: tool for compiling ink! contract
- SDK: SDK that interacts with the chain and deploys the contract to the chain. The official parity mainly provides `polkadot.js`, and Patract provides the Himalia toolkit, including `go`, `java`, `python`, `C#` SDK

This chapter will mainly introduce ink! and `cargo-contract` information, and the information about SDK will be introduced in the following chapters.