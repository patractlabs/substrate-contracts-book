# @redspot_explorer plug-in

## What 

The purpose of this plugin is to replace polkadot apps and canvas-ui during contract development.

## Installation

```
$ yarn add @redspot/explorer
```
Add this to your `redspot.config.ts`:
```typescript
import "@redspot/explorer"
```

## Usage
Run edspot explorer.
```bash
npx redspot explorer
```

**Note** When running redspot explorer, a service will be started locally, please do not terminate the process. And, every time redspot.config changes, please restart the service manually.

Open the [default website](http://127.0.0.1:8011)

For detailed usages, please refer [Redspot Explorer](../guides/explorer.md)