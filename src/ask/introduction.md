# Ask!

![](https://camo.githubusercontent.com/207ae88065c356df521ad4c6cff4a68ef91ae963a9c65893dd0d9d991a4e00a8/68747470733a2f2f706174726163742e6e6574776f726b2f696d616765732f706174726163742d61736b2e706e67)

Ask! 是由 Patract 设计的基于 AssemblyScript 编程语言，能运行于`pallet-contracts`模块上的 Wasm 合约语言框架。

尽管 AssemblyScript 语法只是 TypeScript 语法的一个（非严格）子集，但是目前存在大量使用 TypeScript 作为开发语言的开发人员，因此这些开发人员学习 AssemblyScript 的成本相对低。 因此，Patract 认为 基于 AssemblyScript 的 Ask! 项目具有很好的应用开发前景。与基于 Rust 的 ink! 相比，Patract 认为 Ask! 可以有效降低合同开发者的门槛，吸引 TypeScript 开发者来开发智能合约，使智能合约生态系统更加丰富。

Ask! 实现方式类似于 ink! 采取 rust 宏设计，通过 eDSL 来实现智能合约。通过在 AssemblyScript （后文称作 AS）中编写编译器 Transform 来提供自定义的装饰器（在其他语言也称为注解），在 AS 的语法基础上提供了能适用于`pallet-contracts`合约模型上的功能。通过注解的这种实现方式，尽量隐藏了与合约相关的细节。另一方面 Ask! 的实现将借鉴部分 ink! 的思路，力图在最终实现上将会**最大程度保证与 ink! 合约的兼容**。

> 例如：
> ink! 描述合约的外部调用接口采用 `#[ink(constructor)]`, `#[ink(message)]` 对合约结构体的方法进行修饰。
> 在 Ask! 中，将会采用 `@constructor`，`@message` 等装饰器来装饰智能合约类定义的方法来实现类似的功能。

## Ask! 编译部分运作方式

Ask! 通过编写 AssemblyScript 的 transform 来介入编译流程，如下：

![ask-design](./ask-design.png)

## Ask! 开发进度

**Ask! 当前还在开发当中，当前只完成了 Kusama 财政议案的 v0.1 版。当前的很多设计将来都有可能发生不兼容性改变。**

<!-- TODO： 添加议案链接及报告链接。 -->
