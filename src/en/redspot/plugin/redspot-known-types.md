# @redspot/known-types

@redspot/known-types is a plugin that adds the types of known chains automatically.

In polkadot, it is a hassle to add types since they have to be done manually not automatically. And sometimes there are compatibility issues with different chain versions to deal with. The purpose of @redspot/known-types is to solve the problem of types of different chains.

Most of the chains have submitted types on polkadot apps, and all the types definitions are in the npm package `@polkadot/apps-config`. So we will partially reference the types definitions in `@polkadot/apps-config`. But `@polkadot/apps-config` lacks the types definition for the development environment. We will then fill in this part manually. Currently the supported chains are Canvas, Jupiter, Europa, Edgeware, Plasm, Clover.

Install dependencies

```bash
$ yarn add @redspot/known-types
```

Import plugin in `redspot.config` file:

```javascript
...
import "@redspot/known-types"

...

export default {
  ...
};
```

Now there is no need for any extra config to contect to the nextwork like Canvas, Jupiter, Europa, etc.
