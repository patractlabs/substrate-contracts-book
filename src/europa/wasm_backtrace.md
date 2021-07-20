# Europa 的Wasm Backtrace

## 背景信息

`pallet-contracts`的执行包括合约模型中的执行与Wasm中的执行。其中合约模型中的执行过程通过Wasm的 host_function 转移到了`pallet-contracts`模块中执行，若出现panic或错误定位可以让节点的runtime以native运行的形式来定位。Wasm中的执行过程由于处于Wasm虚拟机中，因此对于外界而言是黑盒，若内部执行过程出现了崩溃异常，只能由Wasm执行器对外展示。

Europa 的`pallet-contracts`模块当前支持以下两种执行器：

* `wasmi`：由官方研发的Wasm解释器，当Wasm执行出现panic时只会返回错误，没有Backtrace。Patract fork了官方的`wasmi`，在原基础上添加了执行栈的跟踪与打印。当Wasm的执行过程出现panic的时候，将当前的执行栈及相应信息通过错误一并返回。
* `wasmtime`：Wasm的JIT执行器，自带执行崩溃时的Backtrace。
## Europa 能打印出Wasm Backtrace的条件

Wasm能够打印Backtrace，要求合约编译出的Wasm文件里有`name section`段。由于官方提供的`cargo-contract`已经封装了许多操作，因此在当前其默认操作中是以最优优化方式去编译合约，在这个过程中会去除掉`name section`段。另一方面`cargo-contract`也没有提供对应的接口或选项允许您调整合约编译使用的优化条件以及是否保留一些调试信息。因此Patract只能提供一个修改版本的`cargo-contract`，您使用这个修改版的`cargo-contract`可编译出携带`name section`段的合约Wasm文件。

另一方面，release的编译中会对原代码有优化，通过优化后的Backtrace来定位问题有可能会受到干扰，因此最好能降低优化等级，这样崩溃时的Backtrace才会最大可能性和原代码相匹配。

## 安装Patract仓库下的`cargo-contract`

* 安装Patract 仓库下的`cargo-contract`。
    ```bash
    $ cargo install cargo-contract --git https://github.com/patractlabs/cargo-contract --branch=tag-v0.12.1 --force
    ```
    **注意 **当前官方的`cargo-contract`发布的版本为v0.12.1，Patract基于这个版本添加了功能。如果将来`cargo-contract`继续升级，Patract 也会继续维护。
    通过这种方式安装的`cargo-contract`会覆盖已安装过的的`cargo-contract`。因此请明晰当前环境中的`cargo-contract`来自哪个仓库，以防止定位问题时受到干扰。

执行以下命令，可通过列出的结果判定当前环境中的`cargo-contract`安装来源。例如下面的结果即来自Patract。如果没有括号及其中的内容则表示来自`crates.io`。

```bash
$ cargo install --list | grep cargo-contract
cargo-contract v0.12.1 (https://github.com/patractlabs/cargo-contract.git?branch=tag-v0.12.1#0d682762):
cargo-contract
```

* 如果您已经安装了官方的`cargo-contract`并且不想覆盖安装，可以采取手动编译的方式。
    ```bash
    $ git clone https://github.com/patractlabs/cargo-contract --branch=tag-v0.12.1
    $ cd cargo-contract
    $ cargo build --release
    ```
    编译好后可以将编译产生的的文件移动到一个可以被全局访问的路径并重命名，以防和已安装过的`cargo-contract`发生冲突。
```bash
$ cp target/release/cargo-contract <to any path>/patract-cargo-contract
```
后续在 ink! 合约的编译过程中则使用`patract-cargo-contract xxx`替代`cargo +nighlty contract xxx`执行相应命令，但这种方式要求default toolchain为nightly。

## 使用Patract的cargo-contract生成携带`name section`段的`*.wasm/*.contract`文件

Patract的`cargo-contract`提供`-d/--debug`选项。当执行以下命令时，生成的`*.wasm/*.contract`文件与官方的`cargo-contract`执行结果一致。

```bash
$ cargo +nightly contract build
```

当执行以下命令时，生成的`*.wasm/*.contract`文件就是没有经过优化，且携带`name section`段的`*.wasm/*.contract`文件。相当于通过这种方式生成的文件替换了原本生成逻辑生成的文件。

