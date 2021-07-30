module.exports = [
  '',
  {
    title: '介绍',
    path: '/introduction',
    collapsable: false,
    children: [
      '/contracts/overview',
      '/contracts/model',
      '/contracts/language',
      '/contracts/wasm_first_step'
    ]
  },
  {
    title: 'ink!',
    path: '/ink/introduction',
    collapsable: false,
    children: [
      '/ink/tutorial',
      '/ink/framework',
      '/ink/edsl-basic',
      '/ink/call-contracts',
      '/ink/ink-solidity',
      '/ink/cargo-contract',
      '/ink/trap'
    ]
  },
  {
    title: 'ask!',
    path: '/ask/introduction',
    collapsable: false,
    children: [
      '/ask/tutorial',
      '/ask/design',
      '/ask/basics',
      '/ask/decorators',
      '/ask/storage-data-structure',
      '/ask/ask-cli',
      '/ask/ask-vs-ink',
      {
        title: 'Report',
        path: '/ask/reports',
        collapsable: false,
        children: [
          '/ask/reports/v0.1Report',
          '/ask/reports/v0.2Report',
        ]
      }
    ]
  },
  {
    title: 'Solang',
    path: '/solang/introduction',
    collapsable: false
  },
  {
    title: 'Redspot',
    path: '/redspot/introduction',
    collapsable: false,
    children: [
      '/redspot/tutorial',
      '/redspot/overview',
      '/redspot/configuration',
      '/redspot/tasks',
      '/redspot/runtime-environment',
      '/redspot/console',
      '/redspot/q-and-a',
      {
        title: 'Plugin',
        path: '/redspot/plugin',
        collapsable: false,
        children: [
          '/redspot/plugin/redspot-decimals',
          '/redspot/plugin/redspot-known-types',
          '/redspot/plugin/redspot-chai',
          '/redspot/plugin/redspot-gas-reporter',
          '/redspot/plugin/redspot-patract',
          '/redspot/plugin/redspot-explorer'
        ]
      },
      {
        title: 'Report',
        path: '/redspot/reports',
        collapsable: false,
        children: [
          '/redspot/reports/v0.1Report',
          '/redspot/reports/v0.2Report',
          '/redspot/reports/v0.3Report',
          '/redspot/reports/v0.4Report',
        ]
      }
    ]
  },
  {
    title: 'Europa',
    path: '/europa/introduction',
    collapsable: false,
    children: [
      '/europa/tutorial',
      '/europa/execution_info',
      '/europa/sample',
      '/europa/wasm_executor',
      '/europa/wasm_backtrace',
      {
        title: 'Report',
        path: '/europa/reports',
        collapsable: false,
        children: [
          '/europa/reports/v0.1Report',
          '/europa/reports/v0.2Report',
          '/europa/reports/v0.3Report',
        ]
      }
    ]
  },
  {
    title: 'zkMega',
    path: '/zkmega/introduction',
    collapsable: false,
    children: [
      '/zkmega/tutorial',
      '/zkmega/contract',
      '/zkmega/example',
      '/zkmega/benchmark',
      {
        title: 'Report',
        path: '/zkmega/reports',
        collapsable: false,
        children: [
          '/zkmega/reports/v0.1Report',
          '/zkmega/reports/v0.2Report',
        ]
      }
    ]
  },
  {
    title: 'Himalia',
    path: '/himalia/introduction',
    collapsable: false,
    children: [
      '/himalia/tutorial',
      '/himalia/go-patract',
      '/himalia/py-patract',
      {
        title: 'Report',
        path: '/himalia/reports',
        collapsable: false,
        children: [
          '/himalia/reports/v0.1Report',
        ]
      }
    ]
  },
  {
    title: 'Metis',
    path: '/metis/introduction',
    collapsable: false,
    children: ['/metis/tokens', '/metis/access-control',
      {
        title: 'Report',
        path: '/metis/reports',
        collapsable: false,
        children: [
          '/metis/reports/M1Report',
        ]
      }]
  },
  '/carpo/introduction',
  {
    title: 'Elara',
    path: '/elara/introduction',
    collapsable: false,
    children: ['/elara/tutorial', '/elara/design', '/elara/API',
      {
        title: 'Report',
        path: '/elara/reports',
        collapsable: false,
        children: [
          '/elara/reports/v0.1Report',
          '/elara/reports/v0.2Report',
        ]
      }]
  },
  {
    title: 'Jupiter',
    path: '/jupiter/introduction',
    collapsable: false,
    children: ['/jupiter/quickstart', '/jupiter/network', '/jupiter/contract']
  },
  {
    title: 'PatraStore',
    path: '/patra-store/introduction',
    collapsable: false,
    children: [
      '/patra-store/overview',
      '/patra-store/getting-starter',
      '/patra-store/publish-dapps'
    ]
  },
  '/patract/introduction'
];