# Tutorial

## Environment preparation
### Installing Node
We require node version >= 14.0, if not, you can visit the nodejs website and learn how to install or upgrade. Alternatively we recommend that you install Node using nvm. Windows users can use nvm-windows instead.

### ink! Toolchain for contract compilation
1. rust environment. Since the ink! contract requires rust's Wasm toolchain, and Wasm currently only runs under the nightly toolchain, developers need to prepare the Wasm compilation environment first: 

  ```bash
  rustup install nightly
  rustup component add rust-src --toolchain nightly
  rustup target add wasm32-unknown-unknown --toolchain nightly
  ```

The tool to compile the contract `cargo-contract`.

    Please note that the following command installs the official `cargo-contract` provided by parity by default (currently the latest version is 0.10.0).
    ``bash
    cargo install cargo-contract --force
    ```

    With Europa you can use the `cargo-contract` provided by Patract, which provides an optional `-d/--debug` command
    ``bash
    cargo install cargo-contract --git https://github.com/patractlabs/cargo-contract --branch=v0.10.0 --force
    ```

    If you installed `cargo-contract` without feature `binaryen-as-dependency`, you need to prepare `wasm-opt` in your current environment.

3. install `wasm-opt` (optional)

wasm-opt comes from the repository [https://github.com/WebAssembly/binaryen](https://github.com/WebAssembly/binaryen). Developers can download the latest compilation product for the corresponding platform directly from the release. Direct downloads should be placed in a PATH path that can be accessed from anywhere.

Alternatively, developers can install `wasm-opt` via the system command

TODO Determine the installation method for different platforms

### Prepare a blockchain node that can run contracts

#### 1. Jupiter

Jupiter [https://github.com/patractlabs/jupiter](https://github.com/patractlabs/jupiter) is maintained by Patract, contains the Patract contract design specification and is compatible with the latest ` pallet-contracts` module of the contract testing network.

Jupiter has three types of nodes.

* a parallel chain of Jupiter contracts running on rococo.
* Jupiter standalone test networks that run independently to provide the latest contract functionality to the outside world.
* Jupiter nodes for fast local testing

See the Readme of this project for information on the differences between these three types of nodes and their compilation and installation.

#### 2. Europa

Europa [https://github.com/patractlabs/europa](https://github.com/patractlabs/europa) is a contract sandbox designed by Patract to help contract developers debug and test their contracts. It is similar to Ganache in the Ethereum ecosystem, but the features of Europa are more in the sense that it provides a log of detailed execution information during the deployment of contract invocations, which can reflect the operation of the contract module as a "black box" to the maximum extent, and is very helpful for contract This is very helpful for contract developers.

Developers can install and start Europa simply by

```bash
cargo install europa --git https://github.com/patractlabs/europa --locked --force
europa --tmp
```

For different versions of Europa and other information, see the Readme for this project.

#### 3. Canvas

Canvas [https://github.com/paritytech/canvas-node](https://github.com/paritytech/canvas-node) is the official contract test chain provided by parity with the ``pallet-contracts`` module. module, which is a test network maintained by the parity `ink!` & `pallet-contracts` development team.

To participate in the canvas network, please refer to the Readme for this project. if the purpose is just to run the test node locally, you can execute the following command.

```bash
cargo install canvas-node --git https://github.com/paritytech/canvas-node.git --force --locked
canvas --dev --tmp
```

## Create a Redspot project

### Installing from a Template

Redspot provides contract development templates that allow users to quickly build a project. Currently, only templates for the erc20 contract are supported for installation.

To create a new project from the template, you can choose to use `npx`. npx is a package executor that comes with npm (*npm 5.2+* ). Running the following command will pull the **latest** Redspot and build the Redspot project using erc20 as the template.

```
npx redspot-new erc20
```

> Note that Redspot does not yet provide the ability to create projects from templates, as ink! changes frequently at the moment. Developers who need additional project templates can copy them from the example directory in Redspot's project repository [https://github.com/patractlabs/redspot](https://github.com/patractlabs/redspot) to directory in Redspot's project repository [] () and change the configuration such as the project name. All cases in the **example directory are already in the Redspot project structure**, so there is no need for the user to run `npx redspot-new` to create the project.

If a project has already been created by Redspot, there must be a file `redspot.config.ts` in the root of the project to mark the project as Redspot, and `package.json` in the same directory controls the version of Redspot that corresponds to the project.

If a contract developer has obtained a Redspot project from github, or example, or otherwise, and another developer has built it, going to the project directory and running ``yarn install`` will restore the Redspot environment used by the Redspot project, as in the following example.

```bash
# copy the delegator multi-contract example from redspot repo to local dir
cp -r . /redpost/example/delegator . /
cd delegator
yarn install
```

The default template is already configured with typescript. It is also recommended that you use typescript for development. Even if you have no experience with typescript, typescript is javascript-compatible, works without any type definition, and still has the powerful type hinting and error hinting features of typescript.



### Integration into existing contract projects

Redspot can also be easily integrated into existing contract projects. Let's take the contracts in the **examples** directory of the official ink (https://github.com/paritytech/ink) repository as an example.

#### Compile the contract

First clone the ink repository and open the ink directory.

```
git clone https://github.com/paritytech/ink.git
cd ink
```

Then we create the following three files in the ink root directory.

redspot.config.ts:

```typescript
import { RedspotUserConfig } from 'redspot/types';
import '@redspot/patract'; // import @redspot/patract plugin
import '@redspot/chai'; // import @redspot/chai plugin

export default {
  defaultNetwork: 'development', // default network
  contract: {
    ink: {
      toolchain: 'nightly',      // specify the toolchain version for contract compliation
      sources: ['examples/**/*'] // the directory where contracts locate
    }
  },
  networks: {
    // development network configuration
    development: {
      endpoint: 'ws://127.0.0.1:9944',
      types: {},
      gasLimit: '400000000000', // default gasLimit
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

Then install the npm dependency (it is recommended to use [yarn](https://classic.yarnpkg.com/en/docs/install) as the package manager):

```
yarn or npm install
```

 Then running the command ``npx redspot compile`` in the root of the project will compile all the contracts under examples, now we execute the following command.

```
npx redspot compile examples/erc20
```

This command will specify the erc20 contract to be compiled. After the compilation is complete, you can find the compiled product in the artifacts directory.

#### Deploying the contract

Now we can run a deployment script through Redspot by creating this file in the ink root directory.

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

Then you make sure that you have configured the network correctly in ``redspot.config.ts``: 

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

Now you can run the deploy.ts file, adding `-no-compile` to prevent duplicate compilation:

```bash
npx redspot run . /deploy.ts --no-compile
```

After a successful contract deployment, you will get a message like this.

```
Deploy successfully. the contract address: 5CqB5Mh9UdVbTE1Gt5PJfWSiCHydJaJsA31HjKGti1Z2fn78
```



#### Test Contracts

We add a new erc20.test.ts file to the tests directory to test the erc20 contract: erc20.test.ts

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


Run the test command.

```
npx redspot test --no-compile
```

You will get results similar to the following.

```
....
✓ Can not transfer from empty account (17912ms)

  4 passing (46s)
```

View more built-in [tasks](./tasks).
