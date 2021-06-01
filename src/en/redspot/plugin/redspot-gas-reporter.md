# @redspot/gas-reporter

The plugin prints out the gas usage of the transaction for the called contract when the test is completed.

![](https://user-images.githubusercontent.com/7029338/101343840-7700ab00-38e9-11eb-80a0-c6b6d38a9640.png)

Similar as @redspot/chai, just add the following statement to import the plugin, then it will run automatically.

```typescript
// redspot.config.ts

import { RedspotUserConfig } from 'redspot/types';
import '@redspot/gas-reporter';

export default {
 ...
} as RedspotUserConfig;
```
