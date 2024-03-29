# 合约综述

## 背景信息

区块链运行合约的模型从本质上可以认为是区块链的环境（分布式共识系统）和能运行一段逻辑的平台，例如比特币的模型可以拆分为区块模型/PoW 和比特币脚本，以太坊的模型可以拆分为区块、状态模型/PoW和EVM，Substrate的模型可以拆分为区块、状态模型/Bft共识和Runtime。

因此一般来说，可以将区块链的模型拆分成：

* 运行区块链的底层系统：提供分布式可信环境。
* 链的业务逻辑：运行在可信环境中。

在区块链系统中，要求对相同的代码，相同的状态，执行的结果一定要一致。因此在提供链的业务逻辑这一层，为了保证执行结果的一致，要求整个运行环境不会因为运行节点的不一致（指不是同一个节点）而导致运行的结果不一致。为了保证这种特性，绝大部分区块链都会采用沙盒/虚拟机的模型，并在其基础上裁剪一些功能来实现。

运行合约的平台是一种链的业务逻辑，这种业务逻辑特殊在其上面可运行的代码是开放的，合约内容不受链本身控制。对于这种情况，更需要一种沙盒的环境来隔离各个合约之间的运行。

## 什么是沙盒

沙盒在计算机领域中的概念很广泛，虚拟机最容易模拟沙盒的环境。因此在区块链中，一般而言沙盒都会由一个虚拟机去运行。不同的链采用不同的虚拟机来运行合约的沙盒。

* Ethereum

Gavin Wood 写的黄皮书中提出了EVM的模型，创建了以太坊虚拟机（EVM）的概念并拟定了EVM的OP_CODE，之后设计了Solidity编译到OP_CODE，从而有了Ethereum的整个生态。相当于Ethereum处理区块链的合约沙盒模型，从零到一构建所有设施。因此Solidity的语法以及EVM能做的事和现在的区块链相比，就显得十分简陋，例如Solidity的语法、EVM的栈深限制等。但其作为先行者开创了区块链合约虚拟机模型的先河。

* Fabric

作为联盟链，在使用场景上与公有链存在区别。Fabric提出链码的概念，并将链码运行在了Docker上。和EVM相比，Docker就是比较重的一种虚拟机。因此与EVM比较，Fabric的链码可以做到比Solidity更多的事，当然其运行的代价会相对高很多。

* EOS

EOS采用了Wasm作为合约的虚拟机，当时也是EOS的优势。相比于运行Solidity的EVM，EOS的Wasm虚拟机的运行效率高了许多，以C++作为编译到Wasm的语言也吸引了许多传统的开发者。EOS作为Wasm虚拟机的先行者，在当时已经体现出Wasm相对于EVM的优势，但由于其合约模型的设计的缺陷和当时环境的约束，以及EOS并非真正的去中心化系统，导致EOS并没有很好的展现出Wasm合约系统的能力。

* Substrate 的`pallet-contracts`

`pallet-contracts`采用Wasm虚拟机来运行合约，当前出于安全方面的考虑，只采用了`Wasmi`解释器来执行Wasm。但其合约模型与EVM的合约模型近似（详见下一章节）。Wasm虚拟机与EVM同样具有启动快，随用随丢的特性，具备高性能和高扩展性的同时又不像Docker、 JVM一样太过庞大。因此Wasm慢慢在浏览器环境以外的更多场景被采用，例如边缘计算、热更新等。所以当前越来越多的新区块链在需要一个沙盒环境时会将Wasm虚拟机作为主要方案。另一方面Wasm也具备从不同语言编译到Wasm的特性，例如Rust、Assemblyscript、C++等，从而吸引了各类开发者加入到合约开发过程中。

* 其他

其他区块链为了完成这个沙盒的目标也会有各自的方案，有的联盟链采用了裁剪过的JVM，有的公链采用了`RISC-V`的虚拟机，有的链采用了从零设计一个虚拟机（例如libra）。这些方案各自有各自的需求与特性，但从模型上而言，无论什么方案，最终目标都是为了提供一个虚拟机环境以运行合约沙盒。

## 运行合约的沙盒

链的业务逻辑大部分会运行于沙盒的系统中，且运行合约这种业务逻辑更是需要沙盒进行隔离。而另一方面Substrate的runtime就是一个运行于Wasm中的沙盒环境，因此在Substrate的合约模块

`pallet-evm`和`pallet-contracts`，就是需要在一个沙盒环境中运行另一个沙盒，如下图所示。

![](./imgs/overview_module.jpg)

* 图左是以太坊模型，表示每运行一个合约，需要在链的平台上启动一个以太坊虚拟机去运行。
* 图右是Substrate模型，Substrate链的业务逻辑在Wasm虚拟机中运行。

`pallet-evm`：将以太坊的EVM编译到了Runtime Wasm当中，因此每运行一个合约实际上与以太坊一致，创建了一个以太坊虚拟机去运行。如果链是以Wasm形态运行，即是在Wasm虚拟机中生成了一个以太坊虚拟机去运行。

`pallet-contracts`：Wasm合约使用Wasm虚拟机运行合约，与`pallet-evm`不同的是，如果链是以Wasm形态运行，Wasm合约的虚拟机是跳出当前Runtime Wasm虚拟机，重新创建了一个新的Wasm虚拟机运行。截止目前，Runtime的Wasm虚拟机推荐采用的是`Wasmtime`，而`pallet-contracts`只能采用`Wasmi`。`pallet-contracts`也可以使用`Wasmtime`执行，但是当前Parity认为`Wasmtime`不可控性比较大，因此暂时还未采用`Wasmtime`。当前他们有相关计划，也有原型代码来使用`Wasmtime`运行`pallet-contracts`的合约。

> 注意，在substrate合并了提交[Remove dependency on sandboxing host functions #9592](https://github.com/paritytech/substrate/pull/9592)后，wasmi 在 Wasm 的执行环境下不再跳出当前 Wasm 执行器独立执行，而是视作一段正常的程序运行于当前的 Wasm 环境中。此时的运行模型就与 pallet-evm 是一致的，即在 Wasm 环境中运行了一个 Wasm 解释器，在该解释器中去执行 Wasm 代码。

总之在运行合约的过程中，大部分链都采用了一种沙盒的模型去运行合约。而对于EVM和

`pallet-contracts`模型而言，每运行一个合约就会创建一个虚拟机。

## 更多信息

Wasmtime是实现了JIT的Wasm虚拟机，而`Wasmi`是纯解释器型的Wasm虚拟机。从执行效率上来说，Wasmtime的执行效率比Wasmi高很多。
