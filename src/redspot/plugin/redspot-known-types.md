# @redspot/known-types

redspot known types 是一个自动添加已知的链的 types 的插件。

在 polkadot 中，添加 types 是很麻烦的事，因为必须手动添加，而不能自动生成。而且有时候也要处理不同链的版本的兼容性问题。redspot known types 的目的就是为了解决不同链的 types 的问题。

大部分链都在 polkadot apps 上提交过 types，所有 types 定义都在 `@polkadot/apps-config` 这个 npm 包里面。所以我们会部分引用`@polkadot/apps-config` 中的 types 定义。但 `@polkadot/apps-config` 缺少开发环境的 types 定义。然后我们会手动补这一部分。目前支持的链有  Canvas, Jupiter, Europa，Edgeware, Plasm, Clover。

安装依赖：

```bash
$ yarn add @redspot/known-types
```

然后在 `redspot.config` 文件中，引入插件：

```javascript
...
import "@redspot/known-types"

...

export default {
  ...
};
```

现在尝试连接 Canvas, Jupiter, Europa 等链的网络，无需添加额外的 types 配置。