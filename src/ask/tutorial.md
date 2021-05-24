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
下面的智能合约编写流程以`/examples/solar` 目录下的合约为例来说明。

首先我们新建文件 `solar.ts`作为入口点，后续编译生成的 wasm 代码中的 `export` 段对应的是该文件编译后导出的函数。实际上 AS 单文件就可以作为一个项目，但在这里我们需要引入 package.json。

<!-- TODO：需要编写包发布后的项目流程 -->
<!-- 就像JS/TS项目那样， -->

你也可以使用 AssemblyScript 官方提供的 [asbuild](https://github.com/AssemblyScript/asbuild/) 构建工具来生成初始项目。

在工程创建完毕后，我们开始定义合约存储。Ask! 采用装饰器 `@storage` 定义一个合约的存储。这个过程类似于 ink!中的 `#[ink(storage)]`宏。例如在这个案例中，我们定义下面 3 个合约存储变量：

```ts
@storage
class Stored {
  flag: bool;
}
```

定义合约的范围及可调用方法：

Ask! 提供`@contract`装饰器来指定一个 class 为合约类，它类似于 ink!中的 `#[ink::contract]`宏。`@contract` 支持继承。

```ts
@contract
class Flipper {
  // ...
}
```

Ask! 提供了`@constructor` 和 `@message` 装饰器可以装饰`@contract`合约类中的非静态方法，它们类似于 ink!中的 `#[ink(constructor)]` 和 `#[ink(message)]`。

- `@constructor` 装饰的方法会成为合约的一个初始化函数，每个`@contract`装饰的类必须至少需要有一个`@constructor`方法（不包括父类），父类的初始化函数不会直接成为合约初始化的函数。
- `@message` 装饰的方法会成为合约的一个方法调用，每个`@contract`装饰的类必须至少需要有一个`@message`方法（包括父类），子类默认会继承父类的合约方法，用户可以重载继承的合约的方法。

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

  @message(mutates = false)
  get(): bool {
    return this.stored.flag;
  }
}
```

### 编译

在 Ask! 项目的**根目录**下编译合约。假设当前合约的路径位于`examples/solar/solar.ts`（开发者可以替换为自己合约文件的路径），则编译命令是：

```bash
npx ask examples/solar/solar.ts
```

执行了这个命令后，会在合约文件的目录下生成一个扩展文件 `extension.ts`，且合约的编译产物位于合约文件目录下的`target`目录。

### 测试

开发者可以采用 Patract 提供的合约执行环境沙盒 [Europa](../europa/introduction.md) 进行合约的部署调用和测试。

启动 Europa 后，开发者可以通过 [https://polkadot.js.org/apps](https://polkadot.js.org/apps) 将`target`目录下的合约进行部署和调用，这个过程和 ink! 合约的操作过程一致。
