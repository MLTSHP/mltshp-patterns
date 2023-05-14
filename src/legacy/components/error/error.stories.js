import errorMarkup from './examples/error.html?raw';
import errorLongMarkup from './examples/error-long.html?raw';

/**
 * Appears on Error pages.
 */
export default {
  title: 'Legacy/Components/Error',
  tags: ['autodocs'],
};

export const Default = {
  render: () => errorMarkup,
};

export const Long = {
  render: () => errorLongMarkup,
};
