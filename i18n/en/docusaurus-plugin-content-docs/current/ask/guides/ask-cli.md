# ask-cli

## Usage
```typescript
npx pl-ask-cli xxx
```

## init
initialize a ask project with node packages and create directory structure
```bash
npx pl-ask-cli init
```
Will create the directory structure like
```
project
│   package-lock.json  
|
└───node_modules
│
└───contracts
```
## compile
```bash
npx pl-ask-cli compile source-file [--debug|--release]
```
By default, `npx pl-ask-cli compile` will compile in release mode.

For example, `npx pl-ask-cli compile contracts/index.ts` will yield.
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
```
For example, `npx pl-ask-cli compile contracts/index.ts --debug` will yield.
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
│   └───extension
│       │   ERC20.ts  
│       │   index.ts
│   ├── index.wasm
│   └── metadata.json
│   └── index.wast
```