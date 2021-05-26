# Ask! 装饰器

Ask! 提供了一组装饰器来实现智能合约，通过传递参数对象来配置装饰器的行为。目前装饰器注意分为两层：类装饰器和字段装饰器，字段装饰器必须正确匹配相应的类装饰器。

当使用的装饰器不加参数时，可以省略小括号`()`。

## @contract

类装饰器

装饰的类会自动成为智能合约一个实例。其子字段支持 `@constructor` 和 `@message` 装饰器装饰。

## @constructor

字段装饰器

该装饰器用于 `@contract` 的非静态 `public` 方法，该方法不允许返回值（即返回类型为 `void`）。装饰的方法作为该合约的一个初始化构造方法。一个合约至少需要定义一个`@constructor`方法。

`@constructor`方法是在合约实例化时可执行的。合约可以定义多个构造方法，允许合约的用户以多种不同的方式实例化合约。

合约构造方法默认为 `payable = true` 和 `mutates = true`，并且值不可修改。

### Example

```ts
@contract
class Flipper {
  private stored: Stored;

  constructor() {
    this.stored = new Stored();
  }

  @constructor
  init(initFlag: bool): void {
    this.stored.flag = initFlag;
  }

  // ...
}
```

## @message

字段装饰器

该装饰器用于 `@contract` 的 非静态 `public` 方法。装饰的方法作为合约的消息 API 供用户调用该合约。一个合约至少需要定义一个`@constructor`方法或者继承了其他合约。

`@message`方法是在合约执行的被调用的。合约可以定义多个消息方法。消息方法的返回值会返回给用户，因此需要实现`Codec`接口。如果你需要返回一些集合类型，那么需要使用 ask! 提供的一些实现 `Codec` 接口的集合类型。

<!-- TODO: 确认下默认值 -->

合约消息方法默认 `payable = true` 和 `mutates = true`，当配置为`true`时，合约会在运行时做相应的检查。

### Example

```ts
@contract
class Flipper {
  private stored: Stored;
  constructor() {
    this.stored = new Stored();
  }

  @constructor
  default(initFlag: bool): void {
    this.stored.flag = initFlag;
  }

  @message
  flip(): void {
    const v = this.stored.flag;
    this.stored.flag = !v;
  }

  @message(mutates = false)
  get(): bool {
    return this.stored.flag;
  }
}
```

<!-- TODO: 确认下storage生成逻辑 -->

<!-- ## @storage

类装饰器 -->

## @event

类装饰器

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

## @topic

字段装饰器

`@topic` 装饰的属性字段，会额外生成一个主题索引。每个事件的索引是有数量限制的（默认最大为 4 个）。

<!-- ## @dynamic

类装饰器 -->
