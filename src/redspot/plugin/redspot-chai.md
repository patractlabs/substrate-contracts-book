# @redspot/chai

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



## equal

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



## changeTokenBalance

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



## emit

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

