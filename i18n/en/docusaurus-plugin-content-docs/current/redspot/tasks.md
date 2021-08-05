# Tasks

## Background Information

In the root directory of the Redspot project, execute the following command to view the [tasks](./overview) currently supported by Redspot.

```bash
npx redspot
```

Run the `npx redspot --help` command to view the help information.

```bash
Redspot version 0.11.4
Usage: redspot [GLOBAL OPTIONS] <TASK> [TASK OPTIONS]
GLOBAL OPTIONS:
  --config                   A Redspot config file.
  --help                     Shows this message, or a task's help if its name is provided
  --log-level                Set log levels 1-5 (default: "2")
  --max-memory               The maximum amount of memory that Redspot can use.
  --network                  The network to connect to.
  --show-stack-traces        Show stack traces.
  --tsconfig                 Reserved redspot argument -- Has no effect.
  --verbose                  Enables Redspot verbose logging
  --version                  Shows redspot's version.

AVAILABLE TASKS:
  check           Check whatever you need
  clean           Clears the cache and deletes all artifacts
  compile         Compiles the entire project, building all artifacts
  console         Opens a redspot console
  explorer        Start redspot explorer
  help            Prints this message
  run             Runs a user-defined script after compiling the project
  test            Runs mocha tests
  testnet         Running the test network
To get help for a specific task run: npx redspot help [task]
```

The help information is divided into two parts，GLOBAL OPTIONS and TASKS. Through TASK, you can call Redspot's built-in tasks or custom tasks. For example, execute the `npx redspot compile ` command to run the compile contract command. Usually each task will provide its own parameter configuration. You can view the help information by executing the `npx redspot compile --help` command.

```bash
Redspot version 0.10.1
Usage: redspot [GLOBAL OPTIONS] compile [...sourcePattern]
POSITIONAL ARGUMENTS:
  sourcePattern        A glob string that is matched against (default: [])
compile: Compiles the entire project, building all artifacts
For global options help run: redspot help
```

For compiling commands, you can pass in the path of the contract to specify the contract that needs to be compiled, for example,`npx redspot compile examples/erc20`.

`GLOBAL OPTIONS ` is the global configuration of Redspot runtime. It can be attached to any task. For example, `npx redspot test --network substrate` will specify the connection to the Substrate network (substrate network needs to be configured in config).`npx redspot test --log-level 3  `will specify the level of the log to be printed, and the log level is 2 by default. You can also set GLOBAL OPTIONS through environment variables.

* Set the log level: `REDSPOT_LOG_LEVEL=5 npx redspot test`.
* Set up the network: `REDSPOT_NETWORK=substrate npx redspot test`.

Several built-in tasks will be introduced in the future.

## Compile

