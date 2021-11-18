# Cross Contract Calling

Assume that the following contract A already exists on the chain.
```typescript
@contract
class Libadd {
  constructor() {}

  @constructor
  default(): void {}

  @message(mutates = false)
  add(a: i32, b: i32): i32 {
    return a + b;
  }
}
```
If you want to call the contract in contract B, you can declare a @dynamic class to describe its interface.
```typescript
@dynamic
export class Libadd {
  // Note that the method experience here will be covered by the actual code, this writing is mainly for compiling
  add(a: i32, b: i32): i32 {
    return 0;
  }
}

@contract
class LibaddCaller {
  constructor() {}

  @constructor
  default(): void {}

  @message(mutates = false)
  callAddFromExternal(outAddress: AccountId, a: i32, b: i32): i32 {
    let outContract = new Libadd(outAddress);
    let val = outContract.add(a, b);
    return val;
  }
}
```
outAddress here is the instance address of contract Libadd.

This function can also call contracts written in other smart contract languages, such as ink!, as long as it follows the compatible metadata.json specification.