# Overview
ask! is an Embedded Domain Specific Language (EDSL) to write WebAssembly based smart contracts using typescript.

Unlike solidity, ask! is not a standalone languange but more like a assemblyscript "contract format" with customized `@message` decorator. Those decorators tell ask! compiler how the smart contract is define and further compiles them to WASM bytecode compatible with Substrate.

## Assemblyscript
ask! is subset of Assemblyscript while Assemblyscript is a subset of Typescript syntax. Currently, a large group of developers are using Typescript since Typescript has relatively low learning curve. Therefore, Patract Labs optimistically believes with the introduction of ask!, we would see a good growth of contract developers in Substrate.

## ask! vs ink!
| languange      | ask! | ink!     |
| :---        |    :----:   |          ---: |
| eDSL      | Typescript       | rust   |
| annotation   | decorator        | macro      |
| cli   | [ask-cli](https://github.com/patractlabs/ask-cli)        | [cargo contract](https://github.com/paritytech/cargo-contract)      |
| abstraction   | inheritence        | trait      |
| data types   | [AssemblyScript SCALE Codec](https://github.com/LimeChain/as-scale-codec) | [Parity SCALE Codec](https://github.com/paritytech/parity-scale-codec)|

## Reports
- [v0.1Report](../reports/v0.1Report.md)
- [v0.2Report](../reports/v0.2Report.md)
- [v0.3Report](../reports/v0.3Report.md)