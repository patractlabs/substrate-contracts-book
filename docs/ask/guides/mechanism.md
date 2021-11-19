# Mechanism
Ask!'s design starting point is to use decorator to simplify the contract writing process and separate the logic of the contract from the contract runtime; at the same time, decorators are also used to generate the metadata.json file of the contract.

## Runtime
At the contract runtime layer, Ask! provides objects such as `AccountId`, `Block`, `Crypto`, `Gas`. These objects encapsulate the underlying logic and API calls, and provide upper-level semantics and methods for writing contracts and preprocessors. 

## Preprocessor
At the Preprocessor level, it needs to compile the written contract into the target contract WebAssembly bytecode.

## Compiler
From the perspective of the compiler, the work of Preprocessor is divided into the following steps 

1. Use `asc` to compile the contract into a Program object to obtain code syntax information.
  * The code is a program written in accordance with the contract structure, so the syntax information of the program can be obtained through compilation.

2. After the Program is compiled, the semantic information of the program can be obtained. By analyzing the decorators in the semantic information, the points in the contract that require code injection and the structural information of the contract can be obtained.
  * The `@contract` decorator indicates that the class is a contract entry.
  * The `@state` decorator indicates that the class property object is a contract storage object.
  * The `@message` decorator indicates that this method is a contract method that can be called externally as an RPC.
  * The `@constructor` decorator indicates that this is the method to instantiate the contract
  * The `@event` decorator indicates that this is the event class 
  * The `@topic` sub-decorator acts on a member variable of the class, which means that this variable can be filtered out on the chain. Its implementation is to store the hash of the topic variable in the topic buffer, and store all the variables in the data buffer, The value is then sent to the chain through the `seal_deposit_event` method.


3. For different decorators, obtain the relevant structural information that needs to generate the target contract code.
  * When a class contains the decorator `@contract`, such as:
   
  ``` typescript
    @contract
    class SolarSystem {
    }
  ```
  
Then `@constructor`:
    
  ```typescript 
    @constructor
    default(name: string = "Earth", radius: u32 = 6300, isdwarf: boolean = false): void {
        this.name = name;
        this.radius = radius;
        this.isdwarf = isdwarf;
    }
  ```

Through semantic information, the `FunctionPrototype` information of the default function can be obtained, and the description information `declaration` of the Function can be obtained by parsing the `FunctionPrototype` object. Then get the function information of `FunctionDef` such as methodName, method parameter list and return value.
  
  ```typescript
    export class FunctionDef {  
        private funcProto: FunctionPrototype;
        methodName: string = "";
             parameters: ParameterNodeDef[] = new Array();
         isReturnable: boolean = false;
         returnType: NamedTypeNodeDef | undefined;
    }
  ```

According to the exported `FunctionDef` information, the main.tpl (see below) is rendered through `Handlebar` to generate the deploy function. In the way of templates, you can easily adjust, deploy function structure and implementation.
    
  ```typescript
    export function deploy(): i32 {
      let {{contract.instanceName}} = new {{contract.className}}();
       {{#each contract.cntrFuncDefs}}
        const {{methodName}}Selector: u8[] = {{#selector methodName}}{{u8Arr}}{{/selector}};
              if (msg.isSelector({{methodName}}Selector)) {
          {{#neq parameters.length 0}}
          const fnParameters = new FnParameters(msg.data);
           {{/neq}}
        {{#each parameters}}
        let p{{_index}} = fnParameters.get<{{type.codecType}}>();
        {{/each}}
        {{../contract.instanceName}}.{{methodName}}({{#joinParams parameters}}{{/joinParams}}{{ctrDefaultVals}});
        }
      {{/each}}
      return 0;
    }
  ```

The deploy method obtained after rendering:

  ```typescript
    export function deploy(): i32 {
      let solarSystem = new SolarSystem();

     const defaultSelector: u8[] = [0xed,0x4b,0x9d,0x1b];
      if (msg.isSelector(defaultSelector)) {
        const fnParameters = new FnParameters(msg.data);
        let p0 = fnParameters.get<ScaleString>();
        let p1 = fnParameters.get<UInt32>();
        let p2 = fnParameters.get<Bool>();
        solarSystem.default(p0.toString(),p1.unwrap(),p2.unwrap());
      }
      return 0;
    }
  ```

