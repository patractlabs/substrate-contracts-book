# @redspot_patract plug-in

## What

@redspot/patract is similar to @polkadot/contract, used to access contracts, send transactions, etc but designed to be easier to use. The plug-in will extend the Redspot runtime environment and add the patract attributes, so you can access the patract instance in runtime environment.


## Installation
```
$ yarn add @redspot/patract
```
Add this to your `redspot.config.ts`:
```typescript
import { patract } from 'redspot';
```

## Type definitions

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
   *  Generate a random account and transfer token to it
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

Here is the description of each parameter:

| Parameter                                                    | Description                                                  |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| `getRandomSigner(from, amount): Promise<Signer>`               | getRandomSigner is a utility function used to create a random signer and pass some initial amount fromfromto it. |
| `getContractFactory(contractName, signer?): Promise<ContractFactory>` | This function will create an instance of contractFactory through the contract name and signer.The contract must be compiled successfully, and the metadata file can be found in artifacts. |
| `getContractAt(contractName, address, signer): Promise<Contract>` | Create a Contract instance through the contract name, contract address, and signer.The contract must be compiled successfully, and the metadata file can be found in artifacts. |

## Usages
### ContractFactory

ContractFactory is mainly used for contract deployment.

```typescript
import { patract } from 'redspot';
const { getContractFactory, getRandomSigner } = patract;
const signers = await getSigners();
const contractFactory = await getContractFactory('erc20', signers[0]);
const contract = await contractFactory.deploy('new', '1000');
```

* `new ContractFactory(address, contractMetadata, api, signer)`：you can create a contractFactory instance by contract address, metadata, API and signer.
* `contractFactory.deploy(constructorOrId, ...args[ , overrides ]): Promise<Contract>`：constructorOrId is the name of the constructor of the contract that needs to be called. Note that for some contracts that use traits, the name of the constructor is similar to the following.
```typescript
const contract = await contractFactory.deploy('baseErc20,new', '1000');
```

args is the list of parameters that the contructor you use needs to pass in.

Overrides are optional and can be used to specify gasLimit, value, signer, salt, etc.

```typescript
const contract = await contractFactory.deploy('baseErc20,new', '1000', {
  gaslimit: '1000000000000000000',
  salt: 'jkqwezlkwklqreqw',
  signer: signers[1],
  value: '3213321000000000000000000'
});
```

gasLimit refers to the maximum gas value that can be used in this transaction.

The salt is used to generate the address of the contract. If the deployer, deployment parameters and salt are the same, the same contract address will be generated.

When the signer creates a contractFactory, there will be a signer parameter, which is used for the default transaction signature. The signer project can override the default signing account.

value refers to the amount passed to the contract to be created.

**Note** The @redspot/patract plugin will not handle the accuracy of the digital amount, you need to handle it yourself.

* `contractFactory.deployed(constructorOrId, ...args[ , overrides ]): Promise<Contract>`：This method is similar to contractFactory.deploy, the only difference is that deployed will check in advance whether the address of the contract to be generated exists, if it exists, then Will not try to deploy, but directly use the contract address to create a Contract instance.
* `contractFactory.instantiate(constructorOrId, ...args[ , overrides ]): Promise<ContractAddress>`：If Wasm has been uploaded to the chain, you can directly call`contractFactory.instantiate`to instantiate the contract. Its parameters are the same as deploy, but it returns the contract address.
* `contractFactory.instantiate(constructorOrId, ...args[ , overrides ]): Promise<ContractAddress>`：If Wasm has been uploaded to the chain, you can directly call`contractFactory.instantiate`to instantiate the contract. Its parameters are the same as deploy, but it returns the contract address.
* `contractFactory.attach(address)：Contract`:Use the specified contract address to generate Contract instances.
* `contractFactory.connect(signer)：contractFactory`：use the specified signer to create a new contractFactory instance.

### Contract

* `new Contract(address, contractMetadata, api, signer)`：Create a contractFactory instance through the contract address, contract metadata, API and signer.
* `contract.query.MessageName(...args[, overrides])`：Similar to Polkadot.js, contract.query[MessageName] can call contracts.callrpc. For example, in the erc20 contract, the account balance is obtained.
```typescript
const result = await contract.query.balanceOf(someaddress);
```

The type of return value is as follows.

```typescript
export interface ContractCallOutcome {
  debugMessage: Text;
  gasConsumed: u64;
  output: Codec | null;
  result: ContractExecResultResult;
}
```

It is consistent with Polkadot.js api-contract. Overrides are optional and can be used to specify gasLimit, value, etc.

```typescript
const contract = await contract.query.balanceOf('baseErc20,new', '1000', {
        gasLimit：'1231231231233123123'
  value: '3213321000000000000000000'
  signer： signers[1]
});
```

The gasLimit value refers to the gasLimit and value in contracts.call RPC. The signer can specify the origin address of contracts.call.

* `contract.estimateGas.MessageName(...args[, overrides])`：This function is similar to`contract.query.MessageName`, but the return value is the estimated gas that will be consumed.
```typescript
const result = await contract.estimateGas.balanceOf(someaddress);
result; // BN(232130000000)
```

* `contract.tx.MessageName(...args[,overrides])`：Contract transactions can be executed through`contract.tx.MessageName`, the example is as follows.
```typescript
const result = await contract.tx.transfer(someddress, 7);
```

Unlike Polkadot.js, this function returns a promise. The resolve of the promise will not be called until the transaction is on the chain or the transaction execution error occurs.

The return value types are:

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

You can get the parsed contract events directly through`result.events`. If there is an error in execution, you can get the error message through`result.error.message`.

Overrides are optional and can be used to specify gasLimit, value, signer, etc.

```typescript
const contract = await contract.tx.transfer(someddress, 7, {
  gasLimit：'1231231231233123123'
  value: '3213321000000000000000000'
  signer： signers[1]
});
```

| Parameter | Description                                                |
|:----|:----|
|gasLimit|The maximum gas value that can be used in this transaction|
|value|Amount passed to the contract to be created|
|signer|Used to override the default signer|


* `contract.attach(address)：Contract`：Use the specified contract address to generate a Contract instance.
* `contract.connect(signer)：Contract`：Use the specified signer to create a new Contract instance.
