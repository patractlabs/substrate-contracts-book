# Redspot 教程

## 环境准备

### 安装Node.js

* 本地安装Node.js ，且 Node.js 版本 ≥14.0。您可访问[Node.js](http://nodejs.cn/)官网完成安装或升级。

**注意**建议您使用nvm安装Node.js，Windows 用户可改用nvm-windows。

### ink! 合约编译的工具链

* Rust环境。由于ink!合约需要Rust的Wasm工具链，且当前Wasm只能在nightly工具链下运行，因此您需要先准备Wasm编译环境。
```bash
rustup install nightly
rustup component add rust-src --toolchain nightly
rustup target add wasm32-unknown-unknown --toolchain nightly
```

* ink! 编译合约的工具`cargo-contract`。您可使用以下命令安装默认提供的官方`cargo-contract`。
```bash
cargo install cargo-contract --force
```

**注意** 使用`cargo-contrac`t时，必须在当前的环境中准备好`wasm-opt`，详情请参见[cargo-contract](https://github.com/paritytech/cargo-contract)。

如果您不希望在本机上安装Rust、cargo-contract环境，您可以使用Docker拉取镜像进行环境准备。详情请参见[Tasks](https://docs.patract.io/redspot/tasks.html)部分。

### 准备能运行合约的区块链节点

* **Jupiter**

[Jupiter](http://[https://github.com/patractlabs/jupiter)是由Patract 维护，包含 Patract 合约设计规范并兼容最新`pallet-contracts`模块的合约测试网。Jupiter 有三类节点，分别是：

1. 运行于 rococo 上的Jupiter合约平行链。
2. 独立运行对外提供最新合约功能的Jupiter独立测试网。
3. 适用于本地快速测试的Jupiter节点。

关于这三类节点的区别及编译安装等信息，请参见该项目的Readme模块。

* **Europa**

[Europa](https://github.com/patractlabs/europa)是由Patract 设计，帮助合约开发者调试及测试合约的合约沙盒。该合约沙盒类似于以太坊生态中的Ganache，但是Europa的特性更多的体现在其提供了部署调用合约过程中的详细执行信息的日志，能够最大程度反映出合约模块这个黑盒的运行情况。

您可以通过以下命令安装并启动Europa。

```bash
cargo install europa --git https://github.com/patractlabs/europa --locked --force
europa --tmp
```

Europa 不同的版本及其他信息，请参见该项目的[Readme](https://github.com/patractlabs/europa)。

* **Canvas**

[Canvas](https://github.com/paritytech/canvas-node)是由官方提供的具备`pallet-contracts`模块的合约测试链，这个测试链是一个官方`ink`! &`pallet-contracts`开发组维护的测试网。参与canvas 络的方式请参见该项目的Readme模块。若您只是为了在本地运行测试节点，可以执行以下命令。

```bash
cargo install canvas-node --git https://github.com/paritytech/canvas-node.git --force --locked
canvas --dev --tmp
```

## 创建 Redspot 项目

### 从模版安装

Redspot 提供合约开发模版，可以让您快速搭建起一个项目。目前仅支持安装 erc20 合约的模版。

如果您要从模版创建一个新项目，可以选择使用npx。npx是npm (*npm 5.2+*) 里自带的一个包执行器。执行以下命令将会拉取最新的Redspot，并以 erc20 为模板构建出 Redspot 项目。

```plain
npx redspot-new erc20
```

**注意 **因为当前 ink! 变动比较频繁，所以Redspot还未提供从模板创建项目的功能。您如果需要其他项目模板，可以从Redspot的[项目仓库](https://github.com/patractlabs/redspot)中的example目录中拷贝到任意目录下，并更改项目名称等配置信息。example目录下的所有案例都已经是Redspot项目结构，因此您不需要再执行`npx redspot-new`命令创建项目。

如果一个项目由Redspot创建，那么该项目根目录下会存在一个`redspot.config.ts`文件，以此为标志这个项目是Redspot。同时相同目录下的`package.json`则控制了这个项目对应的Redspot的版本。

如果您通过Github、example或其他途径获取到了已构建好的Redspot项目，您可以进入到该项目目录下并执行`yarn install`命令恢复该Redspot项目使用的Redspot环境。示例如下。

```bash
# copy the delegator multi-contract example from redspot repo to local dir
cp -r ./redpost/example/delegator ./
cd delegator
yarn install
```

默认的模版是已经配置了typescript 。也推荐您使用typescript进行开发。typescript兼容Javascript 的，不定义任何类型，也可以正常运行，并且仍能够拥有typescript强大的类型提示和错误提示功能。

### 集成到已有的合约项目中

Redspot可以轻松地集成到已存在的合约项目中。我们以官方的[ink](https://github.com/paritytech/ink)仓库中的examples目录下的合约为例。

#### 编译合约

1. 克隆 ink 仓库并打开 ink 目录。
    ```bash
    git clone https://github.com/paritytech/ink.git
    cd ink
    ```
2. 在 ink 的根目录中创建以下三个文件。
* **redspot.config.ts**
    ```typescript
    import { RedspotUserConfig } from 'redspot/types';
    import '@redspot/patract'; // 引入 @redspot/patract 插件
    import '@redspot/chai'; // 引入 @redspot/chai 插件
    export default {
      defaultNetwork: 'development', // 默认的 network
      contract: {
        ink: {
          toolchain: 'nightly',      // 指定编译合约时的 toolchain 版本
          sources: ['examples/**/*'] // 合约所在的目录
        }
      },
      networks: {
        // development 网络的配置
        development: {
          endpoint: 'ws://127.0.0.1:9944',
          types: {},
          gasLimit: '400000000000', // 设置默认的gasLimit
          explorerUrl:
            'https://polkadot.js.org/apps/#/explorer/query/?rpc=ws://127.0.0.1:9944/'
        },
      },
      mocha: {
        timeout: 60000
      }
    } as RedspotUserConfig;
    ```

* **package.json**
    ```json
    {
      "name": "examples",
      "version": "0.1.0",
      "private": true,
      "resolutions": {
        "@polkadot/api": "^3.10.2",
        "@polkadot/api-contract": "^3.10.2"
      },
      "dependencies": {
        "@redspot/chai": "^0.10.1",
        "@redspot/patract": "^0.10.1",
        "@types/chai": "^4.2.14",
        "@types/mocha": "^8.0.3",
        "chai": "^4.2.0",
        "redspot": "^0.10.1",
        "typescript": "^4.0.2"
      },
      "scripts": {
        "build": "npx redspot compile",
        "test": "npx redspot test"
      }
    }
    ```

* **tsconfig.json**
    ```json
    {
      "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "strict": true,
        "esModuleInterop": true,
        "outDir": "dist",
        "noImplicitAny": false
      },
      "include": [
        "**/*.ts"
      ],
      "exclude": [
        "node_modules"
      ],
      "files": [
        "./redspot.config.ts",
      ]
    }
    ```

3. 安装 npm 依赖，在这里推荐您使用[yarn](https://classic.yarnpkg.com/en/docs/install)作为包管理器。
    ```plain
    yarn 或者 npm install
    ```

4. 在项目的根目录下运行`npx redspot compile`命令，编译examples目录下的所有合约。
    ```plain
    npx redspot compile examples/erc20
    ```
    该命令会指定编译 erc20 合约。编译完成后，您可在artifacts目录下找到编译产生的信息。
#### 部署合约

现在您可以通过 Redspot 运行一个部署脚本了。

1. 在 ink 根目录创建deploy.ts文件。
    ```typescript
    import { network, patract } from "redspot";
    const { getContractFactory } = patract;
    const { getSigners, api } = network;
    async function run() {
        console.log("deploy erc20");
        await api.isReady;
        console.log("deploy erc201");
        const signers = await getSigners();
        const signer = signers[0];
        const contractFactory = await getContractFactory("erc20", signer);
        const contract = await contractFactory.deploy("new", "1000000", {
            gasLimit: "200000000000",
            value: "10000000000000000",
        });
        console.log(
            "Deploy successfully. The contract address: ",
            contract.address.toString()
        );
        api.disconnect();
    }
    run().catch((err) => {
        console.log(err);
    });
    ```

2. 确保已经在redspot.config.ts 中正确配置了网络。
    ```typescript
    {
            ...
            networks: {
        development: {
          endpoint: 'ws://127.0.0.1:9944', // 
          types: {},
          ...
        },
      },
    }
    ```

3. 加上`--no-compile`防止重复编译，运行 deploy.ts 文件。
    ```bash
    npx redspot run ./deploy.ts --no-compile
    ```

#### 结果验证

合约部署成功后，您可以得到类似这样的信息。

    Deploy successfully. The contract address:  5CqB5Mh9UdVbTE1Gt5PJfWSiCHydJaJsA31HjKGti1Z2fn78

#### 测试合约

在 tests 目录下新增 erc20.test.ts 文件，用来测试 erc20 合约。

    import BN from 'bn.js';
    import { expect } from 'chai';
    import { patract, network, artifacts } from 'redspot';
    const { getContractFactory, getRandomSigner } = patract;
    const { api, getSigners } = network;
    describe('ERC20', () => {
      after(() => {
        return api.disconnect();
      });
      async function setup() {
        const one = new BN(10).pow(new BN(api.registry.chainDecimals[0]));
        const signers = await getSigners();
        const Alice = signers[0];
        const sender = Alice;
        const contractFactory = await getContractFactory('erc20', sender);
        const contract = await contractFactory.deploy('new', '1000');
        const abi = artifacts.readArtifact('erc20');
        const receiver = await getRandomSigner();
        return { sender, contractFactory, contract, abi, receiver, Alice, one };
      }
      it('Assigns initial balance', async () => {
        const { contract, sender } = await setup();
        const result = await contract.query.balanceOf(sender.address);
        expect(result.output).to.equal(1000);
      });
      it('Transfer emits event', async () => {
        const { contract, sender, receiver } = await setup();
        await expect(contract.tx.transfer(receiver.address, 7))
          .to.emit(contract, 'Transfer')
          .withArgs(sender.address, receiver.address, 7);
      });
      it('Can not transfer above the amount', async () => {
        const { contract, receiver } = await setup();
        await expect(contract.tx.transfer(receiver.address, 1007)).to.not.emit(
          contract,
          'Transfer'
        );
      });
      it('Can not transfer from empty account', async () => {
        const { contract, Alice, one, sender } = await setup();
        const emptyAccount = await getRandomSigner(Alice, one.muln(10000));
        await expect(
          contract.tx.transfer(sender.address, 7, {
            signer: emptyAccount
          })
        ).to.not.emit(contract, 'Transfer');
      });
    });

运行测试命令。

```bash
npx redspot test --no-compile
```

您将会得到以下类似结果。

    ```
    ✓ Can not transfer from empty account (17912ms)
      4 passing (46s)

查看更多内置信息，请参见[tasks](./tasks)。

