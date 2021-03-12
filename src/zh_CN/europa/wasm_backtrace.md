# Europa 的Wasm Backtrace

## Europa 能打印出 Wasm Backtrace 的条件

## Wasm Backtrace 解释

## 实验性功能
### Wasm Backtrace 打印行号（只支持Wasmtime）

TODO：该部分未完成

启动Europa的时候添加`WASMTIME_BACKTRACE_DETAILS=1`或者将这个变量设置成环境变量：

```bash
WASMTIME_BACKTRACE_DETAILS=1 europa --tmp
# or use
export WASMTIME_BACKTRACE_DETAILS=1
europa --tmp # run europa in normal way
```

那么在europa的日中的`wasm_error`部分，将会出现崩溃栈对应原代码中的行号：

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
            "                    at /home/clearloop/.cargo/registry/src/github.com-1ecc6299db9ec823/parity-scale-codec-2.0.1/src/codec.rs:1199:31",
            "    3: 0x10d6 - core::result::Result<T,E>::map_err::h576871030fe833d4",
            "                    at /home/clearloop/.cargo/registry/src/github.com-1ecc6299db9ec823/parity-scale-codec-2.0.1/src/codec.rs:1198",
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

在这段backtrace日志中，一些能解析出行号的部分将会在那一行的最后附加错误栈中的函数对应的行号，例如：

```bash
"2: 0x10fa - core::result::Result<T,E>::map_err::h576871030fe833d4",
            "                    at /home/clearloop/.cargo/registry/src/github.com-1ecc6299db9ec823/parity-scale-codec-2.0.1/src/codec.rs:1199:31"
```

中的`codec.rs:1199:31`部分即表示该错误栈中的这一帧对应于`codec.rs`这个文件的行`1199`，列`31`。