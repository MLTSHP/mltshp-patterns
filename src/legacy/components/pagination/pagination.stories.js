import defaultMarkup from './examples/default.html?raw';
import linearMarkup from './examples/linear.html?raw';

export default {
  title: 'Legacy/Components/Pagination',
  tags: ['autodocs'],
};

export const Default = {
  render: () => defaultMarkup,
};

export const Linear = {
  render: () => linearMarkup,
};
