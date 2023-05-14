import permalinkMarkup from './examples/permalink.html?raw';
import lengthyMarkup from './examples/lengthy.html?raw';

/**
 * Composition example of a Permalink page
 */
export default {
  title: 'Legacy/Areas/Permalink',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export const Permalink = {
  render: () => permalinkMarkup,
};

export const LengthyContent = {
  render: () => lengthyMarkup,
};
