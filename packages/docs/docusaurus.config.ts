
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
        alt: 'Kite Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'dropdown',
          label: 'Docs',
          position: 'left',
          items: [
            {
              to: '/docs/technical/getting-started',
              label: 'Technical Documentation',
            },
            {
              to: '/docs/non-technical/overview',
              label: 'Non-Technical Guide',
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