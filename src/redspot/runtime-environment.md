# Runtime Environment

RedSpot 运行时环境(RSE)包含了 Redspot 所有公开的功能。

当你导入 Redspot (import "redspot")的时候，即获得了一个 RSE 环境。

## 访问 RSE

env 有如下的属性：

```
RuntimeEnvironment {
		config; // 用户的配置文件
    redspotArguments; // 运行命令时的全局参数，包含 network , logLevel 等。
    run； // 运行命令的函数
    network; // 包含了 api , keyring 等属性。
    artifacts; // 管理合约编译的产物
}
```

在 Redspot Console 中，env 的这些属性会注入到全局变量中。你可以直接访问它们：

```
> network.name
'development'
```

在 js 或者 ts 文件中，你可以通过 `import env from 'redspot'` 来访问 RSE。

```typescript
import { config, redspotArguments, run, network, artifacts } from 'redspot';
```

## 扩展 RSE

一些插件可以扩展 RSE ，为 RSE 增加一些额外属性或方法。如 `@redspot/patract` 就扩展了 RSE ，提供了 patract 的实例。当引入 patract 插件后，你可以这样访问 patract 实例：

```typescript
import { patract } from 'redspot';
console.log(patract);
```

下面我们来详细介绍一下内置的 RSE 的中的各个属性：

### config

Config 包含 redspot.config.ts 中的所有配置选项。并且包含了默认的设置。 它是一个 JSON 对象。

获取当前配置的默认连接的网络

```typescript
import { config } from 'redspot';
console.log(config.defaultNetwork);
```

### redspotArguments

当前运行的命令的全局参数：

```
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

通过 run 函数，你可以在 js 或者 ts 文件中，调用 task ：

```typescript
import { run } from 'redspot';

run('test'); // 运行测试命令
run('test', { testFiles: './tests/erc20.test.ts' }); // 传入参数
```

### network

Network 包含你当前正在运行的网络的信息。通过 network 可以获取到 api，keyring, signer 等。network 的类型定义：

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

#### network.name

当前正在使用的网络的名称

#### network.config

当前正在使用的网络的配置选项，等价于：`config.networks[network.name]`

#### network.provider

相当于 polkadotjs 中的 [wsprovider](https://polkadot.js.org/docs/api/start/create/#providers) 的实例。他们具有相同的接口。`redspot.config.ts`中配置的 endpoint 会被用于 network.provider 的实例化参数。

#### network.registry

相当于 polkadotjs 中的 Registry 的实例，用于管理类型的编解码。它也包含了用户在 `redspot.config.ts` 中配置的 `types` 类型定义。查看 polkadotjs 文档，了解更多： https://polkadot.js.org/docs/api/start/types.create/。

#### network.keyring

相当于 polkadotjs 中的 Keyring 的实例。默认是 ss25519 类型。在 api 初始化完成后，会设置默认的 ss58 的值。查看更多关于 keyring: https://polkadot.js.org/docs/api/start/keyring。

#### network.getSigners

用户在 `redspot.config.ts` 中配置的 accounts ，会被解析成 Signer 。通过 getSigners 函数，可以获取所有的 signer。它是个数组与 accounts 中配置的账号对应。

获取到所有 signer：

```typescript
import { network } from 'redspot';

network.getSigners().then(signers => {
  console.log(signers[0].address);
});
```

实际上 signer 与 polkadot js 的 signer 是兼容的。signer 的类型定义：

```typescript
export interface Signer {
  address: string;
  api: ApiPromise;
  pair: KeyringPair;
  signPayload: (payload: SignerPayloadJSON) => Promise<SignerResult>;
}
```

你也可以将它用在 polkadotjs 中，进行交易签名：

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

#### network.createSigner

你可以通过 createSigner 函数生成一个 signer，它接收一个 keyringpair ，将其转化为 signer 实例：

```typescript
const pair = keyring.createFromUri(uri);
const signer = network.createSigner(pair);
```

#### network.gasLimit

它来自于 config 中的 gaslimt，并且被解析成 bn 类型。

### artifacts

通过 artifacts ，你可以访问和管理 abi。它的类型定义如下：

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

#### artifacts.readArtifact

通过合约名字，获取合约的 metadata，它会返回一个 JSON 对象:

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

其中 wasm 就是合约编译出来的 wasm 文件。

#### artifacts.readArtifactSync

`artifacts.readArtifact` 的同步版本。

#### artifacts.readAllArtifact

获取所有的合约的 metadata。

#### artifacts.readAllArtifactSync

`artifacts.readAllArtifact` 的同步版本。

#### artifacts.getArtifactPath

获取指定合约的 metadata 的文件路径。

#### artifacts.getArtifactPathSync

`artifacts.getArtifactPath` 的同步版本

#### artifacts.artifactExists

判断一个合约的 metadata 是否存在

#### artifacts.getArtifactPaths

获取所有合约的 metadata 的文件路径。

#### artifacts.copyToArtifactDir

将文件拷贝到 artifact 目录
