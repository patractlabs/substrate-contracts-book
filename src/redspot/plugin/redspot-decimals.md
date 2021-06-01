# @redspot/decimals

`@redspot/decimals` 是一个自动转换数字精度的插件，例如将 `1 DOT` 转换为 `10000000000`。

目前，此插件实现的功能有以下几种。

固定的 decimal

- `1 DOT` => `10 ** 10`
- `1 KSM` => `10 ** 12`

自动获取链的 `tokenDecimal`

- `1 UNIT` => `10 ** tokenDecimal` 


安装:

```shell
yarn add @redspot/decimals
```

添加下面的代码到 `redspot.config.ts`:

```typescript
import '@redspot/decimals'
```

在部署合约的时候使用:

```typescript
const contract = await contractFactory.deployed('new', '10000', {
  gasLimit: '400000000000',
  value: '10000 UNIT'
});
```

在转账中使用:

```typescript
import { network } from 'redspot';

const { api } = network;

async function run() {
  await api.isReady;

  api.tx.balances.transfer(address, '1 UNIT')
}
```
