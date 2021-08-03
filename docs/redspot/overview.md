# 介绍

## Redspot 的架构

Redspot是围绕任务（Tasks）和插件（Plugins）的概念设计的。Redspot的大部分功能来自插件，你可按需选择要使用的插件。

## 任务

每次从terminal运行Redspot时，你都在运行任务。例如执行`npx redspot compile`命令是运行编译任务。 要查看项目中当前可用的任务，可运行`npx redspot`命令。 通过运行`npx redspot help [task]`可以查看任何任务的帮助信息。

## 插件

Redspot默认安装了一些插件，如果你需要手动安装或升级它们，请参见以下步骤。

例如安装@redspot/patract 和@redspot/chai插件。

1. 在项目根目录下执行以下命令。
```bash
yarn add @redspot/patract @redspot/chai
```
2. 在项目的目录中的redspot 配置文件`redspot.config.js`中导入插件。
```typescript
import { RedspotUserConfig } from 'redspot/types';
import '@redspot/patract';
import '@redspot/chai';
export default {
 ...
} as RedspotUserConfig;
```



