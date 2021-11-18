# Event Decorators
 
## Class Decorator
### @event  
#### Usage
Smart contracts can define events that can be emitted during contract execution, and third-party tools can use emitted events to query information about contract execution and status. Event fields must implement the Codec interface, they will be collected as event data, and the fields decorated by @topic will also serve as the index of the event.

> `@event` class currently does not supports inheritence

#### Example
```typescript
@event
class Transfer {
    @topic from: AccountId;
    @topic to: AccountId;

    value: u128;

    constructor(from: AccountId, to : AccountId, value: u128) {
        this.from = from;
        this.to = to;
        this.value = value;
    }
}
```

## Property Decorator
### @topic
#### Usage
- `@topic` can only be used underneath `@event` class
- The property decorated with `@topic` will generate an additional topic index. 
- There is a limit to the number of indexes for each event (the default maximum is four).

#### Example
```typescript
@topic from: AccountId;
```
