import collapsedMarkup from './examples/collapsed.html?raw';
import expandedMarkup from './examples/expanded.html?raw';

/**
 * Appears in the
 * [Site Navigation](/docs/legacy-components-site-navigation--docs).
 */
export default {
  title: 'Legacy/Components/Choose a Shake',
  tags: ['autodocs'],
};

export const Collapsed = {
  render: () => collapsedMarkup,
};

export const Expanded = {
  render: () => expandedMarkup,
  parameters: {
    docs: {
      story: {
        height: '460px',
      },
    },
  },
};
