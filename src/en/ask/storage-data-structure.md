# Storage

At present, in addition to the basic types, ask! provides SpreadStorableMap/SpreadStorableArray/PackedStorableMap/PackedStorableArray storage collection types for users to use.
Users can use it by importing `ask-lang`.

SpreadStorableMap storage provides a Map that stores K/V pairs dispersedly, while SpreadStorableArray storage provides an Array that stores array elements dispersedly.
PackedStorableMap storage provides a Map for packing and storing K/V pairs, while PackedStorableArray storage provides an Array for packing and storing the entire array.

SpreadStorableMap and PackedStorableMap only provide two storage methods. How to use them depends on the specific contract implementation, which mainly affects the storage performance.

The same applies to SpreadStorableArray/PackedStorableArray.

The general principle of use is: When you need to store a large amount of data, you should always use Spread; when you need to store a small amount of data and need to access most of the content (such as search/statistic logic), it may be better to choose Packed.
