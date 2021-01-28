# ink! 框架
ink!的所有主体功能都实现于｀ink/creates｀目录下：

* crates:
    * allocator：与Wasm相关，定义allocator，开发者绝大部分情况下无需关心
    * env：提供和链相交互的组件，总结来说就是和链相关的部分都会放在这里，包含
        * host function 部分
        * 部分需要导入的类型、trait定义
        * event 的topic
    * lang：eDSL过程宏的定义组件，合约的规范由这个地方决定
    * metadata：生成metadata的组件
    * prelude：合约编写过程中需要预先导入的包，包含一些标准库
    * primitives：操作Memory的指针，开发者绝大部分情况下无需关心
    * storage：提供链存储的分配模型以及提供一些预定义好的存储集合类型