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

#### 1. Jupiter

Jupiter [https://github.com/patractlabs/jupiter](https://github.com/patractlabs/jupiter) 是 Patract 维护的，包含 Patract 合约设计规范并兼容最新 `pallet-contracts` 模块的合约测试网。

Jupiter 有三类节点：

* 运行于 rococo 上的 Jupiter 合约平行链；
* 独立运行对外提供最新合约功能的 Jupiter 独立测试网；
* 适用于本地快速测试的 Jupiter 节点

这三类节点的区别及编译安装等信息请参阅该项目的Readme。

#### 2. Europa

Europa [https://github.com/patractlabs/europa](https://github.com/patractlabs/europa) 是 Patract 设计的用于帮助合约开发者调试及测试合约的合约沙盒。该合约沙盒的定位类似于 Ethereum 生态中的 Ganache，但 Europa 的特性更多的体现在其提供了部署调用合约过程中的详细执行信息的日志，能够最大程度反应出合约模块这个“黑盒”的运行情况，对合约的开发者十分有帮助。

开发者可以简单的通过以下方式安装并启动Europa：

```bash
cargo install europa --git https://github.com/patractlabs/europa --locked --force
europa --tmp
```

Europa 不同的版本及其他信息请参阅该项目的Readme。

#### 3. Canvas

Canvas [https://github.com/paritytech/canvas-node](https://github.com/paritytech/canvas-node) 是 parity 官方提供的具备 `pallet-contracts` 模块的合约测试链，这个测试链是一个 parity `ink!` & `pallet-contracts` 开发组维护的测试网。

参与 canvas 网络的方式请参照该项目的 Readme。若目的只是为了在本地运行测试节点，可以执行如下命令：

```bash
cargo install canvas-node --git https://github.com/paritytech/canvas-node.git --force --locked
canvas --dev --tmp
```



## 创建 Redspot 项目

### 从模版安装

Redspot 提供合约开发模版，可以让用户快速搭建起一个项目。目前仅支持安装 erc20 合约的模版。

如果要从模版创建一个新项目，可以选择使用 `npx` 。npx 是 npm (*npm 5.2+* ) 里自带的一个包执行器。执行以下命令将会拉取**最新**的Redspot，并以 erc20 为模板构建出 Redspot 项目。

```
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

默认的模版是已经配置了 typescript 。也推荐大家使用 typescript 进行开发。即使没有 typescript 经验，typescript 也是兼容 javascript 的，不定义任何类型，也可以正常运行，并且仍然能够拥有 typescript 强大的类型提示和错误提示功能。



### 集成到已有的合约项目中

Redspot 也可以很轻松的集成到已存在的合约项目中。我们以官方的 ink (https://github.com/paritytech/ink)仓库中的 **examples** 目录下的合约为例。

#### 编译合约

首先克隆 ink 仓库并打开 ink 目录：

```
git clone https://github.com/paritytech/ink.git
cd ink
```

然后我们在 ink 的根目录中创建以下三个文件：

redspot.config.ts:

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
      gasLimit: '400000000000', // 设置默认的 gasLimit
      explorerUrl:
        'https://polkadot.js.org/apps/#/explorer/query/?rpc=ws://127.0.0.1:9944/'
    },
  },
  mocha: {
    timeout: 60000
  }
} as RedspotUserConfig;
```

package.json:

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

tsconfig.json:

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

然后安装 npm 依赖（推荐使用 [yarn](https://classic.yarnpkg.com/en/docs/install) 作为包管理器）：

```
yarn 或者 npm install
```

 然后在项目的根目录运行命令 `npx redspot compile` 将会编译 examples 下的所有合约，现在我们执行以下命令：

```
npx redspot compile examples/erc20
```

该命令会指定编译 erc20 合约。编译完成后，你可以在 artifacts 目录下找到编译的产物。

#### 部署合约

现在我们可以通过 Redspot 运行一个部署脚本了，在 ink 根目录创建这个文件：

deploy.ts

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

然后你确保已经在 `redspot.config.ts` 中正确配置了网络: 

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

现在可以运行 deploy.ts 文件了，加上 `--no-compile` 防止重复编译：

```bash
npx redspot run ./deploy.ts --no-compile
```

合约部署成功后，你会得到类似这样的信息：

```
Deploy successfully. The contract address:  5CqB5Mh9UdVbTE1Gt5PJfWSiCHydJaJsA31HjKGti1Z2fn78
```



#### 测试合约

我们在 tests 目录下新增 erc20.test.ts 文件，用来测试 erc20 合约：

tests/erc20.test.ts

```typescript
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

```

运行测试命令：

```
npx redspot test --no-compile
```

你将会得到以下类似结果：

```
....
✓ Can not transfer from empty account (17912ms)

  4 passing (46s)
```



## 项目开发
进入新创建的Redspot的项目的根目录下，执行以下命令可查看当前 Redspot 支持的任务（Tasks）:

```bash
npx redspot
```

> Task 的概念请参照该文档 [Tasks](./overview.md#Tasks)。

运行 `npx redspot --help` 查看帮助：

```
Redspot version 0.10.1

Usage: redspot [GLOBAL OPTIONS] <TASK> [TASK OPTIONS]

GLOBAL OPTIONS:

  --config              A Redspot config file. 
  --help                Shows this message, or a task's help if its name is provided 
  --log-level           Set log levels 1-5 
  --max-memory          The maximum amount of memory that Redspot can use. 
  --network             The network to connect to. 
  --show-stack-traces   Show stack traces. 
  --tsconfig            Reserved redspot argument -- Has no effect. 
  --verbose             Enables Redspot verbose logging 
  --version             Shows redspot's version. 


AVAILABLE TASKS:

  check         Check whatever you need
  clean         Clears the cache and deletes all artifacts
  compile       Compiles the entire project, building all artifacts
  console       Opens a redspot console
  help          Prints this message
  run           Runs a user-defined script after compiling the project
  test          Runs mocha tests

To get help for a specific task run: npx redspot help [task]
```

可以看到帮助信息有两个部分，GLOBAL OPTIONS 和 TASKS。通过 TASK ，我们可以调用Redspot内置的任务或者自定义的任务。比如

`npx redspot compile` 可以运行编译合约命令。

通常每个 TASK 都会提供自己的参数配置。通过 `npx redspot compile --help` 可以查看帮助信息：

```
Redspot version 0.10.1

Usage: redspot [GLOBAL OPTIONS] compile [...sourcePattern]

POSITIONAL ARGUMENTS:

  sourcePattern	A glob string that is matched against (default: [])

compile: Compiles the entire project, building all artifacts

For global options help run: redspot help
```

对于 compile 命令，我们可以传入合约的路径来指定需要编译的合约，如：`npx redspot compile examples/erc20` 。

`GLOBAL OPTIONS` 是 Redspot 运行时的全局的配置。它可以附加到任一 TASK 中。如 `npx redspot test --network substrate` 将指定连接到 substrate 网络（需要在 config 中配置 substrate 网络）。`npx redspot test --log-level 3` 将指定打印的日志的级别，默认为2 。我们也可以通过环境变量设置 `GLOBAL OPTIONS` ：

- 设置 log level: `REDSPOT_LOG_LEVEL=5 npx redspot test` ,
- 设置 network: `REDSPOT_NETWORK=substrate npx redspot test`.

下面我们来介绍一下内置的几个 TASK：

### Compile

运行 `npx redspot compile` 命令将会进行合约编译。目前支持 [ink ](https://github.com/paritytech/ink) 合约和 [solang](https://github.com/hyperledger-labs/solang) 合约的编译。编译 ink 合约时，请确保你已经安装了 [cargo-contract](https://github.com/paritytech/cargo-contract) 。编译 solang 合约时，请确保你已经安装了 [solang cli](https://solang.readthedocs.io/en/latest/installing.html#building-solang-from-crates-io)。在 `redspot.config.ts` 中，你可以配置编译的选项：

```
{
	...
	contract: {
    ink: {
      toolchain: 'nightly', // 设置 cargo-contract 编译时的 toolchain
      sources: ['contracts/**/*'] // 配置查找合约文件的目录
    },
    solang: {
      sources: ['contracts/**/*.sol'] // 配置查找合约文件的目录
    }
  },
  paths: {
  	...
    artifacts: 'artifacts' // 指定存放合约编译产物的目录
    ...
  }，
  ...
}
```

compile 命令接收 sourcePattern 参数，可以覆盖配置文件中的 sources , 例子：

 `npx redspot compile examples/erc20`

将仅在 `examples/erc20` 目录下查找合约。

编译完成后，可以在 `artifacts` 目录中找到编译的产物。 通常将会有两种格式，`[ContractName].contract` 和`[ContractName].json` ，他们之间唯一的区别就是 `.json ` 中不包含 wasm，体积会小一些。你也可以使用自己的工具编译，然后将 `[ContractName].contract`文件复制到 artifacts 目录中。这样也不会影响到其他功能的使用。

### Test

自动化测试在编写合约中至关重要。你可以使用 Redspot 进行单元测试。在运行测试命令前，你需要确保已经正确配置了需要连接的节点。Test 的相关配置如下：

```
{
	defaultNetwork: "development", // 默认连接的网络
	...
	networks: {
			development: {
          endpoint: "ws://127.0.0.1:9944", // 链接的网络的url（websocket）
          types: {}, // 传递给 polkadotjs 使用的类型定义
          accounts: ["//Alice", "tomato mad peasant blush poem obtain inspire distance attitude mercy return marriage"] // 用来签名的账号，默认为 ['//Alice', '//Bob', '//Charlie', '//Dave', '//Eve', '//Ferdie']
          gasLimit: "400000000000", // 默认的 gaslimit
      },
	}，
	path: {
		tests: 'tests', // 查找测试文件的目录
	},
	mocha: {
		timeout: 60000, // mocha 测试时的超时时间
		...
	}
	...
}
```

你可以通过传入 network 选项，配置测试时连接的网络，例子：

`REDSPOT_NETWORK=development npx redpost test  ` 

你也可以仅对单个文件进行测试`npx redspot test ./tests/[filename].ts`。设置 `--no-compile` 可以避免自动运行编译命令 `npx redspot test --no-compile`。

Test 默认使用 mocha 作为测试框架。你可以在 `redspot.config.ts`文件中配置mocha的选项。这里是所有支持的选项：https://mochajs.org/api/mocha 。

一个完整的测试文件如下：

```typescript
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
```

我们在 setup 函数中，创建了一个随机的账号，并且给这个账号分配了固定的余额。然后用这个账号进行各种测试，这样以保证每次得到的测试结果都是相同的。

在这个测试文件中，我们用到了两个 Redspot 的插件， @redspot/patract 和 @redspot/chai ，我们会在之后的文章中，详细介绍他们。

实际上，不是非得要用 `npx redspot test` 才能运行这个测试文件。Test 命令仅仅只是简单的对 mocha 命令封装了一下。你可以使用任何你喜欢的方式，运行测试代码。这中间没有魔法。比如，可以尝试着执行一下命令，运行测试用例：

 `TS_NODE_TRANSPILE_ONLY=true mocha -r ts-node/register tests/erc20.test.ts --timeout 60000` 

其中我们使用 ts-node 编译运行 typescript 代码，因此需要加上 `-r ts-node/register` 。`TS_NODE_TRANSPILE_ONLY=true ` 设置 ts-node 运行时忽略 typescript 类型错误。

### Run

Run 命令可以用来运行任一 typescript 文件。设置 `--no-compile` 可以避免自动运行编译命令 `npx redspot run --no-compile`。

和 Test 一样，它也仅仅只是 `TS_NODE_TRANSPILE_ONLY=true node -r ts-node/register [filepath]`. 的简单封装而已。

通常我们可以使用 Run 来运行部署脚本：

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

 这其中使用了 `@redspot/patract` 插件。我们会在后面的文章中详细解释。

### Console

你可以通过运行 `npx redspot console` 来启动一个node 的 [*REPL*](https://nodejs.dev/learn/how-to-use-the-nodejs-repl) 控制台。它内置了 Redspot Runtime Environment ，所以你在其中可以访问 Redspot 提供插件，配置，任务。我们会在后面有一个详细的说明。



可以在 https://github.com/patractlabs/redspot/tree/master/examples/ 查看更多示例。