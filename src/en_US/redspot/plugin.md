# Plugins



The core functionality of Redspot includes the Redspot runtime environment and the tasks of compiling contracts, running tests, and running scripts.

Other functions such as test suites with contracts, contract interaction, accessing contracts, setting up different chain configurations, etc. are provided by plugins. Users can choose which plugins they want to use. Introducing a plugin is simple. Add it as an npm dependency. Then add to ``redspot.config.ts``.

```typescript
import { RedspotUserConfig } from 'redspot/types';
import '@redspot/patract'; // introduce the @redspot/patract plugin
import '@redspot/chai'; // import @redspot/chai plugin

export default {
 ...
} as RedspotUserConfig;
```

Here we introduce a few of the officially provided plugins.

## @redspot/patract

This plugin extends the Redspot runtime environment and adds the patract attribute, which allows you to access patract instances like this.

```typescript
import { patract } from 'redspot' 
```

The type definition of patract is as follows.

```typescript
interface Patract {
     Contract: Contract;
     ContractFactory: ContractFactory;
    /**
     * Generating Contract Instance from Contract Addresses
     *
     * @param contractName Contract name
     * @param address contract address
     * @param signer The account used to sign, or the first account in the user configured if it is undefined.
     * @returns Contract Instance
     */
    getContractAt(
      contractName: string,
      address: AccountId | string,
      signer?: Signer
    ): Promise<Contract>;
    /**
     * Return the contract factory
     *
     * @param contractName Contract name
     * @param signer The account used to sign, or the first account in the user configured if it is undefined.
     * @returns Contract Factory Instance
     */
    getContractFactory(
      contractName: string,
      signer?: Signer
    ): Promise<ContractFactory>;
    /**
     * Generate a random account and transfer token to it
     *
     * @param from This account will be transferred to the new account
     * @param amount The amount transferred to the new account
     * @returns New Account
     */
    getRandomSigner(
      from?: Signer,
      amount?: BN | number | string | BigInt
    ): Promise<Signer>;
  
  };
```



#### `getRandomSigner(from, amount): Promise<Signer>`

getRandomSigner is a utility function that creates a random signer to be generated and passes some initial amount to it from from.



#### `getContractFactory(contractName, signer?): Promise<ContractFactory>`

This function will create an instance of contractFactory with the contract name and signer.

Note that the contract must have been compiled successfully. You can find the metadata file for this in artifacts.



#### `getContractAt(contractName, address, signer): Promise<Contract>`

Creates a Contract instance with a contract name, contract address and signer.

Note that the contract must have been compiled successfully. You can find the metadata file for it in artifacts.





###ContractFactory

The ContractFactory is mainly used for contract deployment.

```typescript
import { patract } from 'redspot'
const { getContractFactory, getRandomSigner } = patract;

const signers = await getSigners();
const contractFactory = await getContractFactory('erc20', signers[0]);
const contract = await contractFactory.deploy('new', '1000');
```

#### `new ContractFactory(address, contractMetadata, api, signer) `

 Create a contractFactory instance with contract address, metadata, api and signer.



#### ` contractFactory.deploy(constructorOrId, . . args[ , overrides ]): Promise<Contract>`

constructorOrId is the name of the contructor of the contract to be called. Note that for some contracts that use ``trait``, the name of the contructor should be something like this.

```typescript
const contract = await contractFactory.deploy('baseErc20,new', '1000');
```

args is the list of arguments you need to pass to the contructor you are using.

overrides are optional and can be used to specify gasLimit, value, signer, salt, etc.

```typescript
const contract = await contractFactory.deploy('baseErc20,new', '1000', {
  gaslimit: '10000000000000000000000',
  salt: 'jkqwezlkwklqreqw',
  signer: signers[1],
  value: '32133210000000000000000000000'
});
```

gasLimit is the maximum gas value that can be used for this transaction.

salt is used to generate the address of the contract. The same contract address will be generated if the deployer, deployment parameters and salt are the same.

signer When creating a contractFactory, there is a signer parameter that is used for the default transaction signature. The signer item can override the default signature account.

value is the amount to be passed to the contract to be created.



Note that `@redspot/patract` will not handle numeric amount precision and needs to be handled by the user.



#### `contractFactory.deployed(constructorOrId, . .args[ , overrides ]): Promise<Contract>`

This method is similar to `contractFactory.deploy`, the only difference is that `deployed` checks in advance if the contract address to be generated exists, and if it does, does not try to deploy it, but instead creates a `Contract` instance directly using that contract address.



