import { themes as docsThemes } from '@storybook/theming';
import * as breakpoints from '../src/design-tokens/breakpoint.yml';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import './preview.scss';
import {
  themes,
  blueDefault,
  darkDefault,
} from '../src/themes/storybook-themes.js';

console.log(themes, blueDefault, darkDefault);

// Create viewports using widths defined in design tokens
const breakpointViewports = Object.keys(breakpoints).map((name) => {
  return {
    name: `Breakpoint ${name.toUpperCase().substring(10)}`,
    styles: {
      width: breakpoints[name],
      height: '100%',
    },
    type: 'other',
  };
});

export const parameters = {
  // docs: {
  //   theme: docsThemes.dark,
  // },
  themes,
  viewport: {
    viewports: {
      ...breakpointViewports,
      ...INITIAL_VIEWPORTS,
    },
  },
};
