/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: [
    '../src/introduction.mdx', // list first so it's the initial page
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
        backgrounds: false,
        controls: false,
      },
    },
    '@storybook/addon-a11y',
    'storybook-addon-themes',
    'storybook-dark-mode',
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
