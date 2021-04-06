(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{571:function(e,t,a){"use strict";a.r(t);var r=a(6),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"europa-s-wasm-backtrace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#europa-s-wasm-backtrace"}},[e._v("#")]),e._v(" Europa's Wasm Backtrace")]),e._v(" "),a("p",[e._v("The execution of "),a("code",[e._v("pallet-contracts")]),e._v(' includes the execution in the "contract model" and the execution in Wasm. among them')]),e._v(" "),a("ul",[a("li",[e._v("The execution process in the contract model is transferred to the "),a("code",[e._v("pallet-contracts")]),e._v(" module through Wasm's host_function. If panic or incorrect positioning occurs, the node runtime can be located in the form of native operation.")]),e._v(" "),a("li",[e._v("Since the execution process in Wasm is in the Wasm virtual machine, it is a black box to the outside world. If the internal execution process has a crash exception, it can only be displayed by the Wasm executor.")])]),e._v(" "),a("p",[e._v("Europa's "),a("code",[e._v("pallet-contracts")]),e._v(" module currently supports 2 types of actuators:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("wasmi")]),e._v(": Wasm interpreter developed by parity. When Wasm executes panic, it will only return an error without Backtrace. Patract forks the wasmi of parity, and adds tracking and printing of the execution stack on the original basis. When Panic appears during Wasm's execution, the current execution stack and corresponding information will be returned with an error.")]),e._v(" "),a("li",[a("code",[e._v("wasmtime")]),e._v(": Wasm's JIT executor, which already comes with Backtrace when it crashes.")])]),e._v(" "),a("h2",{attrs:{id:"europa-can-print-out-wasm-backtrace-conditions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#europa-can-print-out-wasm-backtrace-conditions"}},[e._v("#")]),e._v(" Europa can print out Wasm Backtrace conditions")]),e._v(" "),a("p",[e._v('Wasm can print Backtrace, requiring the "name section" section in the Wasm file compiled by the contract. Since the '),a("code",[e._v("cargo-contract")]),e._v(' provided by parity has already encapsulated many operations, ** in the current ** default operation, the contract is compiled in the most optimal way, and the "name section" section will be removed in this process. On the other hand, '),a("code",[e._v("cargo-contract")]),e._v(" does not provide corresponding interfaces or options to allow developers to adjust the optimization conditions used in contract compilation and whether to retain some debugging information. Therefore, Patract can only provide a modified version of "),a("code",[e._v("cargo-contract")]),e._v(". Developers can use this modified version of "),a("code",[e._v("cargo-contract")]),e._v(' to compile the contract Wasm file with the "name section" section.')]),e._v(" "),a("p",[e._v("On the other hand, the original code will be optimized during the release compilation. The optimized Backtrace to locate the bug may be disturbed, so it is best to reduce the optimization level, so that the Backtrace will be the same as the original code when it crashes. match.")]),e._v(" "),a("h2",{attrs:{id:"install-cargo-contract-under-patract-warehouse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-cargo-contract-under-patract-warehouse"}},[e._v("#")]),e._v(" Install "),a("code",[e._v("cargo-contract")]),e._v(" under Patract warehouse")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Install "),a("a",{attrs:{href:"https://github.com/patractlabs/cargo-contract",target:"_blank",rel:"noopener noreferrer"}},[e._v("PatractLabs's "),a("code",[e._v("cargo-contract")]),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ cargo install cargo-contract --git https://github.com/patractlabs/cargo-contract --branch=v0.10.0 --force\n")])])]),a("blockquote",[a("p",[e._v("Since the current version of parity's "),a("code",[e._v("cargo-contract")]),e._v(" is "),a("code",[e._v("v0.10.0")]),e._v(", our Patract has added features based on this version. If "),a("code",[e._v("cargo-contract")]),e._v(" continues to be upgraded in the future, Patract will continue to be maintained.")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("cargo-contract")]),e._v(" installed in this way will "),a("strong",[e._v("overwrite")]),e._v(" the installed "),a("code",[e._v("cargo-contract")]),e._v(". Therefore, please pay attention to which warehouse the "),a("code",[e._v("cargo-contract")]),e._v(" in the current environment comes from to prevent interference when locating problems.")]),e._v(" "),a("p",[e._v("Excuting an order:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ cargo "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --list "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" cargo-contract\ncargo-contract v0.10.0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("https://github.com/patractlabs/cargo-contract?branch"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("v0.10.0"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#106081f1):")]),e._v("\ncargo-contract\n")])])]),a("p",[e._v("The results listed can be used to determine what source the "),a("code",[e._v("cargo-contract")]),e._v(" installation in the current environment comes from. For example, the above result is from Patract. If there is no parenthesis and the content in it, it means it is from "),a("code",[e._v("crates.io")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("If the developer has installed the official "),a("code",[e._v("cargo-contract")]),e._v(" and does not want to overwrite the installation, you can use manual compilation.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/patractlabs/cargo-contract --branch"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("v0.10.0\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" cargo-contract\n$ cargo build --release\n")])])]),a("p",[e._v("After compilation, you can move the compiled product to any path that can be accessed globally, and rename it (in case it conflicts with the installed cargo-contract).")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" target/release/cargo-contract "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("to any path"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/patract-cargo-contract\n")])])]),a("p",[e._v("In the subsequent compilation of the ink! contract, use "),a("code",[e._v("patract-cargo-contract xxx")]),e._v(" instead of "),a("code",[e._v("cargo +nighlty contract xxx")]),e._v(" to execute the corresponding commands. (Please note that this method requires the default toolchain to be nightly)")])])]),e._v(" "),a("h2",{attrs:{id:"use-patract-s-cargo-contract-to-generate-wasm-contract-files-with-name-section-section"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-patract-s-cargo-contract-to-generate-wasm-contract-files-with-name-section-section"}},[e._v("#")]),e._v(" Use Patract's cargo-contract to generate "),a("code",[e._v("*.wasm/*.contract")]),e._v(' files with "name section" section')]),e._v(" "),a("p",[e._v("Patract's "),a("code",[e._v("cargo-contract")]),e._v(" provides "),a("code",[e._v("-d/--debug")]),e._v(" options. When the following command is executed:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ cargo +nightly contract build\n")])])]),a("p",[e._v("The generated "),a("code",[e._v("*.wasm/*.contract")]),e._v(" file is consistent with parity's official "),a("code",[e._v("cargo-contract")]),e._v(" execution result.")]),e._v(" "),a("p",[e._v("When the following command is executed:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ cargo +nightly contract build --debug\n")])])]),a("p",[e._v("The generated "),a("code",[e._v("*.wasm/*.contract")]),e._v(" file is the "),a("code",[e._v("*.wasm/*.contract")]),e._v(' file that is not optimized and carries the "name section" section. It is equivalent to the files generated in this way '),a("strong",[e._v("replace")]),e._v(" the files generated by the original generation logic.")]),e._v(" "),a("p",[a("strong",[e._v("Please note that the size of the compiled product generated by this mode is generally several hundred times the size of the original product")]),e._v(". Therefore, the developer can pay attention to the size of the generated product to roughly determine the compiled product generated by which compilation method.")]),e._v(" "),a("p",[e._v("For example, the following example:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" target/ink\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" -h\n-rw-rw-r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(".5M "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v("月  "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("12")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("16")]),e._v(":01 flipper.contract\n-rw-rw-r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v(".1K "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v("月  "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("12")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),e._v(":34 flipper.contract.old\n-rw-rw-r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" root root 732K "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v("月  "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("12")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("16")]),e._v(":00 flipper.wasm\n-rw-rw-r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(".5K "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v("月  "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("12")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),e._v(":34 flipper.wasm.old\n-rw-rw-r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(".1K "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v("月  "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("12")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("16")]),e._v(":01 metadata.json\n")])])]),a("p",[e._v("The file with "),a("code",[e._v("*.old")]),e._v(" means it was generated by the parity version of "),a("code",[e._v("cargo-contract")]),e._v(" (renamed after the first compilation), on the contrary, the file with the same name is from Patract's "),a("code",[e._v("cargo-contract")]),e._v(" with the addition of "),a("code",[e._v("-- The debug")]),e._v(" command is generated. You can see that the new file is many times larger than the old file. And "),a("code",[e._v("metadata.json")]),e._v(" is unchanged.")]),e._v(" "),a("h2",{attrs:{id:"wasm-backtrace-explained"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wasm-backtrace-explained"}},[e._v("#")]),e._v(" Wasm Backtrace explained")]),e._v(" "),a("p",[e._v("TODO: To be completed")]),e._v(" "),a("h2",{attrs:{id:"experimental-features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#experimental-features"}},[e._v("#")]),e._v(" Experimental features")]),e._v(" "),a("h3",{attrs:{id:"wasm-backtrace-print-line-number-only-wasmtime-is-supported"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wasm-backtrace-print-line-number-only-wasmtime-is-supported"}},[e._v("#")]),e._v(" Wasm Backtrace print line number (only Wasmtime is supported)")]),e._v(" "),a("p",[e._v("TODO: This part is not completed")]),e._v(" "),a("p",[e._v("Add "),a("code",[e._v("WASMTIME_BACKTRACE_DETAILS=1")]),e._v(" when starting Europa or set this variable as an environment variable:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("WASMTIME_BACKTRACE_DETAILS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" europa --tmp\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# or use")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("WASMTIME_BACKTRACE_DETAILS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\neuropa --tmp "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# run europa in normal way")]),e._v("\n")])])]),a("p",[e._v("Then in the "),a("code",[e._v("wasm_error")]),e._v(" part of europa's Japanese, there will be a line number in the original code corresponding to the crash stack:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("wasm_error: Error::Trap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n    Trap "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        code: TrapCode::UnreachableCodeReached,\n        trace: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"wasm trap: unreachable"')]),e._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"wasm backtrace:"')]),e._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"    0: 0x31b2 - <unknown>!core::panicking::panic::he000af669cfcac01"')]),e._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"    1: 0x3c8c - <unknown>!flipper::flippter::_::<impl flipper::flippter::Flippter>::flip::h12b84979a77ae484"')]),e._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"    2: 0x10fa - core::result::Result<T,E>::map_err::h576871030fe833d4"')]),e._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"                    at /home/clearloop/.cargo/registry/src/github.com-1ecc6299db9ec823/parity-scale-codec-2.0.1/src/codec.rs:1199:31"')]),e._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"    3: 0x10d6 - core::result::Result<T,E>::map_err::h576871030fe833d4"')]),e._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"                    at /home/clearloop/.cargo/registry/src/github.com-1ecc6299db9ec823/parity-scale-codec-2.0.1/src/codec.rs:1198"')]),e._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"    4: 0x3966 - <unknown>!<flipper::flippter::_::_::__ink_MessageDispatchEnum as ink_lang::dispatcher::Execute>::execute::{{closure}}::hf35b139aaf5fba3b"')]),e._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"    5: 0x3941 - <unknown>!ink_lang::dispatcher::execute_message_mut::hf62eb790d230d371"')]),e._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"    6: 0x3c12 - <unknown>!<flipper::flippter::_::_::__ink_MessageDispatchEnum as ink_lang::dispatcher::Execute>::execute::heae3e5bbfc02afa0"')]),e._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"    7: 0x3a7a - <unknown>!flipper::flippter::_::<impl ink_lang::contract::DispatchUsingMode for flipper::flippter::Flippter>::dispatch_using_mode::h8e0c4495e09cd910"')]),e._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"    8: 0x3ba3 - <unknown>!call"')]),e._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"    9: 0xf704 - <unknown>!<wasm function 638>"')]),e._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('""')]),e._v(",\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(",\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(",\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(",\n")])])]),a("p",[e._v("In this backtrace log, some parts that can parse the line number will be appended with the line number corresponding to the function in the error stack at the end of that line, for example:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"2: 0x10fa - core::result::Result<T,E>::map_err::h576871030fe833d4"')]),e._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"                    at /home/clearloop/.cargo/registry/src/github.com-1ecc6299db9ec823/parity-scale-codec-2.0.1/src/codec.rs:1199:31"')]),e._v("\n")])])]),a("p",[e._v("The part of "),a("code",[e._v("codec.rs:1199:31")]),e._v(" means that this frame in the error stack corresponds to line "),a("code",[e._v("1199")]),e._v(" and column "),a("code",[e._v("31")]),e._v(" of the file "),a("code",[e._v("codec.rs")]),e._v(". The remaining lines do not have line numbers due to insufficient parsing or because the code is generated by macros.")])])}),[],!1,null,null,null);t.default=s.exports}}]);