Run the `npx redspot compile `command to compile the contract. Currently supports the compilation of [ink](https://github.com/paritytech/ink) contracts and [Solang](https://github.com/hyperledger-labs/solang) contracts. When compiling the ink contract, please make sure you have installed [cargo-contract](https://github.com/paritytech/cargo-contract). When compiling the Solang contract, please make sure you have installed [Solang](https://solang.readthedocs.io/en/latest/installing.html#building-solang-from-crates-io). In redspot.config.ts, you can configure compilation options.

```typescript
{
        ...
        contract: {
    ink: {
      toolchain: 'nightly', // set the cargo-contract compile-time toolchain
      sources: ['contracts/**/*'] // Configure the directory to find the contract files
    },
    solang: {
      sources: ['contracts/**/*.sol'] // Configure the directory to find contract files
    }
  },
  paths: {
          ...
    artifacts: 'artifacts' // specify the directory where the contract compilation products are stored
    ...
  }
  ...
}
```

The compile command receives the sourcePattern parameter, which can override the sources in the configuration file, for example:

`npx redspot compile examples/erc20`:It will only find contracts in the examples/erc20 directory.

After the compilation is complete, the files generated after compilation can be found in the artifacts directory. There are usually two kinds of format,`[ContractName].contract`and`[ContractName].json`. The only difference between them is that Wasm is not included in `.json`, and the size is smaller. You can also use your own tools to compile, and then copy the `[ContractName].contract` file to the artifacts directory. This will not affect the use of other functions.

Redspot supports the use of Docker to compile ink contracts. The configuration information is shown below.

```bash
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

Before running the compile command, make sure that Docker is installed on the machine. Run the following command.

```bash
$ npx redspot compile
```

**Note **When using Docker to compile, it may be affected by the network environment. For example, China requires a VPN proxy, which will cause the compilation time to be too long. If you use`ctrl+c`to exit the current compilation command halfway, the Docker container will not automatically stop deleting.

Now it will be compiled with Docker by default. If you want to change the default behavior, please add the `--docker false` parameter.

```bash
$ npx redspot compile --docker false
```

**Note** If you encounter permission errors, please set `docker.sudo ` in the redspot.config file to true. This will use sudo  to run Docker . Or refer to [the official Docker documentation](https://docs.docker.com/engine/install/linux-postinstall/) to configure permissions.

## TestNet

If the machine has a Docker environment. A testnet can be run by Docker. The canvas testnet is currently built-in.

You can run the testnet with the following command.

```bash
$ npx redspot testnet
```

In fact, its role is just to run the command.

```bash
$ docker run -p 9944:9944 --rm redspot/contract /bin/bash -c "canvas --tmp --dev --ws-port=9944 --ws-external"  
```

If you want to modify the default running command, you can add the `command ` parameter.

```bash
$ npx redspot testnet --command 'docker run -p 9945:9944 --rm redspot/contract /bin/bash -c "canvas --tmp --dev --ws-port=9944 --ws-external"'
```

Or modify the redspot.config file.

```typescript
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

## Test

Automated testing is crucial in writing contracts. You can use Redspot for unit testing. Before running the test command, you need to ensure that the nodes to be connected have been configured correctly. The relevant configuration information of Test is as follows.

```bash
{
        defaultNetwork: "development", // the default network to connect to
        ...
        networks: {
                        development: {
          endpoint: "ws://127.0.0.1:9944", // url of the network to connect to (websocket)
          types: {}, // Type definitions to be passed to polkadotjs for use
          accounts: ["//Alice", "tomato mad peasant blush poem obtain inspire distance attitude mercy return marriage"] // The account to use for the signature, default is ['// Alice', '//Bob', '//Charlie', '//Dave', '//Eve', '//Ferdie']
          gasLimit: "400000000000", // default gaslimit
      },
        }
        path: {
                tests: 'tests', // directory to find test files
        },
        mocha: {
                timeout: 60000, // timeout for mocha tests
                ...
        }
        ...
}
```

You can configure the network connected during the test by passing in the network option, for example:

`REDSPOT_NETWORK=development npx redpost test`

You can also test only a single file, for example `npx redspot test ./tests/[filename].ts`.

Setting `--no-compile  `can avoid automatically running compilation commands, for example `npx redspot test --no-compile`.

Test uses mocha as the test framework by default. You can configure mocha options in the redspot.config.ts file. For all supported options, see [mocha](https://mochajs.org/api/mocha).

A complete test file is as follows.

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

* In the setup function, a random account is created and a fixed balance is assigned to this account. Then use this account to perform various tests to ensure that the test results are the same every time.
* In this test file, two kinds of Redspot plugins are used，@redspot/patract and @redspot/chai, we will introduce them in detail in a later article.
* Actually, it is not necessary to use `npx redspot test  `to run this test file. The Test command is just a simple encapsulation of the mocha command. You can run the test code in the way you like. For example, you can try to run testcases by executing commands.

`TS_NODE_TRANSPILE_ONLY=true mocha -r ts-node/register tests/erc20.test.ts --timeout 60000`

* Use ts-node to compile and run typescript code, you need to add `-r ts-node/register`.`TS_NODE_TRANSPILE_ONLY=true`Sets ts-node to ignore typescript type errors when running.
## Run

The Run command can be used to run any typescript file. Setting `--no-compile` can avoid automatically running the compilation command `npx redspot run --no-compile`.

Like Test, it is just a simple package of  `TS_NODE_TRANSPILE_ONLY=true node -r ts-node/register [filepath]`.

You can use Run to run the deployment script, an example is as follows.

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

The [@redspot/patract](https://docs.patract.io/redspot/plugin/redspot-patract) plug-in is used here.

## Console

You can start a Node [REPL](https://nodejs.dev/learn/how-to-use-the-nodejs-repl) console by running the `npx redspot console` command. It has a built-in Redspot Runtime Environment, where you can access plug-ins, configurations, and tasks provided by Redspot. We will have a detailed explanation later.

For more usage examples, see [examples](https://github.com/patractlabs/redspot/tree/master/examples/).



