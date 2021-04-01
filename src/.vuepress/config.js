const { config } = require('vuepress-theme-hope');

module.exports = config({
  blog: false,
  comment: false,

  base: '/substrate-contracts-book/',
  dest: './dist',

  head: [
    [
      'script',
      { src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js' }
    ],
    [
      'script',
      {
        src:
          'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js'
      }
    ],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
    [
      'script',
      { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }
    ]
  ],

  themeConfig: {
    logo: '/logo.svg',
    hostname: 'https://patractlabs.github.io',
    baseLang: 'zh-CN',
    themeColor: {
      blue: '#007CDB',
      green: "#3eaf7c"
    },

    author: 'patractlabs',
    repo: 'https://github.com/patractlabs/substrate-contracts-book',

    locales: {
      '/': {
        nav: [{ text: 'Doc', link: '/', icon: 'home' }],

        sidebar: require('./config/sidebar-zh')
      },
      '/en/': {
        nav: [{ text: 'Doc', link: '/en/', icon: 'home' }],
        sidebar: require('./config/sidebar-en')
      }
    },

    pageInfo: ['author', 'time', 'category', 'reading-time'],

    footer: {
      display: true,
      content: 'PatractLabs'
    },

    copyright: true,

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          'highlight',
          'math',
          'search',
          'notes',
          'zoom',
          'anything',
          'audio',
          'chalkboard'
        ]
      }
    }
  }
});
