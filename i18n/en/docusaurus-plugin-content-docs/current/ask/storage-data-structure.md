# Storage

##  Background information

In addition to basic types, Ask! also provides `SpreadStorableMap`, `SpreadStorableArray`, `PackedStorableMap`, `PackedStorableArray` storage collection types. You can use these storage collections by importing `ask-lang`.

- `SpreadStorableMap` storage provides a map for distributed storage of K/V pairs, while `SpreadStorableArray` storage provides an array for distributed storage of array elements.
     `PackedStorableMap` storage provides a map for packing and storing K/V pairs, while `PackedStorableArray` storage provides an array for packing and storing the entire array.
- `SpreadStorableMap` and `PackedStorableMap` only provide two storage methods. How to use them depends on the specific contract implementation, which mainly affects the storage performance.
- The same applies to `SpreadStorableArray`/`PackedStorableArray`.

## Principles of use

- When large amounts of data need to be stored, `Spread` should be used.
- When you store a small amount of data and need to access most of the content, such as search or statistical logic, it may be better to choose `Packed`.

