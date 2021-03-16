# Tutorial
Elara的API需要有效的Project Endpoint包含在您的请求中。此标识符应附加到请求URL。

## 获取YOUR-PROJECT-ENDPOINT
1.使用您的github帐户登录[Elara官方网站](https://elara.patract.io/)

2.进入[Elara Dashboard](https://elara.patract.io/#/dashboard/console)，单击以选中左侧边栏中的主链。

3.单击右上角的“创建新项目”按钮，在弹出对话框中输入“ PROJECT-NAME”，然后单击“确定”。如果一切正常，您将看到一条消息，说明该项目已成功创建。

4.在项目列表中，单击项目以进入项目详细信息页面
     -有一列信息显示“ PID”，一串长度为32的字符和数字，即项目的“ YOUR-PROJECT-ID”
     -有一列显示“ ENDPOINTS”的信息，包括访问ENDPOINT的“ https”和“ wss”。那就是项目的“ YOUR-PROJECT-ENDPOINT”



## 发出请求

使用这些ENDPOINT之一作为您的客户端程序的Provider。


*注意：请务必将YOUR-PROJECT-ENDPOINT替换为Elara仪表板中的Project Endpoint *

- 方法1：curl发送HTTP请求：
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

- 方法2：使用wscat发送websocket请求：
```
parachain@ubuntu:~/elara$ wscat  -c wss://YOUR-PROJECT-ENDPOINT
Connected (press CTRL+C to quit)
> {"id":1,"jsonrpc":"2.0","method":"chain_getBlock","params":[]}
< {"jsonrpc":"2.0","result":{"block":{"extrinsics":["0x280402000b901ac96e7601"],"header":{"digest":{"logs":["0x066175726120dfcdf90f00000000","0x05617572610101acb2a4725f0f8945593cea6aa6ef70df2a8fd4a2c4eb1c0d1bf51828f26e371f897473113541f9c0d9f94e51471a3d685a86866a12133ea012d2777bb9709589"]},"extrinsicsRoot":"0xcca5112546305b07d904c2aa26155dffe6c66de043708e1ac89e57609fbcc6d1","number":"0x17922","parentHash":"0xdb798a19707ef9085b97d0b00854c613ae4abdb560e2ea1164f2e7bbfbc288a1","stateRoot":"0xdc575fe975067ded933020df9035db0e496143e6b9a062a4313fd1f6e9d02922"}},"justification":null},"id":1}
> 
```

- 方法3：使用SDK

您可以参考polkadot-js，使用以下类似代码通过Https或Websocket访问节点：
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

请务必注意，JSON-RPC请求与传输无关，可以通过HTTPS，Websockets发出相同的请求。
