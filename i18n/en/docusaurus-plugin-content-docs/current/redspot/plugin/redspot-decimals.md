# @redspot_decimals plug-in

## What

@redspot/decimals is a plug-in that can automatically convert number precision, for example, it can convert 1 DOT to 10000000000.

Fixed decimal

* `1 DOT`=>`10 ** 10`
* `1 KSM`=>`10 ** 12`

Obtain the tokenDecimal of the chain automatically

* `1 UNIT`=>`10 ** tokenDecimal`

## Installation
```bash
$ yarn add @redspot/decimals
```
Add this to your `redspot.config.ts`:
```typescript
import '@redspot/decimals'
```

## Usages

* Used when deploying contracts
    ```typescript
    const contract = await contractFactory.deployed('new', '10000', {
      gasLimit: '400000000000',
      value: '10000 UNIT'
    });
    ```

* Use in transfer
    ```typescript
    import { network } from 'redspot';
    const { api } = network;
    async function run() {
      await api.isReady;
      api.tx.balances.transfer(address, '1 UNIT')
    }
    ```



