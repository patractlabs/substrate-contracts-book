# @redspot/explorer

该插件目的是为了在进行合约开发时取代 polkadot apps 和 canvas-ui。对比 polkadot apps, 主要有以下优化：

1.重新设计了布局和菜单，更加专注合约模块。完善了 polkadot apps 的夜间模式，调整了 UI，调整配色。删除对合约开发无用的页面。合并了一些工具页面。

![](https://i.imgur.com/NS58LA9.png)

2.redspot config 中配置的网络，会被注入到 explorer 中。

3.redspot config 中配置的账号，会出现在 explorer 中，可以在 explorer 中使用，比如可以进行转账等交易，就和网页账户中的一样。

4.redspot 中配置的 types 会被 explorer 采用。

5.本地项目中生成的合约的 .contract 文件，会自动上传到 explorer 中。explorer 中的 contracts 页面会收录所有 code 已知的合约。

6.切换网络时，只显示当前网络的合约和 abi 和账号。

7.可以在本地运行测试或者脚本时，使用 polkadot extension 进行签名。

8.能够在 explorer 中向本地发送编译代码的指令。

9.在 explorer 中可以运行 redspot 的脚本。

10.如果有已知的 code ，那么会在区块详情中，自动解析合约事件和发送合约时的参数。

11.可以查询合约相关的交易。

使用 redspot explorer 需要先安装 `@redspot/explorer` 插件：

```bash=
$ yarn add @redspot/explorer
```

然后在 redspot.config 中添加：

```javascript=
...
import "@redspot/explorer";
...
```

运行 redspot explorer:

```javascript=
npx redspot explorer
```

注意，在运行 redspot explorer 的时候，会在本地启动一个服务，请不要终止该进程。并且，在每次 redspot.config 更改时，请手动重启该服务。

然后打开默认的网址 `http://127.0.0.1:8011`

打开切换网络

![](https://i.imgur.com/fMQ7KfU.png)

可以看到，能够选择 redspot 中配置的网络。

检查 accounts 页面，会出现 redspot.config 中配置的账号。
![](https://i.imgur.com/h46cFXX.png)

然后你可以使用你的 polkadot extension 中的账号，进行交易。复制你在 polkadot extension 中的账号地址。

然后更改 deploy.ts 脚本：

```javascript=
import { network, patract } from 'redspot';

const { getContractFactory } = patract;
const { api } = network;

async function run() {
  await api.isReady;
  const signer = '<your address>';

  const contractFactory = await getContractFactory('erc20', signer);

  const balance = await api.query.system.account(signer);

  console.log('Balance: ', balance.toHuman());

  const contract = await contractFactory.deployed('new', '1000000', {
    gasLimit: '200000000000',
    value: '100000000000'
  });

  await contract.tx.transfer(signer, 7);
  console.log('');
  console.log(
    'Deploy successfully. The contract address: ',
    contract.address.toString()
  );

  api.disconnect();
}

run().catch(err => {
  console.log(err);
});
```

然后运行脚本 `$ npx redspot run ./scripts/deploy.ts`， 然后此时会调用 polkadot extension 进行签名。检查你的浏览器里面的 polkadot extension （注意 explorer 页面必须是打开的）

![](https://i.imgur.com/Jn9fofZ.png)

然后部署合约。然后部署成功后，检查 explorer 页面：

![](https://i.imgur.com/R8cEHx4.png)

会出现链上的事件。我们查看 contracts.instantiateWithCode 事件，

![](https://i.imgur.com/DlNlRZb.png)

这里会有合约 message 和合约 event 的解析。

检查 contracts 的 codes 页面：

![](https://i.imgur.com/EP35Biz.png)

这里会自动出现本地编译好的合约的 code。

然后检查 contracts 的 contracts 页面：
![](https://i.imgur.com/5zXGtSd.png)

这里会出现刚刚部署好的合约。

然后我们切换到 console 页面，在这里我们可以运行脚本和编译合约：
![](https://i.imgur.com/luc74qg.png)

我们点击 compile contract ，出现此提示表示编译成功：
![](https://i.imgur.com/r5tZtUY.png)

如果编译时间过长，请切换到运行 `npx redspot explorer` 命令的终端，查看日志提示。

然后我们点击 run 运行脚本，右边控制台会输出运行日志：
![](https://i.imgur.com/nrGW9Wc.png)

现在合约成功，我们再切换到 contracts 页面进行检查：

![](https://i.imgur.com/k2Uziom.png)

可以看到，刚刚部署成功的合约会出现在这里。

我们点击 extrinsics 按钮（即图中“recent contracts”中的每一行中的蓝色的 “extrinsics”），会跳出一个对话框（dialog），会展示当前合约的相关交易：

![](https://i.imgur.com/gdQo31E.png)
