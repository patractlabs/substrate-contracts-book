# Plug-in

## What

The core functions of Redspot include Redspot runtime environment, compiling contracts, running tests and running scripts. Other functions, such as the test suite with the contract, contract interaction, access to the contract, and configuration of different chains, are all provided by the plug-in, and you can choose the plug-ins according to your needs. 

## Installation
The way to introduce a plug-in is very simple, add it as a dependency of npm in `package.json`, and then add it in `redspot.config.ts`. The example is as follows.

```typescript
import { RedspotUserConfig } from 'redspot/types';
import '@redspot/patract'; // introduce the @redspot/patract plugin
import '@redspot/chai'; // import @redspot/chai plugin
export default {
 ...
} as RedspotUserConfig;
```
You can also manually install it, for example

```bash
$ yarn add @redspot/chai
```

Add this to your `redspot.config.ts`:
```typescript
import '@redspot/chai'
```

The following plug-ins are now included.

* [@redspot/chai](./redspot-chai)
* [@redspot/decimals](./redspot-decimals)
* [@redspot/explorer](./redspot-explorer)
* [@redspot/gas-reporter](./redspot-gas-reporter)
* [@redspot/known-types](./redspot-known-types)
* [@redspot/patract](./redspot-patract)

