# tutorial

The SDK used by Himalia to interact with the contract part of the chain needs to start a node before proceeding with the subsequent execution process.

For nodes with `pallet-contracts` function, we recommend Europa as an alternative to nodes. For more information, please refer to Europa's [Document](./europa.md).

Europa can be easily installed and used with the following commands:

```bash
git install --recurse-submodules https://github.com/patractlabs/europa.git --force --locked
europa --tmp
```

On the other hand, you can also use Patract’s testnet [Jupiter](https://github.com/patractlabs/jupiter), or the contract testnet provided by Parity [Canvas-node](https://github.com/paritytech/ canvas-node.git)

## go

PatractGo relies on [GSRPC](https://github.com/centrifuge/go-substrate-rpc-client). The Go version of Himalia project is called [go-patract](https://github.com/patractlabs/go-patract)

After installing PatractGo, you can use the following methods to quickly deploy and call a contract. For the complete case, please refer to [transfer_test](https://github.com/patractlabs/go-patract/blob/master/contracts/erc20/transfer_test.go)

### Deploy the contract

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

### Call contract
#### rpc call

Call `total_supply` to get the current total supply.

```go
var res types.U128

err := a.CallToRead(ctx,
    &res,
    a.ContractAccountID,
    []string{"total_supply"},
)
```

#### Transaction call

Call `transfer` to transfer a fund.

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

PatractPy relies on [py-substrate-interface](https://github.com/polkascan/py-substrate-interface) The Python version of the Himalia project is called [py-patract](https://github.com/patractlabs/py -patract)

### Installation

```bash
pip3 install -U patract-interface
```

Can be used in python script

```bash
from patractinterface import ContractFactory, ContractAPI

// ... So something ...
```

### Quick use
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