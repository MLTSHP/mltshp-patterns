/** @type { import('@storybook/html').Preview } */
import AutoDocsTemplate from './AutoDocsTemplate.mdx';
import { mltshpThemeDark, mltshpThemeLight } from './mltshpTheme';
import './preview.scss';
import '../src/main.scss';

const preview = {
  parameters: {
    // @see https://storybook.js.org/docs/html/writing-docs/autodocs
    docs: {
      page: AutoDocsTemplate,
    },
    // @see https://storybook.js.org/addons/storybook-dark-mode
    darkMode: {
      dark: { ...mltshpThemeDark },
      light: { ...mltshpThemeLight },
      darkClass: 't-dark',
      lightClass: 't-light',
      stylePreview: true,
    },
    // @see https://storybook.js.org/addons/storybook-addon-themes
    themes: {
      list: [
        { name: 'Light', class: 't-light', color: 'white' },
        { name: 'Dark', class: 't-dark', color: 'black' },
      ],
    },
  },
};

export default preview;
