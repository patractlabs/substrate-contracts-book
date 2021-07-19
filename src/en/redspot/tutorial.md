# Redspot tutorial

## **Environmental preparation**

### **Install Node.js**

* Install Node.js locally, and Node.js version ≥14.0. You can visit the official website of [Node.js](http://nodejs.cn/) to complete the installation or upgrade.

**Note** It is recommended that you use nvm to install Node.js. Windows users can use nvm-windows instead.

### **ink! Toolchain for contract compilation**

* Rust environment. Since the ink! contract requires Rust's Wasm toolchain, and Wasm can only run under the nightly toolchain, so you need to prepare the Wasm compilation environment first.
    ```bash
    rustup install nightly
    rustup component add rust-src --toolchain nightly
    rustup target add wasm32-unknown-unknown --toolchain nightly
    ```

* ink! cargo-contract, a tool for compiling contracts. You can install the official cargo-contract provided by default with the following command.
    ```bash
    cargo install cargo-contract --force
    ```

**Note** When using cargo-contract, wasm-opt must be prepared in the current environment. For details, please refer to [cargo-contract](https://github.com/paritytech/cargo-contract).

If you don't want to install Rust and cargo-contract environment on your local machine, you can use Docker to pull the image to prepare the environment. See the [Tasks](https://docs.patract.io/redspot/tasks.html) section for details.

### **Prepare blockchain nodes that can run the contract**

* **Jupiter**

[Jupiter](http://[https://github.com/patractlabs/jupiter) is a contract test network that is maintained by Patract, contains Patract contract design specifications and is compatible with the latest pallet-contracts module. Jupiter has three types of nodes, namely:

* Parachain of Jupiter contract running on rococo.
* Independently run the Jupiter independent testnet that provides the latest contract functions to the outside world.
* Jupiter node suitable for local quick test.

For information about the differences between these three types of nodes and compiling and installing information, please refer to the Readme module of the project.

* **Europa**

[Europa](https://github.com/patractlabs/europa) is a contract sandbox designed by Patract to help contract developers debug and test contracts. The contract sandbox is similar to Ganache in the Ethereum ecosystem, but Europa's characteristics are more reflected in the log of detailed execution information in the process of deploying and calling the contract, which can reflect the operation of the black box of the contract module to the greatest extent .

You can install and start Europa with the following commands.

```bash
cargo install europa --git https://github.com/patractlabs/europa --locked --force
europa --tmp
```

For different versions of Europa and other information, please refer to the project's [Readme](https://github.com/patractlabs/europa).

* **Canvas**

[Canvas](https://github.com/paritytech/canvas-node) is an official contract test chain with pallet-contracts module provided by the government. This test chain is a testnet maintained by the official ink! & pallet-contracts development team. For how to participate in the canvas network, please refer to the Readme module of the project. If you just want to run the test node locally, you can execute the following command.

```bash
cargo install canvas-node --git https://github.com/paritytech/canvas-node.git --force --locked
canvas --dev --tmp
```

## **Create  Redspot project**

### **Install from template**

Redspot provides contract development templates that allow you to quickly build a project. Currently only supports the installation of erc20 contract templates.

If you want to create a new project from a template, you can choose to use npx. npx is a package executor that comes with npm (npm 5.2+). Executing the following command will pull the latest Redspot and use erc20 as a template to build the Redspot project.

```bash
npx redspot-new erc20
```

**Note** Because the current ink! changes frequently, Redspot has not yet provided the function of creating projects from templates. If you need other project templates, you can copy them from the example directory in the [Redspot project repository](https://github.com/patractlabs/redspot) to any directory and change the configuration information such as the project name. All the cases in the example directory are already in the Redspot project structure, so you do not need to execute the `npx redspot-new` command to create the project.

If a project is created by Redspot, then there will be a redspot.config.ts file in the root directory of the project, which marks the project as Redspot. At the same time, package.json in the same directory controls the version of Redspot corresponding to this project.

If you have obtained the built Redspot project through Github, example, or other means, you can enter the project directory and execute the yarn install command to restore the Redspot environment used by the Redspot project. The example is as follows.

```bash
# copy the delegator multi-contract example from redspot repo to local dir
cp -r ./redpost/example/delegator ./
cd delegator
yarn install
```

The default template is already configured with typescript. It is also recommended that you use typescript for development. TypeScript is compatible with Javascript, does not define any types, can also run normally, and still has the powerful type prompt and error prompt functions of TypeScript.

### **Integrate into existing contract projects**

Redspot can be easily integrated into existing contract projects. Let's take the contract in the examples directory in the official [ ink](https://github.com/paritytech/ink) repository as an example.

#### Compile the contract

1. Clone the ink warehouse and open the ink directory.
    ```plain
    git clone https://github.com/paritytech/ink.git
    cd ink
    ```
2. Create the following three files in the root directory of ink.
* **redspot.config.ts**
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

3. Install npm dependencies. It is recommended that you use [yarn](https://classic.yarnpkg.com/en/docs/install) as the package manager.
    ```bash
    yarn or npm install
    ```

4. Run the `npx redspot compile` command in the root directory of the project to compile all contracts in the examples directory.
    ```bash
    npx redspot compile examples/erc20
    ```

This command will specify to compile the erc20 contract. After the compilation is complete, you can find the information generated by the compilation in the artifacts directory.

#### **Deployment contract**

Now you can run a deployment script through Redspot.

1. Create a deploy.ts file in the root directory of ink.
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

2. Make sure that the network has been configured correctly in redspot.config.ts.
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

3. Add`--no-compile`to prevent repeated compilation and run the deploy.ts file.
    ```plain
    npx redspot run ./deploy.ts --no-compile
    ```

#### Result verification

After the contract is successfully deployed, you can get information similar to this.

    Deploy successfully. The contract address:  5CqB5Mh9UdVbTE1Gt5PJfWSiCHydJaJsA31HjKGti1Z2fn78

#### **Test contract**

Add the erc20.test.ts file in the tests directory to test the erc20 contract.

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

```bash
npx redspot test --no-compile
```

You will get results similar to the following.

```bash
✓ Can not transfer from empty account (17912ms)
  4 passing (46s)
```

For more built-in information, see [tasks](https://patractlabs.github.io/substrate-contracts-book/redspot/tasks.html).

