import collapsedMarkup from './examples/collapsed.html?raw';
import expandedMarkup from './examples/expanded.html?raw';

export default {
  title: 'Legacy/Components/Choose a Shake',
  tags: ['autodocs'],
};

export const Collapsed = {
  render: () => collapsedMarkup,
};

export const Expanded = {
  render: () => expandedMarkup,
  height: '460px',
};
