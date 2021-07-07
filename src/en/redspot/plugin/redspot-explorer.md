# @redspot_explorer plug-in

## Background Information

The purpose of this plugin is to replace polkadot apps and canvas-ui during contract development.

## Optimize content

Compared with polkadot apps, the main optimizations are as follows:

1. The layout and menu have been redesigned, focusing more on the contract module. Improved the night mode of polkadot apps, adjusted the UI and color scheme, deleted pages that were useless for contract development, and merged some tool pages.

   ![](C:\Users\lizhaoyang\workspace\substrate-contracts-book\src\en\redspot\plugin\image\1.png)

   

2. The network configured in redspot config will be injected into explorer.

3. The account configured in redspot config will appear in explorer and can be used in explorer. For example, it can conduct transactions such as transfers, just like the web account.

4. The types configured in redspot will be adopted by explorer.

5. The .contract file of the contract generated in the local project will be automatically uploaded to the explorer. The contracts page in the explorer will list all contracts with known codes.

6. When switching networks, only the contract and abi and account of the current network are displayed.

7. You can use polkadot extension to sign when you run tests or scripts locally.

8. Able to send instructions to compile code locally in explorer.

9. You can run Redspot scripts in explorer.

10. If there is a known code, the contract event and the parameters when sending the contract will be automatically parsed in the block details.

11. You can query transactions related to the contract.



## Steps for usage

1. Install the @redspot/explorer plugin first.
```plain
$ yarn add @redspot/explorer
```
2. Then import the plugin in redspot.config.ts.
```plain
...
import "@redspot/explorer";
...
```

3. Run edspot explorer.
```plain
npx redspot explorer
```

**Note** When running redspot explorer, a service will be started locally, please do not terminate the process. And, every time redspot.config changes, please restart the service manually.

4. Then open the [default website](http://127.0.0.1:8011), open the switch network, you can see that you can select the network information configured in Redspot.

   ![](C:\Users\lizhaoyang\workspace\substrate-contracts-book\src\en\redspot\plugin\image\2.png)

5. On the **accounts** page, you can see the accounts configured in redspot.config.

   ![](C:\Users\lizhaoyang\workspace\substrate-contracts-book\src\en\redspot\plugin\image\3.png)

6. Then you can use your account in the polkadot extension to conduct transactions. Copy your account address in polkadot extension.

7. Then change the deploy.ts script.
```plain
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

8. Run the script `$ npx redspot run ./scripts/deploy.ts`, and then call the polkadot extensio n for signing. Check the polkadot extension in the browser (the explorer page must be open).

   ![](C:\Users\lizhaoyang\workspace\substrate-contracts-book\src\en\redspot\plugin\image\8.png)

9. Deploy the contract. After the deployment is successful, check the **explorer **page.

   ![](C:\Users\lizhaoyang\workspace\substrate-contracts-book\src\en\redspot\plugin\image\9png.png)

There will be an event on the chain, you can view the contracts.instantiateWithCode event.

![](C:\Users\lizhaoyang\workspace\substrate-contracts-book\src\en\redspot\plugin\image\91.png)


There will be an analysis of contract message and contract event.

10. Check the **codes** page of contracts, the code of the locally compiled contract will automatically appear here.

    ![](C:\Users\lizhaoyang\workspace\substrate-contracts-book\src\en\redspot\plugin\image\10.png)

11. Then check the **contracts** page of contracts, you can view the contract just deployed.

    ![](C:\Users\lizhaoyang\workspace\substrate-contracts-book\src\en\redspot\plugin\image\111.png)

12. Switch to the **Console** page, run the script and compile the contract.

    ![](C:\Users\lizhaoyang\workspace\substrate-contracts-book\src\en\redspot\plugin\image\12.png)

13. Click **compile contract**, and this prompt appears to indicate that the compilation was successful.

    ![](C:\Users\lizhaoyang\workspace\substrate-contracts-book\src\en\redspot\plugin\image\13.png)

If the compilation time is too long, please switch to the terminal running the `npx redspot explorer` command and check t he log prompt.

14. Click **run** to run the script, and the console on the right will output the run log information.

    ![](C:\Users\lizhaoyang\workspace\substrate-contracts-book\src\en\redspot\plugin\image\14.png)

15. Now that the contract is successful, switch to the **contracts **page to proceed. You can see that the contract has just been deployed successfully.

    ![](C:\Users\lizhaoyang\workspace\substrate-contracts-book\src\en\redspot\plugin\image\15.png)

16. Click the **extrinsics** button (that is, the blue extrinsics in each row of the recent contracts in the figure), and you can see the relevant transaction information of the current contract on the page that pops up.

    ![](C:\Users\lizhaoyang\workspace\substrate-contracts-book\src\en\redspot\plugin\image\16.png)





