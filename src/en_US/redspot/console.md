# Console

Redspot provides a powerful console that allows developers to simply use commands and contracts to do operations, or call scripts located in the `scripts` directory to do mechanized repetitive work, etc.

Redspot's console has many other rich features.
* Provides **powerful tab-completion** capabilities
* The console records command history, so developers can view the `cache/console-history.txt` file to get the history of executed commands, and also use the `↑` button to find the required history commands. In the future, the console will also provide shortcut keys to index history commands.

## Start the console
```bash
$ npx redspot console
## If you are sure that the contract compiled in the ``artifacts`` directory meets your expectations, you can add the --no-compile argument to not compile the contract
$ npx redspot console --no-compile
```

If you run the `.help` command, you can see the corresponding help.
```bash
> .help
.break Sometimes you get stuck, this gets you out
.clear Alias for .break
.editor Enter editor mode
.exit Exit the repl
.help Print this help message
.load Load JS from a file into the REPL session
.save Save Save all evaluated commands in this REPL session to a file
>Save 
```

## Common commands
By default, the console imports components for contract interaction under the `redspot` library, such as

* ``patract``
* ``network`` 
* ...

Consistent with the scripts in the `scripts` directory, these components can be used to invoke many functions, such as interacting with the contract, querying information, viewing the network, etc.

### Common workflows
Example: You currently want to debug the erc20 contract. After the contract is compiled, you will see the `erc20.json` and `erc20.wasm` files in the `artifacts` directory. The operations related to loading the contract need to be marked by the file names here.

For example, if we emulate the ``deploy.ts` deployment script in the ``scripts` directory, we can execute the command to deploy the contract and call it directly from the console.
```typescript
var factory = await patract.getContractFactory('erc20'); // erc20 is the same as the filename
var contract = await factory.deployed('new', 10000000); // upload the code and instantiate this contract
```

If the address of a contract is known and you want to load the contract instance first you can do so by.

```typescript
var factory = await patract.getContractFactory('erc20'); // erc20 is the same as the filename
var contract = await factory.attach('16DHBsUan9GoedoTYJmbyBZJMmN39ZpKUPvYeAGMTXCgxLQe'); // load the contract address
```

At this point the `contract` object here is a well instantiated object. So subsequently you can use this `contract` object to interact with the contract directly, for example to call a transfer function.

```typescript
var ret = await contract.transfer("15Jbynf3EcRqdHV1K14LXYh7PQFTbp5wiXfrc4kbMReR9KxA", 100)
ret.events // print the information of events
```

If it is to get the result of executing a method via an rpc call.

```typescript
var ret = await contract.balanceOf("15Jbynf3EcRqdHV1K14LXYh7PQFTbp5wiXfrc4kbMReR9KxA")
ret.output.toString()
```

If this procedure is more fixed, the above commands can be written to a file in the `scripts` directory, e.g. named `scripts/do_something.ts`.

```typescript
var factory = await patract.getContractFactory('erc20');
var contract = await factory.deployed('new', 10000000); 
var ret = await contract.transfer("15Jbynf3EcRqdHV1K14LXYh7PQFTbp5wiXfrc4kbMReR9KxA", 100)
ret.events
```

A series of processes can then be automated using the following command.

```typescript
.load scripts/do_something.ts
```

So the console helper functions as follows.

! [](. /imgs/process.jpg)
