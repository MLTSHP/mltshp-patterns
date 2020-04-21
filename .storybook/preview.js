import { addDecorator, addParameters } from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';
import * as colors from '../src/design-tokens/colors.yml';
import * as breakpoints from '../src/design-tokens/breakpoint.yml';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
// import "focus-visible";
import './preview.scss';

// Add decorators to all stories
addDecorator(withA11y);

// Set choosable backgrounds for stories
const backgrounds = [
  { name: 'light', value: colors.colorPageBgLight, default: true },
  { name: 'dark', value: colors.colorPageBgDark },
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

addParameters({
  backgrounds,
  viewport: {
    viewports: {
      ...breakpointViewports,
      ...MINIMAL_VIEWPORTS,
    },
  },
});