#### `contractFactory.instantiate(constructorOrId, . .args[ , overrides ]): Promise<ContractAddress>`

 If wasm has been uploaded to the chain, you can call `contractFactory.instantiate` directly to instantiate the contract. It takes the same arguments as `deploy`, but returns the contract address.



#### `contractFactory.instantiate(constructorOrId, . .args[ , overrides ]): Promise<ContractAddress>`

 If wasm has been uploaded to the chain, you can call `contractFactory.instantiate` directly to instantiate the contract. It takes the same arguments as `deploy`, but returns the contract address.



#### `contractFactory.attach(address):Contract`

Generates a `Contract` instance using the specified contract address



#### `contractFactory.connect(signer): ContractFactory`

Create a new contractFactory instance with the specified signer



### Contract

#### `new Contract(address, contractMetadata, api, signer) `

 Create a contractFactory instance with the contract address, contractMetadata, api and signer.



#### `contract.query.MessageName(. .args[, overrides])`

Similar to in polkadotjs, contract.query[MessageName] can call ``contracts.call`` rpc. For example, in the erc20 contract, to get the account balance.

```typescript
const result = await contract.query.balanceOf(someaddress)
```

The return value is of the following type.

```typescript
export interface ContractCallOutcome {
    debugMessage: Text;
    gasConsumed: u64;
    output: Codec | null;
    result: ContractExecResultResult;
}
```

It is the same as in polkadotjs api-contract.

overrides are optional and can be used to specify gasLimit, value, etc.


```typescript
const contract = await contract.query.balanceOf('baseErc20,new', '1000', {
	gasLimit：'1231231231233123123'
  value: '3213321000000000000000000'
  signer： signers[1]
});
```

gasLimit is the maximum amount of gas that can be used for this transaction.

salt is used to generate the address of the contract. The same contract address will be generated if the deployer, deployment parameters and salt are identical.

signer When creating a contractFactory, there is a signer parameter that is used for the default transaction signature. The signer item can override the default signature account.

value is the amount to be passed to the contract to be created.



Note that `@redspot/patract` will not handle numeric amount precision and needs to be handled by the user.



#### `contractFactory.deployed(constructorOrId, . .args[ , overrides ]): Promise<Contract>`

This method is similar to `contractFactory.deploy`, the only difference is that `deployed` checks in advance if the contract address to be generated exists, and if it does, does not try to deploy it, but instead creates a `Contract` instance directly using that contract address.



#### `contractFactory.instantiate(constructorOrId, . .args[ , overrides ]): Promise<ContractAddress>`

 If wasm has been uploaded to the chain, you can call `contractFactory.instantiate` directly to instantiate the contract. It takes the same arguments as `deploy`, but returns the contract address.



#### `contractFactory.instantiate(constructorOrId, . .args[ , overrides ]): Promise<ContractAddress>`

 If wasm has been uploaded to the chain, you can call `contractFactory.instantiate` directly to instantiate the contract. It takes the same arguments as `deploy`, but returns the contract address.



#### `contractFactory.attach(address):Contract`

Generates a `Contract` instance using the specified contract address



#### `contractFactory.connect(signer): ContractFactory`

Create a new contractFactory instance with the specified signer

### Contract

#### `new Contract(address, contractMetadata, api, signer) `

 Creates a contractFactory instance with the contract address, contractMetadata, api and signer.



#### `contract.query.MessageName(. .args[, overrides])`

Similar to in polkadotjs, contract.query[MessageName] can call ``contracts.call`` rpc. For example, in the erc20 contract, to get the account balance.

```typescript
const result = await contract.query.balanceOf(someaddress)
```

The return value is of the following type.

```typescript
export interface ContractCallOutcome {
    debugMessage: Text;
    gasConsumed: u64;
    output: Codec | null;
    result: ContractExecResultResult;
}
```

It is the same as in polkadotjs api-contract.

overrides are optional and can be used to specify gasLimit, value, etc.

```typescript
const contract = await contract.query.balanceOf('baseErc20,new', '1000', {
	gasLimit: '1231231231231233123123'
  value: '32133210000000000000000000000'
  signer: signers[1]
});
```

gasLimit value refers to the gasLimit and value in the `contracts.call` rpc. signer can specify the origin address of `contracts.call`.



#### `contract.optimizeGas.MessageName(.. . args[, overrides])`

This function is similar to `contract.query.MessageName`, but the return value is the estimated gas to be consumed

```typescript
const result = await contract.estimateGas.balanceOf(someaddress)
result // BN(232130000000)
```



#### `contract.tx.MessageName(. .args[,overrides])`

With `contract.tx.MessageName` you can execute the contract's transactions. For example.

