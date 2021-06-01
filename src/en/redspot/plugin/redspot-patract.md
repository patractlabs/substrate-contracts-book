# @redspot/patract

This plugin extends the Redspot runtime environment and adds the patract attribute, which allows you to access patract instances like this.

```typescript
import { patract } from 'redspot';
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
}
```

### `getRandomSigner(from, amount): Promise<Signer>`

getRandomSigner is a utility function that creates a random signer to be generated and passes some initial amount to it from from.

### `getContractFactory(contractName, signer?): Promise<ContractFactory>`

This function will create an instance of contractFactory with the contract name and signer.

Note that the contract must have been compiled successfully. You can find the metadata file for this in artifacts.

### `getContractAt(contractName, address, signer): Promise<Contract>`

Creates a Contract instance with a contract name, contract address and signer.

Note that the contract must have been compiled successfully. You can find the metadata file for it in artifacts.

## ContractFactory

The ContractFactory is mainly used for contract deployment.

```typescript
import { patract } from 'redspot';
const { getContractFactory, getRandomSigner } = patract;

const signers = await getSigners();
const contractFactory = await getContractFactory('erc20', signers[0]);
const contract = await contractFactory.deploy('new', '1000');
```

### `new ContractFactory(address, contractMetadata, api, signer)`

Create a contractFactory instance with contract address, metadata, api and signer.

### `contractFactory.deploy(constructorOrId, . . args[ , overrides ]): Promise<Contract>`

constructorOrId is the name of the contructor of the contract to be called. Note that for some contracts that use `trait`, the name of the contructor should be something like this.

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

### `contractFactory.deployed(constructorOrId, . .args[ , overrides ]): Promise<Contract>`

This method is similar to `contractFactory.deploy`, the only difference is that `deployed` checks in advance if the contract address to be generated exists, and if it does, does not try to deploy it, but instead creates a `Contract` instance directly using that contract address.

### `contractFactory.instantiate(constructorOrId, . .args[ , overrides ]): Promise<ContractAddress>`

If wasm has been uploaded to the chain, you can call `contractFactory.instantiate` directly to instantiate the contract. It takes the same arguments as `deploy`, but returns the contract address.

### `contractFactory.instantiate(constructorOrId, . .args[ , overrides ]): Promise<ContractAddress>`

If wasm has been uploaded to the chain, you can call `contractFactory.instantiate` directly to instantiate the contract. It takes the same arguments as `deploy`, but returns the contract address.

### `contractFactory.attach(address):Contract`

Generates a `Contract` instance using the specified contract address

### `contractFactory.connect(signer): ContractFactory`

Create a new contractFactory instance with the specified signer

## Contract

### `new Contract(address, contractMetadata, api, signer)`

Creates a contractFactory instance with the contract address, contractMetadata, api and signer.

### `contract.query.MessageName(. .args[, overrides])`

Similar to in polkadotjs, contract.query[MessageName] can call `contracts.call` rpc. For example, in the erc20 contract, to get the account balance.

```typescript
const result = await contract.query.balanceOf(someaddress);
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

### `contract.estimateGas.MessageName(.. . args[, overrides])`

This function is similar to `contract.query.MessageName`, but the return value is the estimated gas to be consumed

```typescript
const result = await contract.estimateGas.balanceOf(someaddress);
result; // BN(232130000000)
```

### `contract.tx.MessageName(. .args[,overrides])`

With `contract.tx.MessageName` you can execute the contract's transactions. For example.

```typescript
const result = await contract.tx.transfer(someddress, 7);
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

### `contract.attach(address): Contract`

Generates a `Contract` instance using the specified contract address

### `contract.connect(signer): contractFactory`

Create a new contract instance with the specified signer
