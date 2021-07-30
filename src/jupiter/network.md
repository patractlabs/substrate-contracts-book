## Jupiter 网络

### Jupiter Dev

Jupiter Dev 是为了方便合约开发者进行本地开发调试，当有交易就立即产生区块。

Jupiter Dev 的开发者扩展类型如下：

```json
{
  "LookupSource": "MultiAddress",
  "Address": "MultiAddress"
}
```

### Jupiter PoA

jupiter-prep 采用的是 PoA 验证人模式，对应的测试网为 Jupiter PoA V1 (Jupiter A1)。该网络是一条包括了合约模块的独立链，使用 Babe 共识算法，并且为合约模块提供了 Babe VRF 随机数。

Jupiter PoA 的开发者扩展类型如下：

```json
{
  "LookupSource": "MultiAddress",
  "Address": "MultiAddress",
  "AccountInfo": "AccountInfoWithTripleRefCount",
  "AliveContractInfo": {
    "trieId": "TrieId",
    "storageSize": "u32",
    "pairCount": "u32",
    "codeHash": "CodeHash",
    "rentAllowance": "Balance",
    "rentPayed": "Balance",
    "deductBlock": "BlockNumber",
    "lastWrite": "Option<BlockNumber>",
    "_reserved": "Option<Null>"
  },
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
```

Jupiter PoA 的开放 provider 如下：

- wss://jupiter-poa.elara.patract.io/
- wss://ws.jupiter-poa.patract.cn/

### Jupiter

Jupiter 平行链采用的是 Aura 平行链共识算法，对应的测试网为 Jupiter PC1，可以部署在任何基于 Polkadot 的中继链网络上，当前部署在我们私有的 Westend 测试网上。Jupiter 平行链的合约模式支持从中继链获取随机数。

Jupiter 的开发者扩展类型如下：

```json
{
  "LookupSource": "MultiAddress",
  "Address": "MultiAddress",
  "AccountInfo": "AccountInfoWithTripleRefCount",
  "AliveContractInfo": {
    "trieId": "TrieId",
    "storageSize": "u32",
    "pairCount": "u32",
    "codeHash": "CodeHash",
    "rentAllowance": "Balance",
    "rentPayed": "Balance",
    "deductBlock": "BlockNumber",
    "lastWrite": "Option<BlockNumber>",
    "_reserved": "Option<Null>"
  },
  "BabeRandomness": {
    "epoch": "u64",
    "start_slot": "u64",
    "duration": "u64",
    "randomness": "schnorrkel::Randomness"
  }
}
```

Jupiter 的开放 provider 如下：

- wss://ws.jupiter.patract-westend.patract.cn
