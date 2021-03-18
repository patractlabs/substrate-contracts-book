# tutorial

Himalia 用于与链的合约部分交互的sdk，需要首先启动一个节点才能进行后续的执行过程。

对于有`pallet-contracts`功能的节点，我们推荐使用 Europa 作为节点的替代。更多的信息请参阅Europa的[文档](./europa.md)。

Europa 可以以一下命令简单安装使用：

```bash
git install --recurse-submodules https://github.com/patractlabs/europa.git --force --locked
europa --tmp
```

另一方面也可以使用 Patract 的测试网 [Jupiter](https://github.com/patractlabs/jupiter)，或者 Parity 提供的合约测试网 [Canvas-node](https://github.com/paritytech/canvas-node.git)

## go

PatractGo 依赖于 [GSRPC](https://github.com/centrifuge/go-substrate-rpc-client)。Go 版本的 Himalia 项目叫做 [go-patract](https://github.com/patractlabs/go-patract)

在安装了 PatractGo 之后，可以采用如下方式快速部署，调用一个合约。完整案例请参考 [transfer_test](https://github.com/patractlabs/go-patract/blob/master/contracts/erc20/transfer_test.go)

### 部署合约

```go
// read the code wasm from file
codeBytes, err := ioutil.ReadFile("/path/to/contracts.wasm")
if err != nil {
    return err
}
// create the api
cApi, err := rpc.NewContractAPI(env.URL())

// read the abi(metadata) for contract
metaBz, err := ioutil.ReadFile("/path/to/contracts_metadata.json")
cApi.WithMetaData(metaBz)

// create context with from auth, like Alice
ctx := api.NewCtx(context.Background()).WithFrom(authKey)

// put code
_, err = cApi.Native().PutCode(ctx, codeBytes)

codeHash := readCodeHash() // get code hash

var codeBz []byte

if err := cApi.Native().Cli.GetStorageLatest(&codeBz,
    "Contracts", "PristineCode",
    []byte(codeHash), nil); err != nil {
        return err
    }

	var endowment uint64 = 1000000000000

// Instantiate
_, contractAccount, err := cApi.Instantiate(ctx,
    types.NewCompactBalance(endowment),
    types.NewCompactGas(test.DefaultGas),
    contracts.CodeHashERC20,
    types.NewU128(totalSupply),
)    
```

### 调用合约
#### rpc call

调用 `total_supply` 获取当前的总共供应量。

```go
var res types.U128

err := a.CallToRead(ctx,
    &res,
    a.ContractAccountID,
    []string{"total_supply"},
)
```

#### 交易调用

调用 `transfer` 转移一笔资金。

```go
toParam := struct {
    Address AccountID
}{
    Address: to,
}

valueParam := struct {
    Value U128
}{
    Value: amt,
}

return a.CallToExec(ctx,
    a.ContractAccountID,
    types.NewCompactBalance(0),
    types.NewCompactGas(test.DefaultGas),
    []string{"transfer"},
    toParam, valueParam,
)
```

## python

PatractPy 依赖于 [py-substrate-interface](https://github.com/polkascan/py-substrate-interface)Python 版本的 Himalia 项目叫做 [py-patract](https://github.com/patractlabs/py-patract)

### 安装

```bash
pip3 install -U patract-interface 
```

在 python 脚本中即可使用

```bash
from patractinterface import ContractFactory, ContractAPI

// ... So something ...
```

### 快速使用
```python
import os
from substrateinterface import SubstrateInterface, Keypair
from patractinterface.contract import ContractAPI, ContractFactory
from patractinterface.observer import ContractObserver

def main():
    # use [europa](https://github.com/patractlabs/europa) as test node endpoint, notice `type_registry` should set correctly.
    substrate=SubstrateInterface(url='ws://127.0.0.1:9944', type_registry_preset="default", type_registry={'types': {'LookupSource': 'MultiAddress'}})
    # load deployer key
    alice = Keypair.create_from_uri('//Alice')
    bob = Keypair.create_from_uri('//Bob')
    # 1. load a contract from WASM file and metadata.json file (Those files is complied by [ink!](https://github.com/paritytech/ink))
    # in this example, we use `ink/example/erc20` contract as example.
    contract = ContractFactory.create_from_file(
            substrate=substrate, # should provide a subtrate endpoint
            code_file= os.path.join(os.path.dirname(__file__), 'res', 'erc20.wasm'),
            metadata_file= os.path.join(os.path.dirname(__file__), 'res', 'erc20.json')
        )
    # upload code to chain directly
    res = contract.put_code(alice)
    print("update code hash{} res:{}".format(contract.code_hash.hex(), res.is_succes))
    # 2. instantiate the uploaded code as a contract instance
    erc20_ins = contract.new(alice, 1000000 * (10 ** 15), endowment=2*10**10, gas_limit=20000000000, deployment_salt="0x12")
    # 2.1 create a observer to listen event
    observer = ContractObserver(erc20_ins.contract_address, erc20_ins.metadata, substrate)
    # 3. send a transfer call for this contract
    res = erc20_ins.transfer(alice, bob.ss58_address, 100000, gas_limit=20000000000)
    print('transfer res', res.is_succes)

    def on_transfer(num, evt):
        print("on_transfer in {} : {} {} {}".format(num, evt['from'], evt['to'], evt['value']))

    def on_approval(num, evt):
        print("on_approval in {} : {} {} {}".format(num, evt['owner'], evt['spender'], evt['value']))
    # 4 set event callback 
    observer.scanEvents(handlers={
        'Transfer': on_transfer,
        'Approve': on_approval
    })

if __name__ == "__main__":
    main()
    pass
```