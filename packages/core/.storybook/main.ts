import type { StorybookConfig } from '@storybook/react-webpack5';

import { join, dirname } from "node:path"

/**
* This function is used to resolve the absolute path of a package.
* It is needed in projects that use Yarn PnP or are set up within a monorepo.
*/
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}
const config: StorybookConfig = {
  stories: [
        '../lib/**/*.stories.mdx',
        '../lib/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath("@storybook/experimental-addon-test")
  ],
  framework: {
    "name": getAbsolutePath('@storybook/react-webpack5'),
    "options": {}
  }
};
export default config;