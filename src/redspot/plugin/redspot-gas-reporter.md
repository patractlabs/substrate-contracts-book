# @redspot/gas-reporter

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
