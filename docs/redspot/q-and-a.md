# Common problem 

## How to upgrade Redspot？

Redspot is just a normal npm package, and the upgrade method is the same as other npm packages.

* `npm upgrade`：upgrade all dependencies.
* `npm upgrade redspot`： Only upgrade Redspot.

If you are using yarn, you can execute the following command to upgrade all dependencies to the stable version.

```bash
yarn upgrade-interactive --latest
```

If you want to use the latest beta version, it is recommended to manually change the version number in package.json and then reinstall the dependencies.

```json
{
  "name": "erc20",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@redspot/chai": "^0.10.2-1",
    "@redspot/gas-reporter": "^0.10.2-1",
    "@redspot/patract": "^0.10.2-1",
    "@types/chai": "^4.2.14",
    "@types/mocha": "^8.0.3",
    "chai": "^4.2.0",
    "redspot": "^0.10.2-1",
    "typescript": "^4.0.2"
  },
  "scripts": {
    "build": "npx redspot compile",
    "test": "npx redspot test"
  }
}
```

**Note** When upgrading, it is best to upgrade all plug-ins to the latest version at the same time to avoid dependency problems.

## How to specify the version of @polkadot/api and @polkadot/api-contract?

Redspot internally relies on @polkadot/api and @polkadot/api-contract. If you need to upgrade separately, you can add resolutions in package.json.

```json
/// package.json
...
"resolutions": {
  "@polkadot/api": "4.6.3",
  "@polkadot/api-contract": "4.6.3",
},
...
```

In this way, you can force the specified version. See [package.json](https://classic.yarnpkg.com/en/docs/package-json/#toc-resolutions) for details. However, the compatibility of the upgraded @polkadot/api and @polkadot/contract cannot be guaranteed.

## How to access the instance of @polkadot/api in redspot?

You can access it by [network.api](./runtime-environment#network).

## How to specify the types and RPC of chain in `redspot.config.ts`?

Part of the chain can be automatically configured via [@redspot/known-types](./plugin/redspot-known-types.md) (RPC calls are not supported). It can also be configured manually through `redspot.config.ts`.

```typescript
// redspot.config.ts
import { RedspotUserConfig } from 'redspot/types';

export default {
 ...
  network: {
    mainnet: {
      ...
      account: [process.env.ACCOUNT]
      types: {
        ...
      },
      rpc: {
        europa: {
          forwardToHeight: {
            description: '',
            params: [
              {
                name: 'height',
                type: 'u32'
              }
            ],
            type: 'Bytes'
          },
        }
        ...
      }
      ...
    }
  }
} as RedspotUserConfig;
```

## What should I do if I cannot call the contract when using erc20-trait?**

Because erc20-trait has a namespace, you must also add namespace when calling. The example is as follows

```typescript
// erc20
contractFactory.deploy("new", "1000000")
// erc20-trait
contractFactory.deploy("baseErc20,new", "1000000")
// erc20
contract.query.balanceOf(someaddress)
// erc20-trait
contract.query["baseErc20,balanceOf"](someaddress)
// erc20
contract.tx.transfer(receiver.address, 7))
// erc20-trait
contract.tx["baseErc20,transfer"](receiver.address, 7))
```

### How to ensure the security of the online private key and avoid uploading to Github?

You can use environment variables to configure account, as shown in the example below.

```typescript
// redspot.config.ts
import { RedspotUserConfig } from 'redspot/types';

export default {
 ...
  network: {
    mainnet: {
      ...
      account: [process.env.ACCOUNT]
      ...
    }
  }
} as RedspotUserConfig;
```

Run script

```bash
REDSPOT_NETWORK=mainnet ACCOUNT="//Alice" npx redspot run ./scripts/deploy.ts
```

You can also use tools for example [dotenv](https://github.com/motdotla/dotenv). In addition, the [redspot-explorer](./plugin/redspot-explorer) plug-in supports signatures using polkadot extensions in the browser.



