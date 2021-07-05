# @redspot_decimals插件

## 背景信息

`@redspot/decimals`是一个可以自动转换数字精度的插件，例如可以将`1 DOT`转换为`10000000000`。

实现功能

固定的 decimal

* `1 DOT`=>`10 ** 10`
* `1 KSM`=>`10 ** 12`

自动获取链的`tokenDecimal`

* `1 UNIT`=>`10 ** tokenDecimal`

如何使用插件？

1. 使用以下命令安装插件。
```shell
yarn add @redspot/decimals
```

2. 在`redspot.config.ts`中导入插件，然后就可以使用该插件了。
```plain
import '@redspot/decimals'
```

使用示例

* 在部署合约的时候使用
```typescript
const contract = await contractFactory.deployed('new', '10000', {
  gasLimit: '400000000000',
  value: '10000 UNIT'
});
```

* 在转账中使用
```typescript
import { network } from 'redspot';
const { api } = network;
async function run() {
  await api.isReady;
  api.tx.balances.transfer(address, '1 UNIT')
}
```



