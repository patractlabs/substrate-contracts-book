# zkMega

zkMega is a zero-knowledge proof tool set building for the Polkadot ecology. 

* Polkadot Treasury report for v0.1: https://polkadot.polkassembly.io/post/221. 

## ZK Rollup Introduction

Compared with the privacy function, the performance improvement brought by Rollup is the
early application direction of zero-knowledge proof. At present, the Layer 2 expansion
plan of the blockchain is to transfer a considerable part of the on-chain workload to 
off-chain to complete, and the most watched one is ZK Rollup. The essence of ZK Rollup 
is to compress the application on-chain state and store it in a Merkle tree, and move 
the state transition funtions to off-chain. At the same time, the correctness of the 
off-chain state transition process is guaranteed through the proof of zkSNARK. Compared 
with the high cost of directly processing state changes on the chain, the ZK Proof's 
on-chain smart contract verification is extremely cost low. At the same time, the 
compressed information will also be submitted to the chain together with the proof, 
which ensures data availability and obtains the same level of security as Layer 1.

The Ethereum Layer 2 protocols related to ZK Rollup are: [zkSync][zkSync], [aztec][aztec], 
etc. Their contract verification modules share a part of the elliptic curve's basic algorithms. 
In 2017, Ethereum integrated three basic cryptographic calculation units of the alt
bn128 curve in the form of pre-compiled contracts, which are [EIP196][EIP196]’s ADD and Scalar_MUL 
algorithms, and [EIP197][EIP197]’s Pairing algorithm. On top of this, due to the lack of rapid 
upgrade capabilities of Ethereum, the community can only encapsulate some  tool libraries 
through costly Solidity contracts. On top of these basic contract  libraries, many DApps can combine 
ZK Rollup technology to achieve some innovations, such as [loopring][loopring], [gitcoin][gitcoin] 
and [uniswap][uniswap] etc. However, in the past 3 years, ZK technology has further developed, 
such as the more practical [BLS curve][BLS curve], and [PLONK algorithm][PLONK algorithm] etc. 
Ethereum has not yet supported it.

## What zkMega does
zkMega 目的是为了给Wasm合约生态**引入零知识原语**，类似于 Ethereum，开发者可以在合约生态中基于零知识原语构建出零知识的dapp及服务于部分Layer2的需求。因此 zkMega 在链的角度上实现的功能为几个基本的 零知识原语 的调用接口。而后续将会继续提供链下开发零知识合约功能的工具包组件等。

zkMega 首先会实现链上的零知识的接口调用功能，并提供合约示例。零知识的接口调用功能分为 Runtime 的实现以及 `pallet-contracts`合约接口的实现。而 `pallet-contracts`的实现本质上是通过`ChainExtentions`调用了Runtime的实现。

而 zkMega 实现零知识的方式是使用了 arkwork 的零知识实现库，该库可以编译成 Wasm 被使用。因此 zkMega 做了对于 Native 执行零知识调用与 Wasm 中执行零知识调用的性能对比（benchmark）。基于Substrate的链引入 zkMega 时，可以根据自己是否愿意导出 zkMega 使用的零知识的 host_function，来以 Wasm 或是 Native 的形式运行零知识的计算过程。详情请参照文档 [benchmark](./benchmark.md)。

在`pallet-contracts`的模块引入了 zkMega 的链中，部署于`pallet-contracts`中的合约模块可以通过`ChainExtentions`在合约中调用链里 zkMega 提供的零知识的功能。由于`ChainExtentions`是通过`func_id`来区分调用的方法，因此 Patract 希望通过 [Patract/pallet-contracts/Polkadot Improvement Proposals (PIPs)](https://github.com/patractlabs/pips) 来协定 func_id 与参数。因此 Patract 通过 Pip-101 [Function ids for Patract Labs zkMega](https://github.com/patractlabs/PIPs/blob/main/PIPs/pip-101.md) 来约定 zkMega 在 `ChainExtentions` 部分使用的 `func_id`。

另一方面 zkMega 为了丰富开发人员的基础库，仿照 Ethereum 生态中的 `libsnark` 库，提供了例如 `MIMC`，`Merkle Tree` 等实用公共函数。这些库可以直接在ink!中被调用。详情可以参考 [example](./example.md)。

## LICENSE

Apache-2.0

[zkSync]: https://zksync.io/
[aztec]: https://aztec.network/
[EIP196]: https://github.com/ethereum/EIPs/blob/master/EIPS/eip-196.md
[EIP197]: https://github.com/ethereum/EIPs/blob/master/EIPS/eip-197.md
[gitcoin]: https://gitcoin.co/
[uniswap]: https://uniswap.org/
[loopring]: https://loopring.org/
[BLS curve]: https://electriccoin.co/blog/new-snark-curve/
[PLONK algorithm]: https://eprint.iacr.org/2019/953/20190827:165656