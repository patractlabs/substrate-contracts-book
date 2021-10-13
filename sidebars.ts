module.exports = {
  docs: [
    'summary',
    {
      type: 'category',
      label: '介绍',
      collapsed: false,
      items: [
        'contracts/introduction',
        'contracts/overview',
        'contracts/model',
        'contracts/language',
        'contracts/wasm_first_step'
      ]
    },
    {
      type: 'category',
      label: 'ink!',
      collapsed: true,
      items: [
        'ink/introduction',
        'ink/tutorial',
        'ink/framework',
        'ink/edsl-basic',
        'ink/call-contracts',
        'ink/ink-solidity',
        'ink/cargo-contract',
        'ink/trap'
      ]
    },
    {
      type: 'category',
      label: 'ask!',
      collapsed: true,
      items: [
        'ask/introduction',
        'ask/tutorial',
        'ask/design',
        'ask/basics',
        'ask/decorators',
        'ask/storage-data-structure',
        'ask/ask-cli',
        'ask/ask-vs-ink',
        {
          type: 'category',
          label: 'Reports',
          collapsed: true,
          items: [
            'ask/reports',
            'ask/reports/v0.1Report',
            'ask/reports/v0.2Report',
          ]
        }
      ]
    },
    'solang/introduction',
    {
      type: 'category',
      label: 'Redspot',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Getting Started',
          collapsed: false,
          items: [
            'redspot/intro/overview',
            'redspot/intro/installation',
            'redspot/intro/quick-start',
            'redspot/intro/integrate',
          ]
        },
        {
          type: 'category',
          label: 'Guides',
          collapsed: false,
          items: [
            'redspot/guides/tasks',
            'redspot/guides/configuration',
            'redspot/guides/runtime-environment',
            'redspot/guides/console',
            'redspot/guides/docker',
            'redspot/guides/explorer',
          ]
        },
        'redspot/q-and-a',
        {
          type: 'category',
          label: 'Plugin',
          collapsed: true,
          items: [
            'redspot/plugin/plugin',
            'redspot/plugin/redspot-decimals',
            'redspot/plugin/redspot-known-types',
            'redspot/plugin/redspot-chai',
            'redspot/plugin/redspot-gas-reporter',
            'redspot/plugin/redspot-patract',
            'redspot/plugin/redspot-explorer'
          ]
        },
        {
          type: 'category',
          label: 'Advanced',
          collapsed: true,
          items: [
            'redspot/advanced/write-plugins',
            'redspot/advanced/multi-contract-compilation'
          ]
        },
        {
          type: 'category',
          label: 'Reports',
          collapsed: true,
          collapsible: true,
          items: [
            'redspot/reports/reports',
            'redspot/reports/v0.1Report',
            'redspot/reports/v0.2Report',
            'redspot/reports/v0.3Report',
            'redspot/reports/v0.4Report',
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Europa',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Get Started',
          collapsed: false,
          items: [
            'europa/intro/overview',
            'europa/intro/europa-ui',
            'europa/intro/europa-cli'
          ]
        },
        {
          type: 'category',
          label: 'Guides',
          collapsed: false,
          items: [
            'europa/guides/architecture',
            'europa/guides/implementation',
            'europa/guides/custom-rpcs',
            'europa/guides/contract-log',
            'europa/guides/backtrace',
            'europa/guides/debug-example',
            'europa/guides/wasm-executor',
          ]
        },
        {
          type: 'category',
          label: 'Chain Extensions',
          collapsed: false,
          items: [
            'europa/extensions/custom-chain-extensions'
          ]
        },
        {
          type: 'category',
          label: 'Reports',
          collapsed: true,
          items: [
            'europa/reports',
            'europa/reports/v0.1Report',
            'europa/reports/v0.2Report',
            'europa/reports/v0.3Report',
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'zkMega',
      collapsed: true,
      items: [
        'zkmega/introduction',
        'zkmega/tutorial',
        'zkmega/contract',
        'zkmega/example',
        'zkmega/benchmark',
        {
          type: 'category',
          label: 'Reports',
          collapsed: true,
          items: [
            'zkmega/reports',
            'zkmega/reports/v0.1Report',
            'zkmega/reports/v0.2Report',
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Himalia',
      collapsed: true,
      items: [
        'himalia/introduction',
        'himalia/tutorial',
        'himalia/go-patract',
        'himalia/py-patract',
        {
          type: 'category',
          label: 'Reports',
          collapsed: true,
          items: [
            'himalia/reports',
            'himalia/reports/v0.1Report'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Metis',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Get Started',
          collapsed: false,
          items: [
            'metis/intro/overview',
            'metis/intro/motivation',
            'metis/intro/architecture',
            'metis/intro/differences',
          ]
        },
        {
          type: 'category',
          label: 'Guides',
          collapsed: false,
          items: [
            'metis/guides/imports',
            'metis/guides/macros',
            'metis/guides/extensions',
            'metis/guides/hook',
            {
              type: 'category',
              label: 'Access control',
              collapsed: true,
              items: [
                'metis/guides/access-control/ownable',
                'metis/guides/access-control/access-control',
                'metis/guides/access-control/access-control-enumerable',
              ]
            },
            {
              type: 'category',
              label: 'Governance',
              collapsed: true,
              items: [
                'metis/guides/governance/timelock-controller',
              ]
            },
            {
              type: 'category',
              label: 'Security',
              collapsed: true,
              items: [
                'metis/guides/security/pausable',
                'metis/guides/security/reentrancy-guard',
              ]
            },
            {
              type: 'category',
              label: 'Tokens',
              collapsed: true,
              items: [
                'metis/guides/tokens/erc20',
                'metis/guides/tokens/erc721',
                'metis/guides/tokens/erc777',
                'metis/guides/tokens/erc1155',
              ]
            },
            {
              type: 'category',
              label: 'Tools',
              collapsed: true,
              items: [
                'metis/guides/tools/erc165',
              ]
            },
            {
              type: 'category',
              label: 'Utilities',
              collapsed: true,
              items: [
                'metis/guides/utilities/escrow',
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'Reports',
          collapsed: true,
          items: [
            'metis/reports/reports',
            'metis/reports/M1Report',
          ]
        }
      ]
    },
    'carpo/introduction',
    {
      type: 'category',
      label: 'Elara',
      collapsed: true,
      items: [
        'elara/introduction',
        'elara/tutorial',
        'elara/design',
        'elara/API',
        {
          type: 'category',
          label: 'Reports',
          collapsed: true,
          items: [
            'elara/reports',
            'elara/reports/v0.1Report',
            'elara/reports/v0.2Report',
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Jupiter',
      collapsed: true,
      items: [
        'jupiter/introduction',
        'jupiter/quickstart',
        'jupiter/network',
        'jupiter/contract',
        'jupiter/xcmp',
      ]
    },
    {
      type: 'category',
      label: 'PatraStore',
      collapsed: true,
      items: [
        'patra-store/overview',
        'patra-store/getting-starter',
        'patra-store/publish-dapps'
      ]
    },
    'patract/introduction',
  ],
};
