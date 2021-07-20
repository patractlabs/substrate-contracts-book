# 常见问题

## **如何升级 Redspot？**

Redspot 仅仅是一个普通的 npm package ，升级方式和其他 npm package 一样。

* `npm upgrade`：升级所有依赖。
* `npm upgrade redspot`： 仅升级Redspot。

如果您使用的是 yarn，那么您可执行以下命令将所有依赖升级到稳定版。

```bash
yarn upgrade-interactive --latest
```

如果您想要使用最新的测试版，推荐手动更改 package.json 中的版本号，然后重新安装依赖。

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

**注意 **升级时最好同时将所有的插件升级到最新版，避免产生依赖问题。

## **如何指定 @polkadot/api 和 @polkadot/api-contract 的版本？**

Redspot内部依赖 @polkadot/api 和 @polkadot/api-contract。如果您需要单独升级，可以在 package.json 添加resolutions。

```json
/// package.json
...
"resolutions": {
  "@polkadot/api": "4.6.3",
  "@polkadot/api-contract": "4.6.3",
},
...
```

这样就可以强制指定版本。详情请参见[package.json](https://classic.yarnpkg.com/en/docs/package-json/#toc-resolutions)。但是不能保证升级升级后的 @polkadot/api 和 @polkadot/contract 的兼容性。

## **如何在 redspot 中访问到 @polkadot/api 的实例？**

您可通过[network.api](./runtime-environment.html#Network)访问。

## 如何指定链的types和RPC

部分链可以通过 [@redspot/known-types](./plugin/redspot-known-types.md) 自动配置(不支持RPC调用)。也可以通过redspot.config手动配置。

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

## **使用 erc20-trait 时，无法调用合约怎么办？**

由于 erc20-trait 多了命名空间，所以在调用的时候也必须加上命名空间，示例如下。

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

## **如何保证线上私钥的安全，避免上传到Github？**

可以使用环境变量配置account，示例如下。

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

运行脚本

```bash
REDSPOT_NETWORK=mainnet ACCOUNT="//Alice" npx redspot run ./scripts/deploy.ts
```

您也可以使用[dotenv](https://github.com/motdotla/dotenv)等工具。此外，[redspot-explorer](./plugin/redspot-explorer.html)插件支持使用浏览器中的 polkadot extensions 签名。



