# @redspot_chai  plug-in

## Background Information

The plug-in provides a set of matchers that are easy to write contract test cases, and the design is inspired by [waffle](https://ethereum-waffle.readthedocs.io/en/latest/matchers.html).

## Prerequisites for use

Before using，please import @redspot/chai plugin. The plug-in will automatically modify the chai matcher, so you don't need to call it manually.

```plain
// redspot.config.ts
import { RedspotUserConfig } from 'redspot/types';
import '@redspot/chai';
export default {
 ...
} as RedspotUserConfig;
```

## Example of usage

A complete example of using the @redspot/chai plug-in is as follows.

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

For more built-in usages of this plugin, please refer to the [chai](https://www.chaijs.com/) documentation for details.

## equal

The @redspot/chai plug-in will modify the default equal matching method. The default equal does not support matching objects，but @redspot/chai plugin can.

```typescript
expect(new BN(1000)).to.equal(1000); // true
expect(AccountId).to.equal('5Gdjkw....'); // true
expect(Uint8Array([1, 2, 3])).to.equal('0x010203'); // true
```

* For the BN type, equal will call `new BN(expected).eq(actual)` and judge whether it is equal.
* For the types defined in Polkadot.js, equal will call `Type.eq(actual)` and judge whether they are equal.
* For uint8Array type, equal will convert them to hexadecimal, and then judge whether they are equal.
* For other types, the default judgment method is used to judge whether they are equal.
## **changeTokenBalance**

The matcher can detect changes in the balance of erc20, and internally calls the balanceOf interface to determine the balance. Since the interface for obtaining balance of erc20-trait is `baseErc20, balanceOf`,`changeTokenBalance` is not applicable to erc20-trait.

```typescript
await expect(() =>
  contract.tx.transfer(receiver.address, 7)
).to.changeTokenBalance(contract, receiver, 7);
await expect(() =>
  contract.tx.transfer(receiver.address, 7)
).to.changeTokenBalances(contract, [contract.signer, receiver], [-7, 7]);
```

## **emit**

The matcher can detect whether the contract emits an event. An example of its use is as follows.

* Detect whether a Transfer event is emitted
    ```typescript
    await expect(contract.tx.transfer(receiver.address, 7)).to.emit(
      contract,
      'Transfer'
    );
    ```

* Detect whether the event contains the specified parameters
    ```typescript
    await expect(contract.tx.transfer(receiver.address, 7))
      .to.emit(contract, 'Transfer')
      .withArgs(sender.address, receiver.address, 7);
    ```

* Don't expect to emit events
    ```typescript
    await expect(
      contract.tx.transfer(sender.address, 7, {
        signer: emptyAccount
      })
    ).to.not.emit(contract, 'Transfer');
    ```

