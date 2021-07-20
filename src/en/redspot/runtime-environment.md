# Runtime Environment

The RedSpot Runtime Environment (RSE) contains all the publicly available functions of Redspot. When you import Redspot, you get an RSE environment.

## Accessing RSE

Env has the following attributes.

```typescript
RuntimeEnvironment {
                config; // the user's configuration file 
    redspotArguments; // global arguments to run the command, including network , logLevel, etc.
    run; // function to run the command
    network; // Contains attributes such as api , keyring etc.
    artifacts; // the product of managing contract compilation
}
```

In the Redspot console, these properties of env will be injected into global variables, and you can directly access them.

```bash
> network.name
'development'
```

In `.js` or `.ts` files, you can access RSE by `import env from 'redspot'`.

```typescript
import { config, redspotArguments, run, network, artifacts } from 'redspot';
```

## Extending RSE

You can extend RSE through some plug-ins and add some additional properties or methods to RSE. For example, the `@redspot/patract` plugin extends RSE and provides examples of patract. When the patract plugin is introduced, you can access the patract instance in the following way.

```typescript
import { patract } from 'redspot';
console.log(patract);
```

Next, we will introduce each attribute of the built-in RSE in detail.

### config

config contains all the configuration options in redspot.config.ts，and contains the default settings, it is a Json object.

Get the currently configured default connection network.

```typescript
import { config } from 'redspot';
console.log(config.defaultNetwork);
```

### redspotArguments

Global parameters of the currently running command.

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

Through the run function, you can call tasks in `.js` or`.ts` files.

```typescript
import { run } from 'redspot';
run('test'); // run the test command
run('test', { testFiles: './tests/erc20.test.ts' }); // pass in parameters
```

### Network

Network contains the information about the network you are currently running. API keyring, signer and other information can be obtained through Network. The type of Network is defined as follows.

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

* network.name: The name of the network currently in use.
* network.config: The configuration options of the network currently in use, equivalent to`config.networks[network.name]`.
* network.provider: equivalent to an instance of [wsprovider](https://polkadot.js.org/docs/api/start/create/#providers) in Polkadot.js. They have the same interface. The endpoint configured in `redspot.config.ts` will be used as the instantiation parameter of network.provider.
* network.registry: equivalent to the instance of Registry in Polkadot.js, used to manage the type of codec. It also contains the type definitions configured by the user in `redspot.config.ts` . For more details, please refer to [Type creation](https://polkadot.js.org/docs/api/start/types.create/).
* network.keyring: equivalent to an instance of Keyring in Polkadot.js, the default is ss25519 type. After the API initialization is complete, the default value of ss58 will be set. For more information, see [keyring](https://polkadot.js.org/docs/api/start/keyring).
* network.getSigners: The accounts configured`in redspot.config.ts`will be parsed into signers. Through the getSigners function, all signers can be obtained, and one of the arrays corresponds to the account configured in accounts.

Get all signers.

```typescript
import { network } from 'redspot';
network.getSigners().then(signers => {
  console.log(signers[0].address);
});
```

In fact, the signer is compatible with the signer of Polkadot.js. The type of signer is defined as follows.

```typescript
export interface Signer {
  address: string;
  api: ApiPromise;
  pair: KeyringPair;
  signPayload: (payload: SignerPayloadJSON) => Promise<SignerResult>;
}
```

You can also use it in Polkadot.js to sign transactions.

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

* network.createSigner：A signer can be generated through the createSigner function, which receives a keyringpair and converts it into a signer instance.
```typescript
const pair = keyring.createFromUri(uri);
const signer = network.createSigner(pair);
```

* network.gasLimit :It comes from gaslimt in config and is parsed into bn type.
### artifacts

Through artifacts, you can access and manage Abi. Its type is defined as follows.

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

| Field                         | Description                                                  |
|:----|:----|
|artifacts.readArtifact|You can get the metadata of the contract by the contract name, it will return a Json object|
|artifacts.readArtifactSync|Synchronized version of artifacts.readArtifact|
|artifacts.readAllArtifact|Get the metadata of all contracts|
| artifacts.readAllArtifactSync |Synchronized version of artifacts.readAllArtifact|
|artifacts.getArtifactPath|Get the file path of the metadata of the specified contract|
|artifacts.getArtifactPathSync|Synchronized version of artifacts.getArtifactPath|
|artifacts.artifactExists|Judge whether the metadata of a contract exists|
|artifacts.getArtifactPaths|Get the file path of the metadata of all contracts|
|artifacts.copyToArtifactDir|Copy the file to the artifact directory|


* artifacts.readArtifact

Get the metadata of the contract through the contract name, and it will return a Json object. The Wasm is the Wasm file compiled from the contract.

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





