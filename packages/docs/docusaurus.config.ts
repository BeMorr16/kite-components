import type {Config} from '@docusaurus/types';
import { themes } from 'prism-react-renderer';

const config: Config = {
  title: 'Kite Dialog Component',
  tagline: 'Accessible and responsive dialog component for React',
  url: 'https://your-url.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  projectName: 'kite-dialog',
  staticDirectories: ['static'],

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
        //add back in the light/dark mode?
        //Something to say "Not working? Check your version ->"
        // {
        //   position: 'right',
        //   html: '<div style="margin-right: 0.5rem;">Need help? Check your version:</div>',
        // },
        // // Custom version chip (this will be a custom component we'll create)
        // {
        //   position: 'right',
        //   type: 'custom',
        //   className: 'navbar__version-chip',
        // },
        // Add back the light/dark mode toggle
        {
          type: 'html',
          position: 'right',
          value: '<div id="theme-toggle"></div>',
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
            {
              label: 'Version History',
              to: '/changelog',
            },
          ],
        },
      ],
    },
  },
};

module.exports = config;