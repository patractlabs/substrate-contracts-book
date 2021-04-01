# 设计

## Ask! 设计总览

AssemblyScript 使用 asc 编译器将TypeScript（TS）文件编译为WebAssembly字节码。 但是，asc是通用编译工具，无法使用智能合约结构将TS文件直接编译为WASM字节码和元数据信息。因此为了使 asc 能够识别并解析 Ask! 提供的和合约相关的注解与特定语法，需要对 asc 进行修改。

## 设计

ask! 将提供 `Contract Framework`（在以下描述中称为 `Framework`）和`Contract PreProcessor`（在以下描述中称为`PreProcessor`）两个组件。 此外，我们还将提供一个名为ask-cli的支持工具（类似于ink!的`cargo-contract`），用于帮助建立和管理用Ask！编写的Wasm智能合约。

Ask!的功能按照如下实现：

* `Framework`的主要功能是为链上API提供高级包装，然后提供用于通过注解类型编写合约的规范。它需要完成以下任务：

    * 定义基于注解的合约撰写规范
    * 在元数据中定义合约接口的描述规范
    * 封装合约与链之间数据交互的详细信息，例如合约存储中密钥生成规则的定义以及存储的读写
    * 封装链上的功能组件，例如Balance，AccountId，Block，Crypto等。
    * 根据合约的语义将AS合约编译为Wasm代码，并包含与FRAME合约的交互接口的链接符号。

* `PreProcessor`的主要功能是解析框架中定义的注解，并为这些注解生成相应的逻辑代码。根据框架中的合约接口规范，生成元数据文件。这个部分需要完成以下任务：

    * 解析合约中的注解并生成相应的逻辑代码
    * 解析合约接口和参数，并生成元数据文件
    * 解析自定义合约语法（语法糖），并生成相应的逻辑代码
    * 自动存储和加载数据

* `ask-cli`的主要功能是在cli中管理Ask!项目，其中包括以下功能：

    * 创建ask!合约模板。
    * 简化ask!在项目编译过程中，隐藏预处理和编译过程的详细信息。
    * 管理`Framework`，`PreProcessor`和Compiler的版本依赖性。
    * 检查所生成的Wasm代码的合法性。