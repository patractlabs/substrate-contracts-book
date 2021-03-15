# Tutorial
Elara's  APIs require a valid Project Endpoint to be included with your request traffic. This identifier should be appended to the request URL.

## Get YOUR-PROJECT-ENDPOINT
1. Login with your github account [Elara official website](https://elara.patract.io/)

2. Enter [Elara Dashboard](https://elara.patract.io/#/dashboard/console), click to select the main chain in the left sidebar

3. Click the "Create New Project" button in the upper right corner, enter `PROJECT-NAME` in the pop-up dialog box, and click "OK". If everything is normal, you will see a message that the project was created successfully.

4. In the project list, click on the project to enter the project details page
     - There is a column of information showing `PID`, a string of characters and numbers with a length of 32, which is the `YOUR-PROJECT-ID` of the project
     - There is a column of information displaying `ENDPOINTS`, including `https` and `wss` to access ENDPOINT. That is the project's `YOUR-PROJECT-ENDPOINT`



## Make Requests

Use one of these endpoints as your  client provider.


*NOTE:Be sure to replace YOUR-PROJECT-ENDPOINT with a Project ENDPOINT from your Elara dashboard*

- Method 1 : curl sends HTTP request:
```
#curl http
curl --location --request POST 'https://YOUR-PROJECT-ENDPOINT' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "id":1,
        "jsonrpc":"2.0",
        "method":"chain_getBlock",
        "params":[]
    }'
```

- Method 2: wscat sends websocket request:
```
parachain@ubuntu:~/elara$ wscat  -c wss://YOUR-PROJECT-ENDPOINT
Connected (press CTRL+C to quit)
> {"id":1,"jsonrpc":"2.0","method":"chain_getBlock","params":[]}
< {"jsonrpc":"2.0","result":{"block":{"extrinsics":["0x280402000b901ac96e7601"],"header":{"digest":{"logs":["0x066175726120dfcdf90f00000000","0x05617572610101acb2a4725f0f8945593cea6aa6ef70df2a8fd4a2c4eb1c0d1bf51828f26e371f897473113541f9c0d9f94e51471a3d685a86866a12133ea012d2777bb9709589"]},"extrinsicsRoot":"0xcca5112546305b07d904c2aa26155dffe6c66de043708e1ac89e57609fbcc6d1","number":"0x17922","parentHash":"0xdb798a19707ef9085b97d0b00854c613ae4abdb560e2ea1164f2e7bbfbc288a1","stateRoot":"0xdc575fe975067ded933020df9035db0e496143e6b9a062a4313fd1f6e9d02922"}},"justification":null},"id":1}
> 
```

- Method 3 : Using the SDK

You can refer to polkadot-js, use the following similar code to access the node with Https or Websocket：
```
const { ApiPromise, WsProvider } = require('@polkadot/api');
const { HttpProvider } = require('@polkadot/rpc-provider');

(async function () {
// Http
const httpProvider = new HttpProvider('https://YOUR-PROJECT-ENDPOINT')
const hash = await httpProvider.send('chain_getBlockHash', [])
console.log('latest block Hash', hash)

// Websocket
const wsProvider = new WsProvider('wss://YOUR-PROJECT-ENDPOINT')
const api = await ApiPromise.create({ provider: wsProvider })
//Do something

})()
```

It's important to note that JSON-RPC requests are transport agnostic, the same requests can be made over HTTPS, Websockets.





