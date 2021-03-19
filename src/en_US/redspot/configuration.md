# Configure

When you run Redspot, it will search for the closest redspot.config.js file starting from the current working directory. This file is usually located in the root directory of the project.

This file contains the entire Redspot setup (e.g. configuration, plugins, custom tasks, etc.).

## Configuration options
To set the configuration, you need to export the object (object) from redspot.config.ts.

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
      accounts: ['//Alice', "tomato mad peasant blush poem obtain inspire distance attitude mercy return marriage", " 0x26aa394eea5630e07c48ae0c9558cef70a98fdbe9ce6c55837576c60c7af3850"],
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

The configuration information can be obtained in the js file via ``config`''.

```typescript
import { config } from "redspot"

console.log(config)
```



## defaultNetwork 
You can customize the network that is used by default when running Redspot by using the `defaultNetwork` field in the configuration. If this configuration is omitted, the default value is ``localhost``.

## networks 
The `networks` configuration field is an optional object to which the network name maps to its configuration.

The default configuration for `localhost` is :

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

Other network names can also be configured, e.g. configure `mainnet`, the name of a particular network `some_network_name`, etc.

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

The following configuration options are described for the `network` section.

### `[network].gasLimit`
This configuration is used to set the default value of `gaslimit` that needs to be provided when instantiating or invoking a contract via a transaction. This value must be an integer, with no precision.

If this value is too small, you will get a `contracts.OutOfGas` error. The maximum gaslimit is the maximum value used for `DispatchClass::Normal` in Runtime for this Substrate's chain. (For example, in the configuration of Substrate's node node is `NORMAL_DISPATCH_RATIO * MAXIMUM_BLOCK_WEIGHT = 75% * 2000000000000`).

So it is generally recommended to set it higher.

### `[network].accounts`
`accounts` should be set by [`suri`](https://polkadot.js.org/docs/keyring/start/suri/) or [`KeyringPair`](https://polkadot.js.org/docs/keyring/) start/create/#adding-a-pair).

The accounts default to ["//Alice", "//Bob", "//Charlie", "//Dave", "//Eve", "//Ferdie"].

See runtime-environment for details 

### `[network].endpoint`
`endpoint` specifies the node in the current network configuration that the developer wants to connect to.

Currently, only WebSockets type RPC connections are supported (i.e. only link protocols starting with `wss://` or `ws://` are supported).

### `[network].types`
type is a concept defined in `polkadotjs`. If there is any doubt about this, you can see it here at [`types.extend`](https://polkadot.js.org/docs/api/start/types.extend/). You can also set `[network].typesbundle`, `[network].typesSpec`, etc. Usually, if you get an error like "No such variant in enum MultiSignature", you should probably consider adding `{ Address: "AccountId", LookupSource: "AccountId"}`, see [impact-on-extrinsics](https://polkadot.js.org/docs/api/start/types.extend/#impact-on-extrinsics) .

## contract

In the contract, you can set the compiler options, currently [ink](https://github.com/paritytech/ink) and [solang](https://github.com/hyperledger-labs/solang) are supported. You can also compile the ink contract and the solang contract together under the same project.

See the example of compiling multiple contracts at https://github.com/patractlabs/redspot/tree/master/examples/multi-contract .

### [contract].ink.toolchain

Set the toolchain used by [cargo-contract](https://github.com/paritytech/cargo-contract) when compiling contracts. You can also specify `nightly-YYYY-MM-DD`

### [contract].ink.sources

Sets the directory of the ink contract to look for at compile time. glob syntax.

### [contract].solang.sources

Set the directory of the solang contract to be looked up at compile time. glob syntax.



## Paths

paths sets the directory name for artifacts and tests files. Normally, you don't need to change this.



## mocha

Redspot uses mocha as its testing framework, and all of the options here will be passed to mocha. Check out https://mochajs.org/api/mocha for more details.