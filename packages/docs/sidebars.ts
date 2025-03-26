import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 */
const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'For Developers',
      items: [
        'technical/getting-started',
        'technical/api-reference',
        'technical/accessibility',
        'technical/examples',
      ],
    },
    {
      type: 'category',
      label: 'For Desginers',
      items: [
        'non-technical/overview',
        'non-technical/when-to-use',
        'non-technical/design-guidelines',
        'non-technical/examples-gallery',
      ],
    },
  ],
};

export default sidebars;