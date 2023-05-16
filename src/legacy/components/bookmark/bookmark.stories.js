import whereYouWereMarkup from './examples/where-you-were.html?raw';
import youStartedHereMarkup from './examples/you-started-here.html?raw';

/**
 * Appears on shake pages, tracking the user's reading progress.
 *
 * Note that the bookmark is intended to "pull" slightly outside the content well.
 * These samples have some padding adding to keep it visible.
 */
export default {
  title: 'Legacy/Components/Bookmark',
  tags: ['autodocs'],
};

export const Default = {
  render: () => whereYouWereMarkup,
};

/**
 * The bookmark can include an optional jump link to let the user return
 * to the original position.
 */
export const JumpLink = {
  render: () => youStartedHereMarkup,
};
