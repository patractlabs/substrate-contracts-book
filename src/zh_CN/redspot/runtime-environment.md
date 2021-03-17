# Runtime Environment

The RedSpot runtime environment(RSE) contains all the functionality that Redspot exposes when running a task, test or script.

When you require Redspot (`const redspot = require("redspot")`) you're getting an instance of the RSE.

During initialization, the Redspot configuration file essentially constructs a list of things to be added to the RSE. This includes tasks, configs and plugins. Then when tasks, tests or scripts run, the RSE is always present and available to access anything that is contained in it.

The RSE has a role of centralizing coordination across all Redspot components. This architecture allows for plugins to inject functionality that becomes available everywhere the RedSpot runtime environment is accessible.

## Using the RSE 
By default, the RSE gives you programmatic access to the task runner and the config system, and exports a Provider that is compatible with Polkadot WsProvider

Plugins can extend the RSE. For example, `@redspot/patract` adds a api instance to it, making it available to tasks, tests and scripts.

When writing tests or scripts, you can use `require("redspot")` to import the RSE. You can read more about this in Accessing the RSE from outside a task.

## Accessing the RSE from outside a task 
The RSE can be used from any JavaScript or TypeScript file. To do so, you only have to import it with `require("redspot")`. You can do this to keep more control over your development workflow, create your own tools, or to use Redspot with other dev tools from the node.js ecosystem.

Running test directly with Mocha instead of npx redspot test can be done by explicitly importing the RSE in them like this:

```typescript
const rse = require("redspot");
const assert = require("assert");

describe("Redspot Runtime Environment", function () {
  it("should have a config field", function () {
    assert.notEqual(rse.config, undefined);
  });
});
```

This way, tests written for Redspot are just normal Mocha tests. This enables you to run them any way you like without the need of any Redspot-specific plugin.

## Extending the RSE 
Redspot lets you hook into the RSE construction, and extend it with new functionality. This way, you only have to initialize everything once, and your new features or libraries will be available everywhere the RSE is used.

You can do this by adding a RSE extender into a queue. This extender is just a synchronous function that receives the RSE, and adds fields to it with your new functionality. These new fields will also get injected into the global scope during runtime.

For example, adding an instance of Polkadot.js to the RSE can be done in this way:

```typescript
const { extendEnvironment } = require("redspot/config");

extendEnvironment((rse) => {
  const { ApiPromise } = require("@polkadot/api");
  rse.api = api;

  rse.api = new ApiPromise();
});
```

### `rse.config`
Config contains configuration options for the user config file and default options for RedSpot. For example, if you want to get the current default network:

```typescript
const rse = require("redspot");

console.log(rse.config.defaultNetwork);
```

### rse.network 
Network Contains information about the network you are currently running.

### rse.network.name 
The name of the network being used.

### rse.network.config 
A configuration item for the network being used. It is equivalent to `rse.config.networks.[rse.network.name]`.

### rse.network.provider 
The Provider for polkadot network. It derived from Polkadot.js WsProvider.

### rse.network.provider.registry 
TypeRegistry of Polkadot.js, which has registered the configured types

### rse.network.provider.getKeyringPairs() ⇒ Promise<KeyringPair[]> 
Gets the accounts that you configure for the network. These accounts will be resolved to the [`KeyringPair`](https://polkadot.js.org/docs/keyring/start/create/#adding-a-pair)
