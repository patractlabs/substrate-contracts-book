(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{651:function(t,a,s){"use strict";s.r(a);var r=s(6),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"redspot-patract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redspot-patract"}},[t._v("#")]),t._v(" @redspot/patract")]),t._v(" "),s("p",[t._v("@redspot/patract 类似 @polkadot/contract，用于访问合约，发送交易等。但 @redspot/patract 的 api 要更加易于使用。")]),t._v(" "),s("p",[t._v("该插件会扩展 Redspot runtime environment ，并添加 patract 属性，可以这样访问 patract 实例：")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" patract "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'redspot'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("patract 的类型定义如下：")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Patract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Contract"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Contract"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  ContractFactory"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ContractFactory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * Generating Contract Instance from Contract Addresses\n   *\n   * @param contractName Contract name\n   * @param address contract address\n   * @param signer The account used to sign, or the first account in the user configured if it is undefined.\n   * @returns Contract Instance\n   */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContractAt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    contractName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    address"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" AccountId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    signer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Signer\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Contract"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * Return the contract factory\n   *\n   * @param contractName Contract name\n   * @param signer The account used to sign, or the first account in the user configured if it is undefined.\n   * @returns Contract Factory Instance\n   */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContractFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    contractName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    signer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Signer\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ContractFactory"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   *  Generate a random account and transfer token to it\n   *\n   * @param from This account will be transferred to the new account\n   * @param amount The amount transferred to the new account\n   * @returns New Account\n   */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRandomSigner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Signer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    amount"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BN")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" BigInt\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Signer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"getrandomsigner-from-amount-promise-signer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getrandomsigner-from-amount-promise-signer"}},[t._v("#")]),t._v(" "),s("code",[t._v("getRandomSigner(from, amount): Promise<Signer>")])]),t._v(" "),s("p",[t._v("getRandomSigner 是一个工具函数，用于创建生成随机的 signer，并且从 from 传递一些初始的金额给它。")]),t._v(" "),s("h3",{attrs:{id:"getcontractfactory-contractname-signer-promise-contractfactory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getcontractfactory-contractname-signer-promise-contractfactory"}},[t._v("#")]),t._v(" "),s("code",[t._v("getContractFactory(contractName, signer?): Promise<ContractFactory>")])]),t._v(" "),s("p",[t._v("该函数将通过合约名字和 signer ，创建一个 contractFactory 的实例。")]),t._v(" "),s("p",[t._v("注意合约必须已编译成功。能够在 artifacts 找到对于的 metadata 文件。")]),t._v(" "),s("h3",{attrs:{id:"getcontractat-contractname-address-signer-promise-contract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getcontractat-contractname-address-signer-promise-contract"}},[t._v("#")]),t._v(" "),s("code",[t._v("getContractAt(contractName, address, signer): Promise<Contract>")])]),t._v(" "),s("p",[t._v("通过合约名字，合约地址和 signer，创建一个 Contract 实例。")]),t._v(" "),s("p",[t._v("注意合约必须已编译成功。能够在 artifacts 找到对于的 metadata 文件。")]),t._v(" "),s("h2",{attrs:{id:"contractfactory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contractfactory"}},[t._v("#")]),t._v(" ContractFactory")]),t._v(" "),s("p",[t._v("ContractFactory 主要用于合约的部署：")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" patract "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'redspot'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getContractFactory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" getRandomSigner "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" patract"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" signers "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSigners")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" contractFactory "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContractFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'erc20'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" signers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" contract "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" contractFactory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'new'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1000'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"new-contractfactory-address-contractmetadata-api-signer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-contractfactory-address-contractmetadata-api-signer"}},[t._v("#")]),t._v(" "),s("code",[t._v("new ContractFactory(address, contractMetadata, api, signer)")])]),t._v(" "),s("p",[t._v("通过合约地址，metadata，api 和 signer 创建一个 contractFactory 实例。")]),t._v(" "),s("h3",{attrs:{id:"contractfactory-deploy-constructororid-args-overrides-promise-contract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contractfactory-deploy-constructororid-args-overrides-promise-contract"}},[t._v("#")]),t._v(" "),s("code",[t._v("contractFactory.deploy(constructorOrId, ...args[ , overrides ]): Promise<Contract>")])]),t._v(" "),s("p",[t._v("constructorOrId 是需要调用的合约的 contructor 的名字，注意对于一些使用了 "),s("code",[t._v("trait")]),t._v(" 的合约，contructor 的名字应该是类似这样：")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" contract "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" contractFactory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'baseErc20,new'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1000'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("args 是你所使用的 contructor 需要传入参数列表。")]),t._v(" "),s("p",[t._v("overrides 是可选项，可以用于指定 gasLimit, value, signer, salt 等。")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" contract "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" contractFactory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'baseErc20,new'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1000'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  gaslimit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1000000000000000000'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  salt"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jkqwezlkwklqreqw'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  signer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" signers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3213321000000000000000000'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("gasLimit 指这次交易能够使用的最大的 gas 值。")]),t._v(" "),s("p",[t._v("salt 用于合约的地址的生成。部署人，部署参数和 salt 一致的话，将会生成同一个合约地址。")]),t._v(" "),s("p",[t._v("signer 创建 contractFactory 时，会有一个 signer 参数，用于默认的交易签名。 signer 项目可以覆盖默认的签名账户。")]),t._v(" "),s("p",[t._v("value 指传递给即将创建的合约的金额。")]),t._v(" "),s("p",[t._v("请注意，"),s("code",[t._v("@redspot/patract")]),t._v(" 不会处理数字金额精度，需要用户自行处理。")]),t._v(" "),s("h3",{attrs:{id:"contractfactory-deployed-constructororid-args-overrides-promise-contract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contractfactory-deployed-constructororid-args-overrides-promise-contract"}},[t._v("#")]),t._v(" "),s("code",[t._v("contractFactory.deployed(constructorOrId, ...args[ , overrides ]): Promise<Contract>")])]),t._v(" "),s("p",[t._v("该方法和 "),s("code",[t._v("contractFactory.deploy")]),t._v(" 类似，唯一的区别是，"),s("code",[t._v("deployed")]),t._v(" 会预先检查即将生成的合约地址是否存在，如果存在不会去尝试部署，而是直接使用该合约地址创建 "),s("code",[t._v("Contract")]),t._v(" 实例。")]),t._v(" "),s("h3",{attrs:{id:"contractfactory-instantiate-constructororid-args-overrides-promise-contractaddress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contractfactory-instantiate-constructororid-args-overrides-promise-contractaddress"}},[t._v("#")]),t._v(" "),s("code",[t._v("contractFactory.instantiate(constructorOrId, ...args[ , overrides ]): Promise<ContractAddress>")])]),t._v(" "),s("p",[t._v("如果 wasm 已上传到链上，你可以直接调用 "),s("code",[t._v("contractFactory.instantiate")]),t._v(" 实例化合约。它的参数与 "),s("code",[t._v("deploy")]),t._v(" 一致，但返回的是合约地址。")]),t._v(" "),s("h3",{attrs:{id:"contractfactory-instantiate-constructororid-args-overrides-promise-contractaddress-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contractfactory-instantiate-constructororid-args-overrides-promise-contractaddress-2"}},[t._v("#")]),t._v(" "),s("code",[t._v("contractFactory.instantiate(constructorOrId, ...args[ , overrides ]): Promise<ContractAddress>")])]),t._v(" "),s("p",[t._v("如果 wasm 已上传到链上，你可以直接调用 "),s("code",[t._v("contractFactory.instantiate")]),t._v(" 实例化合约。它的参数与 "),s("code",[t._v("deploy")]),t._v(" 一致，但返回的是合约地址。")]),t._v(" "),s("h3",{attrs:{id:"contractfactory-attach-address-contract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contractfactory-attach-address-contract"}},[t._v("#")]),t._v(" "),s("code",[t._v("contractFactory.attach(address)：Contract")])]),t._v(" "),s("p",[t._v("使用指定的合约地址生成 "),s("code",[t._v("Contract")]),t._v(" 实例")]),t._v(" "),s("p",[t._v("####"),s("code",[t._v("contractFactory.connect(signer)：contractFactory")])]),t._v(" "),s("p",[t._v("使用指定的 signer，创建一个新的 contractFactory 实例")]),t._v(" "),s("h2",{attrs:{id:"contract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contract"}},[t._v("#")]),t._v(" Contract")]),t._v(" "),s("h3",{attrs:{id:"new-contract-address-contractmetadata-api-signer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-contract-address-contractmetadata-api-signer"}},[t._v("#")]),t._v(" "),s("code",[t._v("new Contract(address, contractMetadata, api, signer)")])]),t._v(" "),s("p",[t._v("通过合约地址，合约的 metadata，api 和 signer 创建一个 contractFactory 实例。")]),t._v(" "),s("h3",{attrs:{id:"contract-query-messagename-args-overrides"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contract-query-messagename-args-overrides"}},[t._v("#")]),t._v(" "),s("code",[t._v("contract.query.MessageName(...args[, overrides])")])]),t._v(" "),s("p",[t._v("与 polkadotjs 中类似， contract.query[MessageName] 能够调用 "),s("code",[t._v("contracts.call")]),t._v(" rpc。如在 erc20 合约中，获取账户余额：")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" contract"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("balanceOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("someaddress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("返回值的类型如下：")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ContractCallOutcome")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  debugMessage"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  gasConsumed"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" u64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  output"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Codec "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  result"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ContractExecResultResult"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("它和 polkadotjs api-contract 中是一致。")]),t._v(" "),s("p",[t._v("overrides 是可选项，可以用于指定 gasLimit, value 等。")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" contract "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" contract"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("balanceOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'baseErc20,new'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1000'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tgasLimit："),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1231231231233123123'")]),t._v("\n  value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3213321000000000000000000'")]),t._v("\n  signer： signers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("gasLimit value 指的是 "),s("code",[t._v("contracts.call")]),t._v(" rpc 中的 gasLimit 和 value 。signer 可以指定 "),s("code",[t._v("contracts.call")]),t._v(" 的 origin 地址。")]),t._v(" "),s("h3",{attrs:{id:"contract-estimategas-messagename-args-overrides"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contract-estimategas-messagename-args-overrides"}},[t._v("#")]),t._v(" "),s("code",[t._v("contract.estimateGas.MessageName(...args[, overrides])")])]),t._v(" "),s("p",[t._v("该函数与 "),s("code",[t._v("contract.query.MessageName")]),t._v(" 类似，但返回值是预估将要消耗的 gas")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" contract"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("estimateGas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("balanceOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("someaddress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nresult"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// BN(232130000000)")]),t._v("\n")])])]),s("h3",{attrs:{id:"contract-tx-messagename-args-overrides"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contract-tx-messagename-args-overrides"}},[t._v("#")]),t._v(" "),s("code",[t._v("contract.tx.MessageName(...args[,overrides])")])]),t._v(" "),s("p",[t._v("通过 "),s("code",[t._v("contract.tx.MessageName")]),t._v(" 可以执行合约的交易。 如：")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" contract"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("transfer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("someddress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("和 polkadotjs 不同，该函数会返回一个 promise ， 会等到 交易上链，或者出错才被 resolved。")]),t._v(" "),s("p",[t._v("返回值类型如下：")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TransactionResponse")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  txHash"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  blockHash"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  error"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    message"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  result"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" SubmittableResult"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  events"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" DecodedEvent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DecodedEvent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  args"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Codec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  event"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" AbiEvent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("你可以直接通过 "),s("code",[t._v("result.events")]),t._v(" 获取已解析的合约的事件。如果执行出错，你可以通过 "),s("code",[t._v("result.error.message")]),t._v(" 获取错误信息。")]),t._v(" "),s("p",[t._v("overrides 是可选项，可以用于指定 gasLimit，value，signer 等。")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" contract "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" contract"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("transfer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("someddress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  gasLimit："),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1231231231233123123'")]),t._v("\n  value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3213321000000000000000000'")]),t._v("\n  signer： signers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("ggasLimit 指这次交易能够使用的最大的 gas 值。")]),t._v(" "),s("p",[t._v("value 指传递给即将创建的合约的金额。")]),t._v(" "),s("p",[t._v("signer 用于覆盖默认的 signer。")]),t._v(" "),s("h3",{attrs:{id:"contract-attach-address-contract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contract-attach-address-contract"}},[t._v("#")]),t._v(" "),s("code",[t._v("contract.attach(address)：Contract")])]),t._v(" "),s("p",[t._v("使用指定的合约地址生成 "),s("code",[t._v("Contract")]),t._v(" 实例")]),t._v(" "),s("h3",{attrs:{id:"contract-connect-signer-contractfactory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contract-connect-signer-contractfactory"}},[t._v("#")]),t._v(" "),s("code",[t._v("contract.connect(signer)：contractFactory")])]),t._v(" "),s("p",[t._v("使用指定的 signer，创建一个新的 contract 实例")])])}),[],!1,null,null,null);a.default=n.exports}}]);