# Introduction

## **Redspot's architecture**

Redspot is designed around the concept of Tasks and Plug-ins. Most of Redspot's functions come from plug-ins, and you can choose which plug-in you want to use according to your needs.

### **Tasks**

Every time you run Redspot from the terminal, you are running tasks. For example, executing the `npx redspot compile` command is to run the compilation task. To view the tasks currently available in the project, run the `npx redspot`  command. You can view the help information of any task by running `npx redspot help [task]`.

### **Plug-in**

Redspot installs some plug-ins by default. If you need to install or upgrade them manually, please refer to the following steps.

For example, install @redspot/patract and @redspot/chai plug-ins.

1. Execute the following command in the project root directory.
```sh
yarn add @redspot/patract @redspot/chai
```

2. Import the plug-in in the redspot configuration file redspot.config.js in the project directory.
```typescript
import { RedspotUserConfig } from 'redspot/types';
import '@redspot/patract';
import '@redspot/chai';
export default {
 ...
} as RedspotUserConfig;
```

