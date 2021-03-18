# 配置

运行Redspot时，它将从当前工作目录开始搜索最接近的redspot.config.js文件。该文件通常位于项目的根目录中。一个空的redspot.config.js足以使Redspot正常工作。

此文件中包含整个Redspot设置（例如配置，插件和自定义任务等）。

## 配置选项
要设置配置，开发者需要从redspot.config.js导出对象（object）。

该对象可以具有以下条目：defaultNetwork，网络和路径。 例如：

```typescript
module.exports = {
  defaultNetwork: "development",
  rust: {
    toolchain: "nightly",
  },
  networks: {
    development: {
      endpoint: "ws://127.0.0.1:9944",
      types: {
        Address: "AccountId",
        LookupSource: "AccountId",
      },
      gasLimit: "400000000000",
      explorerUrl: "https://polkadot.js.org/apps/#/explorer/query/",
    },
    substrate: {
      endpoint: "ws://127.0.0.1:9944",
      gasLimit: "400000000000",
      accounts: ["//Alice"],
      types: {},
    },
  },
  mocha: {
    timeout: 60000,
  },
};
```

开发者可以在脚本中，控制台等（即Runtime Enviroment中）通过`env.config`获取到配置的详细信息。

## defaultNetwork 
您可以通过配置中的 `defaultNetwork` 字段来自定义在运行Redspot时默认使用的网络。如果省略此配置，则其默认值为 `localhost`。

## networks 
`networks` 配置字段是一个可选对象，网络名称映射到其配置。

缺省的 `localhost` network configuration 是:

```typescript
{
  localhost: {
    gasLimit: "400000000000",
    accounts: ["//Alice", "//Bob", "//Charlie", "//Dave", "//Eve", "//Ferdie"],
    endpoint: ["ws://127.0.0.1:9944"],
    types: {},
    httpHeaders: {},
    explorerUrl: "https://polkadot.js.org/apps/#/explorer/query/"
  }
}
```

开发者可以配置其他网络名称，例如配置`mainnet`，某个网络的名字`some_network_name`等。

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

以下介绍针对`network` 部分的可选配置选项：

### `[network].gasLimit`
这个配置用于设置实例化或者通过交易调用合约的时候需要提供的`gaslimit`的缺省值。

如果这个值过小，开发者会得到一个 `contracts.OutOfGas` 错误。最大的 gaslimit 是这条Substrate的链在Runtime中用于`DispatchClass::Normal`的最大值。（例如，在Substrate的node节点的配置中是 `NORMAL_DISPATCH_RATIO * MAXIMUM_BLOCK_WEIGHT = 75% * 2000000000000`）。

### `[network].accounts`
`accounts`应该是由 [`suri`](https://polkadot.js.org/docs/keyring/start/suri/) 或者 [`KeyringPair`](https://polkadot.js.org/docs/keyring/start/create/#adding-a-pair) 组成的一个列表。

在Runtime Enviroment中，你可以通过`await env.network.provider.getKeyringpairs()`获取到 `keyringPair` 组成的 account。更多的细节请查阅 `network.provider`。

### `[network].endpoint`
`endpoint`指明了在当前网络配置中开发者想要连接的节点。可以是 `string` 或者 `string[]`

当前，只支持 WebSockets 类型的 RPC 连接（即只支持 `wss://` 开头的链接协议）。

### `[network].types`
type 是`polkadotjs`中定义的概念。如果对此有任何疑问，您可以在此处[`types.extend`](https://polkadot.js.org/docs/api/start/types.extend/)看到。 您还可以设置`[network].typesbundle`，`[network].typesSpec`等。 通常，如果遇到类似于“No such variant in enum MultiSignature”的错误，**也许**您应该考虑在 type 中添加 `{ Address: "AccountId", LookupSource: "AccountId"}`， 请参阅 impact-on-extrinsics。

### `[network].httpHeaders`
此设置将添加到webSocket连接的 headers 中。

这个选项常用于以下场景：

TODO 待补充

### `[network].explorerUrl`
这个设置当前用于 `@redspot/patract` 插件。当交易被打包到区块中后，控制台中将会打印一个链接 `explorerUrl + blockhash`。这个值的缺省值是[https://polkadot.js.org/apps/#/explorer/query/](https://polkadot.js.org/apps/#/explorer/query/)。

这个配置方便的帮助开发者在`apps`里面追踪已经发出去并打包的交易。
