# 基础

Ask! provides the `ask-lang` package, which contains the implementation of common storage types for contracts, and the encapsulation of the underlying primitives of smart contracts.

## Storage

### Built-in storage type

When the basic types mentioned above are used in relevant positions in the contract code (but not including container types such as Array/Set/Map), Ask! It will be automatically converted to the corresponding Scale type (that is, automatic boxing/unboxing) during compile time.

It can be imported via `ask-lang`:

```ts
import { Bool } from 'ask-lang';
```

### Define a storage type

Ask! provides `@storage` to decorate the class as a storage type:

```ts
@storage
class Storage {
    // Store a bool
    b: bool;
    // Store a number
    n: i32,
}
```

The fields in the storage type need to support [`Scale` encoding](https://github.com/paritytech/parity-scale-codec).

### Initialize storage

We can initialize the stored value in the contract initialization constructor. The contract class must provide at least one initialization function decorated by `@constructor`. Here is an example:

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

Note: The default constructor/`@constructor` must be public, otherwise a compilation error will occur. The parameters and return value of the contract function must be a basic type or a type that implements Codec encoding.

### Read the storage value

As can be seen from the previous code, the storage and contract of Ask! can be declared separately, and we also recommend that users declare separately. The function declared in the contract class is the real external contract API, and storage is only the implementation details.

### Modify the storage value

Ask! provides the `mutates` property for the `@message` method, which defaults to `true`. When set to `false`, the method will refuse to modify the stored value at runtime.

<!-- TODO -->

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

Ask! provides some classes whose methods provide APIs for the capabilities provided by the chain:

- Crypto, provides encryption-related APIs
- Gas, provides APIs related to Gas
- AccountId provides APIs related to accounts
- Msg provides APIs related to messages
