# 基础

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

注意： 默认构造函数/`@constructor`必须是 public 的，否则会出现编译错误。 合约函数的参数和返回值必须是基本类型或者实现Codec编码的类型。

### 读取存储值

从之前的代码里可以看出来，Ask! 的存储和合约是可以分开声明的，我们也建议用户分开声明。合约类里声明的函数是真正对外的合约 API，而存储只是实现细节。

### 修改存储值

Ask! 为`@message`方法提供了`mutates`属性，默认为`true`。当设置为`false`时，该方法会在运行时拒绝修改存储值。

<!-- TODO -->

### Events

智能合约可以定义在合约执行期间可以发出的事件，第三方工具可以使用发出事件来查询有关合约执行和状态的信息。Event 的字段必须实现`Codec`接口，它们会作为 event data 被收集起来，而 `@topic` 装饰的字段还会作为事件的索引。

### Example

```ts
@event
class Transfer {
  @topic
  from: AccountId;
  @topic
  to: AccountId;

  value: u128;

  constructor(from: AccountId, to: AccountId, value: u128) {
    this.from = from;
    this.to = to;
    this.value = value;
  }
}
```

当实例化`@event`类时，内部会自动调用`deposit_event`。

### 跨合约调用

### 链环境函数

<!-- TODO: Crypto/Gas/Address/... -->