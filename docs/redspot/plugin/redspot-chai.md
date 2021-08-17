# @redspot_chai  plug-in

## What

The plug-in provides a set of matchers that are easy to write contract test cases, and the design is inspired by [waffle](https://ethereum-waffle.readthedocs.io/en/latest/matchers.html).

## Installation
```bash
$ yarn add @redspot/chai
```
Add this to your `redspot.config.ts`:
```typescript
import '@redspot/chai'
```
## Usages:

### `equal`

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

### `changeTokenBalance`

The matcher can detect changes in the balance of erc20, and internally calls the balanceOf interface to determine the balance. Since the interface for obtaining balance of erc20-trait is `baseErc20, balanceOf`,`changeTokenBalance` is not applicable to erc20-trait.

```typescript
await expect(() =>
  contract.tx.transfer(receiver.address, 7)
).to.changeTokenBalance(contract, receiver, 7);
await expect(() =>
  contract.tx.transfer(receiver.address, 7)
).to.changeTokenBalances(contract, [contract.signer, receiver], [-7, 7]);
```

### `emit`

The matcher can detect whether the contract emits an event. Here is an example:

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

