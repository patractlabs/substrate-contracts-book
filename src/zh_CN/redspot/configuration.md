# 配置

运行Redspot时，它将从当前工作目录开始搜索最接近的redspot.config.js文件。该文件通常位于项目的根目录中。

此文件中包含整个Redspot设置（例如配置，插件和自定义任务等）。

## 配置选项
要设置配置，需要从 redspot.config.ts 导出对象（object）：

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

可以在 js 文件中，通过`config`获取到配置信息：

```typescript
import { config } from "redspot"

console.log(config)
```



## defaultNetwork 
您可以通过配置中的 `defaultNetwork` 字段来自定义在运行Redspot时默认使用的网络。如果省略此配置，则其默认值为 `localhost`。

## networks 
`networks` 配置字段是一个可选对象，网络名称映射到其配置。

默认的 `localhost` 的配置是:

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

也可以配置其他网络名称，例如配置`mainnet`，某个网络的名字`some_network_name`等。

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

以下介绍针对`network` 部分的配置选项：

### `[network].gasLimit`
这个配置用于设置实例化或者通过交易调用合约的时候需要提供的`gaslimit`的默认值。这个值必须是整数，没有精度。

如果这个值过小，将会得到一个 `contracts.OutOfGas` 错误。最大的 gaslimit 是这条Substrate的链在Runtime中用于`DispatchClass::Normal`的最大值。（例如，在Substrate的node节点的配置中是 `NORMAL_DISPATCH_RATIO * MAXIMUM_BLOCK_WEIGHT = 75% * 2000000000000`）。

所以一般建议设置高一点。

### `[network].accounts`
`accounts`应该是由 [`suri`](https://polkadot.js.org/docs/keyring/start/suri/) 或者 [`KeyringPair`](https://polkadot.js.org/docs/keyring/start/create/#adding-a-pair) 组成的一个列表。

accounts 默认为 ["//Alice", "//Bob", "//Charlie", "//Dave", "//Eve", "//Ferdie"]。

具体请查见 runtime-environment 

### `[network].endpoint`
`endpoint`指明了在当前网络配置中开发者想要连接的节点。

当前，只支持 WebSockets 类型的 RPC 连接（即只支持 `wss://` 或者 `ws://`开头的链接协议）。

### `[network].types`
type 是`polkadotjs`中定义的概念。如果对此有任何疑问，您可以在此处[`types.extend`](https://polkadot.js.org/docs/api/start/types.extend/)看到。 您还可以设置`[network].typesbundle`，`[network].typesSpec`等。 通常，如果遇到类似于“No such variant in enum MultiSignature”的错误，也许应该考虑在 type 中添加 `{ Address: "AccountId", LookupSource: "AccountId"}`， 请参阅 [impact-on-extrinsics](https://polkadot.js.org/docs/api/start/types.extend/#impact-on-extrinsics)。

## contract

在 contract 中，你可以设置编译器的选项，目前支持 [ink](https://github.com/paritytech/ink) 和 [solang](https://github.com/hyperledger-labs/solang)。你也可以将 ink合约 和 solang合约放在同一项目下一起编译。

查看多合约的编译示例 https://github.com/patractlabs/redspot/tree/master/examples/multi-contract 。

### [contract].ink.toolchain

设置 [cargo-contract](https://github.com/paritytech/cargo-contract) 编译合约时，所使用的 toolchain。通常都是 `nightly`。你也可以指定为 `nightly-YYYY-MM-DD`

### [contract].ink.sources

设置编译时查找的 ink 合约的目录。glob 语法。

### [contract].solang.sources

设置编译时查找的 solang 合约的目录。glob 语法。



## Paths

paths 可以设置  artifacts 和 tests 文件的目录名。通常情况下，你无需对此进行更改。



## mocha

Redspot 使用 mocha 作为测试框架，这里的所有选项，都将传递给 mocha 。查看 https://mochajs.org/api/mocha ，获取更多的详情。