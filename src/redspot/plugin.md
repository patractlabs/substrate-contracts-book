# 插件

Redspot 的核心功能包括 Redspot runtime environment 和编译合约，运行测试，运行脚本这几个任务。

其他诸如与合约的测试套件，合约交互，访问合约，设置不同的链的配置，等功能均有插件提供。用户可以自行选择需要使用的插件。引入一个插件很简单。将它作为一个 npm 的依赖添加。然后在 `redspot.config.ts` 中加入：

```typescript
import { RedspotUserConfig } from 'redspot/types';
import '@redspot/patract'; // 引入 @redspot/patract 插件
import '@redspot/chai'; // 引入 @redspot/chai 插件

export default {
 ...
} as RedspotUserConfig;
```

我们现在有以下这些插件：

- [@redspot/chai](./plugin/redspot-chai.md)
- [@redspot/decimals](./plugin/redspot-decimals.md)
- [@redspot/explorer](./plugin/redspot-explorer.md)
- [@redspot/gas-reporter](./plugin/redspot-gas-reporter.md)
- [@redspot/known-types](./plugin/redspot-known-types.md)
- [@redspot/patract](./plugin/redspot-patract.md)
