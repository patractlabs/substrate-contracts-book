## Jupiter Network

### Jupiter Dev

Jupiter Dev Extend Type: 

```json
{
  "LookupSource": "MultiAddress",
  "Address": "MultiAddress"
}
```

### Jupiter PoA

Jupiter PoA Extend Type:

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

Jupiter PoA's open provider：

- wss://jupiter-poa.elara.patract.io/
- wss://ws.jupiter-poa.patract.cn/

### Jupiter

Jupiter Extend Type:

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

Jupiter's open provider:

- wss://ws.jupiter.patract-westend.patract.cn
