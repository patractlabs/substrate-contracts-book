# 存储

<!-- TODO: 原理描述 -->

## 背景信息

除了基本类型外，Ask!还提供了`SpreadStorableMap`、`SpreadStorableArray`、`PackedStorableMap`、`PackedStorableArray`存储集合类型，您可以通过导入`ask-lang` 来使用这些存储集合。

- `SpreadStorableMap`存储提供了一种分散存储K/V对的Map，而`SpreadStorableArray`存储则提供了分散存储数组元素的Array 。
  `PackedStorableMap`存储提供了打包存储K/V对的Map， 而`PackedStorableArray`存储则提供了打包存储整个数组的Array。
- `SpreadStorableMap`和`PackedStorableMap`只是提供了2种存储方式，如何使用它们取决于具体的合约实现，它主要影响存储的性能。

- `SpreadStorableArray`/`PackedStorableArray`同理。


## 使用原则

- 需要存储大量的数据时，应使用`Spread`。
- 存储较少规模的数据并且需要访问大部分内容时，例如查找或统计逻辑，选择`Packed`可能是更优的。

