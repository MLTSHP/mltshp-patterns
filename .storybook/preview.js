import * as colors from '../src/design-tokens/colors.yml';
import * as breakpoints from '../src/design-tokens/breakpoint.yml';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import './preview.scss';

// Set choosable backgrounds for stories
const themes = [
  { name: 'Blue', class: 't-blue', color: colors.colorPageBgBlue },
  { name: 'Dark', class: 't-dark', color: colors.colorPageBgDark },
];

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
  themes,
  viewport: {
    viewports: {
      ...breakpointViewports,
      ...INITIAL_VIEWPORTS,
    }
  },
}
