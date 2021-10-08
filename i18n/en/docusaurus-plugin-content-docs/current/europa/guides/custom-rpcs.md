# Custom RPCs and commands

Europa implements a set of custom RPCs to facilate development.

**Making sure Europa is running and endpoint is configured correctly**

## RPC: `europa_forwardToHeight`
`europa_forwardToHeight` allows Europa to produce empty blocks to reach to the assigned height

### Parameters
BlockHeight - Blockheight to be forwarded to.

### Example
```
$ curl http://localhost:9933 -H "Content-Type:application/json;charset=utf-8" -d   '{
     "jsonrpc":"2.0",
      "id":1,
      "method":"europa_forwardToHeight",
      "params": [10]
    }'

```

The rpc result looks like
```
{"jsonrpc":"2.0","result":null,"id":1}
```

And you should see the follow log printed from Europa service.

```bash
INFO tokio-runtime-worker ec_basic_authorship::basic_authorship: 🎁 Prepared block for proposing at 10 [hash: 0x5302296c5d4c52caaaec15d6bd1409e5cb6482cd41d3cbe7e80356ec4c06f68b; parent_hash: 0xc668…46de; extrinsics (1): [0x64cd…22c2]]

INFO tokio-runtime-worker sc_consensus_manual_seal::rpc: Instant Seal success: CreatedBlock { hash: 0x5302296c5d4c52caaaec15d6bd1409e5cb6482cd41d3cbe7e80356ec4c06f68b, aux: ImportedAux { header_only: false, clear_justification_requests: false, needs_justification: false, bad_justification: false, is_new_best: true } }    
```

## RPC: `europa_backwardToHeight`
`europa_backwardToHeight` revert the blockchain back to certain heights and remove states of reverted blocks

### Parameters
BlockHeight - Blockheight to be reverted to.

### Example
```
$ curl http://localhost:9933 -H "Content-Type:application/json;charset=utf-8" -d   '{
     "jsonrpc":"2.0",
      "id":1,
      "method":"europa_backwardToHeight",
      "params": [10]
    }'

```
The rpc result looks like
```
{"jsonrpc":"2.0","result":null,"id":1}
```
You can check the lastest block number:

```
curl http://localhost:9933 -H "Content-Type:application/json;charset=utf-8" -d   '{ "jsonrpc":"2.0", "id":1, "method":"chain_getBlock", "params": [] }'
```
You will find that the blocks are now rolled back to number 5
```
{"jsonrpc":"2.0","result":{"block":{"extrinsics":["0x280402000b7e3d54da7b01"],"header":{"digest":{"logs":[]},"extrinsicsRoot":"0xb01668e3274a819e207818d87ae7ed858d299a12e49a9dd1688af6ceb56f1ca5","number":"0x5","parentHash":"0x6cdf0f12b32e960e9f05f510873dcbd2c84271a55bd71f2850688712537be764","stateRoot":"0x86ae36014044a2cfd627da60eff71333ac9d6db4daafc70a21f8cae5c0988a27"}},"justifications":null},"id":1}
```

## RPC: `europa_modifiedStateKvs`
`europa_modifiedStateKvs` retrive the cached state changes at certain blockheight.
we store the mapping of blockhash and state kvs in the state-kv database, so that developers could export the state changes to look up the details.

### Parameter
BlockHeight - Blockheight to be reverted to.

### Example
```
$ curl http://localhost:9933 -H "Content-Type:application/json;charset=utf-8" -d   '{
     "jsonrpc":"2.0",
      "id":1,
      "method":"europa_modifiedStateKvs",
      "params": [4]
    }'
```
The rpc result looks like

```
{"jsonrpc":"2.0","result":{"0x26aa394eea5630e07c48ae0c9558cef702a5c1b19ab7a04f536c519aca4983ac":"0x04000000","0x26aa394eea5630e07c48ae0c9558cef70a98fdbe9ce6c55837576c60c7af3850":"0x01000000","0x26aa394eea5630e07c48ae0c9558cef734abf5cb34d6244378cddbf18e849d96":"0x00000000000000000000000000000000587575c42f000000","0x26aa394eea5630e07c48ae0c9558cef780d41e5e16056765bc8461851072c9d7":"0x0400000000000000481a0b0b00000000020000","0x26aa394eea5630e07c48ae0c9558cef78a42f33323cb5ced3b44dd825fda9fcc":"0x4705272160a278662f1256b562581d7c83390481bd619a7c37a33df3478daa8e","0x26aa394eea5630e07c48ae0c9558cef799e7f93fc6a98f0874fd057f111c4d2d":"0x00","0x26aa394eea5630e07c48ae0c9558cef7a44704b568d21667356a5a050c118746bfb27f1eaef06bb903000000":"0x4705272160a278662f1256b562581d7c83390481bd619a7c37a33df3478daa8e","0x26aa394eea5630e07c48ae0c9558cef7a86da5a932684f199539836fcb8c886f":null,"0x26aa394eea5630e07c48ae0c9558cef7bdc0bd303e9855813aa8a30d4efc5112":null,"0x26aa394eea5630e07c48ae0c9558cef7df1daeb8986837f21cc5d17596bb78d1b4def25cfda6ef3a00000000":null,"0x26aa394eea5630e07c48ae0c9558cef7ff553b5a9862a516939d82b3d3d8661a":null,"0x3a65787472696e7369635f696e646578":null,"0x3f1467a096bcd71a5b6a0c8155e208103f2edf3bdf381debe331ab7446addfdc":"0x00000000000000000000000000000000","0xbd2a529379475088d3e29a918cd478721a39ec767bd5269111e6492a1675702a":"0x10de7a51d406e1cca0fbf047c8d7505e82b1fa19e9e073726e73e8a690b2e67dfeb956536e91ab6d05c4942723d6a888f43e2d11635073ea75ba8c8956105f229dc09065aae628308b68b125b74ccfaa4455e2f5c34b7eb2cec074af4dc63cbf2f4705272160a278662f1256b562581d7c83390481bd619a7c37a33df3478daa8e","0xf0c365c3cf59d671eb72da0e7a4113c49f1f0515f462cdcf84e0f1d6045dfcbb":"0xc63154da7b010000","0xf0c365c3cf59d671eb72da0e7a4113c4bbd108c4899964f707fdaffb82636065":null},"id":1}

```

