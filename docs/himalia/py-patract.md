# py-patract

PatractPy is a contract SDK to support the development of Python scripts that interact with contracts, including automated scripts to support testing. Unlike PatractGo, PatractPy is mainly for script development, so PatractPy mainly completes contract-related RPC interfaces, and completes contract deployment and instantiation-related operations.

PatractPy will provide support for [europa](https://github.com/patractlabs/europa) env, which is a good environment for contract exec sandbox,
With PatractPy, we can write contract unittest by python, which is more friendly to developer and can easy use other test tools.

PatractPy will be based on [polkascan's Python Substrate Interface](https://github.com/polkascan/py-substrate-interface), which is a Python sdk for Substrate.

Element Group for disscusion: https://app.element.io/#/room/#PatractLabsDev:matrix.org

PatractPy will achieve the following support:

- Some support that missing in [polkascan's Python Substrate Interface](https://github.com/polkascan/py-substrate-interface), which is needed for contracts
- Provide Scanning and monitoring support for contract to do statistics and analysis
- Provide a SDK development example for ERC20 contract
- Support For unittest to canvas or [europa](https://github.com/patractlabs/europa) env.

## Basic Apis For Contracts

As [polkascan's Python Substrate Interface](https://github.com/polkascan/py-substrate-interface) has provide some support to contract api, so we not need to important the api for contract calls, but there is some api to add:

- `SubstrateSubscriber` is a subscriber support to subscribe data changes in chain, for example, the events in chain.
- `get_contract_event_type` add event decode support for contracts.

The basic api split into 2 parts:
- Contract, include:
  - contractExecutor: This api could construct an extrinsic to call a contract, would be packed into a block and change state.
  - contractReader: This api could construct a rpc request to call a contract, do not pack into a block and do not change any state.
  - contractCreator: This api is used for `instantiate` a contract and holding the Wasm code and metadata, receive following parameters:
    - `gas_limit`
    - `endowment`
    - `deployment_salt` (`salt` parameter in `instantiate`)
  - ContractAPI: This api is used for `call` a contract, is a wrapper for `contractExecutor` and `contractReader`, developers could use this api to react with contracts. This api could create a instance depends on the metadata, auto generate the contract access functions based on the contract. And the auto-gen functions receive the parameters which defined in contracts, besides receive following common parameters:
    - `gas_limit`
    - `value` (notice, if current call's `payable` is false, this `value` must be `0`)
  - ContractFactory: This api is used for constructing a contract instance in python, and developer could use this instance to access contract. This is a wrapper for `contractCreator` and `ContractAPI`
- Observer, include:
  - ContractObserver: This api is used for listen the events in contracts. 

All methods which belong to the instance of `ContractAPI` and `ContractFactory` **receive a keypair as the first parameter**, as the sender for this operation. And from the second parameter, receive the parameters defined in contracts.

### `ContractFactory` and `ContractAPI` is used to react with contracts
we add a factory to put code and deploy contracts to chain:

```python
factory = ContractFactory.create_from_file(
    substrate=substrate, 
    code_file=os.path.join(os.path.dirname(__file__), 'constracts', 'ink', 'erc20.wasm'),
    metadata_file=os.path.join(os.path.dirname(__file__), 'constracts', 'ink', 'erc20.json')
)

res = factory.put_code(alice) # alice is the keypair for `//Alice`
print(res.is_succes)

# this api is `ContractAPI`
api = factory.new(alice, 1000000 * (10 ** 15), endowment=10**15, gas_limit=1000000000000)
print(api.contract_address) # contract_address is the deployed contract
```

The factory will generate constructors from metadata file.

We add api by metadata for Contract, api will auto generate caller for contract from metadata:

```python
# create a ContractAPI from an existed contract address
api = ContractAPI(contract_address, contract_metadata, substrate)

# api will auto generate caller for contract from metadata
alice_balance_old = api.balance_of(bob, alice.ss58_address) # bob is the keypair for `//Bob`

res = api.transfer(alice, bob.ss58_address, 100000, gas_limit=20000000000)
logging.info(f'transfer res {res.error_message}')
print(res.is_succes)

alice_balance = api.balance_of(bob, alice.ss58_address)
logging.info(f'transfer alice_balance {alice_balance}')

bob_balance = api.balance_of(bob, bob.ss58_address)
logging.info(f'transfer bob_balance {bob_balance}')
```

The api will generate exec and read api from metadata file, for example:

```json
      {
        "args": [
          {
            "name": "owner",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 5
            }
          }
        ],
        "docs": [
          " Returns the account balance for the specified `owner`.",
          "",
          " Returns `0` if the account is non-existent."
        ],
        "mutates": false,
        "name": [
          "balance_of"
        ],
        "payable": false,
        "returnType": {
          "displayName": [
            "Balance"
          ],
          "type": 1
        },
        "selector": "0x56e929b2"
      },
```

In api, can call by:

```python
bob_balance = api.balance_of(bob, bob.ss58_address)
logging.info(f'transfer bob_balance {bob_balance}')
```

### `ContractObserver` is used to listen contracts events

ContractObserver can observer events for a contract:

```python
substrate=SubstrateInterface(url="ws://127.0.0.1:9944", type_registry_preset='canvas')
contract_metadata = ContractMetadata.create_from_file(
    metadata_file=os.path.join(os.path.dirname(__file__), 'constracts', 'ink', 'erc20.json'),
    substrate=substrate
)
observer = ContractObserver("0x8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48", contract_metadata, substrate)

# for some handlers (callbacks)
observer.scanEvents()
```

The handler function can take the erc20 support as a example.

## Special case: ERC20 API
Except react contract by `ContractAPI`, developers could create the wrapper by themself to react with corresponding contract. `py-contract` create an `ERC20 API` as an example to show this.

ERC20 api provide a wapper to erc20 contract exec, read and observer events, it can be a example for contracts api calling.

```python

# init api
substrate=SubstrateInterface(url="ws://127.0.0.1:9944", type_registry_preset='canvas')

contract_metadata = ContractMetadata.create_from_file(
    metadata_file=os.path.join(os.path.dirname(__file__), 'constracts', 'ink', 'erc20.json'),
    substrate=substrate
)

alice = Keypair.create_from_uri('//Alice')
bob = Keypair.create_from_uri('//Bob')

# erc20 api
erc20 = ERC20.create_from_contracts(
    substrate= substrate, 
    contract_file= os.path.join(os.path.dirname(__file__), 'constracts', 'ink', 'erc20.wasm'),
    metadata_file= os.path.join(os.path.dirname(__file__), 'constracts', 'ink', 'erc20.json')
)

# deplay a erc20 contract
erc20.put_and_deploy(alice, 1000000 * (10 ** 15))

# read total supply
total_supply = erc20.totalSupply()

# transfer
erc20.transfer_from(alice,
    from_acc=alice.ss58_address, 
    to_acc=bob.ss58_address, 
    amt=10000)

erc20.transfer(alice, bob.ss58_address, 10000)

# get balance
alice_balance = erc20.balance_of(alice.ss58_address)

# approve
erc20.approve(alice, spender=bob.ss58_address, amt=10000)

# get allowance
alice_allowance = erc20.allowance(alice.ss58_address, bob.ss58_address)

```

`ERC20Observer` is a event observer for erc20 contract:

```python
observer = ERC20Observer.create_from_address(
    substrate = substrate, 
    contract_address = contract_address,
    metadata_file= os.path.join(os.path.dirname(__file__), 'constracts', 'ink', 'erc20.json')
)

def on_transfer(num, evt):
    logging.info("on_transfer in {} : {} {} {}".format(num, evt['from'], evt['to'], evt['value']))

def on_approval(num, evt):
    logging.info("on_approval in {} : {} {} {}".format(num, evt['owner'], evt['spender'], evt['value']))


observer.scanEvents(on_transfer = on_transfer, on_approval = on_approval)
```

### Observer For Contracts

`ContractObserver` is a observer to listen events by contract with a given address:

```python
observer = ContractObserver.create_from_address(
    substrate = substrate, 
    contract_address = 'contract_address',
    metadata_file= os.path.join(os.path.dirname(__file__), 'constracts', 'ink', 'erc20.json')
)

def on_transfer(num, evt):
    logging.info("on_transfer in {} : {} {} {}".format(num, evt['from'], evt['to'], evt['value']))

def on_approval(num, evt):
    logging.info("on_approval in {} : {} {} {}".format(num, evt['owner'], evt['spender'], evt['value']))

observer.scanEvents(from_num, to_num, {
    'Transfer': on_transfer,
    'Approve': on_approval
})
```

`handlers` is a hander dictionary by name to hander function.

## Unittest Node Environment

PatractPy can support write contract unittest by node environment.

At First We need install [europa](https://github.com/patractlabs/europa).

```python
from patractinterface.contracts.erc20 import ERC20
from patractinterface.unittest.env import SubstrateTestEnv

class UnittestEnvTest(unittest.TestCase):
    @classmethod
    def setUp(cls):
        # start env or use canvas for a 6s block
        cls.env = SubstrateTestEnv.create_europa(port=39944)
        cls.env.start_node()

        cls.api = SubstrateInterface(url=cls.env.url(), type_registry_preset=cls.env.typ(), type_registry=cls.env.types())
        cls.alice = Keypair.create_from_uri('//Alice')
        cls.bob = Keypair.create_from_uri('//Bob')

        cls.erc20 = ERC20.create_from_contracts(
            substrate= cls.substrate, 
            contract_file= os.path.join(os.path.dirname(__file__), 'constracts', 'ink', 'erc20.wasm'),
            metadata_file= os.path.join(os.path.dirname(__file__), 'constracts', 'ink', 'erc20.json')
        )
        cls.erc20.put_and_deploy(alice, 1000000 * (10 ** 15))

        return

    def tearDown(cls):
        cls.env.stop_node()

    def test_transfer(self):
        self.erc20.transfer_from(alice,
            from_acc=alice.ss58_address, 
            to_acc=bob.ss58_address, 
            amt=10000)
        # some more test case

if __name__ == '__main__':
    unittest.main()
```

By example, we can use python to write testcase for some complex logics, by [europa](https://github.com/patractlabs/europa), we can test the contracts for python scripts.
