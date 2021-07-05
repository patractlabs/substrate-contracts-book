# @redspot_gas-reporter 插件

## 背景信息

该插件会在测试完成时，打印出所调用的合约的交易的gas使用量。

![](https://user-images.githubusercontent.com/7029338/101343840-7700ab00-38e9-11eb-80a0-c6b6d38a9640.png)


## 如何使用插件？

1. 导入@redspot/gas-reporter 插件。
2. 在`redspot.config.ts`中加入此插件，即可自动运行。
```plain
// redspot.config.ts
import { RedspotUserConfig } from 'redspot/types';
import '@redspot/gas-reporter';
export default {
 ...
} as RedspotUserConfig;
```





