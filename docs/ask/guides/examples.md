# Examples
In our [examples](https://github.com/patractlabs/ask/tree/v0.3-review/examples) directory you find a number of examples written in ask!.

We provide some samples written in Ask!:  

To build a single example navigate to the root of the example and run:
```
npx pl-ask-cli compile 
```

* `flipper` : shows how to flip a boolean.
* `incrementer` : shows how to load, modify and restore a state variable.
* `crosscall` : shows how to do a cross call between contracts written in ink! and Ask!.
* `erc20`: shows how to write an ERC20 contract with Ask!.
* `erc721`: shows how to write an ERC721 contract with Ask!.
* `composite`: shows how to store / reload composite data types.

For example, `npx pl-ask-cli compile erc20/index.ts` will yield.
```
project
│   package-lock.json  
|
└───node_modules
│
└───contracts
│   ├── index.ts
│   └── erc20.ts
│
└───build
│   ├── index.wasm
│   └── metadata.json
