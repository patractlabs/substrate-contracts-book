# @redspot_known-types插件

## 背景信息

redspot known types是一个可以自动添加已知的链的types的插件。在polkadot中，添加types非常麻烦，必须手动添加，且不能自动生成，而且有时也要处理不同链的版本的兼容性问题。redspot known types 插件的出现就是为了解决不同链的types的问题。

大部分链都在polkadot apps上提交过types，所有 types 定义都在`@polkadot/apps-config`这个npm包里面，我们会部分引用`@polkadot/apps-config`中的types定义。但是`@polkadot/apps-config`缺少开发环境的types定义，我们会手动补充这一部分。目前支持的链有Canvas、Jupiter、Europa、Edgeware、Plasm和Clover。

如何使用插件？

1. 安装依赖。
    ```sh
    $ yarn add @redspot/known-types
    ```

2. 在`redspot.config.ts`中导入插件。
    ```javascript
    ...
    import "@redspot/known-types"
    ...
    export default {
      ...
    };
    ```

3. 然后尝试连接Canvas、Jupiter、Europa等链的网络，无需添加额外的types配置。