In the same way, to obtain the method annotated as `@message`, obtain the method name, method parameter list and return value and other information by analyzing the `FunctionPrototype`, and generate the call distribution logic of the `call` entry function.
    
  * When a property is marked with `@state`. Need to get the field information in the class. By analyzing the `FieldPrototype` to obtain the field parameter name, field type and other information `FieldDef`, where storeKey is used to store the object key. The key will be generated by the blake2 hash.
   
  ```typescript
    export class FieldDef {
       protected fieldPrototype: FieldPrototype;
        layout: LayoutDef = new LayoutDef();
        name: string = "";
        type: NamedTypeNodeDef | null = null;
        storeKey: string = "";
        varName: string = "";
        path: string = "";
    }
  ```

The field needs to be packaged in this place. The original is TypeScript basic types, i8/u8, etc. need to be packaged into IInt8, Uint8 etc in codec, making it convenient to serialize and deserialize when storing and reading. Then generate getter/setter methods that meet the read and write requirements for each field. The same is generated by the `Handlebar` rendering template. The template is as follows:
  
  ```typescript
      class {{className}} {
        {{#each fields}}
        private {{varName}}: {{type.codecType}} | null = null;
          {{/each}}
          {{#each fields}}
          get {{name}}(): {{type.originalType}} {
            if (this.{{varName}} === null) {
              const st = new Storage<{{type.codecType}}>("{{storeKey}}");
              this.{{varName}} = st.load();
            }
            {{#eq type.codecType 'ScaleString'}}
            return this.{{varName}}!.toString();
            {{/eq}}
            {{#neq type.codecType 'ScaleString'}}
              return this.{{varName}}!.unwrap();
            {{/neq}}
          }
          set {{name}}(v: {{type.originalType}}) {
            this.{{varName}} = new {{type.codecType}}(v);
            const st = new Storage<{{type.codecType}}>("{{storeKey}}");
            st.store(this.{{varName}}!);
          }
          {{/each}}
        }
  ```

The generated code： 
     
  ``` typescript
      class Planets {
          private _name: ScaleString | null = null;
          private _radius: UInt32 | null = null;
        private _isdwarf: Bool | null = null;
          get name(): string {
            if (this._name === null) {
              const st = new Storage<ScaleString>("Planetsname");
              this._name = st.load();
            }
          return this._name!.toString();
          }
          set name(v: string) {
            this._name = new ScaleString(v);
            const st = new Storage<ScaleString>("Planetsname");
            st.store(this._name!);
          }
          get radius(): u32 {
            if (this._radius === null) {
              const st = new Storage<UInt32>("Planetsradius");
              this._radius = st.load();
            }
              return this._radius!.unwrap();
          }
          set radius(v: u32) {
            this._radius = new UInt32(v);
            const st = new Storage<UInt32>("Planetsradius");
            st.store(this._radius!);
          }
          get isdwarf(): boolean {
            if (this._isdwarf === null) {
              const st = new Storage<Bool>("Planetsisdwarf");
              this._isdwarf = st.load();
            }
          return this._isdwarf!.unwrap();
          }
          set isdwarf(v: boolean) {
            this._isdwarf = new Bool(v);
            const st = new Storage<Bool>("Planetsisdwarf");
            st.store(this._isdwarf!);
          }
        }
  ```

  * Expand all the decorators to generate the final contract file for compilation.

4. According to the contract structure information, the metadata.json file is generated through the template engine
   * According to different contract structure information, generate the code of each section in metadata.json. Generate the information of the `storage` field in metadata.json through the `@state` class property information; generate the information of the `messages` field through `@message`; Generate the information of the `constructor` field through `@constructor`. The code generation logic is completed by the `Handlebar` template engine. When the target code structure needs to be adjusted, you only need to adjust the template.

5. Compile the expanded contract file to generate the contract wasm bytecode.
   * Use `asc` to compile the expanded target code. Compile command: `asc --importMemory --initialMemory 2 --maximumMemory 16 --noExportMemory --runtime half --use abort= extension.ts -O2 -b target .wasm `, get the bytecode that can be run on the wasm virtual machine.

From the perspective of the contract developer, starting from calling the `ask` command, the workflow of the Preprocessor is as follows:
```text
                               +-------------+
                           +-->+metadata.json|
                           |   +-------------+
                           |
   +-----------------+     |
   | erc20.ts +-----|
   +-----------------+
                           |   +------------+       +------------+
                           +-->+extension/erc20.ts+------->erc20.wasm |
                               +------------+       +------------+
```