import { addDecorator, addParameters } from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';
import * as colors from '../src/design-tokens/colors.yml';
// import "focus-visible";
import './preview.scss';

// Add decorators to all stories
addDecorator(withA11y);

// Set choosable backgrounds for stories
const backgrounds = [
  { name: 'light', value: colors.pageBgLight, default: true },
  { name: 'dark', value: colors.pageBgDark },
];

addParameters({ backgrounds });
