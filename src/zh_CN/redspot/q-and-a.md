# Q & A

### 如何升级 Redspot

redspot 仅仅是一本普通的 npm package 。所以升级方式和其他 npm package 一样。

`npm upgrade` 升级所有依赖

`npm upgrade redspot` 仅升级 redspot

如果你使用的是 yarn

`yarn upgrade-interactive --latest`  将所有依赖升级到稳定版

你可以可以直接手动更改 package.json 中的版本号，然后重新安装依赖 ：

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

注意，最好同时将所有的插件升级到最新版。



### 使用 erc20-trait 时，无法调用合约

由于 erc20-trait 多了命名空间，所以在调用的时候也必须加上命名空间。例子：

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



### 如何保证私钥的安全

可以使用环境变量配置 account，如：

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

运行脚本：

```bash
REDSPOT_NETWORK=mainnet ACCOUNT="//Alice" npx redspot run ./scripts/deploy.ts
```

你也可以使用 [dotenv ](https://github.com/motdotla/dotenv) 等工具。

