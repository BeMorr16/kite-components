
const config = {
  title: 'Kite Dialog Component',
  tagline: 'Accessible and responsive dialog component for React',
  url: 'https://your-url.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  projectName: 'kite-dialog',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  plugins: [
    '@docusaurus/theme-live-codeblock',
  ],

  themeConfig: {
    navbar: {
      title: 'Kite Dialog',
      logo: {
        alt: 'Docs Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Docs',
          position: 'left',
          items: [
            {
              to: '/docs/technical/getting-started',
              label: 'For Developers',
            },
            {
              to: '/docs/non-technical/overview',
              label: 'For Designers',
            },
          ],
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Technical Docs',
              to: '/docs/technical/getting-started',
            },
            {
              label: 'Non-Technical Guide',
              to: '/docs/non-technical/overview',
            },
          ],
        },
      ],
    },
  },
};

module.exports = config;