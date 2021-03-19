# tutorial

> At present, Ask! has only carried out the development of the first phase of the Kusama Treasury bill. Therefore, it has not been released to public repositories such as npm.

## Simple start：

1. clone project

    ```bash
    $ git clone https://github.com/patractlabs/ask
    ```

2. example contract

    Some case contracts, such as `flipper`, `incrementer`, etc., are prepared in the Ask! project, under the `/example` directory. Developers can directly refer to these projects, or they can perform the following process by creating a new typescript file (*.ts). The final code of the following example process is located in the `/example/solar` directory.

    1. create file `solar.ts`
    2. define contract storage

        Ask! uses the annotation `@storage` to define the storage of a contract. This process is similar to the `#[ink(storage)]` macro in ink!. For example, in this case, we define the following three contract storage variables:

        ```typescript
        @storage
        class Planets {
            name: string;
            radius: u32;
            isdwarf: boolean;
        }
        ```

    3. Define the scope of the contract and callable methods:

        Ask! uses the `@contract` annotation to specify a class as the contract class. This process is similar to the `#[ink::contract]` macro in ink!.

        ```typescript
        @contract
        class SolarSystem {
            // ...
        }
        ```

        Ask! provides `@constructor` and `@message` annotations to modify the methods in the contract class, similar to `#[ink(constructor)]` and `#[ink(message)]` in ink!.

        ```typescript
        @contract
        class SolarSystem {
            @constructor
            default(name: string) void { /*...*/ }

            @message(mutates = false, selector = "0x0a0b0c0d")
            getRadius(): u32 { /*...*/ }
        }
        ```

    4. Compile the Ask! contract

        1. Installation dependent environment:

            Enter the root directory of the Ask! project and execute the command:

            ```bash
            $ npm install
            ```

        2. Compile

            Compile the contract in the **root directory** of the Ask! project. Assuming that the path of the current contract is located in `examples/solar/solar.ts` (developers can replace with the path of their own contract files), then the compilation command is:

            ```bash
            ./assembly/codegen/bin/ask examples/solar/solar.ts
            ```

            After executing this command, an extension file `extension.ts` will be generated in the contract file directory, and the compiled product of the contract is located in the `target` directory under the contract file directory.

        3. Test

            Developers can use the contract execution environment sandbox [Europa](../europa/introduction.md) provided by Patract to deploy and test contracts.

            After starting Europa, developers can deploy and call contracts in the `target` directory through [https://polkadot.js.org/apps]( https://polkadot.js.org/apps). This process is similar to Ink! The operation process of the contract is the same.
