# Basics

Ask! provides the `ask-lang` package, which includes the implementation of common storage types in contracts, the encapsulation of the underlying primitives of smart contracts, etc.

## Storage

### Built-in storage type

Ask! provides a version that supports Scale encoding and storage for the basic types of AS and standard library collections,
Including bool/i{8, 16, 32, 64, 128}/u{8, 16, 32, 64, 128}/string(String)/Array/Set/Map,
Corresponds to Bool/Int{8, 16, 32, 64, 128}/u{8, 16, 32, 64, 128}/ScaleString/ScaleArray/ScaleSet/ScaleMap.

When the basic types mentioned above are used in relevant positions in the contract code (but not including container types such as Array/Set/Map), Ask! It will be automatically converted to the corresponding Scale type (that is, automatic boxing/unboxing) during compile time.

You can import Bool via `ask-lang`.

```ts
import { Bool } from 'ask-lang';
```

### Define the storage type

Ask! provides `@storage` to decorate the class as a storage type.

```ts
@storage
class Storage {
    // Store a bool
    b: bool;
    // Store a number
    n: i32,
}
```

Ask! provides `@storage` to decorate the class as a storage type, and the fields in the storage type need to support  [Scale encoding](https://github.com/paritytech/parity-scale-codec).

### Initialize the storage type

We can initialize the stored value in the contract initialization constructor. The contract class must provide at least one initialization function decorated by `@constructor`. The example is as follows.

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

**Note** The default constructor `@constructor` must be public, otherwise a compilation error will appear. The parameters and return value of the contract function must be a basic type or a type that implements Codec encoding.

### Read the storage value

Ask!’s storage and contract can be declared separately, and it is also recommended that you declare them separately. The function declared in the contract class is the real external contract API, and storage is only the implementation details.

### Modify the storage value

Ask! provides the `mutates` property for the `@message` method, which defaults to `true`. When set to `false`, the method will refuse to modify the stored value at runtime.

### Events

Smart contracts can define events that can be emitted during contract execution, and third-party tools can use emitted events to query information about contract execution and status. Event fields must implement the `Codec` interface, they will be collected as event data, and the fields decorated by `@topic` will also serve as the index of the event.

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

When the `@event` class is instantiated, `deposit_event` is automatically called internally.

### Chain environment function

Ask! provides some classes whose methods provide APIs for the capabilities provided by the chain.

- Crypto: Provides APIs related to encryption.
- Gas: Provides APIs related to Gas.
- AccountId: Provides APIs related to accounts.
- Msg: Provides APIs related to messages.
