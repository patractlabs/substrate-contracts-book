# 设计

## Ask! 设计总览

AssemblyScript使用asc编译器将AssemblyScript文件编译为WebAssembly字节码，但是无法直接生成符合 `pallet-contract` ABI的 Wasm字节码和`metadata.json`元信息文件,因此您需要编写AS transform介入编译器编译流程，在合适的位置生成ABI相关的代码并导出，在类型信息确定之后生成 `metadata.json`。

## 设计思路

Ask! 提供了 `ask-transform`（简称 `transform`）和 `ask-lang` 两个库。
此外，我们在后续将提供一个名为 `ask-cli` 的构建工具，这个工具类似于ink!的`cargo-contract`，用于帮助建立和管理用Ask编写的Wasm智能合约。

Ask! 的功能按照如下实现：

- `ask-lang`的主要功能是为编写智能合约提供高层API，包括`pallet-contract`原语高层封装、Scale 编码、K/V存储抽象、常用的基本类型和通用的 interfaces。您可以通过装饰器来自动派生这些基本类的组合。
- `ask-transform`的主要功能根据Ask! 代码里使用的装饰器，生成符合`pallet-contract` 规范的代码和`metadata.json`元信息文件，这个部分实现以下功能：
  - 解析合约接口和参数，并生成元数据文件。
  - 解析自定义合约装饰器，生成相应的逻辑代码。
  - 根据存储的定义按照一定流程读/写合约存储。

<!-- TODO: 未实现 -->
<!-- - `ask-cli`的主要功能是在cli中管理Ask!项目，其中包括以下功能：

  - 创建Ask!合约模板。
  - 使用额外的工具例如wasm-opt来优化Wasm代码。
  - 检查所生成的Wasm代码的合法性。 -->
