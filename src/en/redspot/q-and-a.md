# Q & A
# Q & A

### How to upgrade Redspot

redspot is just a normal npm package. So it is upgraded in the same way as any other npm package.

`npm upgrade` upgrades all dependencies

`npm upgrade redspot` Upgrade only redspot

If you are using yarn

`yarn upgrade-interactive --latest` to upgrade all dependencies to the stable version

You can manually change the version number in package.json and reinstall the dependencies directly

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

Note that it is best to upgrade all plugins to the latest version at the same time.



### Cannot call the contract when using erc20-trait

Since erc20-trait has extra namespaces, you must also add namespaces when calling it. Example.

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



### How to secure the private key online and avoid uploading to github

You can use environment variables to configure account, e.g.

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
    ACCOUNT] ... }
  }
} as RedspotUserConfig;
```

Run the script.

```bash
REDSPOT_NETWORK=mainnet ACCOUNT="//Alice" npx redspot run . /scripts/deploy.ts
```

You can also use tools like [dotenv ](https://github.com/motdotla/dotenv).

