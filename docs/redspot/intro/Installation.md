## Installation
### Prerequisites
Please follow the guide on [ink!](https://substrate.dev/substrate-contracts-workshop/#/0/setup) to setup **rust**, **cargo** and **cargo-contracts** 

Please follow the guide on [Nodejs](https://nodejs.org/) to install node and npm

Install NPX
```
sudo npm install -g npx
```
### Setup Local Test Node
You will need test blockchain node to deploy the contracts and test them.
* [**Canvas**](https://github.com/paritytech/canvas-node) (test node by substrate)
```
cargo install canvas-node --git https://github.com/paritytech/canvas-node.git --tag v0.1.9 --force --locked
```
Start **Canvas**
```
canvas --dev --tmp
```
* [**Europa**](../../europa/introduction.md) (Patract modification)
```
cargo install europa --git=https://github.com/patractlabs/europa.git --force --locked
```
Start **Europa**
```
europa --tmp
```

### Install Redspot
```
npm install --save-dev redspot
```
To use your local installation of Redspot, you need to use `npx` to run it (i.e. `npx redspot`).

