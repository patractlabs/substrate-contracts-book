## Overview

PatraStore和Dapp的通信是利用PostMessage的方式进行通信，为了方便开发者们，我们提供了一套SDK。这套SDK实现了[polkadot-js/extension](https://github.com/polkadot-js/extension)中的协议，因此，使用我们的sdk可以完全兼容[@polkadot/extension-dapp](https://www.npmjs.com/package/@polkadot/extension-dapp)。

开发者可以很方便的引入PatraStore的sdk，我们提供cdn服务托管了sdk，您只需在代码中引入`<script type="text/javascript" src="https://static.patrastore.io/sdk/store-sdk.min.js"></script>`即可。