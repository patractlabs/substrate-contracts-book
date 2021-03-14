# tutorial

## 环境准备
### 安装 Node
我们要求node 版本>= 12.0，如果不是，则可以访问nodejs网站并了解如何安装或升级。或者我们建议您使用nvm安装Node。Windows用户可以改用nvm-windows。

### ink! 合约编译的工具链
1. rust 环境。由于 ink! 合约需要rust 的 Wasm 工具链，且当前Wasm只能在nightly工具链下运行，因此开发者需要先准备 Wasm 编译环境：

    ```bash
    rustup install nightly
    rustup component add rust-src --toolchain nightly
    rustup target add wasm32-unknown-unknown --toolchain nightly
    ```

2. ink! 编译合约的工具`cargo-contract`

    请注意以下命令安装的是parity默认提供的官方 `cargo-contract` （当前最新为0.10.0版本）.
    ```bash
    cargo install cargo-contract --force
    ```

    若与Europa的话可以采用由 Patract 提供的 `cargo-contract`，这个版中中提供了一个`-d/--debug`的可选命令
    ```bash
    cargo install cargo-contract --git https://github.com/patractlabs/cargo-contract --branch=v0.10.0 --force
    ```

    当前若安装 `cargo-contract` 的时候没有添加feature `binaryen-as-dependency`，则需要在当前环境中准备`wasm-opt`。

3. 安装 `wasm-opt` （可选）

wasm-opt 来自仓库 [https://github.com/WebAssembly/binaryen](https://github.com/WebAssembly/binaryen)。开发者可以直接在release中下载到对应平台的最新的编译产物。通过直接下载的编译产物请放置在能被任意访问的PATH路径下。

或者开发者也可以通过系统命令安装`wasm-opt`

TODO 确定不同平台的安装方式

### 准备能运行合约的区块链节点

TODO 节点安装文档

## 创建 Redspot 项目
Redspot 通过 `npx` 进行安装。（Redspot 并不需要通过 clone 项目进行安装）

执行以下命令将会拉取**最新**的Redspot，并以 erc20 为模板构建出 Redspot 项目。

```bash
npx redspot-new erc20
```

> 注意由于当前 ink! 变动频繁，因此Redspot还未提供从模板创建项目功能。开发者若需要其他项目模板，可以从 Redspot 的项目仓库 [https://github.com/patractlabs/redspot](https://github.com/patractlabs/redspot) 中的 example 目录中拷贝到任意目录下，并更改例如项目名等配置。**example 目录下的所有案例都已经是 Redspot 项目结构**，因此不需要用户再执行`npx redspot-new`创建项目。

若一个项目已经由 Redspot 创建，则该项目根目录下一定存在一个文件`redspot.config.ts`以标志这个项目是Redspot。同时相同目录下的`package.json`则控制了这个项目对应的Redspot的版本。

若合约开发者从github，或者example，或者其他情况下获取到了别的开发者已经构建好的Redspot项目，则进入到这个项目目录下并执行`yarn install`命令可以恢复出该Redspot项目使用的Redspot环境，例如如下案例：

```bash
# copy the delegator multi-contract example from redspot repo to local dir
cp -r ./redpost/example/delegator ./
cd delegator
yarn install
```

## 项目开发
进入新创建的Redspot的项目的根目录下，执行以下命令可查看当前Redspot支持的任务（Tasks）:

```bash
npx redspot
```

> Task 的概念请参照该文档 [Tasks](./overview.md#Tasks)。

后续的介绍需要插件

TODO 完善项目配置/编译/测试的简单介绍