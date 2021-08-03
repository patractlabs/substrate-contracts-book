# 插件

## 背景信息

Redspot的核心功能包括Redspot runtime environment、编译合约、运行测试和运行脚本。其他功能，例如与合约的测试套件、合约交互、访问合约、设置不同的链的配置等，都由插件提供，您可以按需选择。引入一个插件的方式很简单，将它作为一个npm的依赖添加，然后在`redspot.config.ts`中加入即可。示例如下。

```typescript
import { RedspotUserConfig } from 'redspot/types';
import '@redspot/patract'; // 引入 @redspot/patract 插件
import '@redspot/chai'; // 引入 @redspot/chai 插件
export default {
 ...
} as RedspotUserConfig;
```

现在提供的有以下这些插件：

* [@redspot/chai](https://docs.patract.io/redspot/plugin/redspot-chai.html)
* [@redspot/decimals](https://docs.patract.io/redspot/plugin/redspot-decimals.html)
* [@redspot/explorer](https://docs.patract.io/redspot/plugin/redspot-explorer.html)
* [@redspot/gas-reporter](https://docs.patract.io/redspot/plugin/redspot-gas-reporter.html)
* [@redspot/known-types](https://docs.patract.io/redspot/plugin/redspot-known-types.html)
* [@redspot/patract](https://docs.patract.io/redspot/plugin/redspot-patract.html)



