# @redspot/chai

This plugin provides a set of Matcher used for building contract test cases. The inspiration is from [waffle](https://ethereum-waffle.readthedocs.io/en/latest/matchers.html).

Importing @redspot/chai plugin will automatically change the chai matcher without manual call.

```typescript
// redspot.config.ts

import { RedspotUserConfig } from 'redspot/types';
import '@redspot/chai';

export default {
 ...
} as RedspotUserConfig;
```

The full example of @redspot/chai:

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

chai has more other using ways, please check them in it's documentation: https://www.chaijs.com/.

## equal

@redspot/chai will change the default **equal** matching approach. Default `equal` is not able to match object, but @redspot/chai can.

```typescript
expect(new BN(1000)).to.equal(1000); // true
expect(AccountId).to.equal('5Gdjkw....'); // true
expect(Uint8Array([1, 2, 3])).to.equal('0x010203'); // true
```

For `BN`, **equal** judges the equality like this: `new BN(expected).eq(actual)`.

For the types in **Polkadotjs**, **equal** can judge the equality like this: `Type.eq(actual)`.

For `uint8Array` variables, **equal** will convert them into `hex` before comparasion.

For the other types, **equal** employs default equality comparasion.

## changeTokenBalance

This matcher can detect the balance updates on **erc20**, it invokes **balanceOf** interface to get the balance internally. 
Please heads up, due to the fact that getting balance interface in **erc20-trait** is `baseErc20,balanceOf`, `changeTokenBalance` is not suit for **erc20-trait**.

```typescript
await expect(() =>
  contract.tx.transfer(receiver.address, 7)
).to.changeTokenBalance(contract, receiver, 7);

await expect(() =>
  contract.tx.transfer(receiver.address, 7)
).to.changeTokenBalances(contract, [contract.signer, receiver], [-7, 7]);
```

## emit

This matcher is used for judging whether contract has emitted some events, for example checking if `Transfer` event has been emitted.

```typescript
await expect(contract.tx.transfer(receiver.address, 7)).to.emit(
  contract,
  'Transfer'
);
```

Check if the event contains the specified parameters:

```typescript
await expect(contract.tx.transfer(receiver.address, 7))
  .to.emit(contract, 'Transfer')
  .withArgs(sender.address, receiver.address, 7);
```

No expection for event:

```typescript
await expect(
  contract.tx.transfer(sender.address, 7, {
    signer: emptyAccount
  })
).to.not.emit(contract, 'Transfer');
```
