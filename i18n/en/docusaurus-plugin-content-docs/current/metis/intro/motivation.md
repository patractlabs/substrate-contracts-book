# Motivation

## Current Problems with ink! development
At present, contract-based developers mainly face the following problems:

- Lack of reliable implementation of common contracts (such as ERC20)
- It is difficult to achieve contract combination and expansion similar to the Solidity inheritance mechanism
- Lack of a series of reliable public components to implement contracts
- Lack of experience accumulation and model summary based on ink! development contracts

The problems listed above have severely restricted the ink!-based contract development. Metis will solve these problems while avoiding the existing problems in Solidityd and OpenZepplin.


## Design philosophies

We believe that in the Wasm contract ecosystem, a development library similar to Openzeppelin-contracts is very necessary. This is Metis. For the sake of simplicity and readability, the patterns and meta-language provided by this library should be as consistent with Openzeppelin-contracts as possible, so as to reduce the burden on developers and effectively absorb the experience accumulated in the Solidity ecosystem.

But Wasm contract development based on ink! is very different from the EVM contract development based on Solidity. Wasm's mature system support allows developers to use a variety of different languages and tools to develop smart contracts. Based on these mature or rapid iteration platforms, developers can enjoy a large number of underlying facilities support and development experience accumulation, but different languages and tools often have different considerations and trade-offs. This means that developers will use completely different codes to express the same mechanism and design, which will bring huge communication costs and mental burdens to the community.

Faced with such problems, we need to summarize and accumulate the implementation model in the development of smart contracts. This idea was introduced in the book "Implementation Patterns" by Kent Beck. The purpose of summarizing the implementation mode is to clearly and accurately express the developer's intentions and ideas through these clear patterns, so that "code that others can understand" can be implemented. In contract development, this idea is very important.

From Openzeppelin-contracts, we can see that it summarizes several implementation models in the development of smart contracts, such as the "contract expansion model" based on the Solidity inheritance grammar. These implementation models are valuable experience accumulated in the Solidity ecology. Of course, different languages have different ways of practicing these modes. Metis will implement these modes and provide corresponding support on different platforms. For example, in Rust, it is obvious that you cannot directly use inheritance to implement contract expansion. For this, Metis will provide code implementation examples and provide a series of help libraries to reduce the developer's mental cost.

Metis will be more than just a Wasm contract standard library. We hope that through the practice of Metis, we can fully inherit and absorb previous contract development experience while exploring the best practices of Wasm contract development.
