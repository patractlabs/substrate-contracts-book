# 插件



Redspot 的核心功能包括 Redspot runtime environment 和编译合约，运行测试，运行脚本这几个任务。

其他诸如与合约的测试套件，合约交互，访问合约，设置不同的链的配置，等功能均有插件提供。用户可以自行选择需要使用的插件。引入一个插件很简单。将它作为一个 npm 的依赖添加。然后在 `redspot.config.ts` 中加入：

```typescript
import { RedspotUserConfig } from 'redspot/types';
import '@redspot/patract'; // 引入 @redspot/patract 插件
import '@redspot/chai'; // 引入 @redspot/chai 插件

export default {
 ...
} as RedspotUserConfig;
```

下面我们介绍一下官方提供的几个插件：

## @redspot/patract

该插件会扩展 Redspot runtime environment ，并添加 patract 属性，可以这样访问 patract 实例：

```typescript
import { patract } from 'redspot' 
```

patract 的类型定义如下：

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
  
  };
```



#### `getRandomSigner(from, amount): Promise<Signer>`

getRandomSigner 是一个工具函数，用于创建生成随机的signer，并且从 from 传递一些初始的金额给它。



#### `getContractFactory(contractName, signer?):  Promise<ContractFactory>`

该函数将通过合约名字和 signer ，创建一个 contractFactory 的实例。

注意合约必须已编译成功。能够在 artifacts 找到对于的 metadata 文件。



#### `getContractAt(contractName, address, signer): Promise<Contract>`

通过合约名字，合约地址和 signer，创建一个 Contract 实例。

注意合约必须已编译成功。能够在 artifacts 找到对于的 metadata 文件。





###ContractFactory

ContractFactory 主要用于合约的部署：

```typescript
import { patract } from 'redspot'
const { getContractFactory, getRandomSigner } = patract;

const signers = await getSigners();
const contractFactory = await getContractFactory('erc20', signers[0]);
const contract = await contractFactory.deploy('new', '1000');
```

#### `new ContractFactory(address, contractMetadata, api, signer) `

 通过合约地址，metadata，api  和  signer 创建一个 contractFactory  实例。



#### `contractFactory.deploy(constructorOrId, ...args[ , overrides ]):  Promise<Contract>`

constructorOrId 是需要调用的合约的 contructor 的名字，注意对于一些使用了 `trait` 的合约，contructor  的名字应该是类似这样：

```typescript
const contract = await contractFactory.deploy('baseErc20,new', '1000');
```

args 是你所使用的 contructor 需要传入参数列表。

overrides 是可选项，可以用于指定 gasLimit, value, signer, salt 等。

```typescript
const contract = await contractFactory.deploy('baseErc20,new', '1000', {
  gaslimit: '1000000000000000000',
  salt: 'jkqwezlkwklqreqw',
  signer: signers[1],
  value: '3213321000000000000000000'
});
```

gasLimit 指这次交易能够使用的最大的 gas 值。

salt 用于合约的地址的生成。部署人，部署参数和 salt 一致的话，将会生成同一个合约地址。

signer 创建 contractFactory 时，会有一个 signer 参数，用于默认的交易签名。 signer 项目可以覆盖默认的签名账户。

value 指传递给即将创建的合约的金额。



请注意，`@redspot/patract` 不会处理数字金额精度，需要用户自行处理。



#### `contractFactory.deployed(constructorOrId, ...args[ , overrides ]):  Promise<Contract>`

该方法和 `contractFactory.deploy` 类似，唯一的区别是，`deployed` 会预先检查即将生成的合约地址是否存在，如果存在不会去尝试部署，而是直接使用该合约地址创建 `Contract` 实例。



#### `contractFactory.instantiate(constructorOrId, ...args[ , overrides ]):  Promise<ContractAddress>`

 如果 wasm 已上传到链上，你可以直接调用 `contractFactory.instantiate` 实例化合约。它的参数与 `deploy` 一致，但返回的是合约地址。



#### `contractFactory.instantiate(constructorOrId, ...args[ , overrides ]):  Promise<ContractAddress>`

 如果 wasm 已上传到链上，你可以直接调用 `contractFactory.instantiate` 实例化合约。它的参数与 `deploy` 一致，但返回的是合约地址。



#### `contractFactory.attach(address)：Contract`

使用指定的合约地址生成 `Contract` 实例



####`contractFactory.connect(signer)：contractFactory`

使用指定的 signer，创建一个新的 contractFactory 实例



### Contract

#### `new Contract(address, contractMetadata, api, signer) `

 通过合约地址，合约的metadata，api  和  signer 创建一个 contractFactory  实例。



#### `contract.query.MessageName(...args[, overrides])`

与 polkadotjs 中类似， contract.query[MessageName] 能够调用 `contracts.call` rpc。如在 erc20 合约中，获取账户余额：

```typescript
const result = await contract.query.balanceOf(someaddress)
```

返回值的类型如下：

```typescript
export interface ContractCallOutcome {
    debugMessage: Text;
    gasConsumed: u64;
    output: Codec | null;
    result: ContractExecResultResult;
}
```

它和 polkadotjs api-contract 中是一致。

overrides 是可选项，可以用于指定 gasLimit, value 等。

```typescript
const contract = await contract.query.balanceOf('baseErc20,new', '1000', {
	gasLimit：'1231231231233123123'
  value: '3213321000000000000000000'
  signer： signers[1]
});
```

gasLimit value 指的是 `contracts.call` rpc 中的 gasLimit 和 value 。signer 可以指定 `contracts.call` 的 origin 地址。



#### `contract.estimateGas.MessageName(...args[, overrides])`

该函数与 `contract.query.MessageName` 类似，但返回值是预估将要消耗的 gas

```typescript
const result = await contract.estimateGas.balanceOf(someaddress)
result // BN(232130000000)
```



#### `contract.tx.MessageName(...args[,overrides])`

通过  `contract.tx.MessageName` 可以执行合约的交易。 如：

```typescript
const result = await contract.tx.transfer(someddress, 7)
```

和 polkadotjs 不同，该函数会返回一个 promise ， 会等到 交易上链，或者出错才被 resolved。

返回值类型如下：

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

你可以直接通过 `result.events` 获取已解析的合约的事件。如果执行出错，你可以通过 `result.error.message` 获取错误信息。

overrides 是可选项，可以用于指定 gasLimit，value，signer  等。

```typescript
const contract = await contract.tx.transfer(someddress, 7, {
  gasLimit：'1231231231233123123'
  value: '3213321000000000000000000'
  signer： signers[1]
});
```

ggasLimit 指这次交易能够使用的最大的 gas 值。

value 指传递给即将创建的合约的金额。

signer 用于覆盖默认的 signer。



#### `contract.attach(address)：Contract`

使用指定的合约地址生成 `Contract` 实例



####`contract.connect(signer)：contractFactory`

使用指定的 signer，创建一个新的 contract 实例





## @redspot/chai

该插件提供了一组便于编写合约测试用例的匹配器，灵感来自于 [waffle](https://ethereum-waffle.readthedocs.io/en/latest/matchers.html) 。

引入 @redspot/chai。该插件会自动修改 chai 匹配器，无需手动调用。

```
// redspot.config.ts

