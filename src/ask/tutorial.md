# Ask!教程

当前Ask!只进行到了Kusama国库议案的第二期的开发，许多功能尚未稳定，因此还未发布到npm等公开仓库中。

## 前提条件

阅读该文档需要您拥有AssemblyScript或Typescript的编程基础，如果您之前未接触过它们，请参见[AssemblyScript](https://www.assemblyscript.org/)。

## 下载

1. 复制仓库。目前Ask!项目代码还未上传到npm，需要您直接复制仓库，待功能开发稳定后将会发布到npm。

    ```bash
    git clone https://github.com/patractlabs/ask
    ```
2. 进入目录下载依赖。

    ```bash
    yarn
    ```

## 开始使用

### 案例合约

在Ask!项目中的`/examples`目录下维护了一些基本的示例合约，例如`flipper`、`incrementer`，您可参见这些示例来编写智能合约。
下文的智能合约编写流程以`/examples/flipper`目录下的合约为例。

新建文件`flipper.ts`作为入口点。后续编译生成的Wasm代码中的`export`段对应的是该文件编译后导出的函数，实际上AS单文件就可以作为一个项目，但在这里我们需要通过package.json引入开发依赖。

<!-- TODO：需要编写包发布后的项目流程 -->
<!-- 就像JS/TS项目那样， -->

 您也可以使用AssemblyScript官方提供的[asbuild](https://github.com/AssemblyScript/asbuild/)构建工具来生成初始项目。

在工程创建完毕后，我们开始定义合约存储。Ask! 采用装饰器`@storage`定义一个合约存储类，这个过程类似于ink!中的`#[ink(storage)]`宏。例如在这个案例中，我们定义以下合约存储类。

```ts
@storage
class Stored {
  flag: bool;
}
```

这样`Stored`就可以作为存储类在合约里使用。下面展示合约类的定义。Ask!提供`@contract`装饰器来定义一个合约类，它类似于ink!中的`#[ink::contract]`宏。`@contract` 支持继承。

```ts
@contract
class Flipper {
  // ...
}
```

Ask! 提供了`@constructor`和`@message`装饰器，可以装饰`@contract`合约类中的非静态方法，它们类似于ink!中的`#[ink(constructor)]`和                              `#[ink(message)]`。

- `@constructor`装饰的方法会成为合约的一个初始化函数，每个`@contract`装饰的类必须至少需要有一个`@constructor`方法（不包括父类），父类的初始化函数不会直接成为合约初始化的函数。
- `@message` 装饰的方法会成为合约的一个方法调用，每个`@contract`装饰的类必须至少需要有一个`@message`方法（包括父类），子类默认会继承父类的合约方法，您可以重载继承的合约的方法。

**注意** 每个合约类需要定义一个无参的构造函数来实例化合约，`@constructor`函数是在构造函数调用之后才被调用。

<!-- TODO: 增加 @ignore 装饰器 -->

之后我们实现Flipper具体逻辑。

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

它提供了一个合约初始化函数和两个合约方法，其中get方法是只读的，因为它设置了`mutates = false`。

这里简单介绍了`@storage`和`@contract`装饰器，并且我们已经实现了一个最小合约示例。

### 编译

假设我们在Ask!项目的根目录下编译合约，当前合约的路径位于`examples/flipper/flipper.ts`（您也可以替换为自己合约文件的路径），执行以下命令。

```bash
npx ask examples/flipper/flipper.ts
```

执行完以上命令后，会在合约文件的目录下生成一个目录`extension`，里面存放的是展开后的代码，而合约的编译生成的文件位于合约文件目录下的`target`目录。

- `metadata.json`描述了这个合约的ABI，它可以提供给支持该规范的链或工具。
- `target.wasm` 是最终的Wasm合约代码，部署到相应的链上即可执行。

### 链上环境测试

Ask! 当前不支持单元测试，您可以采用Patract提供的合约执行环境沙盒[Europa](../europa/introduction.md)进行合约的部署调用和测试。启动Europa后，您可以通过 [https://polkadot.js.org/apps](https://polkadot.js.org/apps) 将`target`目录下的合约进行部署和调用，这个过程和ink!合约的操作过程一致。

