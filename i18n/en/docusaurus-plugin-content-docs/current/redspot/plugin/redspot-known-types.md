# @redspot_known-types plug-in

## Background Information

redspot known types is a plug-in that can automatically add known types of chains. In polkadot, adding types is very troublesome, must be added manually, and cannot be automatically generated, and sometimes also has to deal with the compatibility of different chain versions. The appearance of the redspot known types plugin is to solve the problem of different types of chains.

Most chains have submitted types on polkadot apps, and all types definitions are in the npm package `@polkadot/apps-config`. We will partially quote the types definitions in `@polkadot/apps-config`. But`@polkadot/apps-config` lacks the type definition of the development environment, we will manually supplement this part. Currently supported chains are Canvas, Jupiter, Europa, Edgeware, Plasm and Clover.

## How to use the plug-in?

1. Install dependencies.
    ```bash
    $ yarn add @redspot/known-types
    ```

2. Import the plug-in in redspot.config.ts.
    ```javascript
    ...
    import "@redspot/known-types"
    ...
    export default {
      ...
    };
    ```

3. Then try to connect to the network of Canvas, Jupiter, Europa and other chains without adding additional type configuration.

