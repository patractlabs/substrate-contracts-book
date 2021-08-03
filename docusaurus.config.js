/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Substrate Contracts Book',
  tagline: 'Substrate Contracts Book',
  url: 'https://docs.patract.io',
  baseUrl: process.env.BASE_PATH || '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'patractlabs', // Usually your GitHub org/user name.
  projectName: 'substrate-contracts-book', // Usually your repo name.
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en']
  },
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Substrate Contracts Book',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://www.patract.io',
          label: '主页',
          position: 'left',
        },
        {
          href: 'https://blog.patract.io',
          label: '博客',
          position: 'left',
        },
        // right
        {
          href: 'https://github.com/patractlabs/substrate-contracts-book',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
          // dropdownItemsAfter: [
          //   {
          //     href: 'https://github.com/patractlabs/substrate-contracts-book',
          //     label: 'Help Us Translate',
          //   },
          // ],
        },
      ],
    },
    // footer: {},
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl:
            'https://github.com/patractlabs/substrate-contracts-book/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ]
  ],
};
