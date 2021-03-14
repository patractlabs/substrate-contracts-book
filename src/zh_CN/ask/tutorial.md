# tutorial

> 当前 Ask! 只进行了Kusama国库议案的第一期的开发。因此还未发布到npm等公开仓库中。

## 简单运行：

1. clone 项目

    ```bash
    $ git clone https://github.com/patractlabs/ask
    ```

2. 案例合约

    在Ask!项目中准备了一些案例合约例如`flipper`，`incrementer`等，在`/example`目录下。开发者可以直接参考这些项目，也可以通过新建一个typescript文件(*.ts)来执行下列过程。以下示例过程的最终代码位于`/example/solar` 目录下。

    1. 新建文件 `solar.ts`
    2. 定义合约存储

        Ask! 采用注解 `@storage` 定义一个合约的存储。这个过程类似于ink!中的 `#[ink(storage)]`宏。例如在这个案例中，我们定义下面3个合约存储变量：

        ```typescript
        @storage
        class Planets {
            name: string;
            radius: u32;
            isdwarf: boolean;
        }
        ```

    3. 定义合约的范围及可调用方法：

        Ask! 采用`@contract`注解来指定一个class为合约类。这个过程类似于ink!中的 `#[ink::contract]`宏。

        ```typescript
        @contract
        class SolarSystem {
            // ...
        }
        ```

        Ask! 提供了`@constructor` 和 `@message` 注解修饰合约类中的方法，类似于ink!中的 `#[ink(constructor)]` 和 `#[ink(message)]`。

        ```typescript
        @contract
        class SolarSystem {
            @constructor
            default(name: string) void { /*...*/ }

            @message(mutates = false, selector = "0x0a0b0c0d")
            getRadius(): u32 { /*...*/ }
        }
        ```

    4. 编译 Ask! 合约

        1. 安装依赖环境：

            进入Ask!项目的根目录，执行命令：

            ```bash
            $ npm install
            ```

        2. 编译

            在 Ask! 项目的**根目录**下编译合约。假设当前合约的路径位于`examples/solar/solar.ts`（开发者可以替换为自己合约文件的路径），则编译命令是：

            ```bash
            ./assembly/codegen/bin/ask examples/solar/solar.ts
            ```

            执行了这个命令后，会在合约文件的目录下生成一个扩展文件`extension.ts`，且合约的编译产物位于合约文件目录下的`target`目录。

        3. 测试

            开发者可以采用 Patract 提供的合约执行环境沙盒 [Europa](../europa/introduction.md) 进行合约的部署调用和测试。

            启动 Europa后，开发者可以通过 [https://polkadot.js.org/apps]( https://polkadot.js.org/apps) 将`target`目录下的合约进行部署和调用，这个过程和 ink! 合约的操作过程一致。
