# Substrate Contracts Book
This is the source repo to build "Substrate Contracts Book".

Currently, everyone can access our book from here:

* 中文：[《Substrate 合约书》](https://patractlabs.github.io/substrate-contracts-book/)
* English: [\<Substrate Contracts Book\>](https://patractlabs.github.io/substrate-contracts-book/en) (not yet now, need translation)

## Install
This repo is build by [vuepress](https://vuepress.vuejs.org)

First you should install nodejs

The second step is to install dependencies

use npm
```bash
$ npm install
```
use yarn
```bash
$ npm i -g yarn
$ yarn install
```

## Sidebar configuration

Sidebar config file is in `src/.vuepress/config`, `sidebar-en.js` is english, `sidebar-zh.js` is chinese

```javascript
[
  {
    title: 'Group 1',   // Required
    path: '/introduction',      // Required, The path to jump
    collapsable: false, // Required, set it to false
    children: [
      '/contracts/overview',
      '/contracts/model',
      '/contracts/language',
      '/contracts/wasm_first_step'
    ]
  },
  {
    title: 'Group 2',   // Required
    path: '/foo/',      // Required, The path to jump
    collapsable: false, // Required, set it to false
    children: [
      '/ink/tutorial'
    ]
  }
]
```

## Develop
```base
$ yarn dev
```


## Build
```bash
$ yarn build
```

## Publish to gh-pages
use `github-pages-deploy-action` to deploy