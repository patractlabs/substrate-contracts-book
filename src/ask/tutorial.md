# Tutorial

> 当前 Ask! 只进行到了 Kusama 国库议案的第二期的开发，功能还未稳定，因此还未发布到 npm 等公开仓库中。

该文档假定用户拥有基本的 AssemblyScript 或 Typescript 编程基础，如果用户之前未接触过 [AssemblyScript](https://www.assemblyscript.org/)，需要对它先有个基本的了解。

## 下载

目前 Ask 项目代码还未上传到 npm，所以需要直接 clone 仓库，待功能开发稳定后将会发布到 npm。

```bash
git clone https://github.com/patractlabs/ask
```

进入目录下载依赖：

```bash
yarn
```

## 开始使用

### 案例合约

在 Ask! 项目中的`/examples`目录下维护了一些基本的示例合约例如`flipper`，`incrementer`等，开发者可以参考这些示例来编写智能合约。
下面的智能合约编写流程以`/examples/flipper` 目录下的合约为例来说明。

首先我们新建文件 `flipper.ts`作为入口点，后续编译生成的 wasm 代码中的 `export` 段对应的是该文件编译后导出的函数。实际上 AS 单文件就可以作为一个项目，但在这里我们需要通过 package.json 引入开发依赖。

<!-- TODO：需要编写包发布后的项目流程 -->
<!-- 就像JS/TS项目那样， -->

你也可以使用 AssemblyScript 官方提供的 [asbuild](https://github.com/AssemblyScript/asbuild/) 构建工具来生成初始项目。

在工程创建完毕后，我们开始定义合约存储。
Ask! 采用装饰器 `@storage` 定义一个合约存储类。这个过程类似于 ink!中的 `#[ink(storage)]`宏。例如在这个案例中，我们定义以下合约存储类：

```ts
@storage
class Stored {
  flag: bool;
}
```

这样`Stored`就可以作为存储类在合约里使用。下面展示合约类的定义。

Ask! 提供`@contract`装饰器来定义一个合约类，它类似于 ink!中的 `#[ink::contract]`宏。`@contract` 支持继承。

```ts
@contract
class Flipper {
  // ...
}
```

Ask! 提供了`@constructor` 和 `@message` 装饰器可以装饰`@contract`合约类中的非静态方法，它们类似于 ink!中的 `#[ink(constructor)]` 和 `#[ink(message)]`。

- `@constructor` 装饰的方法会成为合约的一个初始化函数，每个`@contract`装饰的类必须至少需要有一个`@constructor`方法（不包括父类），父类的初始化函数不会直接成为合约初始化的函数。
- `@message` 装饰的方法会成为合约的一个方法调用，每个`@contract`装饰的类必须至少需要有一个`@message`方法（包括父类），子类默认会继承父类的合约方法，用户可以重载继承的合约的方法。

注意：每个合约类需要定义一个无参的构造函数来实例化合约，`@constructor` 函数是在构造函数调用之后才被调用。

<!-- TODO: 增加 @ignore 装饰器 -->

我们实现 Flipper 的具体逻辑：

```ts
@contract
class Flipper {
  private stored: Stored;

  constructor() {
    this.stored = new Stored();
  }

  @constructor
  default(initFlag: bool): void {
    this.stored.flag = initFlag;
  }

  @message
  flip(): void {
    const v = this.stored.flag;
    this.stored.flag = !v;
  }

  @message((mutates = false))
  get(): bool {
    return this.stored.flag;
  }
}
```

它提供了一个合约初始化函数和两个合约方法，其中 `get` 方法是只读的。

现在我们已经实现了一个最小合约示例。

### 编译

假设我们在 Ask! 项目的**根目录**下编译合约，当前合约的路径位于`examples/solar/solar.ts`（开发者可以替换为自己合约文件的路径），则编译命令是：

```bash
npx ask examples/solar/solar.ts
```

执行了这个命令后，会在合约文件的目录下生成一个扩展文件 `extension.ts`，且合约的编译产物位于合约文件目录下的`target`目录。

- `metadata.json`描述了这个合约的 ABI，它可以提供给支持该规范的链或工具。
- `flipper.wasm` 是最终的 wasm 合约代码，部署到相应的链上即可执行。

### 链上环境测试

Ask! 当前不支持单元测试。

开发者可以采用 Patract 提供的合约执行环境沙盒 [Europa](../europa/introduction.md) 进行合约的部署调用和测试。

启动 Europa 后，开发者可以通过 [https://polkadot.js.org/apps](https://polkadot.js.org/apps) 将`target`目录下的合约进行部署和调用，这个过程和 ink! 合约的操作过程一致。