import { RedspotUserConfig } from 'redspot/types';
import '@redspot/chai'; 

export default {
 ...
} as RedspotUserConfig;
```

使用 @redspot/chai 的完整例子：

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



chai 还有更多的内置的用法，参见 chai 文档： https://www.chaijs.com/。



### equal

@redspot/chai 会修改默认的 equal 的匹配方式。默认的 equal 不支持匹配对象。但 @redspot/chai 可以：

```typescript
expect(new BN(1000)).to.equal(1000) // true
expect(AccountId).to.equal('5Gdjkw....') // true
expect(Uint8Array([1,2,3])).to.equal('0x010203') // true
```

对于 BN 类型，equal 对调用 `new BN(expected).eq(actual)` 判断是否相等

对于 polkadotjs 中定义的类型，equal 会调用 `Type.eq(actual)` 判断是否相等

对于 uint8Array 类型，equal 会将他们都转化为 hex ，再比较是否相等

其他类型则采用默认的判断方式，判断是否相等



### changeTokenBalance

该匹配器可以检测 erc20 的余额变化，内部会调用 balanceOf 接口判断余额。由于 erc20-trait 的获取余额接口是 `baseErc20,balanceOf` 

所以并不适用于 erc20-trait 。

```typescript
await expect(() =>
  contract.tx.transfer(receiver.address, 7)
).to.changeTokenBalance(contract, receiver, 7);

await expect(() =>
  contract.tx.transfer(receiver.address, 7)
).to.changeTokenBalances(contract, [contract.signer, receiver], [-7, 7]);
```



### emit

该匹配器可以检测合约是否发出事件，如检测是否有 Transfer 事件被 emit：

```typescript
await expect(contract.tx.transfer(receiver.address, 7))
    .to.emit(contract, 'Transfer')
```

检测该事件是否包含指定的参数：

```typescript
await expect(contract.tx.transfer(receiver.address, 7))
    .to.emit(contract, 'Transfer')
    .withArgs(sender.address, receiver.address, 7);
```

不期待发出事件

```typescript
await expect(
  contract.tx.transfer(sender.address, 7, {
    signer: emptyAccount
  })
).to.not.emit(contract, 'Transfer');

```



## @redspot/gas-reporter

该插件会在测试完成时，打印出所调用的合约的交易的 gas 使用量：

![](https://user-images.githubusercontent.com/7029338/101343840-7700ab00-38e9-11eb-80a0-c6b6d38a9640.png)

和 @redspot/chai 一样，只需要在引入 @redspot/gas-reporter 后，在 redspot.config.ts 中加入：

```
// redspot.config.ts

import { RedspotUserConfig } from 'redspot/types';
import '@redspot/gas-reporter'; 

export default {
 ...
} as RedspotUserConfig;
```

即可自动运行。