## CLI: `state-kv`
Print modified stored state kvs for a block

### USAGE:
```bash
    europa state-kv [FLAGS] [OPTIONS] <HASH or NUMBER>
```
For details, please check by `europa state-kv --help`
### Example
```bash
# in a shell window
$ ./target/debug/europa
Nov 12 17:10:14.524  INFO Europa Dev Node    
Nov 12 17:10:14.524  INFO ✌️  version 0.1.0-7b4463c-x86_64-linux-gnu    
Nov 12 17:10:14.524  INFO ❤️  by patract labs <https://github.com/patractlabs>, 2020-2020    
Nov 12 17:10:14.524  INFO 📋 Chain specification: Development    
# ...
Nov 12 17:21:23.544  INFO Accepted a new tcp connection from 127.0.0.1:44210.    
Nov 12 17:21:32.238  INFO 🙌 Starting consensus session on top of parent 0xc7e1ce585807b34b7fecabe1242cafb2628c958b984ec0aee7727cdd34117529    
Nov 12 17:21:32.252  INFO 🎁 Prepared block for proposing at 1 [hash: 0x0109608217316a298c88135cf39a87cc31c37729fbe567b4a1a9f8dcdb81ebeb; parent_hash: 0xc7e1…7529; extrinsics (2): [0x2194…baf8, 0x0931…58bb]]    
Nov 12 17:21:32.267  INFO Instant Seal success: CreatedBlock { hash: 0x0109608217316a298c88135cf39a87cc31c37729fbe567b4a1a9f8dcdb81ebeb, aux: ImportedAux { header_only: false, clear_justification_requests: false, needs_justification: false, bad_justification: false, needs_finality_proof: false, is_new_best: true } }    

# open another shell window, the following command would print the changes for block height 1
$ ./target/debug/europa state-kv 1 
Nov 12 15:53:27.699  INFO modified state for block:0x6c119a8f7de42e330aca8b9d3587937aacbbc203cc21650b60644c2f2d33e7fb    
Nov 12 15:53:27.699  INFO       key:26aa394eea5630e07c48ae0c9558cef702a5c1b19ab7a04f536c519aca4983ac|value:[DELETED]   
Nov 12 15:53:27.699  INFO       key:26aa394eea5630e07c48ae0c9558cef70a98fdbe9ce6c55837576c60c7af3850|value:05000000
# ...
```

## CLI: `workspace`
Substrate could use the command -d/--base-path to assign a directory to store data, thus different environment could use different directory to distinguish. But -d directory is not recorded, so that developers should manage those different paths by themselves. Europa provide a concept of "workspace" to do this work based on the "base path". Developers could use command -w/--worksace to assign different workspace directory to run different Europa node instance. Europa also provides commands to operate "workspaces”, like setting default workspace, listing all existed workspace, or deleting a workspace.

In our workspace management, developers can switch different environments by setting different workspace. By using this feature, developers can switch between different environments to do test easily. On the other hand, this feature provides a friendly way for integration testing.

### Use another workspace

#### Specify another workspace

```
$ ./target/debug/europa -w another-workspace
# if you have specify a directory, add `-d` or `--base-path`
$ ./target/debug/europa -d database -w another-workspace
```

#### Set default workspace
Stop the Europa, then execute:

```
# another-workspace is the workspace name that we want to set as default.
$ ./target/debug/europa workspace default another-workspace
Nov 12 17:28:41.980  INFO Current default workspace:    
Nov 12 17:28:41.981  INFO       default    
Nov 12 17:28:41.981  INFO     
Nov 12 17:28:41.981  INFO Set [another-workspace] as default workspace.  
```

Then, start Europa. Europa will use "another-workspace" as default workspace.

```
$ ./target/debug/europa
# ...
Nov 12 17:29:33.862  INFO 💾 Database: RocksDb at .sub/another-workspace/chains/dev/db    
Nov 12 17:29:33.862  INFO 📖 Workspace: another-workspace | Current workspace list: ["default", "another-workspace"]    
Nov 12 17:29:33.862  INFO ⛓  Native runtime: europa-1 (europa-1.tx1.au1)    
```

#### Delete workspace

```
$ ./target/debug/europa workspace delete another-workspace
Nov 12 17:30:49.549  INFO Current default workspace:    
Nov 12 17:30:49.549  INFO       another-workspace    
Nov 12 17:30:49.549  INFO     
Nov 12 17:30:49.550  INFO Delete workspace [another-workspace].    
Nov 12 17:30:49.550  INFO       delete default record: [another-workspace]    
Nov 12 17:30:49.550  INFO       delete workspace:[another-workspace] from workspace list
```