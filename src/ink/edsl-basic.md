# ink! eDSL基础元素

ink! eDSL设计的元素与Solidity的元素其实比较近似，因为Contracts Pallet的合约模型结构和EVM的合约模型就是比较近似的。

因此ink!的设计可以找到很多和Solidity相似的影子（Substrate 的 Runtime 设计同理）。后文描述ink特性时会尝试跟Solidity的特性进行对比，方便读者理解。

## eDSL 的元素

由ink!文档或ink!提供的example，代码可以看出，ink!在Contracts Pallet的模型上，同样提出了以下三点基础元素：

* `constructor`/`message`
* `storage`
* `event`

不过由于Rust过程宏的设计关系，可以看到ink!首先要求一个合约需要处于一个`mod`下，并且在这个`mod`的上面添加上`#[ink::contract]`宏：
```rust,ignore
#[ink::contract]
mod erc20 {
    // ...
}
```

这样，相当于告知ink!从这个mod里面的东西就是要依据ink的eDSL处理的部分。

### `#[ink::contract]`

因此当遇到宏`#[ink::contract]`，即表面这是在ink!所识别的“合约部分”。因此我们可以看到，很多`use xxx`的导入都会放到处于`#[ink::contract]`的`mod`作用域下。

并且当前ink!设计为，在一个`crate`包下，只能出现一个`#[ink::contract]`，因此代表着ink!认为一个合约的维度是以rust的`crate`为单位，即如果在同一个`crate`中，无论是在同一个文件（比如都在`lib.rs`下）或者是在不同的文件中定义了2个以上的被`#[ink::contract]`修饰的`mod`，例如：

```rust,ignore
#[ink::contract]
mod erc20 {
    // ...
}

#[ink::contract]
mod another_define {
    // ...
}
```
类比于solidity的：

```solidity,ignore
// a.sol 在同一个文件中定义多个 `contract`
contract A {

}
contract B {

}
```

那么在ink!的编译中会认为这种情况是非法的。

当然与之相对的，只要在当前`crate`中只有一个`#[ink::contract]`修饰的`mod`，其他`mod`该怎么正常使用就正常使用，**因此ink!修饰的合约`crate`依然可以很好的做好代码隔离，增强可读性和可维护性**。这个能力对于**维护大型复杂合约比较重要**，例如：

```rust,ignore
#[ink::contract]
mod erc20 {
    use crete::another_define::*;
}

mod another_define {
    // ...
}
```

例如如下实例：

```rust,ignore
mod fxck {
    use crate::erc20::Erc20;
    use ::ink_lang::Env; // 注意这里需要引入 `ink_lang::Env`
    impl Erc20 {
        pub fn tmp(&self) {
            self.env().caller(); // 
        }
    }
}

#[ink::contract]
mod erc20 {
    #[ink(storage)]
    pub struct Erc20 { ... }

    impl Erc20 {
        #[ink(constructor)]
        pub fn new(initial_supply: Balance) -> Self { ... }
        #[ink(message)]
        pub fn transfer(&mut self, initial_supply: Balance) -> Self {
            self.tmp(); // 调用在其他`mod`里定义的方法
        }
    }
}
```

这种模型可以做到一些在Solidity下做不到的代码隔离，增强可维护性。（因为Solidity的library只能用于纯函数计算）

总结而言，在ink!体系下：
* 一个合约以一个`crate`的单位，一个`crate`内只能出现一个`#[ink::contract]`定义；
* `#[ink::contract]`修饰的`mod`代表合约的内容，同时也代表了**合约的基础元素都必须定义到这个`mod`下**；
* 除`#[ink::contract]`修饰的`mod`以外的部分（其他`mod`，函数，类型）皆遵循rust的规则，可以做好良好的代码隔离提升可维护性；
* 实践中可以将`#[ink::contract]`修饰的`mod`当做合约的入口，将实现的逻辑分散到其他`mod`下。

以下使用“合约mod”表示被`#[ink::contract]`修饰的`mod`

### `storage`

在合约mod中，一定需要定义一个结构体，且这个结构体被`#[ink(storage)]`所修饰，表示定义了该合约的存储。

同时这个被`#[ink(storage)]`修饰的结构体定义，**也被视作一个可操作的合约实体**，因此所有与合约相关的资源，类型，操作都会**和这个结构体绑定在一起**，当在合约调用合约的情景中，被调用的合约的类型也由这个结构体来表示。

因此这个结构体可以理解为是合约实体。

