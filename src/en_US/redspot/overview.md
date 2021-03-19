## Introduction

## Redspot's architecture
Redspot is designed around the concept of Tasks and Plugins. most of Redspot's functionality comes from plugins, and as a developer you are free to choose which plugins you want to use.

### Tasks 
Every time you run Redspot from the cli, you are running a task. For example, executing the command `npx redspot compile` is running a compile task. To see what tasks are currently available in your project, run `npx redspot`. You can see help for any task by running `npx redspot help [task]`.

### Plugins 
Redspot has some plugins installed by default, if you need to install or upgrade them manually, please follow these steps.

For example, if you want to install the `@redspot/patract` and `@redspot/chai` plugins, go to the project root directory and follow these commands to install them

```bash
yarn add @redspot/patract @redspot/chai
```

In the redspot configuration file ``redspot.config.js`` in the project's directory, add

```typescript
import { RedspotUserConfig } from 'redspot/types';
import '@redspot/patract';
import '@redspot/chai';

export default {
 ...
} as RedspotUserConfig;
```