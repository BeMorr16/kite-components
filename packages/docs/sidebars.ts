import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 */
const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Technical Documentation',
      items: [
        'technical/getting-started',
        'technical/api-reference',
        'technical/accessibility',
        'technical/examples',
      ],
    },
    {
      type: 'category',
      label: 'Non-Technical Guide',
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