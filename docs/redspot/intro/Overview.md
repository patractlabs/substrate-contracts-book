## Overview​
Redspot is a development environment to compile, deploy, and debug wasm smart contract for substrate based chains. Redspot helps developers manage and automate the repeating steps during the process of writing smart contracts and dApps.Redspot is a development environment to compile, deploy, and debug wasm smart contract for substrate based chains. Similar to the architectures of Hardhat, Redspot is built upon Tasks and Plugins.

## Multi Languages Support
Redspot currently supports compilation of Ink!, Solang and Ask!. 

## Tasks

Every time you run Redspot from the terminal, you are running tasks. For example, executing the `npx redspot compile` command is to run the compilation task. To view the tasks currently available in the project, run the `npx redspot`  command. You can view the help information of any task by running `npx redspot help [task]`.

## Plugins

Redspot installs some plug-ins by default.  As a developer, you're flexible to install any plugins, write new plugins and override existing plugins.