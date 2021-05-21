# 设计

## Ask! 设计总览

AssemblyScript 使用 asc 编译器将 AssemblyScript 文件编译为 WebAssembly 字节码。 但是无法直接生成符合 `pallet-contract` ABI 的 wasm 字节码和`metadata.json`元信息文件文件,因此需要编写 AS transform 介入编译器编译流程，在合适的位置生成 ABI 相关的代码并导出，在类型信息确定之后生成 `metadata.json`。

## 设计思路

Ask! 将提供 `ask-transform`（在以下描述中简称为 `transform`）和 `ask-lang` 两个库。
此外，我们在后续将提供一个名为 `ask-cli` 的构建工具（类似于 ink!的`cargo-contract`），用于帮助建立和管理用 Ask！编写的 Wasm 智能合约。

Ask! 的功能按照如下实现：

- `ask-lang`的主要功能是为编写智能合约提供高层 API，包括`pallet-contract`原语高层封装/scale 编码/KV 存储抽象/常用的基本类型/通用的 interfaces。用户可以通过装饰器来自动派生这些基本类的组合。
- `ask-transform`的主要功能是根据 Ask! 代码里使用的装饰器，生成符合`pallet-contract` 规范的代码和`metadata.json`元信息文件文件。这个部分需要完成以下任务：

  - 解析合约接口和参数，并生成元数据文件
  - 解析自定义合约装饰器，生成相应的逻辑代码
  - 根据存储的定义按照一定流程读/写合约存储

- `ask-cli`的主要功能是在 cli 中管理 Ask!项目，其中包括以下功能：

  - 创建 ask!合约模板。
  - 使用额外的工具如 wasm-opt 来优化 wasm 代码
  - 检查所生成的 Wasm 代码的合法性。
