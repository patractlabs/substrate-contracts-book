# Quick Start
This guide will cover the basics of creating a Redspot project. The barebone without plugins allows you to run tasks, compile wasm contract and run tests automatically.

## Running Tasks
To get a quick a look of what's availabe in redspot, run `npx redspot` in your project directory:
```bash
$ npx redspot
Redspot version 0.11.4

Usage: redspot [GLOBAL OPTIONS] <TASK> [TASK OPTIONS]

GLOBAL OPTIONS:

  --config           	A Redspot config file. 
  --help             	Shows this message, or a task's help if its name is provided 
  --log-level        	Set log levels 1-5 (default: "2")
  --max-memory       	The maximum amount of memory that Redspot can use. 
  --network          	The network to connect to. 
  --show-stack-traces	Show stack traces. 
  --tsconfig         	Reserved redspot argument -- Has no effect. 
  --verbose          	Enables Redspot verbose logging 
  --version          	Shows redspot's version. 

  AVAILABLE TASKS:

  check   	Check whatever you need
  clean   	Clears the cache and deletes all artifacts
  compile 	Compiles the entire project, building all artifacts
  console 	Opens a redspot console
  explorer	Start redspot explorer
  help    	Prints this message
  run     	Runs a user-defined script after compiling the project
  test    	Runs mocha tests
  testnet 	Running the test network

To get help for a specific task run: npx redspot help [task]

```

## Create your first Redspot project:

### Use Redspot template 
Redspot provide built-in contract templates to help developers start coding their own wasm contract without knowing all details of Redspot.
To start a Redspot project for erc20
```
npx redspot-new erc20
```
Once the command runs, you will see the following directory tree
```
+-- contracts
|   +-- Cargo.lock
|   +-- Cargo.toml
    +-- lib.rs
+-- scripts
|   +-- deploy.ts
+-- tests
|   +-- erc20.test.ts
+-- redspot.config.ts
+-- package.json
```

### Clone an existing project
You can also clone an existing redspot project. For example, you can clone this [project](https://github.com/atenjin/redspot-ink-example2) 

### Compile your contract
Netx, taking a look at `contracts/`, you should find `lib.rs`.This is the sample codes for a erc20 contract written in ***ink!***  with off-chain tests. For details, please refer [ink!](https://substrate.dev/substrate-contracts-workshop/#/0/setup)

To compile it, simply run:
```
npx redspot compile
```
You might see error like this

```
ERROR: Building the contract in debug mode requires an ink! version newer than `3.0.0-rc3`!
An unexpected error occurred:
```

This is cargo-contract complaining about the ink version. To fix this, edit `contracts/Cargo.toml`
change the ink dependency from `3.0.0-rc3` to `"3.0.0-rc4`. It should look like

```
[package]
name = "erc20"
version = "3.0.0-rc4"
authors = ["Parity Technologies <admin@parity.io>"]
edition = "2018"

[dependencies]
ink_primitives = { version = "3.0.0-rc4", git = "https://github.com/paritytech/ink", default-features = false }
ink_metadata = { version = "3.0.0-rc4", git = "https://github.com/paritytech/ink", default-features = false, features = ["derive"], optional = true }
ink_env = { version = "3.0.0-rc4", git = "https://github.com/paritytech/ink", default-features = false }
ink_storage = { version = "3.0.0-rc4", git = "https://github.com/paritytech/ink", default-features = false }
ink_lang = { version = "3.0.0-rc4", git = "https://github.com/paritytech/ink", default-features = false }
```

Another possible error
```
ERROR: Your wasm-opt version is 91, but we require a version >= 99.
```
To fix this, download the latest binary release for [bianryen](https://github.com/WebAssembly/binaryen)

After compilation, you should see a new dir 

```
artifacts
  └─ erc20.contracts
  └─ erc20.json
```

`artifacts/erc20.contract` is the compiled contract source code to deployed to blockchain node

`artifacts/erc20.json` describes all the interfaces that can be used to interact with your contract which acts the same as `ABI` in ethereum.

### Deploy your contract

Redspot automates the deploy process, so users won't need to update the contract file themselves.

First, make sure you have started the blockchain node, here we use canvas for demo:

```
canvas --dev --tmp
```

*** Config endpoint in `deploy.ts`, this points to websocket of the blockchain node ***
```typescript
{
        ...
        networks: {
    development: {
      endpoint: 'ws://127.0.0.1:9944', // 
      types: {},
      ...
    },
  },
}
```
*** Deploy ***
```
npx redspot run scripts/deploy.ts --no-compile
```
Making sure add `--no-compile` at the end since Redspot will compile every time by default 

After the contract is successfully deployed, you can get information similar to this.
```
Deploy successfully. The contract address:  5CqB5Mh9UdVbTE1Gt5PJfWSiCHydJaJsA31HjKGti1Z2fn78
```

*** Test your contract ***
```bash
npx redspot test --no-compile
```
The result will be looking like this
```
   ✓ Assigns initial balance (9189ms)
    ✓ Transfer adds amount to destination account (23906ms)
    ✓ Transfer emits event (17993ms)
    ✓ Can not transfer above the amount (17997ms)
    ✓ Can not transfer from empty account (24001ms)


  5 passing (2m)

┌──────────┬──────────┬──────────────────────────┬───────────────────────────┬──────────────────────────┬───────┐
│          │          │ Min                      │ Max                       │ Avg                      │       │
├──────────┼──────────┼─────────────┬────────────┼─────────────┬─────────────┼─────────────┬────────────┼───────┤
│ Contract │ Message  │ EstimateGas │ Weight     │ EstimateGas │ Weight      │ EstimateGas │ Weight     │ Calls │
├──────────┼──────────┼─────────────┼────────────┼─────────────┼─────────────┼─────────────┼────────────┼───────┤
│ erc20    │ transfer │ 4782870832  │ 5280208832 │ 9451855260  │ 10397508443 │ 7604329958  │ 8280994032 │ 5     │
└──────────┴──────────┴─────────────┴────────────┴─────────────┴─────────────┴─────────────┴────────────┴───────┘

```

## Congrats! You now know the basic of Redspot! Let's dive deep.