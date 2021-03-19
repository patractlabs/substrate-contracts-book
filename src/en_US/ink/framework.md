# ink! Framework

All the main functions of ink! are implemented in the [`ink/crates`](https://github.com/paritytech/ink/tree/master/crates) directory:

* crates:
    * allocator: related to Wasm, define allocator, developers do not need to care in most cases
    * env: Provides components that interact with the chain. In summary, the parts related to the chain will be placed here, including
        * host function part
        * Some types and trait definitions that need to be imported
        * topic of event
    * lang: The definition component of the eDSL process macro, the contract specification is determined by this place
    * metadata: components that generate metadata
    * prelude: A package that needs to be imported in advance during the contract writing process, including some standard libraries
    * primitives: pointers to operating state storage, developers do not need to care in most cases
    * storage: provide chain storage allocation model and provide some predefined storage collection types