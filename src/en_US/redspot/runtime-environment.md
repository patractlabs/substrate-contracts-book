# Runtime Environment

The RedSpot Runtime Environment (RSE) contains all of Redspot's publicly available features.

When you import Redspot (import "redspot"), you get an RSE environment.



## Accessing RSE 
env has the following properties.

```
RuntimeEnvironment {
		config; // the user's configuration file 
    redspotArguments; // global arguments to run the command, including network , logLevel, etc.
    run; // function to run the command
    network; // Contains attributes such as api , keyring etc.
    artifacts; // the product of managing contract compilation
}
```

In the Redspot Console, these properties of env are injected into global variables. You can access them directly at

```
> network.name
'development'
```

In js or ts files, you can access the RSE by ``import env from 'redspot'``.

```typescript
import { config, redspotArguments, run, network, artifacts } from 'redspot' 
```



## Extending RSE

Some plugins can extend RSE by adding some additional properties or methods to RSE. For example, `@redspot/patract` extends the RSE by providing an instance of patract. When the patract plugin is introduced, you can access the patract instance like this.

```typescript
import { patract } from 'redspot' 
console.log(patract)
```





Let's go through the properties of the built-in RSE in more detail.



### config

Config contains all the configuration options in redspot.config.ts. and contains the default settings. It is a JSON object.

Get the currently configured default network to connect to

```typescript
import { config } from 'redspot' 
console.log(config.defaultNetwork);
```



### redspotArguments

Global arguments for the currently running command.

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

With the run function, you can call the task in a js or ts file: ``#

```typescript
import { run } from 'redspot'

run('test') // run the test command
run('test', { testFiles: '. /tests/erc20.test.ts'}) // pass in parameters
```



### network 

Network contains information about the network you are currently running on. The network can be used to get api, keyring, signer, etc. The type definition of network is

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

The name of the network currently in use

#### network.config 

Configuration options for the network currently in use, equivalent to: `config.networks[network.name]`

#### network.provider 

is equivalent to an instance of [wsprovider](https://polkadot.js.org/docs/api/start/create/#providers) in polkadotjs. They have the same interface. The endpoint configured in `redspot.config.ts` is used for the network.provider instantiation parameters.

#### network.registry 

Equivalent to an instance of the Registry in polkadotjs, used to manage type codecs. It also contains the `types` type definitions configured by the user in `redspot.config.ts`. Check out the polkadotjs documentation to learn more: https://polkadot.js.org/docs/api/start/types.create/.

#### network.keyring

Equivalent to an instance of Keyring in polkadotjs. The default is type ss25519. The default value of ss58 is set after the api initialization is complete. See more about keyring: https://polkadot.js.org/docs/api/start/keyring.

#### network.getSigners

The accounts configured by the user in `redspot.config.ts` will be resolved to Signers. The getSigners function allows you to get all signers, which is an array corresponding to the accounts configured in accounts.

To get all signers.

```typescript
import { network } from 'redspot';

network.getSigners().then((signers) => {
	console.log(signers[0].address)
})
```

The signer is actually compatible with the polkadot js signer. signer's type definition.

 ```typescript
export interface Signer {
		address: string;
    api: ApiPromise;
    pair: KeyringPair;
    signPayload: (payload: SignerPayloadJSON) => Promise<SignerResult>;
}
 ```

You can also use it in polkadotjs for transaction signing: the

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

You can generate a signer with the createSigner function, which takes a keyringpair and converts it into a signer instance: ``

```typescript
const pair = keyring.createFromUri(uri)
const signer = network.createSigner(pair)
```

#### network.gasLimit

It comes from gaslimt in config and is resolved to type bn.



### artifacts

With artifacts you can access and manage abi. it has the following type definition.

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

Get the contract metadata by contract name, which returns a JSON object:

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

where wasm is the wasm file compiled from the contract.

#### artifacts.readArtifactSync

Synchronized version of `artifacts.readArtifact`.

#### artifacts.readAllArtifact

Get the metadata of all contracts.

#### artifacts.readAllArtifactSync

Synchronized version of `artifacts.readAllArtifact`.

#### artifacts.getArtifactPath

Gets the path to the file that contains the metadata for the specified contract.

#### artifacts.getArtifactPathSync

Synchronized version of `artifacts.getArtifactPath`.

#### artifacts.artifactExists

Determines if a contract's metadata exists

#### artifacts.getArtifactPaths

Gets the file paths of the metadata for all contracts.

#### artifacts.copyToArtifactDir

Copies the file to the artifact directory
