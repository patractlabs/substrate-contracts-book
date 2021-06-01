# @redspot/decimals

`@redspot/decimals` is an automatic digital accuray conversion plugin，for example converting `1 DOT` to `10000000000`.

At the moment, the plugin implements the following functions.

Fixed decimal.

- `1 DOT` => `10 ** 10`
- `1 KSM` => `10 ** 12`

Automatic chain `tokenDecimal` acquisition.

- `1 UNIT` => `10 ** tokenDecimal` 


Install:

```shell
yarn add @redspot/decimals
```

And add the following statement to your `redspot.config.ts`:

```shell
import '@redspot/decimals'
```

Usage when deploying contracts:

```typescript
const contract = await contractFactory.deployed('new', '10000', {
  gasLimit: '400000000000',
  value: '10000 UNIT'
});
```

Usage in transfers:

```typescript
import { network } from 'redspot';

const { api } = network;

async function run() {
  await api.isReady;

  api.tx.balances.transfer(address, '1 UNIT')
}
```
