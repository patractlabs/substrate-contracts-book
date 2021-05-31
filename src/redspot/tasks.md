# Tasks

在 Redspot 的项目的根目录下，执行以下命令可查看当前 Redspot 支持的任务（Tasks）:

```bash
npx redspot
```

> Task 的概念请参照该文档 [Tasks](./overview.md#Tasks)。

运行 `npx redspot --help` 查看帮助：

```
Redspot version 0.11.4

Usage: redspot [GLOBAL OPTIONS] <TASK> [TASK OPTIONS]

GLOBAL OPTIONS:

  --config           	A Redspot config file.
  --help             	Shows this message, or a task's help if its name is provided
  --log-level        	Set log levels 1-5 (default: "2")
  --max-memory       	The maximum amount of memory that Redspot can use.
  --network          	The network to connect to.
  --show-stack-traces	Show stack traces.
  --tsconfig         	Reserved redspot argument -- Has no effect.
  --verbose          	Enables Redspot verbose logging
  --version          	Shows redspot's version.


AVAILABLE TASKS:

  check   	Check whatever you need
  clean   	Clears the cache and deletes all artifacts
  compile 	Compiles the entire project, building all artifacts
  console 	Opens a redspot console
  explorer	Start redspot explorer
  help    	Prints this message
  run     	Runs a user-defined script after compiling the project
  test    	Runs mocha tests
  testnet 	Running the test network

To get help for a specific task run: npx redspot help [task]
```

可以看到帮助信息有两个部分，GLOBAL OPTIONS 和 TASKS。通过 TASK ，我们可以调用 Redspot 内置的任务或者自定义的任务。比如

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

`GLOBAL OPTIONS` 是 Redspot 运行时的全局的配置。它可以附加到任一 TASK 中。如 `npx redspot test --network substrate` 将指定连接到 substrate 网络（需要在 config 中配置 substrate 网络）。`npx redspot test --log-level 3` 将指定打印的日志的级别，默认为 2 。我们也可以通过环境变量设置 `GLOBAL OPTIONS` ：

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

编译完成后，可以在 `artifacts` 目录中找到编译的产物。 通常将会有两种格式，`[ContractName].contract` 和`[ContractName].json` ，他们之间唯一的区别就是 `.json` 中不包含 wasm，体积会小一些。你也可以使用自己的工具编译，然后将 `[ContractName].contract`文件复制到 artifacts 目录中。这样也不会影响到其他功能的使用。

redspot 支持 ink 合约使用 docker 编译。配置如下：

```javascript=
...

export default {
  ...
  contract: {
    ink: {
      toolchain: "nightly",
      docker: true,
      sources: ["contracts/**/*"],
    },
  },
  ...
  docker: {
    sudo: false,
  },
  ...
};
```

在运行编译命令之前，请确保本机已安装 docker。运行命令 

```
$ npx redspot compile
```
> ⚠️注意
> 当使用docker编译时，可能受网络环境影响（比如中国大陆需要vpn代理），会导致编译时间过长，
> 如果中途使用 ctrl+c 退出当前编译命令，docker容器并不会自动停止删除。


现在会默认使用 docker 编译。如果想更改默认行为，请添加 `--docker false` 参数：
```
$ npx redspot compile --docker false
```

注意如果遇到权限错误，请将 `redspot.config` 文件中的 `docker.sudo` 改为 true。这样将会使用 sudo 运行 docker。

或者请参考 docker 官方文档 https://docs.docker.com/engine/install/linux-postinstall/ 配置权限。

### TestNet

如果本机有 docker 环境。可以通过 docker 运行一个测试网。当前内置了 canvas 测试网。

运行测试网的命令是：

```
$ npx redspot testnet
```

实际上，它的作用是仅仅只是运行命令:
```
$ docker run -p 9944:9944 --rm redspot/contract /bin/bash -c "canvas --tmp --dev --ws-port=9944 --ws-external"  
```

如果想要修改默认的运行命令，可以添加 command 参数:

```
$ npx redspot testnet --command 'docker run -p 9945:9944 --rm redspot/contract /bin/bash -c "canvas --tmp --dev --ws-port=9944 --ws-external"'
```

或者修改 redspot.config:

```
...

export default {
  ...
  contract: {
    ink: {
      toolchain: "nightly",
      docker: true,
      sources: ["contracts/**/*"],
    },
  },
  ...
  docker: {
    sudo: false,
    runTestnet:
      "docker run -p 9944:9944 --rm redspot/contract /bin/bash -c 'canvas --rpc-cors all --tmp --dev --ws-port=9944 --ws-external'",
  },
  ...
};
```

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

`REDSPOT_NETWORK=development npx redpost test`

你也可以仅对单个文件进行测试`npx redspot test ./tests/[filename].ts`。设置 `--no-compile` 可以避免自动运行编译命令 `npx redspot test --no-compile`。

Test 默认使用 mocha 作为测试框架。你可以在 `redspot.config.ts`文件中配置 mocha 的选项。这里是所有支持的选项：https://mochajs.org/api/mocha 。

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

其中我们使用 ts-node 编译运行 typescript 代码，因此需要加上 `-r ts-node/register` 。`TS_NODE_TRANSPILE_ONLY=true` 设置 ts-node 运行时忽略 typescript 类型错误。

### Run

Run 命令可以用来运行任一 typescript 文件。设置 `--no-compile` 可以避免自动运行编译命令 `npx redspot run --no-compile`。

和 Test 一样，它也仅仅只是 `TS_NODE_TRANSPILE_ONLY=true node -r ts-node/register [filepath]`. 的简单封装而已。

通常我们可以使用 Run 来运行部署脚本：

```typescript
import { network, patract } from 'redspot';

const { getContractFactory } = patract;
const { getSigners, api } = network;

async function run() {
  console.log('deploy erc20');

  await api.isReady;

  console.log('deploy erc201');

  const signers = await getSigners();
  const signer = signers[0];

  const contractFactory = await getContractFactory('erc20', signer);

  const contract = await contractFactory.deploy('new', '1000000', {
    gasLimit: '200000000000',
    value: '10000000000000000'
  });

  console.log(
    'Deploy successfully. The contract address: ',
    contract.address.toString()
  );

  api.disconnect();
}

run().catch(err => {
  console.log(err);
});
```

这其中使用了 `@redspot/patract` 插件。我们会在后面的文章中详细解释。

### Console

你可以通过运行 `npx redspot console` 来启动一个 node 的 [_REPL_](https://nodejs.dev/learn/how-to-use-the-nodejs-repl) 控制台。它内置了 Redspot Runtime Environment ，所以你在其中可以访问 Redspot 提供插件，配置，任务。我们会在后面有一个详细的说明。

可以在 [https://github.com/patractlabs/redspot/tree/master/examples/](https://github.com/patractlabs/redspot/tree/master/examples/) 查看更多示例。
