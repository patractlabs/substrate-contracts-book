# Setup Enviroment
## Prerequisites
Please follow the guide on [ink!](https://substrate.dev/substrate-contracts-workshop/#/0/setup) to setup **rust**, **cargo** and **cargo-contracts** 

Please follow the guide on [Nodejs](https://nodejs.org/) to install node and npm

Install NPX
```
sudo npm install -g npx
```
## Setup Local Test Node
You will need blockchain node based on substrate with Contracts pallet module to deploy the contracts and test them.

***What is substrate***

Substrate is the blockchain framework to help developers craft their own blockchain faster, easier and safer.

 ***What is pallet-contracts***

The FRAME Contracts pallet is a module within substrate that provides functionality for a Substrate runtime to deploy and execute WebAssembly Smart Contracts.


* [**Canvas**](https://github.com/paritytech/canvas-node) (test node by substrate)
```
cargo install canvas-node --git https://github.com/paritytech/canvas-node.git --tag v0.1.9 --force --locked
```
Start **Canvas**
```
canvas --dev --tmp
```
* [**Europa**](../../europa/intro/overview.md) (Patract modification)
```
cargo install europa --git=https://github.com/patractlabs/europa.git --force --locked
```
Start **Europa**
```
europa --tmp
```

## Install Redspot
Redspot supports `npx`, so you don't have to install Redspot locally.
To start your first Redspot project using Redspot built-in templates, check [Quick Start](./quick-start)