> 虽然修饰`mod`的部分才是合约，但是因为`mod`在rust中只能代表作用域，因此为了实践使用，使用`#[ink(storage)]`修饰的结构体表示能够进行操作的合约实体。
>
> 在这种语境下，可以将`#[ink::contract]`修饰的`mod`理解为“开启了合约域”的概念，而`#[ink(storage)]`修饰的`stuct`是在这个合约域下的合约。

这里ink!定义的storage的概念和Solidity中定义“存储”的概念一致，表示定义在这里的属性即是最终写到**链上的状态**。一切合约逻辑编写的目的最后都是为了对这里定义的状态的修改。

不过由于当前ink!采用使用一个结构体来承载合约状态的方案，因此当前这个合约所有的状态都只能定义在这个结构体中。当合约设计得比较大，比较复杂的时候会导致这里的可维护性下降。

定义storage的示例如下：

```rust,ignore
#[ink(storage)]
pub struct Erc20 {
    /// Total token supply.
    total_supply: Lazy<Balance>,
    /// Mapping from owner to number of owned token.
    balances: StorageHashMap<AccountId, Balance>,
    /// Mapping of the token amount which an account is allowed to withdraw
    /// from another account.
    allowances: StorageHashMap<(AccountId, AccountId), Balance>,
}
```

被`#[ink(storage)]`修饰的结构体在后文统称为合约结构体。

这里尤其需要注意几个特性：

1. 在该合约结构体内定义的属性的类型必须是实现过`SpreadLayout`的类型（或者更准确说是实现了`PackedLayout`的类型，因为`PackedLayout`是继承于`SpreadLayout`的定义）：

    ```rust,ignore
    /// Types that can be stored to and loaded from the contract storage.
    pub trait SpreadLayout {
    }
    ```

    > 这里只能使用实现过这个trait的类型的理由很简单，因为storage和一般的类型不同，其必须含有“链”的信息在其中，因此不同的链的合约实现都必须有一个部分用于处理合约中的storage（即状态）的分配问题。
    > 
    > 例如Solidity在编译过程给实际上是按storage在合约中定义的上下顺序，做偏移分配该状态的key。这里实现过`SpredLayout`或者说`PackedLayout`类型的都会有一个近似的过程来进行状态的分配。

    ink!对于一般类型已经都做过基础实现，但是**对于集合类型（`Vec`，`HashMap`等）而言，由于合约的状态需要hook读写的过程**，因此无法对集合类型实现这个`trait`。所以在ink!中，对标准库中常用的集合类型重新全部做了一次实现，且位于`#[ink(storage)]`修饰的结构体的属性类型，**若使用集合类型时，必须使用ink!提供的集合类型**。

    > 由于Solidity比较简陋，因此Solidity定义的存储map是无法进行遍历的。（由Solidity设计的缺陷导致）
    > 
    > ink!在设计的这块的时候进一步做了很多事情，因此ink!提供的集合类型`Vec`，`BTreeMap`，`HashMap`等等都是**可以遍历**的。相较于Solidity能实现的功能而言是相当大的进步。

2. 即便基于以上的设计，嵌套集合类型依然很难实现（因为Substrate的状态结构采用了k/v模型）。因此在设计中还是只能尽量避免嵌套集合类型。如果一定需要嵌套集合类型，需要将嵌套的层次打平（flat），将第二层的key和第一层的key合并一起，使用元组替代（相当于Substrate Runtime中的`double_map`）

    ```Solidity,ignore
    // solidity
    contract A {
        mapping (uint => mapping (uint => uint))
    }
    ```

    在ink!中类似的代码应该为:
    
    ```rust,ignore
    #[ink(storage)]
    pub struct Erc20 {
        // 注意这里的key采用了元组 `(AccountId, AccountId)`
        allowances: StorageHashMap<(AccountId, AccountId), Balance>,
    }
    ```

3. storage中提供了一种`Lazy`的模型，允许开发者使用`Lazy`包裹一个类型，可以让状态数据在使用到的情况下再加载：

    ```rust,ignore
    /// A lazy storage entity.
    ///
    /// This loads its value from storage upon first use.
    ///
    /// # Note
    ///
    /// Use this if the storage field doesn't need to be loaded in some or most cases.
    #[derive(Debug)]
    pub struct Lazy<T>
    where
        T: SpreadLayout,
    {
        cell: LazyCell<T>,
    }
    ```

    使用方式：

    ```rust,ignore
    #[ink(storage)]
    pub struct Erc20 {
        /// Total token supply.
        total_supply: Lazy<Balance>,
    }
    ```

### `constructor`/`message`

`constructor`/`message`就是触发合约状态变更的入口函数。也就是说`constructor`/`message`即是合约状态的状态转换函数。

`constructor`/`message`只能修饰**合约结构体的方法**，不能用来修饰其他结构体的方法，或者其他纯函数。

