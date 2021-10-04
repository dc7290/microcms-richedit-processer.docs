const lightCodeTheme = require('prism-react-renderer/themes/vsLight')
const darkCodeTheme = require('prism-react-renderer/themes/vsDark')

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'microcms-richedit-processer',
  tagline: 'Simplify the Rich Editor process.',
  url: 'https://microcms-richedit-processer.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'dc7290',
  projectName: 'microcms-richedit-processer',
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          editUrl:
            'https://github.com/dc7290/microcms-richedit-processer.docs/edit/main/docs/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/dc7290/microcms-richedit-processer.docs/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    '@docusaurus/theme-live-codeblock',
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'microcms-richedit-processer logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Document',
          },
          {
            href: 'https://github.com/dc7290/microcms-richedit-processer',
            position: 'right',
            'aria-label': 'GitHub repository',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Document',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'SNS',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/dc7290',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/d_suke_09',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} dc7290.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell'],
      },
    }),
}
