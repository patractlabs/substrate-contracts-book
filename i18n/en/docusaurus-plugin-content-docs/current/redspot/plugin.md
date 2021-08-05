# Plug-in

## Background Information

The core functions of Redspot include Redspot runtime environment, compiling contracts, running tests and running scripts. Other functions, such as the test suite with the contract, contract interaction, access to the contract, and configuration of different chains, are all provided by the plug-in, and you can choose the plug-ins according to your needs. The way to introduce a plug-in is very simple, add it as a dependency of npm, and then add it in `redspot.config.ts`. The example is as follows.

```typescript
import { RedspotUserConfig } from 'redspot/types';
import '@redspot/patract'; // introduce the @redspot/patract plugin
import '@redspot/chai'; // import @redspot/chai plugin
export default {
 ...
} as RedspotUserConfig;
```

The following plug-ins are now provided.

* [@redspot/chai](./plugin/redspot-chai)
* [@redspot/decimals](./plugin/redspot-decimals)
* [@redspot/explorer](./plugin/redspot-explorer)
* [@redspot/gas-reporter](./plugin/redspot-gas-reporter)
* [@redspot/known-types](./plugin/redspot-known-types)
* [@redspot/patract](./plugin/redspot-patract)

