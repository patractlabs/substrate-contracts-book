module.exports = {
  theme: 'reco',

  base: '/substrate-contracts-book/',
  dest: './dist',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ]
  ],

  locales: {
    '/': {
      lang: 'zh-CN'
    },
    '/en/': {
      lang: 'en-US'
    }
  },

  themeConfig: {
    logo: '/logo.svg',
    hostname: 'https://patractlabs.github.io',
    lastUpdated: true,
    editLinks: true,
    sidebar: 'auto',

    author: 'patractlabs',
    repo: 'https://github.com/patractlabs/substrate-contracts-book',

    locales: {
      '/': {
        label: '简体中文',
        nav: [
          {
            text: '主页',
            link: 'https://patract.io',
            target: '_self',
            rel: '',
            icon: 'reco-home'
          },
          {
            text: '博客',
            link: 'https://blog.patract.io',
            target: '_self',
            rel: '',
            icon: 'reco-blog'
          },
          { text: 'Doc', link: '/', icon: '' }
        ],
        sidebar: require('./config/sidebar-zh')
      },
      '/en/': {
        label: 'English',
        nav: [
          {
            text: 'Official Home',
            link: 'https://patract.io',
            target: '_self',
            rel: '',
            icon: 'reco-home'
          },
          {
            text: 'Blog',
            link: 'https://blog.patract.io',
            target: '_self',
            rel: '',
            icon: 'reco-blog'
          },
          { text: 'Doc', link: '/en/' }
        ],
        sidebar: require('./config/sidebar-en')
      }
    }
  }
};
