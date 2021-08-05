# Configuration information

When running Redspot, it will search for the closest redspot.config.js file from the current working directory, which is usually located in the root directory of the project. This file contains the entire Redspot settings information, such as configuration, plug-ins, and custom tasks.

## Configuration options

To set the configuration, you need to export the object from redspot.config.ts.

```typescript
import { RedspotUserConfig } from 'redspot/types';
export default {
  defaultNetwork: 'development',
  contract: {
    ink: {
      toolchain: 'nightly',
      sources: ['contracts/**/*']
    },
    solang: {
      sources: ['contracts/**/*.sol']
    }
  },
  networks: {
    development: {
      endpoint: 'ws://127.0.0.1:9944',
      types: {},
      gasLimit: '400000000000'
    },
    substrate: {
      endpoint: 'ws://127.0.0.1:9944',
      gasLimit: '400000000000',
      accounts: ['//Alice', "tomato mad peasant blush poem obtain inspire distance attitude mercy return marriage", "0x26aa394eea5630e07c48ae0c9558cef70a98fdbe9ce6c55837576c60c7af3850"],
      types: {}
    }
  },
  paths: {
    artifacts: "artifacts",
    tests: "tests"
  },
  mocha: {
    timeout: 60000
  }
} as RedspotUserConfig;
```

You can obtain configuration information through config in the `.js` file.

```typescript
import { config } from "redspot"
console.log(config)
```
## defaultNetwork**

You can define the network used by default when running Redspot through the defaultNetwork field in the configuration. If this configuration is omitted, its default value is [localhost](http://localhost).

## networks

The networks configuration field is an optional object, and the network name is mapped to its configuration. The configuration information of the default localhost is as follows.

```typescript
{
  localhost: {
    gasLimit: "400000000000",
    accounts: ["//Alice", "//Bob", "//Charlie", "//Dave", "//Eve", "//Ferdie"],
    endpoint: "ws://127.0.0.1:9944",
    types: {}
  }
}
```

You can also configure other network names, such as mainnet, some_network_name, etc.

```typescript
{
    mainnet: {
        //...
    },
    some_network_name: {
        //...
    }
}
```

The following describes the configuration options of the network part.

| Configuration options | Description                                                  |
|:----|:----|
| [network].gasLimit |Used to set the default value of gaslimit that needs to be provided when instantiating or calling a contract through a transaction. This value must be an integer and has no precision. If this value is too small, contracts.`OutOfGas error` will be returned. The maximum gaslimit is the maximum value that this Substrate chain uses for `DispatchClass::Normal` in Runtime. For example, in the configuration of the Node node of Substrate, it is `NORMAL_DISPATCH_RATIO * MAXIMUM_BLOCK_WEIGHT = 75% * 2000000000000`. It is recommended to set this value higher.|
|[network].accounts|It is a list composed of [suri](https://polkadot.js.org/docs/keyring/start/suri/) or [KeyringPair](https://polkadot.js.org/docs/keyring/start/create/#adding-a-pair). The accounts default is ["//Alice", "//Bob", "//Charlie", "//Dave", "//Eve", "//Ferdie"], please refer to [Runtime-environment](https://docs.patract.io/redspot/runtime-environment#%E8%AE%BF%E9%97%AErse) for details.|
|[network].endpoint|Specifies the node that the developer wants to connect to in the current network configuration. Currently, only WebSockets type RPC connections are supported, that is, only link protocols starting with `wss://` or `ws://` are supported.|
|[network].types|Type is a concept defined in Polkadot.js, see [types.extend](https://polkadot.js.org/docs/api/start/types.extend/) for details. You can also set [`network].typesbundle`,`[network].typesSpec`, etc. If you encounter an error similar to `No such variant in enum MultiSignature`, you can add`{Address: "AccountId", LookupSource: "AccountId"}`to the type, see [impact-on-extrinsics](https://polkadot.js.org/docs/api/start/types.extend/#impact-on-extrinsics) for details.|

## contract

In the contract, you can set the options of the compiler. Currently [ink](https://github.com/paritytech/ink) and [solang ](https://github.com/hyperledger-labs/solang)are supported. You can also compile the ink contract and the solang contract under the same project. For details, please refer to the [multi-contract compilation example](https://github.com/patractlabs/redspot/tree/master/examples/multi-contract ).

| Editor Options            | Description                                                  |
|:----|:----|
|[contract].ink.toolchain|Set the toolchain used when [cargo-contract ](https://github.com/paritytech/cargo-contract) compiles the contract. It’s usually `nightly`. You can also specify `nightly-YYYY-MM-DD`.|
|[contract].ink.sources|Set the directory of the ink contract to be searched during compilation. glob syntax.|
| [contract].solang.sources |Set the directory of the solang contract searched during compilation. glob syntax.|
| [contract].rpc |Similar to types, RPC is used to specify custom RPC for polkadot.js. For details, please refer to [rpc.custom](https://polkadot.js.org/docs/api/start/rpc.custom).|

## Paths

Paths can set the directory name of artifacts and tests files. Normally, you don't need to change this.

## mocha

Redspot uses mocha as the testing framework, and all options here will be passed to mocha. For more details, see [mocha](https://mochajs.org/api/mocha).



