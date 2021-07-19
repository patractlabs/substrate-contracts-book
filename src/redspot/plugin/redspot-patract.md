# @redspot_patract插件

## 背景信息

@redspot/patract和@polkadot/contract类似，用于访问合约、发送交易等。但@redspot/patract 的 API更易于使用。该插件会扩展Redspot runtime environment ，并添加patract属性，您可以这样访问 patract实例。

```typescript
import { patract } from 'redspot';
```
## patract的类型定义

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

参数说明如下。

| 参数                                                         | 说明                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| getRandomSigner(from, amount): Promise<Signer>               | getRandomSigner是一个工具函数，用于创建生成随机的signer，并从 from传递一些初始的金额给它。 |
| getContractFactory(contractName, signer?): Promise<ContractFactory> | 该函数将通过合约名和signer ，创建一个contractFactory 的实例。合约必须已编译成功，且能够在artifacts找到对于的metadata文件。 |
| getContractAt(contractName, address, signer): Promise<Contract> | 通过合约名、合约地址和 signer，创建一个Contract实例。合约必须已编译成功，且能够在artifacts找到对于的metadata文件。 |

## **ContractFactory**

ContractFactory 主要用于合约的部署。

```typescript
import { patract } from 'redspot';
const { getContractFactory, getRandomSigner } = patract;
const signers = await getSigners();
const contractFactory = await getContractFactory('erc20', signers[0]);
const contract = await contractFactory.deploy('new', '1000');
```

* `new ContractFactory(address, contractMetadata, api, signer)`：通过合约地址、metadata、API 和signer创建一个contractFactory 实例。
* contractFactory.deploy(constructorOrId, ...args[ , overrides ]): Promise<Contract>：constructorOrId 是需要调用的合约的contructor的名字，注意对于一些使用了`trait`的合约，contructor的名字类似如下。
```typescript
const contract = await contractFactory.deploy('baseErc20,new', '1000');
```

args是您所使用的contructor需要传入参数列表。

overrides是可选项，可以用于指定gasLimit、value、signer、salt等。

```typescript
const contract = await contractFactory.deploy('baseErc20,new', '1000', {
  gaslimit: '1000000000000000000',
  salt: 'jkqwezlkwklqreqw',
  signer: signers[1],
  value: '3213321000000000000000000'
});
```

gasLimit指这次交易能够使用的最大的gas值。

salt用于合约的地址的生成。部署人、部署参数和salt一致的话，将会生成同一个合约地址。

signer创建contractFactory时，会有一个signer参数，用于默认的交易签名。 signer项目可以覆盖默认的签名账户。

value指传递给即将创建的合约的金额。

**注意** `@redspot/patract`插件不会处理数字金额精度，需要您自行处理。

* `contractFactory.deployed(constructorOrId, ...args[ , overrides ]): Promise<Contract>`：该方法和`contractFactory.deploy`类似，唯一的区别是`deployed`会预先检查即将生成的合约地址是否存在，如果存在，那么不会去尝试部署，而是直接使用该合约地址创建Contract实例。
* `contractFactory.instantiate(constructorOrId, ...args[ , overrides ]): Promise<ContractAddress>`：如果Wasm已上传到链上，您可以直接调用`contractFactory.instantiate`实例化合约。它的参数与`deploy`一致，但返回的是合约地址。
* `contractFactory.instantiate(constructorOrId, ...args[ , overrides ]): Promise<ContractAddress>`：如果Wasm已上传到链上，您可以直接调用`contractFactory.instantiate`实例化合约。它的参数与`deploy`一致，但返回的是合约地址。
* `contractFactory.attach(address)：Contract`:使用指定的合约地址生成`Contract`实例。
* `contractFactory.connect(signer)：contractFactory`：使用指定的signer，创建一个新的contractFactory 实例。
## **Contract**

* `new Contract(address, contractMetadata, api, signer)`：通过合约地址、合约的 metadata、API和signer创建一个contractFactory实例。
* `contract.query.MessageName(...args[, overrides])`：与Polkadot.js中类似， contract.query[MessageName] 能够调用`contracts.call`rpc。例如在erc20合约中，获取账户余额。
```typescript
const result = await contract.query.balanceOf(someaddress);
```

返回值的类型如下。

```typescript
export interface ContractCallOutcome {
  debugMessage: Text;
  gasConsumed: u64;
  output: Codec | null;
  result: ContractExecResultResult;
}
```

它和Polkadot.js api-contract中是一致。overrides是可选项，可以用于指定gasLimit、value 等。

```typescript
const contract = await contract.query.balanceOf('baseErc20,new', '1000', {
        gasLimit：'1231231231233123123'
  value: '3213321000000000000000000'
  signer： signers[1]
});
```

gasLimit value指的是`contracts.call`RPC 中的gasLimit和value 。signer可以指定`contracts.call`的origin地址。

* `contract.estimateGas.MessageName(...args[, overrides])`：该函数与`contract.query.MessageName`类似，但返回值是预估将要消耗的gas。
    ```typescript
    const result = await contract.estimateGas.balanceOf(someaddress);
    result; // BN(232130000000)
    ```

* `contract.tx.MessageName(...args[,overrides])`：通过`contract.tx.MessageName`可以执行合约的交易，示例如下。
    ```typescript
    const result = await contract.tx.transfer(someddress, 7);
    ```

和Polkadot.js不同，该函数会返回一个promise 。等到交易上链，或交易执行出错后该promise的resolve才会被调用。

返回值类型如下。

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

您可以直接通过`result.events`获取已解析的合约的事件。如果执行出错，您可以通过`result.error.message`获取错误信息。

overrides是可选项，可以用于指定gasLimit、value、signer 等。

```typescript
const contract = await contract.tx.transfer(someddress, 7, {
  gasLimit：'1231231231233123123'
  value: '3213321000000000000000000'
  signer： signers[1]
});
```

| 参数     | 说明                          |
|:----|:----|
|gasLimit|这次交易能够使用的最大的gas值|
|value|传递给即将创建的合约的金额|
|signer|用于覆盖默认的signer|


* `contract.attach(address)：Contract`：使用指定的合约地址生成Contract实例。
* `contract.connect(signer)：Contract`：使用指定的signer，创建一个新的Contract 实例

