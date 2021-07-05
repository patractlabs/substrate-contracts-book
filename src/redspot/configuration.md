# 配置信息

运行Redspot时，它将从当前工作目录开始搜索最接近的redspot.config.js文件，该文件通常位于项目的根目录下。该文件中包含整个Redspot设置信息，例如配置、插件和自定义任务等。

## **配置选项**

要设置配置，需要从redspot.config.ts中导出对象（Object）。

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
您可在`.js`文件中，通过`config`获取配置信息。
```typescript
tyimport { config } from "redspot"
console.log(config)
```
## **defaultNetwork**

您可以通过配置中的`defaultNetwork`字段来定义运行Redspot时默认使用的网络。如果省略此配置，则其默认值为localhost。

## **networks**

`networks`配置字段是一个可选对象，网络名称会映射到其配置。默认的localhost的配置信息如下。

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

您也可以配置其他网络名称，例如配置mainnet，某个网络的名字some_network_name等。

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

下文介绍了network部分的配置选项。

| 配置字段                   | 说明                                                         |
|:----|:----|
|    <br>[network].gasLimit<br>|用于设置实例化或通过交易调用合约的时需要提供的gaslimit的默认值。这个值必须是整数，没有精度。如果这个值过小，将返回contracts.OutOfGas错误。最大的gaslimit是这条Substrate的链在Runtime中用于DispatchClass::Normal的最大值。例如在Substrate的Node节点的配置中是NORMAL_DISPATCH_RATIO * MAXIMUM_BLOCK_WEIGHT = 75% * 2000000000000。建议此值设置高一点。<br>|
|[network].accounts<br>|是由[suri](https://polkadot.js.org/docs/keyring/start/suri/)或[KeyringPair](https://polkadot.js.org/docs/keyring/start/create/#adding-a-pair)组成的一个列表。accounts 默认为 ["//Alice", "//Bob", "//Charlie", "//Dave", "//Eve", "//Ferdie"]，详情请参见[Runtime-environment](https://docs.patract.io/redspot/runtime-environment.html#%E8%AE%BF%E9%97%AE-rse)。<br>|
|[network].endpoint<br>|指明了在当前网络配置中开发者想要连接的节点。当前，只支持 WebSockets 类型的 RPC连接，即只支持 `wss://` 或 `ws://`开头的链接协议。<br>|
|[network].types<br>|type是Polkadot.js中定义的概念，详情可参见[types.extend](https://polkadot.js.org/docs/api/start/types.extend/)。 您还可以设置[network].typesbundle、[network].typesSpec等。 如果遇到类似于No such variant in enum MultiSignature的错误，您可以在 type 中添加{ Address: "AccountId", LookupSource: "AccountId"}，详情请参见[impact-on-extrinsics](https://polkadot.js.org/docs/api/start/types.extend/#impact-on-extrinsics)。<br>|

## **contract**

在contract中，您可以设置编译器的选项，目前支持[ink](https://github.com/paritytech/ink)和[solang](https://github.com/hyperledger-labs/solang)。您也可以将ink合约和solang合约放在同一项目下一起编译，详情可参见[多合约的编译示例](https://github.com/patractlabs/redspot/tree/master/examples/multi-contract )。

| 选项                       | 说明                                                         |
|:----|:----|
| [contract].ink.toolchain   |设置[cargo-contract](https://github.com/paritytech/cargo-contract)编译合约时，所使用的 toolchain。通常都是nightly。您也可以指定为nightly-YYYY-MM-DD。|
|[contract].ink.sources|设置编译时查找的ink合约的目录。glob语法。|
| [contract].solang.sources< | 设置编译时查找的solang合约的目录。glob语法。 |

## **Paths**

Paths可以设置artifacts和tests文件的目录名。通常情况下，您无需对此进行更改。

## **mocha**

Redspot使用mocha作为测试框架，这里的所有选项，都会传递给mocha 。更多详情，请参见[mocha](https://mochajs.org/api/mocha)。



