# Tasks

## Project Development

Go to the root of your newly created Redspot project and execute the following command to view the Tasks currently supported by Redspot:

```bash
npx redspot
```

For the concept of Tasks, please refer to the document [Tasks](./overview.md#Tasks).

Run `npx redspot --help` to see the help.

```
Redspot version 0.10.1

Usage: redspot [GLOBAL OPTIONS] <TASK> [TASK OPTIONS]

GLOBAL OPTIONS:

  --config A Redspot config file.
  --help Shows this message, or a task's help if its name is provided
  --log-level Set log levels 1-5
  --max-memory The maximum amount of memory that Redspot can use.
  --network The network to connect to.
  --show-stack-traces Show stack traces.
  --tsconfig Reserved redspot argument -- Has no effect.
  --verbose Enables Redspot verbose logging
  --version Shows redspot's version.


AVAILABLE TASKS:

  check Check whatever you need
  clean Clears the cache and deletes all artifacts
  compile Compiles the entire project, building all artifacts
  console Opens a redspot console
  help Prints this message
  run Runs a user-defined script after compiling the project
  test Runs mocha tests

To get help for a specific task run: npx redspot help [task]
```

You can see that there are two parts to the help message, GLOBAL OPTIONS and TASKS, through which we can invoke Redspot's built-in tasks or custom tasks. For example

`npx redspot compile` can run the compile contract command.

Usually each TASK provides its own configuration of parameters. The `npx redspot compile --help` can be used to view help information.

```
Redspot version 0.10.1

Usage: redspot [GLOBAL OPTIONS] compile [.... .sourcePattern]

POSITIONAL ARGUMENTS:

  sourcePattern A glob string that is matched against (default: [])

compile: Compiles the entire project, building all artifacts

For global options help run: redspot help
```

For the compile command, we can pass the path of the contract to specify the contract to be compiled, e.g. `npx redspot compile examples/erc20`.

`GLOBAL OPTIONS` is the global configuration of the Redspot runtime. It can be attached to any TASK. For example, `npx redspot test --network substrate` will specify a connection to the substrate network (the substrate network needs to be configured in config). `npx redspot test --log-level 3` will specify the level of logs to be printed, the default is 2. We can also set `GLOBAL OPTIONS` via environment variables.

- Set log level: `REDSPOT_LOG_LEVEL=5 npx redspot test` ,
- set network: `REDSPOT_NETWORK=substrate npx redspot test`.

Let's go over a few of the built-in TASKs.

### Compile

Running the `npx redspot compile` command will perform contract compilation. The [ink](https://github.com/paritytech/ink) contract and the [solang](https://github.com/hyperledger-labs/solang) contract are currently supported for compilation. When compiling the ink contract, make sure you have [cargo-contract](https://github.com/paritytech/cargo-contract) installed. When compiling the solang contract, make sure you have [solang cli](https://solang.readthedocs.io/en/latest/installing.html#building-solang-from-crates-io) installed. In `redspot.config.ts`, you can configure the options for compiling.

```
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

The compile command takes the sourcePattern parameter and can override the sources in the configuration file, for example

`npx redspot compile examples/erc20`

will only look for contracts in the `examples/erc20` directory.

After compilation, the compiled product can be found in the `artifacts` directory. There will usually be two formats, `[ContractName].contract` and `[ContractName].json`, the only difference between them is that `.json` does not contain wasm and will be smaller in size. You can also use your own tools to compile and copy the `[ContractName].contract` file to the artifacts directory. This will not affect other features either.

### Test

Automated testing is essential in writing contracts. You can use Redspot for unit testing. Before running the test command, you need to make sure that you have properly configured the nodes that need to be connected. the relevant configuration for Test is as follows.

```
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

You can configure the network to connect to when testing by passing in the network option, example.

`REDSPOT_NETWORK=development npx redpost test`

You can also test only a single file `npx redspot test . /tests/[filename].ts`. Setting `--no-compile` prevents the compile command `npx redspot test --no-compile` from being run automatically.

Test uses mocha as the testing framework by default. You can configure mocha's options in the `redspot.config.ts` file. Here are all the supported options: https://mochajs.org/api/mocha .

A complete test file looks like this.

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

In the setup function, we create a random account and assign a fixed balance to this account. This account is then used to run various tests to ensure that the results are the same each time.

In this test file, we use two Redspot plugins, @redspot/patract and @redspot/chai, which we will describe in detail in a later article.

In fact, you don't have to use `npx redspot test` to run this test file; the Test command is simply a wrapper around the mocha command. You can use it any way you like to run the test code. There is no magic in between. For example, try running a test case by executing the command.

`TS_NODE_TRANSPILE_ONLY=true mocha -r ts-node/register tests/erc20.test.ts --timeout 60000`

where we use ts-node to compile and run typescript code, so we need to add `-r ts-node/register`. `TS_NODE_TRANSPILE_ONLY=true` Set ts-node to ignore typescript type errors when running.

### Run

The Run command can be used to run any typescript file. Setting `-no-compile` prevents the compile command `npx redspot run --no-compile` from being run automatically.

Like Test, it is just a simple wrapper around `TS_NODE_TRANSPILE_ONLY=true node -r ts-node/register [filepath]`. It's just a simple wrapper for `TS_NODE_TRANSPILE_ONLY=true

Normally we can run the deployment script using Run

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
    'Deploy successfully. the contract address: ',
    contract.address.toString()
  );

  api.disconnect();
}

run().catch(err => {
  console.log(err);
});
```

This uses the `@redspot/patract` plugin. We will explain this in more detail in a later article.

### Console

You can start a node's [_REPL_](https://nodejs.dev/learn/how-to-use-the-nodejs-repl) console by running the `npx redspot console`. It has the Redspot Runtime Environment built in, so you can access Redspot in there to provide plugins, configuration, and tasks. We'll have a detailed description of this later.

More examples can be seen at [https://github.com/patractlabs/redspot/tree/master/examples/](https://github.com/patractlabs/redspot/tree/master/examples/).