```typescript
const result = await contract.tx.transfer(someddress, 7)
```

Unlike polkadotjs, this function returns a promise that will wait until the transaction is up, or until an error occurs before it is resolved.

The return value type is as follows.

```typescript
export interface TransactionResponse {
  from: string;
  txHash?: string;
  blockHash?: string;
  error?: {
    message?: any;
    data?: any;
  };
  result: SubmittableResult;
  events?: DecodedEvent[];
}

export interface DecodedEvent {
  args: Codec[];
  name: string;
  event: AbiEvent;
}
```

You can get the events of the parsed contract directly via `result.events`. If the execution goes wrong, you can get the error message via `result.error.message`.

overrides are optional and can be used to specify gasLimit, value, signer, etc.

```typescript
const contract = await contract.tx.transfer(someddress, 7, {
  gasLimit: '1231231231231233123123'
  value: '32133210000000000000000000000'
  signer: signers[1]
});
```

gasLimit refers to the maximum value of gas that can be used for this transaction.

value refers to the amount to be passed to the contract to be created.

signer is used to override the default signer.



#### `contract.attach(address): Contract`

Generates a `Contract` instance using the specified contract address



#### `contract.connect(signer): contractFactory`

Create a new contract instance with the specified signer



## @redspot/chai

This plugin provides a set of matchers for writing contract test cases, inspired by [waffle](https://ethereum-waffle.readthedocs.io/en/latest/matchers.html).

Introducing @redspot/chai. This plugin will automatically modify the chai matchers without having to call them manually.

```
// redspot.config.ts

import { RedspotUserConfig } from 'redspot/types';
import '@redspot/chai'; 

export default {
 ...
} as RedspotUserConfig;
```

For a full example of using @redspot/chai.


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

  it('Transfer adds amount to destination account', async () => {
    const { contract, receiver } = await setup();
    await expect(() =>
      contract.tx.transfer(receiver.address, 7)
    ).to.changeTokenBalance(contract, receiver, 7);

    await expect(() =>
      contract.tx.transfer(receiver.address, 7)
    ).to.changeTokenBalances(contract, [contract.signer, receiver], [-7, 7]);
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


There are more built-in uses for chai, see the chai documentation: https://www.chaijs.com/.



### equal

@redspot/chai will modify the default equal match. The default equal does not support matching objects. But @redspot/chai can.

```typescript
expect(new BN(1000)).to.equal(1000) // true
expect(AccountId).to.equal('5Gdjkw....') // true
expect(Uint8Array([1,2,3])).to.equal('0x010203') // true
```

For BN types, equal to call `new BN(expected).eq(actual)` to determine if it is equal

For types defined in polkadotjs, equal calls `Type.eq(actual)` to determine if they are equal

For uint8Array types, equal converts them all to hex and then compares them for equality

For other types, the default method of determining equality is used



### changeTokenBalance

This matcher detects changes in the balance of erc20 and internally calls the balanceOf interface to determine the balance. Since the erc20-trait interface for getting balance is `baseErc20,balanceOf` 

so it does not apply to erc20-trait.

```typescript
await expect(() =>
  contract.tx.transfer(receiver.address, 7)
).to.changeTokenBalance(contract, receiver, 7);

await expect(() =>
  contract.tx.transfer(receiver.address, 7)
).to.changeTokenBalances(contract, [contract.signer, receiver], [-7, 7]);
```



### emit

This matcher detects if the contract emits an event, e.g. to detect if a Transfer event has been emitted.

```typescript
await expect(contract.tx.transfer(receiver.address, 7))
    .to.exit(contract, 'Transfer')
```

Detects if the event contains the specified parameters.

```typescript
await expect(contract.tx.transfer(receiver.address, 7))
    .to.exit(contract, 'transfer')
    .withArgs(sender.address, receiver.address, 7);
```

Not expecting to emit events

```typescript
await expect(
  contract.tx.transfer(sender.address, 7, {
    signer: emptyAccount
  })
).to.not.exit(contract, 'Transfer');

```



## @redspot/gas-reporter

The plugin prints out the gas usage of the transaction for the called contract when the test completes at

! [](https://user-images.githubusercontent.com/7029338/101343840-7700ab00-38e9-11eb-80a0-c6b6d38a9640.png)

As with @redspot/chai, just add to redspot.config.ts, after introducing @redspot/gas-reporter, the following.

```
// redspot.config.ts

import { RedspotUserConfig } from 'redspot/types';
import '@redspot/gas-reporter'; 

export default {
 ...
} as RedspotUserConfig;
```

which is ready to run automatically.
