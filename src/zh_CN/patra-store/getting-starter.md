## Getting started

首先，请确保您在html中引入了`<script type="text/javascript" src="https://static.patrastore.io/sdk/store-sdk.min.js"></script>`，为了确保sdk可以正常工作，需要您在业务代码之前引用，比较好的方式是放在html的`head`标签中。

确保对`@polkadot/extension-dapp`的[文档](https://polkadot.js.org/docs/extension)有一定的了解，我们在下方也会出Demo。

安装相应依赖。`yarn add @polkadot/extension-dapp`。


### 请求用户授权

**这一步是在以下所有操作调用之前。**

```typescript
import { web3Enable } from '@polkadot/extension-dapp';

await web3Enable();
```

### 获取Injected

```typescript
import { web3FromSource } from '@polkadot/extension-dapp';

// PatraStore注入injected的名称为store
const injected = await web3FromSource('store');
```

### Signer

```typescript
const signer = injected.signer;
```
获取到Signer之后可以使用signer调取PatraStore的签名

### Provider(Optional)

我们提供的Provider是基于PostMessage实现，为了确保Dapp和PatraStore连接的是同一个链，建议您使用这种方式实例化Provider。

```typescript
import type { ProviderInterface } from '@polkadot/rpc-provider/types';
import { WsProvider } from '@polkadot/rpc-provider';
import { web3ListRpcProviders, web3UseRpcProvider } from '@polkadot/extension-dapp';

let provider: ProviderInterface;
const providers = await web3ListRpcProviders('store');
if (providers && Object.keys(providers).length > 0) {
  provider = (await web3UseRpcProvider('store', Object.keys(providers)[0])).provider;
} else {
  provider = new WsProvider(url);
}
```

### Init Api

经过上面的步骤，我们已经获得了Provider和Signer，下面是实例化`ApiPromise`的完整实例。

```typescript
import type { ProviderInterface } from '@polkadot/rpc-provider/types';

import { ApiPromise } from '@polkadot/api/promise';
import { WsProvider } from '@polkadot/rpc-provider';
import { web3Enable, web3FromSource, web3ListRpcProviders, web3UseRpcProvider } from '@polkadot/extension-dapp';

async function initApi(): ApiPromise {
  await web3Enable();

  let provider: ProviderInterface;
  const providers = await web3ListRpcProviders('store');
  if (providers && Object.keys(providers).length > 0) {
    provider = (await web3UseRpcProvider('store', Object.keys(providers)[0])).provider;
  } else {
    provider = new WsProvider(url);
  }

  const { signer } = await web3FromSource('store');

  return new ApiPromise({
    provider,
    signer,
    // Jupiter types
    types: {
      "LookupSource": "MultiAddress",
      "Address": "MultiAddress",
      "FullIdentification": "AccountId",
      "AuthorityState": {
        "_enum": [
          "Working",
          "Waiting"
        ]
      },
      "EraIndex": "u32",
      "ActiveEraInfo": {
        "index": "EraIndex",
        "start": "Option<u64>"
      },
      "UnappliedSlash": {
        "validator": "AccountId",
        "reporters": "Vec<AccountId>"
      }
    }
  })
}

const api: ApiPromise = await initApi();
```

### 更多用法

请参考[https://polkadot.js.org/docs/extension](https://polkadot.js.org/docs/extension)