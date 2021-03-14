# 介绍

## Redspot 的架构
Redspot是围绕任务（Tasks）和插件（Plugins）的概念设计的。Redspot的大部分功能来自插件，作为开发人员，您可以自由选择要使用的插件。

### Tasks 
每次从cli运行Redspot时，您都在运行任务。例如执行命令 `npx redspot compile` 是运行编译任务。 要查看项目中当前可用的任务，请运行`npx redspot`。 通过运行`npx redspot help [task]`可以查看任何任务的帮助。

### Plugins 
Redspot默认情况下安装了一些插件，如果您需要手动安装或升级它们，请按照以下步骤操作。

例如希望安装`@redspot/patract` 和 `@redspot/chai` 插件，进入项目根目录后按照以下命令可以安装

```bash
yarn add @redspot/patract @redspot/chai
```

在项目的目录中的redspot 配置文件`redspot.config.js`中添加

```typescript
import { RedspotUserConfig } from 'redspot/types';
import '@redspot/patract';
import '@redspot/chai';

export default {
 ...
} as RedspotUserConfig;
```