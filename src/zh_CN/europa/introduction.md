# Europa

Europa是一个运行`FRAME Contracts pallet`并**模拟节点的沙盒环境**，同时也是一个运行Substrate runtime的框架。

1. 将Europa作为合约调试的沙盒（sandbox）时，Europa修改了`FRAME Contracts pallet`模块以跟踪合约执行过程，能够给合约开发人员提供**丰富的合约执行中的信息，让合约的执行过程不再是一个黑盒**，帮助合约开发人员调试Wasm合约；
2. 使用Europa作为Substrate的框架（framework）时，你可以在不受Wasm编译问题的干扰下做Substrate Runtime开发（多用于实验性功能）。

## 作为Substrate runtime的框架

1. Europa移除了一些不必要的功能模块，例如WASM executor，p2p等，仅保留了native的执行环境。

2. 使用了`manual_seal`的出块方式（当收到新交易时就触发出块），使开发者不必受共识出块的影响，能更专注于合约的开发调试与日志分析。

3. 提供了`state-kv`数据库，记录了每个区块的状态变更。

   ```bash
   # print the modified state kvs for block 1
   $ ./target/debug/europa state-kv 1 -d europa_database
   Nov 12 15:53:27.699  INFO modified state for block:0x6c119a8f7de42e330aca8b9d3587937aacbbc203cc21650b60644c2f2d33e7fb    
   Nov 12 15:53:27.699  INFO       key:26aa394eea5630e07c48ae0c9558cef702a5c1b19ab7a04f536c519aca4983ac|value:[DELETED]    
   Nov 12 15:53:27.699  INFO       key:26aa394eea5630e07c48ae0c9558cef70a98fdbe9ce6c55837576c60c7af3850|value:05000000
   # ... 
   ```

4. Europa除了提供Substrate框架中的基础rpc之外，还有一些特殊的rpc：

   * `europa_forwardToHeight (params: [height: NumberOf<B>])`：将区块快进到指定高度，对于测试跟区块高度相关的功能非常有帮助。
   * `europa_backwardToHeight (params: [height: NumberOf<B>])`：将区块回退到指定高度，主要用来恢复状态。
   * `europa_modifiedStateKvs (params: [number_or_hash: NumberOrHash<B>])`：提供区块高度或者区块哈希，查询对应区块中的状态变更。

5. Europa除了使用`-d/--base-path`的可选项命令划分不同的工作目录，还能使用`-w/--workspace`在工作目录下声明不同的工作空间。

## 作为`FRAME Contracts pallet`的沙盒环境

当开发合约时，Europa为开发者提供了**更加详细的日志信息**来辅助合约开发者定位问题，包括contracts执行日志与wasm执行栈。同时这个沙盒环境也具备上述Europa框架的功能，例如可以使用`europa_forwardToHeight`等rpc来控制合约的执行情况。

合约错误可能出现在三处：`ink!`层、合约内部业务逻辑、`pallet_contracts`层。有了这些详细的日志，使得开发者在调试时能够快速定位问题，特别是在合约间互相调用的情况下，Europa能够大幅度提升开发体验。

目前，在Europa上有两个自定义的ChainExtension可供使用，分别是Contract logger和ZKP feature。

## 本章重点

由于本书主要关注点是Substrate的Wasm合约，因此后面章节的Europa相关的介绍均围绕与使用Europa合约调试相关。