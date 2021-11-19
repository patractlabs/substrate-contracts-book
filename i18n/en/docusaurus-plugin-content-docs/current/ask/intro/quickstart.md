# Quick Start

## Setup Local blockchain node
We use [Europa](https://github.com/patractlabs/europa) as our default test node. We [v3.0.0-v2](https://github.com/patractlabs/europa/releases/tag/substrate-v3.0.0-2) as our dev env.

For setup, please refer [Europ-CLI](https://docs.patract.io/en/europa/intro/europa-cli) and [Europa-UI](https://docs.patract.io/en/europa/intro/europa-ui).

## Frontend - Polkadot-js/apps
For blockchain frontend, if you are using Europa-CLI, please install [Polkadot-js/apps](https://github.com/polkadot-js/apps). We use this [commit](https://github.com/polkadot-js/apps/commit/11276477a0523348c7b143db566622aa32833296) as our development env.
> If you are using Europa-UI, you can skip this step, as Europa-UI comes with built-in GUI.

## First ask! project - Flipper
### Setup ask env
```bash
mkdir flipper
cd flipper
npx pl-ask-cli init
```

### Create `index.ts` in `flipper/contracts`, and copy the following code
```typescript
@contract
class Flipper {
    @state flag: bool;

    constructor() {
    }

    @constructor
    default(initFlag: bool): void {
        this.flag = initFlag;
    }

    @message
    flip(): void {
        const v = this.flag;
        this.flag = !v;
    }

    @message({"mutates": false})
    get(): bool {
        return this.flag;
    }
}
```
### Compile
```bash
npx pl-ask-cli compile contracts/index.ts
```
Which creates `/build/index.wasm` and `/build/metadata.json`
`.wasm` is the compiled binary file of your smart contract while `metadata.json` defines ABI of your contract

### Deployment
Whereas a completely new blob of smart contract source code is deployed each time you push a contract on other platforms, Substrate opts to optimize this behavior. For example, the standard ERC20 token has been deployed to Ethereum thousands of times, sometimes only with changes to the initial configuration (through the Solidity constructor function). Each of these instances take up space on the blockchain equivalent to the contract source code size, even though no code was actually changed.

In Substrate, the contract deployment process is split into two halves:

Putting your code on the blockchain
Creating an instance of your contract
With this pattern, contract code like the ERC20 standard can be put on the blockchain a single time, but instantiated any number of times. No need to continually upload the same source code over and waste space on the blockchain.


- Start Europa and Polkadot.js/apps repectively
- In `polkadot-js/apps` contract tab, upload `build/metadata.json` and `build/index.wasm`. 
- Instantiate the uploaded contract and call `default` to issue tokens.

### Call your contract
Flipper only has two functions, flip() and get() so we will show you what it's like to play with both of them. Click the Execute button under the contract after you instantiate the Flipper contract in the previous step.

## ERC20
```bash
mkdir erc20
cd erc20`
npx pl-ask-cli init
```
### Copy code from [examples](https://github.com/patractlabs/ask/blob/v0.3-dev/examples/erc20) 
copy [`index.ts`](https://github.com/patractlabs/ask/blob/v0.3-dev/examples/erc20/index.ts) and [`ERC20.ts`](https://github.com/patractlabs/ask/blob/v0.3-dev/examples/erc20/ERC20.ts) to `erc20/contracts/`.

### Compile
```bash
npx pl-ask-cli compile contracts/index.ts
```
Which creates `/build/index.wasm` and `/build/metadata.json`

### Deployment
- Start Europa and Polkadot.js/apps repectively
- In `polkadot-js/apps` contract tab, upload `build/metadata.json` and `build/index.wasm`. 
- Instantiate the uploaded contract and call `default` to issue tokens.
- Play around with `mint`, `transfer`, `approve`, `burn` to operate this ERC20 contract.
![](https://user-images.githubusercontent.com/2844215/120952438-9cc61a00-c77d-11eb-9745-454f977184be.gif)

## Tutorial
### Inheritence
In `erc20/contracts`, `index.ts` and `ERC20.ts`

- `class MyToken` <-- `class ERC20 `, `MyToken` is a subclass of `ERC20`

- `constructor` and `default` needs to be declared for every subclass(contract)
```typescript
  constructor() {
    super();
  }

  @constructor
  default(name: string = "", symbol: string = ""): void {
    super.default(name, symbol);
  }
```

- expose functions with ` @message` decorator
```typescript
  @message
  @doc({"desc": "Mint a token"})
  mint(to: AccountId, amount: u128): void {
    this._mint(to, amount);
  }
```
- all class properties and methods are inherited by default.

### Event
```typescript
@event
class Transfer extends Event {
    @topic from: AccountId;
    @topic to: AccountId;

    amount: u128;


    constructor(from: AccountId, to: AccountId, amount: u128) {
      super();
      this.from = from;
      this.to = to;
      this.amount = amount;
    }
}
```
 - `Event` decorator marks this class as an Event to be emitted during the contract execution. 
 - To emit an event `(new Transfer(sender, recipient, amount)).emit();` 
 - `@topic` is equilvent of `indexed` in solidity that allows to search topic parameters as filters.

### Storage
```typescript
@contract
export class ERC20 {
  @state balances: SpreadStorableMap<AccountId, UInt128> = new SpreadStorableMap<AccountId, UInt128>();
  @state allowances: SpreadStorableMap<AccountId, SpreadStorableMap<AccountId, UInt128>> = new SpreadStorableMap<AccountId, SpreadStorableMap<AccountId, UInt128>>();

  @state totalSupply: u128 = u128.Zero;
  @state name_: string = "";
  @state symbol_: string = ""
  @state decimal_: u8 = 0;}
```
- `@contract`: the @constructor method is executable when the contract is instantiated. It defines this class as a contract.
- @state: a blockchain state variable, the value will be synced to blockchain when contract is executed
- class properties without decorators are regular class properties

### Message
Methods with `@message` decorator will be exposed to blockchain as contract methods.
#### Immutable Message
```typescript
  @message({ "mutates": false })
  symbol(): string {
    return this.symbol_;
  }
```
If `@message({ "mutates": false })`, it means this message does not needs to mutate the blockchain state. This method can be called with an RPC call without a blockchain transaction(no gas).

#### Mutable Message
```typescript
  @message
  transfer(recipient: AccountId, amount: u128): bool {
    let from = msg.sender;
    this._transfer(from, recipient, amount);
    return true;
  }
```
When no `{ "mutates": false }` is annotated in `@message`, it means this message will mutate the blockchain state. This method can only be called with a blockchain transaction(requires gas).

#### Private/Protected Methods
Methods without `@message` are internal functions. Same as grammer of Typescript, protected methods can be inherited in child classes.
