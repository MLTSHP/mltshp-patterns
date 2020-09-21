import * as breakpoints from '../src/design-tokens/breakpoint.yml';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { themes } from '../src/themes/storybook-themes';
import { mltshpThemeLight, mltshpThemeDark } from './mltshpTheme';
import './preview.scss';

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
    },
  },
  darkMode: {
    dark: { ...mltshpThemeDark },
    light: { ...mltshpThemeLight },
    darkClass: 't-dark',
    lightClass: 't-light',
    stylePreview: true,
  },
};
