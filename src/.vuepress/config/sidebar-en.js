module.exports = [
  '/en/',
  {
    title: 'Introduction',
    path: '/en/introduction',
    collapsable: false,
    children: [
      '/en/contracts/overview',
      '/en/contracts/model',
      '/en/contracts/language',
      '/en/contracts/wasm_first_step'
    ]
  },
  {
    title: 'ink!',
    path: '/en/ink/introduction',
    collapsable: false,
    children: [
      '/en/ink/tutorial',
      '/en/ink/framework',
      '/en/ink/edsl-basic',
      '/en/ink/call-contracts',
      '/en/ink/ink-solidity',
      '/en/ink/cargo-contract',
      '/en/ink/trap'
    ]
  },
  {
    title: 'ask!',
    path: '/en/ask/introduction',
    collapsable: false,
    children: [
      '/en/ask/tutorial',
      '/en/ask/design',
      '/en/ask/basics',
      '/en/ask/decorators',
      '/en/ask/storage-data-structure',
      '/en/ask/ask-cli',
      '/en/ask/ask-vs-ink',
    ]
  },
  {
    title: 'Solang',
    path: '/en/solang/introduction',
    collapsable: false
  },
  {
    title: 'Redspot',
    path: '/en/redspot/introduction',
    collapsable: false,
    children: [
      '/en/redspot/tutorial',
      '/en/redspot/overview',
      '/en/redspot/configuration',
      '/en/redspot/tasks',
      '/en/redspot/runtime-environment',
      '/en/redspot/console',
      '/en/redspot/q-and-a',
      {
        title: 'Plugin',
        path: '/en/redspot/plugin',
        collapsable: false,
        children: [
          '/en/redspot/plugin/redspot-decimals',
          '/en/redspot/plugin/redspot-known-types',
          '/en/redspot/plugin/redspot-chai',
          '/en/redspot/plugin/redspot-gas-reporter',
          '/en/redspot/plugin/redspot-patract',
          '/en/redspot/plugin/redspot-explorer',
        ]
      }
    ]
  },
  {
    title: 'Europa',
    path: '/en/europa/introduction',
    collapsable: false,
    children: [
      '/en/europa/tutorial',
      '/en/europa/execution_info',
      '/en/europa/sample',
      '/en/europa/wasm_executor',
      '/en/europa/wasm_backtrace'
    ]
  },
  {
    title: 'zkMega',
    path: '/en/zkmega/introduction',
    collapsable: false,
    children: [
      '/en/zkmega/tutorial',
      '/en/zkmega/contract',
      '/en/zkmega/example',
      '/en/zkmega/benchmark'
    ]
  },
  {
    title: 'Himalia',
    path: '/en/himalia/introduction',
    collapsable: false,
    children: [
      '/en/himalia/tutorial',
      '/en/himalia/go-patract',
      '/en/himalia/py-patract'
    ]
  },
  {
    title: 'Metis',
    path: '/en/metis/introduction',
    collapsable: false,
    children: ['/en/metis/tokens', '/en/metis/access-control']
  },
  '/en/carpo/introduction',
  {
    title: 'Elara',
    path: '/en/elara/introduction',
    collapsable: false,
    children: ['/en/elara/tutorial', '/en/elara/design', '/en/elara/API']
  },
  {
    title: 'Jupiter',
    path: '/jupiter/introduction',
    collapsable: false,
    children: ['/jupiter/quickstart', '/jupiter/network', '/jupiter/contract']
  },
  {
    title: 'PatraStore',
    path: '/en/patra-store/introduction',
    collapsable: false,
    children: [
      '/en/patra-store/overview',
      '/en/patra-store/getting-starter',
      '/en/patra-store/publish-dapps'
    ]
  },
  '/en/patract/introduction'
];
