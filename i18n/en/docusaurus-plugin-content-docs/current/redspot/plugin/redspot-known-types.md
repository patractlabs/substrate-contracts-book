# @redspot_known-types plug-in

## What

Redspot known types is a plug-in that can automatically add known types of chains. In polkadot, adding types is very troublesome, must be added manually, and cannot be automatically generated, and sometimes also has to deal with the compatibility of different chain versions. The appearance of the redspot known types plugin is to solve the problem of different types of chains.

Most chains have submitted types on polkadot apps, and all types definitions are in the npm package `@polkadot/apps-config`. We will partially quote the types definitions in `@polkadot/apps-config`. But`@polkadot/apps-config` lacks the type definition of the development environment, we will manually supplement this part. Currently supported chains are Canvas, Jupiter, Europa, Edgeware, Plasm and Clover.

## Installation
```
$ yarn add @redspot/known-types
```
Add this to your `redspot.config.ts`:
```typescript
import "@redspot/known-types"
```

## Usages
Try to connect to the network of Canvas, Jupiter, Europa and other chains without adding additional type configuration, `@redspot/known-types` will configure them automatically