```bash
$ cargo +nightly contract build --debug
```
**注意** 通过这种模式生成的编译文件，一般情况下其大小是原文件的几百倍。因此您可以通过生成文件的大小粗略判定是通过那种编译方式生成的编译文件。
示例如下。

```bash
$ cd target/ink
$ ls -h
-rw-rw-r-- 1 root root 1.5M 3月  12 16:01 flipper.contract
-rw-rw-r-- 1 root root 6.1K 3月  12 15:34 flipper.contract.old
-rw-rw-r-- 1 root root 732K 3月  12 16:00 flipper.wasm
-rw-rw-r-- 1 root root 2.5K 3月  12 15:34 flipper.wasm.old
-rw-rw-r-- 1 root root 2.1K 3月  12 16:01 metadata.json
```
带`*.old`文件表示是由官方版本的`cargo-contract`生成（第一次编译后重命名过），反之的同名文件是由Patract的`cargo-contract`并加上了`--debug`命令生成。可以看到新文件比原来的文件大许多倍，而`metadata.json`则是没有变化的。
## Wasm Backtrace 解释

TODO：待完成

## 实验性功能

### Wasm Backtrace 打印行号（只支持Wasmtime）

TODO：该部分未完成

启动Europa的时候添加`WASMTIME_BACKTRACE_DETAILS=1`或将这个变量设置为环境变量。

```bash
WASMTIME_BACKTRACE_DETAILS=1 europa --tmp
# or use
export WASMTIME_BACKTRACE_DETAILS=1
europa --tmp # run europa in normal way
```
那么在Europa的日志中的`wasm_error`部分，将会出现崩溃栈对应原代码中的行号。
```bash
wasm_error: Error::Trap(
    Trap {
        code: TrapCode::UnreachableCodeReached,
        trace: [
            "wasm trap: unreachable",
            "wasm backtrace:",
            "    0: 0x31b2 - <unknown>!core::panicking::panic::he000af669cfcac01",
            "    1: 0x3c8c - <unknown>!flipper::flippter::_::<impl flipper::flippter::Flippter>::flip::h12b84979a77ae484",
            "    2: 0x10fa - core::result::Result<T,E>::map_err::h576871030fe833d4",
            "                    at /home/clearloop/.cargo/registry/src/github.com-1ecc6299db9ec823/官方-scale-codec-2.0.1/src/codec.rs:1199:31",
            "    3: 0x10d6 - core::result::Result<T,E>::map_err::h576871030fe833d4",
            "                    at /home/clearloop/.cargo/registry/src/github.com-1ecc6299db9ec823/官方-scale-codec-2.0.1/src/codec.rs:1198",
            "    4: 0x3966 - <unknown>!<flipper::flippter::_::_::__ink_MessageDispatchEnum as ink_lang::dispatcher::Execute>::execute::{{closure}}::hf35b139aaf5fba3b",
            "    5: 0x3941 - <unknown>!ink_lang::dispatcher::execute_message_mut::hf62eb790d230d371",
            "    6: 0x3c12 - <unknown>!<flipper::flippter::_::_::__ink_MessageDispatchEnum as ink_lang::dispatcher::Execute>::execute::heae3e5bbfc02afa0",
            "    7: 0x3a7a - <unknown>!flipper::flippter::_::<impl ink_lang::contract::DispatchUsingMode for flipper::flippter::Flippter>::dispatch_using_mode::h8e0c4495e09cd910",
            "    8: 0x3ba3 - <unknown>!call",
            "    9: 0xf704 - <unknown>!<wasm function 638>",
            "",
        ],
    },
),
```
在这段Backtrace日志中，一些能解析出行号的部分将会在那一行的最后附加错误栈中的函数对应的行号，示例如下。
```bash
"2: 0x10fa - core::result::Result<T,E>::map_err::h576871030fe833d4",
            "                    at /home/clearloop/.cargo/registry/src/github.com-1ecc6299db9ec823/官方-scale-codec-2.0.1/src/codec.rs:1199:31"
```
其中的`codec.rs:1199:31`部分即表示该错误栈中的这一帧对应于`codec.rs`这个文件的行号为1199，列号为31。其余行由于解析还不充分或者由于代码由宏生成，因此还没有行号。

