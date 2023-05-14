import whereYouWereMarkup from './examples/where-you-were.html?raw';
import youStartedHereMarkup from './examples/you-started-here.html?raw';

export default {
  title: 'Legacy/Components/Bookmark',
  tags: ['autodocs'],
};

export const Default = {
  render: () => whereYouWereMarkup,
};

export const JumpLink = {
  render: () => youStartedHereMarkup,
};
