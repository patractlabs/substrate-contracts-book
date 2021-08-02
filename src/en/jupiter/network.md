# Jupiter Network

## Jupiter common configuration

The there Jupiter network are basically the same. For those common configuration, Jupiter make effort to put these config into `runtime/common` crate package.

For developer, the most import configuration need to noticed are:

1. `frame_system::Config`: config inside this are all the same with there network, so that the block limit and resource of those network are the same
2. `pallet_balance::Config`: the `ExistentialDeposit` is set to **0**, so that when a new account or a new contract created, you do not need to pay rent.
3. `pallet_contracts::Config` configurations are：

    1. **all config related to storage rent are set to 0**, such as `TombstoneDeposit`，`DepositPerContract`，`DepositPerStorageByte`，`RentFraction` etc.
    2. `CallStack` are all the same and set to 32, in the case of contract invoke contract, the maximum execution statck are the same.
    3. `SignedClaimHandicap` are all the same and set to 0.
    4. `Schedule` are all the same and use default value. note the`code_len` i.e the max contract size is `128k`.
    5. `ChainExtension` config are different because each network's feature supporting are different.

## Three Jupiter network configuration

### Jupiter Dev

Jupiter Dev is for the purpose of quick development and debug on local environment for contract developer, When the block chain receive extrinsic, it then immediately generate block. By this way, it saved a lot of wait time for developer. 

This local node provide debug contract for contract developer as much like Jupiter testnet environment as possible. Developer should use this mode first to develop contract business logic. And when business logic get stabled, then developer can use Jupiter testnet network doing public test.

> Notice: If there're no extrinsic received by Jupiter Dev, the height of block would't changed.

#### polkadot.js extend types

Jupiter Dev Extend Type: 

```json
{
  "LookupSource": "MultiAddress",
  "Address": "MultiAddress"
}
```

#### public endpoints

Jupiter Dev is local test node, so it doesn't need public endpoints.

#### ChainExtensions

| feature        | supporting                                                                       |
| -------------- | -------------------------------------------------------------------------------- |
| zkMega         | Native support                                                                   |
| BabeRandomness | use fixed value as hash, only works for calling, but can't provide random number |
| ink-log        | No support currently                                                             |

### Jupiter PoA

jupiter-prep use PoA validator mode, the corresponding testnet is called Jupiter PoA V1 (Jupiter A1). This independent network contains contract module, use Babe consensus algorithm, and provide Babe VRF random number for contract module.

This network is the main public testnet for Jupiter, it provide a common contract running testnet environment for contract developer. On the other hand, in the future, this network will also provide compatible `pallet-contracts` and bring other feature which develop by Patract, this gives developer a chance to choose different contract platform.

Jupiter PoA network is suitable for contract developer who need public wasm contract test environment, those developer who want to testing wasm contract can deploy their own contract at this network to doing public test.

#### polkadot.js extend types

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

#### public endpoints

Jupiter PoA's open provider：

- wss://jupiter-poa.elara.patract.io/
- wss://ws.jupiter-poa.patract.cn/

#### ChainExtensions

| feature        | supporting                                                           |
| -------------- | ---------------------------------------------------------------------|
| zkMega         | Native support                                                       |
| BabeRandomness | Have Babe module, provide random number and BabeRandomness Interface |
| ink-log        | No support currently                                                 |

### Jupiter

Jupiter parachain use Aura collator selection algorithm, the corresponding testnet is called Jupiter PC1, it can deployed on any relay chain network based on Polkadot.

Jupiter parachain testnet is an contract testnet which run in **parachain mode**, it's parachain testnet provide for Polkadot ecosystem mainted by Patract. Those developer who want to **testing wasm contract on Polkadot parachain ecosystem** can deploy their own contract at this network to doing public test.

> Notice: Currently Polkadot/Kusama/Westend relay chain doesn't support running wasm contractmodule, so **currently Jupiter is deployed on Patract private Westend testnet**, this Westend testnet is modified by Patract to support running contract module.

#### polkadot.js extend types

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

#### public endpoints

Currently Jupiter is deployed on Westend relay chain. Note this Westend network is Patract private network:

- wss://ws.patract-westend.patract.cn

Jupiter PoA's open provider：

- wss://ws.jupiter.patract-westend.patract.cn

#### ChainExtensions

| feature        | supporting                                                                                                                       |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| zkMega         | Wasm support                                                                                                                     |
| BabeRandomness | Collect random number from Babe module of relay chian, and provide it to contract bt ChainExtensions interface of BabeRandomness |
| ink-log        | No support currently                                                                                                             |
