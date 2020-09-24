import breakpointTokens from '../src/compiled/js/breakpoints';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { themes } from '../src/themes/storybook-themes';
import { mltshpThemeLight, mltshpThemeDark } from './mltshpTheme';
import './preview.scss';
const breakpoints = breakpointTokens.size.breakpoint;

// Create viewports using widths defined in design tokens
const breakpointViewports = Object.keys(breakpoints).map((key) => {
  return {
    name: breakpoints[key].name,
    styles: {
      width: breakpoints[key].value,
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
