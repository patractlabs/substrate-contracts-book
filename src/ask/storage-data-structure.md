# 存储

<!-- TODO: 原理描述 -->

目前除了基本类型外，ask! 提供了 SpreadStorableMap/SpreadStorableArray/PackedStorableMap/PackedStorableArray 存储集合类型供用户使用。
用户可以通过导入`ask-lang` 来使用。

SpreadStorableMap 存储提供了一种分散存储 K/V 对的 Map，而 SpreadStorableArray 存储则提供了分散存储数组元素的 Array 。
PackedStorableMap 存储提供了打包存储 K/V 对的 Map， 而 PackedStorableArray 存储则提供了打包存储整个数组的 Array。
