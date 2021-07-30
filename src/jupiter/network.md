# Jupiter 网络

## Jupiter 公共配置

三个Jupiter的网络的配置基本一致。对于相同的配置，Jupiter 尽量将相应配置放于 crate 包 `runtime/common` 中。

对于开发人员而言，主要需要注意的配置如下：

1. `frame_system::Config` 中的配置都是相同的，因此三个网络的区块资源及资源配置都是相同的。
2. `pallet_balance::Config` 中的 `ExistentialDeposit` 都是 **0**，因此**产生一个新账户或者一个新合约不需要为了这个账户/合约的存活而付押金**。
3. `pallet_contracts::Config` 中的配置主要如下：

  1. **与存储租赁相关的配置都设置为0**，如 `TombstoneDeposit`，`DepositPerContract`，`DepositPerStorageByte`，`RentFraction`等。
  2. `CallStack`的配置都是32层， 因此合约调合约最大的执行栈相同。
  3. 与合约销毁的延迟删除的配置都相同。
  4. 合约的 `Schedule` 配置都相同，均直接**采用了默认配置**。注意这个配置中的 `code_len` 即合约的最大大小为 `128k`
  5. `ChainExtension`的配置会由于每个网络的特性及功能支持程度存在不同。

## Jupiter 三个网络的特性及配置
### Jupiter Dev

Jupiter Dev 是为了方便合约开发者进行本地开发调试，当有交易接收到后就立即产生区块，可以为合约的开发者省去大量的等待时间。

该节点是为了给合约开发者提供尽可能类似 Jupiter 测试网网络的便捷合约调试环境。开发者首先可采用该节点环境进行合约业务逻辑的开发，待主要业务逻辑比较稳定后再于 Jupiter 测试网进行开发或公开测试。

> 请注意 Jupiter Dev 当没有收到交易时，区块高度不会变化。

#### polkadot.js 的 Extending types

Jupiter Dev 的开发者扩展类型如下：

```json
{
  "LookupSource": "MultiAddress",
  "Address": "MultiAddress"
}
```

#### 公开的 Endpoints

Jupiter Dev 是本地测试节点，因此不需要公开 Endpoints

#### ChainExtensions

| 功能           | 特性                                                         |
| -------------- | ------------------------------------------------------------ |
| zkMega         | Native 支持                                                  |
| BabeRandomness | 本地对一个固定值做了hash，只能提供让合约正常调用的接口，不能正常提供随机数功能 |
| ink-log        | 不支持                                                       |

### Jupiter PoA

jupiter-prep 采用的是 PoA 验证人模式，对应的测试网为 Jupiter PoA V1 (Jupiter A1)。该网络是一条包括了合约模块的独立链，使用 Babe 共识算法，并且为合约模块提供了 Babe VRF 随机数。

该网络是 Jupiter 对外的**主要测试网**，给合约开发者提供了一个公共的合约运行的测试网环境。另一方面，在将来，这个网络同时也会提供由 Patract 开发的兼容 `pallet-contracts`并携带其他功能的兼容合约平台模块，给与开发者不同的合约平台选择。

Jupiter PoA 网络适合为合约开发者提供公开的Wasm合约测试环境，希望**对 Wasm 合约功能进行测试**的开发者可以部署自己合约在该网络上进行公开测试。

#### polkadot.js 的 Extending types

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

#### 公开的 Endpoints

Jupiter PoA 的开放 provider 如下：

- wss://jupiter-poa.elara.patract.io/
- wss://ws.jupiter-poa.patract.cn/

#### ChainExtensions

| 功能           | 特性                                                         |
| -------------- | ------------------------------------------------------------ |
| zkMega         | Native 支持                                                  |
| BabeRandomness | 具备Babe模块，提供了Babe随机数支持 BabeRandomness 接口的功能 |
| ink-log        | 不支持                                                       |

### Jupiter

Jupiter 平行链采用的是 Aura 平行链收集人选择算法，对应的测试网为 Jupiter PC1，可以部署在任何基于 Polkadot 的中继链网络上。

Jupiter 平行链测试网是以**平行链模式**运行的合约测试网，是 Patract 为了 Polkadot 生态提供的合约平行链测试网络。希望**在 Polkadot 平行链生态中测试Wasm合约功能**的开发者适于选择这个网络进行合约的公开测试。

由于当前Polkadot/Kusama/Westend中继链不能支持Wasm合约模块运行，因此**当前Jupiter部署在Patract私有的 Westend 测试网上**，该Westend测试网经过 Patract 修改支持了运行合约模块的功能。

#### polkadot.js 的 Extending types

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

#### 公开的 Endpoints

当前Jupiter部署于的中继链Westend。请注意这个Westend网络是Patract部署的私有网络：

* wss://ws.patract-westend.patract.cn

Jupiter 的开放 provider ：

- wss://ws.jupiter.patract-westend.patract.cn

#### ChainExtensions

| 功能           | 特性                                                         |
| -------------- | ------------------------------------------------------------ |
| zkMega         | Wasm 支持                                                    |
| BabeRandomness | 由 Jupiter 平行链采集对应中继链上的 Babe 模块的随机数，并通过BabeRandomness的ChainExtensions接口提供给合约使用 |
| ink-log        | 不支持                                                       |

### 

