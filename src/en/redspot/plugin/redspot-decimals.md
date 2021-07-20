# @redspot_decimals plug-in

## Background Information

@redspot/decimals is a plug-in that can automatically convert number precision, for example, it can convert 1 DOT to 10000000000.

## Realize the function

Fixed decimal

* `1 DOT`=>`10 ** 10`
* `1 KSM`=>`10 ** 12`

Obtain the tokenDecimal of the chain automatically

* `1 UNIT`=>`10 ** tokenDecimal`
## How to use the plug-in?

1. Use the following command to install the plug-in.
    ```bash
    yarn add @redspot/decimals
    ```

2. Import the plug-in in redspot.config.ts, and then you can use the plug-in.
    ```typescript
    import '@redspot/decimals'
    ```

## Example of use

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



