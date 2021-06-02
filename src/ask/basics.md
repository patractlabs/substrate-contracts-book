# Basic

Ask! 提供了 `ask-lang` 包，它包含了合约常用存储类型的实现，智能合约底层原语的封装等。

## 存储 Storage

### 内置存储类型

Ask! 为 AS 的基本类型和标准库集合提供了支持 Scale 编码和存储的版本，
包括 bool/i{8, 16, 32, 64, 128}/u{8, 16, 32, 64, 128}/string(String)/Array/Set/Map，
对应于 Bool/Int{8, 16, 32, 64, 128}/u{8, 16, 32, 64, 128}/ScaleString/ScaleArray/ScaleSet/ScaleMap。

当在合约代码相关位置使用了上述提到的基本类型（但不包括 Array/Set/Map 等容器类型），Ask！会在编译期自动转换为对应的 Scale 类型（即自动装箱/拆箱）。

可以通过`ask-lang`导入：

```ts
import { Bool } from 'ask-lang';
```

### 定义存储类型

Ask! 提供 `@storage` 来装饰类为存储类型:

```ts
@storage
class Storage {
    // Store a bool
    b: bool;
    // Store a number
    n: i32,
}
```

存储类型里的字段需要支持[`Scale`编码](https://github.com/paritytech/parity-scale-codec)。

### 初始化存储类型

我们可以在合约初始化构造函数里初始化存储值，合约类必须至少提供一个`@constructor`修饰的初始化函数。下面是一个示例：

```ts
@contract
class MyContract {
  num: i32;

  constructor() {
    this.num = 0;
  }

  @constructor
  init(num: i32): void {
    this.num = num;
  }
}
```

注意： 默认构造函数/`@constructor`必须是 public 的，否则会出现编译错误。

### 读取存储值

从之前的代码里可以看出来，Ask! 的存储和合约是可以分开声明的，我们也建议用户分开声明。合约类里声明的函数是真正对外的合约 API，而存储只是实现细节。

### 修改存储值

Ask! 为`@message`方法提供了`mutates`属性，默认为`true`。当设置为`false`时，该方法会在运行时拒绝修改存储值。

<!-- TODO -->

### 事件 Events

<!-- TODO -->

### 跨合约调用

<!-- TODO -->

### 合约测试

<!-- TODO -->

### 链环境函数

<!-- TODO: Crypto/Gas/Address/... -->