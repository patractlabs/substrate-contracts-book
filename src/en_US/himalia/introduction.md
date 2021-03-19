# Himalia

Himalia is the general name of the SDK library of the pallet-contracts contract module built by Patract for a series of access chains in different languages. For Substrate, there are already some SDKs for access chains in different languages. However, due to the particularity of the `pallet-contracts` module, it is necessary to continue to build an SDK based on the access contract module on the SDK of the access chain. Its particularity is mainly manifested in:

* The deployment and invocation of the contract (including rpc invocation and transaction invocation) need to be based on the order and coding of the information provided by the contract's metadata.json (similar to Solidity's abi file), and the chain's metadata can only inform the chain's SDK There are methods such as `instantiate` and `call` of the contract module on this chain, and it is impossible to inform the call parameter information of a certain contract. Therefore, for contracts, it is necessary to build a function that can parse and support contract metadata.
* The event of the contract also needs to be parsed according to the metadata.json of the contract. Therefore, if you use the chain's SDK, you can only monitor the event of the contract module, but you cannot parse the content of the event. Therefore, it is necessary to provide the sdk of the contract to support event monitoring.
* The state (storage) of the contract is located in the subtree, and its key encoding and distribution method are inconsistent with the runtime. The code distribution method of the key stored in the contract is related to the contract language framework used by the contract (for example, the implementation of Ask! may be different from ink!), so it is necessary to implement corresponding storage analysis methods for different contract language frameworks. At the same time, this parsing process is also very dependent on the metadata provided by the contract itself.
* The developers of the contract are the majority of the project parties, and most of the chain developers are the project parties of the development chain. Therefore, there will be a big difference in the scenario of managing the private key. In many cases, the private key management related to chain high authority is the node itself, which is relatively small and has a high threshold, or in many cases it relies on multi-signature or voting control. However, there are a wide range of contract developers, and the quality of back-end security management is uneven. On the other hand, many contracts only have a private key to control. Therefore, in the invocation of contract modules, a solution with high security and low threshold is needed in terms of private key management. Therefore, the contract SDK can do special processing in these scenarios to reduce the threshold for the security management of contract developers.

Therefore, Himalia has a very important reason for existence. Himalia's positioning is similar to Web3J, Web3py, etc. in the Ethereum ecosystem.

## Project warehouse address

The contract SDKs in different languages ​​currently provided by Himalia have the following versions:

* go: https://github.com/patractlabs/go-patract
* python: https://github.com/patractlabs/py-patract
* java: Not yet implemented
* c#(.net): Not yet implemented