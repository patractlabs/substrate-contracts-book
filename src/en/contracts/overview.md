# Contract System Overview

Model of the blockchain running contract is considered to be the combination of the blockchain environment (distributed consensus system) and a platform that can run a piece of logic. You can see the following examples:

- Bitcoin model can be divided into block model, PoW, and Bitcoin script.
- Ethereum model can be divided into blocks, state model, PoW, and EVM.
- Substrate model can be divided into blocks, state model, Bft consensus, and Runtime.

In conclusion, we can divide the blockchain model into two parts:

- Underlying system that runs the blockchain, which provides a distributed and trusted environment.
- Business logic of the chain, which runs in this trusted environment.

However, **the execution results must be consistent for the same code and state**, because of features of the blockchain system. Therefore, the running environment must make sure that different running nodes will not cause **inconsistent** results. To achieve this goal, most blockchains use the **sandbox**.

The platform for running the contract is the business logic of a chain. **The code that can run on this business logic is open, and the content of the contract is not controlled by the chain itself**. In this case, a sandbox environment is needed to isolate the running of various contracts.


## What is sandbox?

Sandbox is well known in the computer field. In the blockchain, sandbox is generally run by a virtual machine because the virtual machine can simulate the sandbox environment most easily.

Different chains use different virtual machines to run the contract sandbox:

- Ethereum

    The yellow paper written by Gavin Wood proposed the model of EVM, created the concept of EVM virtual machine, and drafted the OP_CODE of EVM. After that, Solidity was designed to be compiled to OP_CODE, and then the entire ecology of Ethereum was created. It is equivalent to Ethereum's contract sandbox model for processing blockchain, building all facilities from zero to one. Therefore, the syntax of Solidity and the things that EVM can do are very simple compared to the current blockchain, such as syntax of solidity and stack depth limit of EVM. However, as a pioneer, it created a blockchain contract virtual machine model.

- Fabric

    As a consortium chain, Fabric is different from the public chain in usage scenarios. Fabric puts forward the concept of chain code and runs the chain code in docker. Docker is a heavier type of virtual machine compared to EVM. Fabric's chain code can do more than Solidity, but its running cost is higher than EVM.

- EOS

    EOS adopts Wasm as the virtual machine of the contract, which is also the selling point of EOS at that time. Compared to running Solidity's EVM, EOS's Wasm virtual machine has a much higher operating efficiency. Using C++ as a language compiled to Wasm has naturally attracted many traditional developers. EOS, as the forerunner of Wasm virtual machine, has already demonstrated the advantages of Wasm over EVM at that time. However, in addition to constraints of the environment, EOS has defects in the contract model design (see the next chapter for details) and is not really a centralized system. Therefore, EOS does not give full play to the capabilities of the Wasm contract system.

- Substrate's `pallet-contracts`

    `pallet-contracts` uses the Wasm virtual machine to run the contract. Currently, for security reasons, only the Wasmi interpreter is used to execute Wasm. But its contract model is similar to the EVM contract model (see the next chapter for details). Like EVM, Wasm virtual machine has features of fast start-up and hand-to-mouth discard. In addition, Wasm has high performance and high scalability while not being too large like docker and JVM. Therefore, Wasm is slowly being adopted in more scenarios besides the browser environment, such as edge computing, hot updates, and so on. Therefore, more and more new blockchains will use the Wasm virtual machine as the main solution when they need a sandbox environment. On the other hand, Wasm also has the feature of compiling from different languages to Wasm, such as rust, assemblyscript, and c++. This feature can attract all kinds of developers to join the contract development process.

- Other blockchains

    Other blockchains will have their own solutions to accomplish this sandbox goal. Some alliance chains use tailored JVMs, some public chains use RISC-V virtual machines, and some chains use slaves. Zero design a virtual machine (such as libra). These solutions have their own requirements and characteristics, but from the perspective of the model, no matter what the solution, the ultimate goal is to provide a virtual machine environment to run the contract sandbox.


## Sandbox for running contracts

Most of the business logic of the chain described above will run in the sandbox system, and the business logic of running contract needs sandbox isolation. On the other hand, Substrate's runtime is a sandbox environment (running in Wasm), so in Substrate's contract modules (`pallet-emv`, `pallet-contracts`), it is necessary to run another sandbox in a sandbox environment, as illustrated in the following figure:

![overview](./imgs/overview_module.jpg)

Where,

- On the left is the Ethereum model, which means that every time a contract is run, an EVM virtual machine needs to be started on the chain platform to run
- On the right is the Substrate model. We currently know that the business logic of the Substrate chain is running in the Wasm virtual machine:
   - `pallet-EVM`: The EVM of Ethereum is compiled into Runtime Wasm, so every contract that runs is actually consistent with Ethereum, and an EVM virtual machine is created to run. If the chain is running in Wasm form, an EVM virtual machine is generated in the Wasm virtual machine to run.
   - `pallet-contracts`: Wasm contracts use Wasm virtual machine to run contracts. The difference from pallet-evm is that if the chain is running in Wasm form, the virtual machine of Wasm contract jumps out of the current Runtime Wasm virtual machine to create a new Wasm. The virtual machine is running.
      - Currently ([0b0d124d](https://github.com/paritytech/substrate/commit/0b0d124d5f9be89f614f2be8e9da038fcb9f540e) before the submission of substrate) `Wasmtime` is recommended for Runtime's Wasm virtual machine, while `pallet-contracts` contracts can only use `wasmi`.
      - `pallet-contracts` can also be executed using `Wasmtime`, but currently parity believes that `Wasmtime` is relatively uncontrollable, so `Wasmtime` has not been adopted yet. Currently they have related plans and prototype code to use Wasmtime to run `pallet-contracts` contracts.
- In short, in the process of running the contract, most chains adopt a sandbox model to run the contract. For the EVM, pallet-contracts model, a virtual machine is created every time a contract is run.

## Notes:

1. `Wasmtime` is a Wasm virtual machine that implements JIT, and `wasmi` is a pure interpreter-type Wasm virtual machine.
2. The execution efficiency of Wasmtime is much higher than `wasmi`.
