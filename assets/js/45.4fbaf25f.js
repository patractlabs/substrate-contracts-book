(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{560:function(t,a,e){"use strict";e.r(a);var s=e(6),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[t._v("#")]),t._v(" 基础")]),t._v(" "),e("p",[t._v("Ask! provides the "),e("code",[t._v("ask-lang")]),t._v(" package, which contains the implementation of common storage types for contracts, and the encapsulation of the underlying primitives of smart contracts.")]),t._v(" "),e("h2",{attrs:{id:"storage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#storage"}},[t._v("#")]),t._v(" Storage")]),t._v(" "),e("h3",{attrs:{id:"built-in-storage-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#built-in-storage-type"}},[t._v("#")]),t._v(" Built-in storage type")]),t._v(" "),e("p",[t._v("When the basic types mentioned above are used in relevant positions in the contract code (but not including container types such as Array/Set/Map), Ask! It will be automatically converted to the corresponding Scale type (that is, automatic boxing/unboxing) during compile time.")]),t._v(" "),e("p",[t._v("It can be imported via "),e("code",[t._v("ask-lang")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Bool "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ask-lang'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"define-a-storage-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#define-a-storage-type"}},[t._v("#")]),t._v(" Define a storage type")]),t._v(" "),e("p",[t._v("Ask! provides "),e("code",[t._v("@storage")]),t._v(" to decorate the class as a storage type:")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[t._v("@storage\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Storage")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Store a bool")]),t._v("\n    b"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" bool"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Store a number")]),t._v("\n    n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" i32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("The fields in the storage type need to support "),e("a",{attrs:{href:"https://github.com/paritytech/parity-scale-codec",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("Scale")]),t._v(" encoding"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"initialize-storage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#initialize-storage"}},[t._v("#")]),t._v(" Initialize storage")]),t._v(" "),e("p",[t._v("We can initialize the stored value in the contract initialization constructor. The contract class must provide at least one initialization function decorated by "),e("code",[t._v("@constructor")]),t._v(". Here is an example:")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[t._v("@contract\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyContract")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  num"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" i32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("num "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  @"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" i32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("num "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" num"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Note: The default constructor/"),e("code",[t._v("@constructor")]),t._v(" must be public, otherwise a compilation error will occur. The parameters and return value of the contract function must be a basic type or a type that implements Codec encoding.")]),t._v(" "),e("h3",{attrs:{id:"read-the-storage-value"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#read-the-storage-value"}},[t._v("#")]),t._v(" Read the storage value")]),t._v(" "),e("p",[t._v("As can be seen from the previous code, the storage and contract of Ask! can be declared separately, and we also recommend that users declare separately. The function declared in the contract class is the real external contract API, and storage is only the implementation details.")]),t._v(" "),e("h3",{attrs:{id:"modify-the-storage-value"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#modify-the-storage-value"}},[t._v("#")]),t._v(" Modify the storage value")]),t._v(" "),e("p",[t._v("Ask! provides the "),e("code",[t._v("mutates")]),t._v(" property for the "),e("code",[t._v("@message")]),t._v(" method, which defaults to "),e("code",[t._v("true")]),t._v(". When set to "),e("code",[t._v("false")]),t._v(", the method will refuse to modify the stored value at runtime.")]),t._v(" "),e("h3",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),e("p",[t._v("Smart contracts can define events that can be emitted during contract execution, and third-party tools can use emitted events to query information about contract execution and status. Event fields must implement the "),e("code",[t._v("Codec")]),t._v(" interface, they will be collected as event data, and the fields decorated by "),e("code",[t._v("@topic")]),t._v(" will also serve as the index of the event.")]),t._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[t._v("@event\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Transfer")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  @topic\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" AccountId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  @topic\n  to"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" AccountId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  value"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" u128"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" AccountId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" to"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" AccountId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" u128"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("When the "),e("code",[t._v("@event")]),t._v(" class is instantiated, "),e("code",[t._v("deposit_event")]),t._v(" is automatically called internally.")]),t._v(" "),e("h3",{attrs:{id:"chain-environment-function"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chain-environment-function"}},[t._v("#")]),t._v(" Chain environment function")]),t._v(" "),e("p",[t._v("Ask! provides some classes whose methods provide APIs for the capabilities provided by the chain:")]),t._v(" "),e("ul",[e("li",[t._v("Crypto, provides encryption-related APIs")]),t._v(" "),e("li",[t._v("Gas, provides APIs related to Gas")]),t._v(" "),e("li",[t._v("AccountId provides APIs related to accounts")]),t._v(" "),e("li",[t._v("Msg provides APIs related to messages")])])])}),[],!1,null,null,null);a.default=n.exports}}]);