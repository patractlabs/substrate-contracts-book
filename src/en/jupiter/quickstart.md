## Compile

```shell
git clone --recurse-submodules https://github.com/patractlabs/jupiter.git
cd jupiter
cargo build --release
```

After compiled, there're three binary execution file in the directory target/release:

- target/release/jupiter-dev
- target/release/jupiter-prep
- target/release/jupiter

## Run

### jupiter-dev

running in local develop mode：

```
./jupiter-prep --dev --execution=NativeElseWasm --tmp
```

### jupiter-prep

jupiter-prep also support local test mode:

```
# start first node
./jupiter-prep --chain=jupiter-poa-local --alice --execution=NativeElseWasm --tmp

# start second node
./jupiter-prep --chain=jupiter-poa-local --bob --execution=NativeElseWasm --tmp
```

The outside node can also join Jupiter PoA testnet as sync node:

```
./jupiter-prep --chain=jupiter-poa --pruning=archive --execution=NativeElseWasm
```

### jupiter

Currently, outside node can join Jupiter testnet as sync node: 

```
./jupiter --chain ./jupiter-westend-patract.json --execution wasm --wasm-execution=compiled --parachain-id=2000 --tmp \
-- --chain ./westend-patract.json --execution wasm --wasm-execution=compiled --tmp \
--bootnodes /dns/ws.patract-westend.patract.cn/tcp/30333/p2p/12D3KooWFBrd6SrevJ4vLi3SY7KRYQEVbRSeoENmdDouAW7wGCvZ
```