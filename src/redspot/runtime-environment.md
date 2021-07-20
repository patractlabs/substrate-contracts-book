# Runtime Environment

RedSpot 运行时环境（即RedspotRuntimeEnvironment，下文简称RSE）包含了Redspot所有公开的功能。当您导入Redspot时，就获得了一个 RSE环境。

## 访问RSE

env有以下属性。

```plain
RuntimeEnvironment {
                config; // 用户的配置文件
    redspotArguments; // 运行命令时的全局参数，包含 network、logLevel 等。
    run； // 运行命令的函数
    network; // 包含了 api、keyring 等属性。
    artifacts; // 管理合约编译的产物
}
```

在Redspot控制台中，env的这些属性会被注入到全局变量中，您可以直接访问它们。

```plain
> network.name
'development'
```

在`.js`或者`.ts`文件中，您可以通过`import env from 'redspot'`来访问 RSE。

```typescript
import { config, redspotArguments, run, network, artifacts } from 'redspot';
```

## 扩展 RSE

您可以通过一些插件扩展 RSE ，为 RSE 增加一些额外属性或方法。例如`@redspot/patract`插件就扩展了 RSE ，提供了patract的实例。当引入patract插件后，您可以通过以下方式访问 patract 实例。

```typescript
import { patract } from 'redspot';
console.log(patract);
```

接下来我们详细介绍一下内置的 RSE 的中的各个属性。

### config**

config 包含 redspot.config.ts 中的所有配置选项。并且包含了默认的设置， 它是一个Json对象。

获取当前配置的默认连接的网络。

```typescript
import { config } from 'redspot';
console.log(config.defaultNetwork);
```
### redspotArguments

当前运行的命令的全局参数。

```bash
> redspotArguments
{
  network: undefined,
  showStackTraces: false,
  version: false,
  help: false,
  config: undefined,
  verbose: false,
  logLevel: '2',
  maxMemory: undefined,
  tsconfig: undefined
}
```
### run

通过run函数，您可以在`.js`或`.ts`文件中，调用task。

```typescript
import { run } from 'redspot';
run('test'); // 运行测试命令
run('test', { testFiles: './tests/erc20.test.ts' }); // 传入参数
```
### Network

Network包含您当前正在运行的网络的信息。通过Network可以获取到API、keyring、signer等信息。Network的类型定义如下。

```typescript
export interface Network {
  name: string;
  config: NetworkConfig;
  provider: WsProvider;
  api: ApiPromise;
  registry: Registry;
  keyring: Keyring;
  getSigners(): Promise<Signer[]>;
  createSigner(pair: KeyringPair): Signer;
  gasLimit: BN;
}
```

* network.name：当前正在使用的网络的名称。
* network.config：当前正在使用的网络的配置选项，等价于`config.networks[network.name]`。
* network.provider：相当于Polkadot.js 中的[wsprovider](https://polkadot.js.org/docs/api/start/create/#providers)的实例。他们具有相同的接口。`redspot.config.ts`中配置的endpoint会被用于network.provider的实例化参数。
* network.registry：相当于Polkadot.js中的Registry的实例，用于管理类型的编解码。它也包含了用户在`redspot.config.ts`中配置的types类型定义，更多详情请参见[Type creation](https://polkadot.js.org/docs/api/start/types.create/)。
* network.keyring：相当于Polkadot.js中的 Keyring 的实例，默认是 ss25519 类型。在API初始化完成后，会设置默认的ss58 的值。更多信息，请参见[keyring](https://polkadot.js.org/docs/api/start/keyring)。
* network.getSigners：在`redspot.config.ts`中配置的accounts ，会被解析成signer 。通过 getSigners函数，可以获取所有的signer，其中个数组与accounts中配置的账号对应。

获取所有signer。

```typescript
import { network } from 'redspot';
network.getSigners().then(signers => {
  console.log(signers[0].address);
});
```

实际上signer与Polkadot.js的signer是兼容的。signer的类型定义如下。

```typescript
export interface Signer {
  address: string;
  api: ApiPromise;
  pair: KeyringPair;
  signPayload: (payload: SignerPayloadJSON) => Promise<SignerResult>;
}
```

您也可以将它用在Polkadot.js 中，进行交易签名。

```typescript
import { network } from 'redspot';
const api = network.api
async run() {
  const signers = await network.getSigners()
  const from = signers[0]
  const to = signers[1]
  api.tx.balances.transfer(signer1.address, 100000000000).signAndSend({
          signer: from
  })
}
```

* network.createSigner：通过createSigner函数可以生成一个signer，它接收一个keyringpair ，将其转化为signer实例。
```typescript
const pair = keyring.createFromUri(uri);
const signer = network.createSigner(pair);
```

* network.gasLimit：它来自于config中的gaslimt，并且被解析成bn类型。
### artifacts

通过 artifacts ，您可以访问和管理Abi，它的类型定义如下。

```typescript
export interface Artifacts {
  readArtifact(contractName: string): Promise<AbiMetadata>;
  readArtifactSync(contractName: string): AbiMetadata;
  readAllArtifact(): Promise<AbiMetadata[]>;
  readAllArtifactSync(): AbiMetadata[];
  getArtifactPath(contractName: string): Promise<string>;
  getArtifactPathSync(contractName: string): string;
  artifactExists(contractName: string): Promise<boolean>;
  getArtifactPaths(): Promise<string[]>;
  copyToArtifactDir(paths: string[]): Promise<void>;
}
```

| 字段                          | 说明                                                   |
|:----|:----|
|artifacts.readArtifact|通过合约名字，获取合约的metadata，它会返回一个Json对象|
|artifacts.readArtifactSync|artifacts.readArtifact的同步版本|
|artifacts.readAllArtifact|获取所有的合约的metadata|
|artifacts.readAllArtifactSync|artifacts.readAllArtifact的同步版本|
|artifacts.getArtifactPath|获取指定合约的metadata的文件路径|
|artifacts.getArtifactPathSync|artifacts.getArtifactPath的同步版本|
|artifacts.artifactExists|判断一个合约的metadata是否存在|
|artifacts.getArtifactPaths|获取所有合约的metadata的文件路径|
|artifacts.copyToArtifactDir|将文件拷贝到artifact目录|


* artifacts.readArtifact

通过合约名字，获取合约的metadata，它会返回一个Json对象。其中的Wasm就是合约编译出来的 Wasm文件。

```typescript
{
  metadataVersion: string;
  source: {
    hash: string;
    language: string;
    compiler: string;
    wasm: string;
  };
  contract: {
    name: string;
    version: string;
    authors: string[];
  };
  types: any[];
  spec: {
    constructors: any[];
    docs: any[];
    events: any[];
    messages: any[];
  };
}
```




****





