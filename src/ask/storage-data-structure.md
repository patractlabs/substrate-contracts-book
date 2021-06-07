# 存储

<!-- TODO: 原理描述 -->

目前除了基本类型外，ask! 提供了 SpreadStorableMap/SpreadStorableArray/PackedStorableMap/PackedStorableArray 存储集合类型供用户使用。
用户可以通过导入`ask-lang` 来使用。

SpreadStorableMap 存储提供了一种分散存储 K/V 对的 Map，而 SpreadStorableArray 存储则提供了分散存储数组元素的 Array 。
PackedStorableMap 存储提供了打包存储 K/V 对的 Map， 而 PackedStorableArray 存储则提供了打包存储整个数组的 Array。

SpreadStorableMap 和 PackedStorableMap 只是提供了 2 种存储方式，如何使用取决于具体的合约实现，它主要影响存储的性能。

SpreadStorableArray/PackedStorableArray 同理。

总体使用原则是：需要存储大量的数据时，总是应该使用 Spread；存储较少规模的数据并且需要访问大部分内容时（如查找/统计逻辑），选择 Packed 可能是更优的。
