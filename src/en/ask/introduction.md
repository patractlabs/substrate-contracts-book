# Ask!

![](https://camo.githubusercontent.com/207ae88065c356df521ad4c6cff4a68ef91ae963a9c65893dd0d9d991a4e00a8/68747470733a2f2f706174726163742e6e6574776f726b2f696d616765732f706174726163742d61736b2e706e67)

Ask! is a Wasm contract language framework designed by Patract, built on AssemblyScript and able to run on the `pallet-contracts` module.

Although AssemblyScript is only a subset of typescript, there are many developers who use typescript as a development language, so the cost of learning AssemblyScript for these developers is very low. Therefore, Patract believes that the Ask! project has good application development prospects. Compared with the Rust-based ink!, Patract believes that the typescript-based Ask! can effectively lower the threshold for contract developers and enrich the contract development ecosystem.

Ask! uses and ink! takes a similar approach to macro design eDSL. By providing annotations in AssemblyScript (hereinafter referred to as AS), it provides functions that can be applied to the `pallet-contracts` contract model based on the syntax of AS. Through the implementation of annotations, the details related to the contract are hidden as much as possible. On the other hand, the realization of Ask! will be close to ink!, and **the final realization will ensure compatibility with the ink! contract to the greatest extent**.

> for example：
> ink! describes the external call interface of the contract using `#[ink(constructor)]`, `#[ink(message)]` to modify the method of the contract structure.
>
> In Ask!, annotations such as `@constructor` and `@action` will be used to modify contract class methods to achieve similar functions.


## Ask! Development progress

**Ask! is currently under development, and currently only the v0.1 version of the Kusama financial proposal has been completed. Many current designs may undergo incompatibility changes in the future. **

TODO： 添加议案链接及报告链接。