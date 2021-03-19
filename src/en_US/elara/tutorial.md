# Tutorial
Elara's API requires a valid Project Endpoint to be included in your request. This identifier should be appended to the request URL.

## Get YOUR-PROJECT-ENDPOINT
1. Use your github account to log in [Elara official website](https://elara.patract.io/)

2. Enter [Elara Dashboard](https://elara.patract.io/#/dashboard/console), click to select the main chain in the left sidebar.

3. Click the "Create New Project" button in the upper right corner, enter "PROJECT-NAME" in the pop-up dialog box, and then click "OK". If everything is ok, you will see a message stating that the project has been successfully created.

4. In the project list, click the project to enter the project details page
     -There is a list of information showing "PID", a string of characters and numbers with a length of 32, which is the "YOUR-PROJECT-ID" of the project
     -There is a column that displays "ENDPOINTS" information, including "https" and "wss" for accessing ENDPOINT. That is the "YOUR-PROJECT-ENDPOINT" of the project



## Make a request

Use one of these ENDPOINT as the provider of your client program.

*Note: Please be sure to replace YOUR-PROJECT-ENDPOINT with Project Endpoint in the Elara dashboard*

- Method 1: curl sends an HTTP request:
```bash
#curl http
curl --location --request POST'https://YOUR-PROJECT-ENDPOINT' \
    --header'Content-Type: application/json' \
    --data-raw'{
        "id":1,
        "jsonrpc":"2.0",
        "method":"chain_getBlock",
        "params":[]
    }'
```

- Method 2: Use wscat to send websocket request:
```
parachain@ubuntu:~/elara$ wscat -c wss://YOUR-PROJECT-ENDPOINT
Connected (press CTRL+C to quit)
> {"id":1,"jsonrpc":"2.0","method":"chain_getBlock","params":[]}
<{"jsonrpc":"2.0","result":{"block":{"extrinsics":["0x280402000b901ac96e7601"],"header":{"digest":{"logs":["0x066175726120dfcdf90f00000000"," 0x05617572610101acb2a4725f0f8945593cea6aa6ef70df2a8fd4a2c4eb1c0d1bf51828f26e371f897473113541f9c0d9f94e51471a3d685a86866a12133ea012d2777bb9709589 "]}," extrinsicsRoot ":" 0xcca5112546305b07d904c2aa26155dffe6c66de043708e1ac89e57609fbcc6d1 "," number ":" 0x17922 "," parentHash ":" 0xdb798a19707ef9085b97d0b00854c613ae4abdb560e2ea1164f2e7bbfbc288a1 "," stateRoot ":" 0xdc575fe975067ded933020df9035db0e496143e6b9a062a4313fd1f6e9d02922 "}}," justification ": null}," id ": 1}
>
```

- Method 3: Use SDK

You can refer to polkadot-js and use the following similar code to access the node through Https or Websocket:
```javascript
const {ApiPromise, WsProvider} = require('@polkadot/api');
const {HttpProvider} = require('@polkadot/rpc-provider');

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

It is important to note that JSON-RPC requests have nothing to do with transmission, and the same request can be made via HTTPS and Websockets.