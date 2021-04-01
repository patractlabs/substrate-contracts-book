# Redspot

Redspot is a contract integration builder that allows developers to simplify the process of testing and interacting with contracts by projecting the development of contracts such as ink! The Redspot system allows developers to build rich plugins that extend Redspot's functionality, minimizing the burden on contract developers and automating the execution of repetitive processes.

Redspot is designed to be similar to Truffle in the Ethereum ecosystem, but with a broader set of extensions than Truffle.

Patract believes that Redspot must be a flexible system, since the `pallet-contracts` contract module can be integrated directly, or with some modification, into the Substrate chain. Therefore, Redspot decided to use [hardhat](https://github.com/nomiclabs/hardhat) as the core Redspot architecture because it has an excellent design that allows developers to add new features using plugins.

So Redspot comes from the hardhat fork (based on the MIT protocol) and removes the Ether-related parts from its base and adds features related to the Substrate and `pallet-contracts` modules. In the future, Redspot will build more features based on hardhat's core.