在合约mod中，被`constructor`和`message`修饰的合约结构体的方法至少各有一个，若分别少于1个都会导致编译错误。

其中：
* `constructor` 即对应着 Solidity 合约中的构造函数。当合约被部署的时候（在Contracts Pallet中当前代表着从已上传的合约代码中做`instantiate`的过程），会触发对应构造函数的调用。

    > 这里需要强调，构造函数的调用与合约实例化是2个概念的事情，这个过程在ink!和Contracts Pallet的协调过程中**并非原子化**。因此会出现构造函数没有被调用，但是合约地址会生成，也可以正常调用这个未调用过构造函数的合约实例的情况。
    >
    > 典型的例子是在调用`instantiate`的时候传入的错误编码的参数。

* `message`即对应着 Solidity 合约中的 `public`/`external`等 的 call 方法。由于Rust可变/不可变方法的特性，`message`利用了**这个特性来表示这个方法是否会修改合约的状态**。

    因此若`message`修饰的方法是
    ```rust,ignore
    // 注意方法的第一个参数是`&self`
    #[ink(message)]
    pub fn total_supply(&self) -> Balance {
        *self.total_supply
    }
    ```

    则表示这个方法的调用不会修改状态（由rust语法所控制），和以太坊一致，这类方法多用于rpc调用返回一个合约的存储，或返回一些基于存储的计算结果。

    若修饰的是

    ```rust,ignore
    // 注意方法的第一个参数是 `&mut self`
    pub fn transfer(&mut self, to: AccountId, value: Balance) -> Result<()> {
        let from = self.env().caller();
        self.transfer_from_to(from, to, value)
    }
    ```

    则表示这个方法的调用会修改状态，因此这个方法如果是以交易调用被打包的形式被调用执行时，会触发状态的改变。若是以rpc调用时，表示是模拟执行了一次。

    同时在合约编译后会生成metadata.json（对应Solidity的ABI），在这个metadata中对于message部分会有一个`mutates`的字段来标示这个方法是否是可变的。

#### message的`selector`
Solidity对于合约方法的ABI的产生使用的是将方法名加上参数类型作为函数签名拼凑成为字符串然后做hash取前4字节。

```text
call = "func_name(param1_type,param2_type,...)"
bytes4(keccak256(call), a, b)
```

在ink!中这种让合约区分调用触发点的概念叫做`selector`。

由于rust不支持函数重载，因此在ink!中采用了比较简陋的设计，直接对函数名字的字符串做hash取前4字节：

```text
call = "func_name"
blake2_512(call)[0..4]
```

> 笔者认为这种设计造成了其他合约语言设计的困扰。因为rust不支持重载不代表别的语言不支持重载。当前Solang将Solidity编译到Wasm的过程后，想和ink!的metadata做兼容，互相调用就会出现问题。

另一方面`selector`也可以运行合约开发者自己定义的

```rust,json
#[ink(message, selector = "0xCAFEBABE")]
pub fn was_it_ten(&self) -> bool { ... }
```

#### message的`payable`

Solidity中对于方法会有一个`payable`的修饰符，用于表示这个方法可以接受一定金额。

因此在ink!中也提供`payable`来表示调用这个方法的同时是否可以附带转移一定的**本币的金额**。在ink!当前的设计中，若在调用一个非`payable`的message时同时附带了金额时，这个调用过程会认为是错误的。

默认情况下认为`paybale`是`false`的，只有当合约开发者指定了`payable`后才是`true`。

指定一个message是可调用的案例是：
```rust,json
#[ink(message, playable)]
pub fn was_it_ten(&self) -> bool { ... }
```

另一方面在metadata中，对于message部分会有一个`payable`的字段来标示这个方法是否是需要付费的。

### `event`

`event`的概念在状态机模型中其实并不是必须的。但是由于**区块链是一个异步系统**，因此在发送交易去触发状态变更后，并不能马上知道变更结果，只能依赖监听某个元素来判定执行结果。`event`便是在Solidity的阶段设计的元素，这个设计同样被继承到了Substrate Runtime中，以及ink!中。

> 笔者不觉得event是一个很好的设计，理论上有其他更好的方式，或者event的变种。event一定程度上会造成开发者的滥用。

ink!的`event`在Contracts Pallet中最后是通过`host function`将合约定义的event打印到了链的event当中。

ink!的event设计和Solidity相比就没有什么特别的地方了，不过由于是在Wasm中运行的合约，因此打印合约的event需要通过`host function`与链进行交互，因此调用的方式需要通过`env()`去调用。

```rust,ignore
Self::env().emit_event(...);
// or use
self.env().emit_event(...);
```