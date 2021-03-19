## Getting started

First of all, please make sure you include `<script type="text/javascript" src="https://static.patrastore.io/sdk/store-sdk.min.js"></script>` in the html, In order to ensure that the SDK can work normally, you need to quote it before the business code. A better way is to put it in the `head` tag of html.

Make sure you have a certain understanding of the [document](https://polkadot.js.org/docs/extension) of `@polkadot/extension-dapp`, we will also post a demo below.

Install the corresponding dependencies. `yarn add @polkadot/extension-dapp`.


### Request user authorization

**This step is before all the following operations are called. **

```typescript
import {web3Enable} from'@polkadot/extension-dapp';

await web3Enable();
```

### Get Injected

```typescript
import {web3FromSource} from'@polkadot/extension-dapp';

// The injected name of PatraStore is store
const injected = await web3FromSource('store');
```

### Signer

```typescript
const signer = injected.signer;
```
After obtaining the Signer, you can use the signer to retrieve the signature of PatraStore

### Provider(Optional)

The Provider we provide is implemented based on PostMessage. To ensure that Dapp and PatraStore are connected to the same chain, it is recommended that you use this method to instantiate the Provider.

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

After the above steps, we have obtained Provider and Signer. Below is a complete example of instantiating `ApiPromise`.

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

### More usage

Please refer to [https://polkadot.js.org/docs/extension](https://polkadot.js.org/docs/extension)