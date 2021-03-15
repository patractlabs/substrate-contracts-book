# API

## ENDPOINT Rules

`Https`Access：
```
https://api.elara.patract.io/<Network>/<YOUR-PROJECT-ID>
```

`Websocket`Access：
```
wss://api.elara.patract.io/<Network>/<YOUR-PROJECT-ID>
```


##  Supported Network


| **NETWORK** | **DESCRIPTION**         | ENDPOINT                                              |
| ----------- | ----------------------- | ----------------------------------------------------- |
| Polkadot    | JSON-RPC over HTTPS     | https://api.elara.patract.io/Polkadot/YOUR-PROJECT-ID |
| Polkadot    | JSON-RPC over WebSocket | wss://api.elara.patract.io/Polkadot/YOUR-PROJECT-ID   |
| Kusama      | JSON-RPC over HTTPS     | https://api.elara.patract.io/Kusama/YOUR-PROJECT-ID   |
| Kusama      | JSON-RPC over WebSocket | wss://api.elara.patract.io/Kusama/YOUR-PROJECT-ID     |
| Rococo      | JSON-RPC over HTTPS     | https://api.elara.patract.io/Rococo/YOUR-PROJECT-ID   |
| Rococo      | JSON-RPC over WebSocket | wss://api.elara.patract.io/Rococo/YOUR-PROJECT-ID     |
| Jupiter      | JSON-RPC over HTTPS     | https://api.elara.patract.io/Jupiter/YOUR-PROJECT-ID   |
| Jupiter      | JSON-RPC over WebSocket | wss://api.elara.patract.io/Jupiter/YOUR-PROJECT-ID     |
| Darwinia      | JSON-RPC over HTTPS     | https://api.elara.patract.io/Darwinia/YOUR-PROJECT-ID   |
| Darwinia      | JSON-RPC over WebSocket | wss://api.elara.patract.io/Darwinia/YOUR-PROJECT-ID     |
| Dock      | JSON-RPC over HTTPS     | https://api.elara.patract.io/Dock/YOUR-PROJECT-ID   |
| Dock      | JSON-RPC over WebSocket | wss://api.elara.patract.io/Dock/YOUR-PROJECT-ID     |
| Edgeware      | JSON-RPC over HTTPS     | https://api.elara.patract.io/Edgeware/YOUR-PROJECT-ID   |
| Edgeware      | JSON-RPC over WebSocket | wss://api.elara.patract.io/Edgeware/YOUR-PROJECT-ID     |
| Kulupu      | JSON-RPC over HTTPS     | https://api.elara.patract.io/Kulupu/YOUR-PROJECT-ID   |
| Kulupu      | JSON-RPC over WebSocket | wss://api.elara.patract.io/Kulupu/YOUR-PROJECT-ID     |
| Nodle       | JSON-RPC over HTTPS     | https://api.elara.patract.io/Nodle/YOUR-PROJECT-ID   |
| Nodle       | JSON-RPC over WebSocket | wss://api.elara.patract.io/Nodle/YOUR-PROJECT-ID     |
| Plasm      | JSON-RPC over HTTPS     | https://api.elara.patract.io/Plasm/YOUR-PROJECT-ID   |
| Plasm      | JSON-RPC over WebSocket | wss://api.elara.patract.io/Plasm/YOUR-PROJECT-ID     |
| Stafi      | JSON-RPC over HTTPS     | https://api.elara.patract.io/Stafi/YOUR-PROJECT-ID   |
| Stafi      | JSON-RPC over WebSocket | wss://api.elara.patract.io/Stafi/YOUR-PROJECT-ID     |
| Chainx      | JSON-RPC over HTTPS     | https://api.elara.patract.io/Chainx/YOUR-PROJECT-ID   |
| Chainx      | JSON-RPC over WebSocket | wss://api.elara.patract.io/Chainx/YOUR-PROJECT-ID     |
| Mandala      | JSON-RPC over HTTPS     | https://api.elara.patract.io/Mandala/YOUR-PROJECT-ID   |
| Mandala      | JSON-RPC over WebSocket | wss://api.elara.patract.io/Mandala/YOUR-PROJECT-ID     |


## Error Codes

If an Substrate RPC method encounters an error, the error member included on the response object MUST be an object containing a code member and descriptive message member. The following list contains all possible error codes and associated messages:


| **CODE** | ****MEANING****         | **CATEGORY**                       |
| -------- | ----------------------- | ---------------------------------- |
| -32700   | Parse error             | Invalid JSON                       |
| -32600   | Invalid request         | JSON is not a valid request object |
| -32601   | Method not found        | Method does not exist              |
| -32602   | Invalid params          | Invalid method parameters          |
| -32603   | Internal error          | Internal JSON-RPC error            |
| -1       | CheckAuthenticated Fail | non-standard                       |
| -2       | Project Name Empty      | non-standard                       |
| -3       | Project Name Error!     | non-standard                       |
| -4       | Chain Error             | non-standard                       |
| -5       | Out Of Limit            | non-standard                       |
| -6       | NotActive               | non-standard                       |
| -7       | RPC Error               | non-standard                       |
| -8       | Project  Error          | non-standard                       |
| -9       | No Access Allowed       | non-standard                       |
| -10      | Black Uid               | non-standard                       |
| -11      | Duplicate Name          | non-standard                       |



