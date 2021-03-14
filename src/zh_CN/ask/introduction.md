# Ask!

![](https://camo.githubusercontent.com/207ae88065c356df521ad4c6cff4a68ef91ae963a9c65893dd0d9d991a4e00a8/68747470733a2f2f706174726163742e6e6574776f726b2f696d616765732f706174726163742d61736b2e706e67)

Ask! 是由 Patract 设计的，基于 AssemblyScript 上构建的，能运行于`pallet-contracts`模块上的Wasm合约语言框架。

尽管 AssemblyScript 只是 typescript 的一个子集，但是有很多使用 typescript 作为开发语言的开发人员，因此这些开发人员学习 AssemblyScript 的成本非常低。 因此，Patract 认为 Ask! 项目具有很好的应用开发前景。与基于Rust的ink!相比，Patract 认为基于 typescript 的Ask! 可以有效降低合同开发者的门槛并丰富合同开发生态系统。

Ask! 使用和 ink! 采取宏设计eDSL这样类似的方式，通过在 AssemblyScript （后文称作AS）中提供注解，在AS的语法基础上提供了能适用于`pallet-contracts`合约模型上的功能。通过注解的这种实现方式，尽量隐藏了与合约相关的细节。另一方面 Ask! 的实现将会与 ink! 接近，在**最终实现上将会最大程度保证与 ink! 合约的兼容**。

> 例如：
> ink! 描述合约的外部调用接口采用 `#[ink(constructor)]`, `#[ink(message)]` 对合约结构体的方法进行修饰。
> 在 Ask! 中，将会采用 `@constructor`，`@action` 等注解修饰合约的类方法，实现类似的功能。


## Ask! 开发进度

**Ask! 当前还在开发当中，当前只完成了Kusama财政议案的v0.1版。当前的很多设计将来都有可能发生不兼容性改变。**

TODO： 添加议案链接及报告链接。