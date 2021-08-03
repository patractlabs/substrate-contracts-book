## 编译

```shell
git clone --recurse-submodules https://github.com/patractlabs/jupiter.git
cd jupiter
cargo build --release
```

由于目前 jupiter 中有三种模式，所以不同模式对应了不同的二进制执行文件，上面在编译完成后，在 target/release 下会生成三种二进制文件：

- target/release/jupiter-dev
- target/release/jupiter-prep
- target/release/jupiter

## 运行

### jupiter-dev

运行本地模式：

```
./jupiter-prep --dev --execution=NativeElseWasm --tmp
```

### jupiter-prep

jupiter-prep 也支持先在本地进行测试：

```
# start first node
./jupiter-prep --chain=jupiter-poa-local --alice --execution=NativeElseWasm --tmp

# start second node
./jupiter-prep --chain=jupiter-poa-local --bob --execution=NativeElseWasm --tmp
```

外部节点也可以作为同步节点加入到 Jupiter PoA 独立测试网：

```
./jupiter-prep --chain=jupiter-poa --pruning=archive --execution=NativeElseWasm
```

### jupiter

当前 jupiter 平行链仅支持作为同步节点加入到 Jupiter 测试网：

```
./jupiter --chain ./jupiter-westend-098.json --execution wasm --wasm-execution=compiled --force-authoring --parachain-id=2000 --tmp \
--chain ./westend-098.json --no-beefy --execution wasm --wasm-execution=compiled --tmp \
--bootnodes /dns/ws.patract-westend.patract.cn/tcp/30333/p2p/12D3KooWHfn9r5cLyVQRuLin1wsB3KUiVaMWPnnpFd7Hhff6rhUX
```

> 注：如果需要在本地进行测试，可以修改 [jupiter-dev](https://github.com/patractlabs/jupiter/blob/master/bin/node/cli/src/command.rs#L28-L31)，并参考这里的[运行步骤](https://github.com/patractlabs/jupiter/blob/master/README.md#421-start-local-test-mode-jupiter-parachain)

