import permalinkMarkup from './examples/permalink.html?raw';
import altTextMarkup from './examples/alt-text.html?raw';
import listMarkup from './examples/list.html?raw';
import commentsMarkup from './examples/comments.html?raw';
import commentingMarkup from './examples/commenting.html?raw';
import savesMarkup from './examples/saves.html?raw';
import lengthyMarkup from './examples/lengthy.html?raw';
import likesMarkup from './examples/likes.html?raw';
import listSaveShakeMarkup from './examples/list-save-shake.html?raw';
import listLikedSavedMarkup from './examples/list-liked-saved.html?raw';
import repostMarkup from './examples/repost.html?raw';
import editableMarkup from './examples/editable.html?raw';
import editingMarkup from './examples/editing.html?raw';
import nsfwMarkup from './examples/nsfw.html?raw';

/**
 * Although this component is shared between the Permalink page and Shakes
 * (List View), there are few differences. On the Permalink page:
 *
 * - The title uses an `h1` instead of an `h3`
 * - The user avatar is not shown by the title
 * - The "remove from shake" button is not shown
 * - The stats are not shown
 * - The comments are not shown (in favor of the
 *   [Image Comments](/docs/legacy-components-image-comments--docs) component)
 * - The bottom border is not shown
 *
 * Most of the examples here are shown in List View for ease of comparison.
 */
export default {
  title: 'Legacy/Components/Image',
  tags: ['autodocs'],
};

export const Permalink = {
  render: () => permalinkMarkup,
};

export const AltText = {
  render: () => altTextMarkup,
};

export const ListView = {
  render: () => listMarkup,
};

export const LengthyContent = {
  render: () => lengthyMarkup,
};

export const SavesOpen = {
  render: () => savesMarkup,
};

export const LikesOpen = {
  render: () => likesMarkup,
};

export const CommentsOpen = {
  render: () => commentsMarkup,
};

export const Commenting = {
  render: () => commentingMarkup,
};

export const SaveShake = {
  render: () => listSaveShakeMarkup,
};

export const LikedSaved = {
  render: () => listLikedSavedMarkup,
  name: 'Liked & Saved',
};

export const Repost = {
  render: () => repostMarkup,
};

export const Editable = {
  render: () => editableMarkup,
};

export const Editing = {
  render: () => editingMarkup,
};

export const Nsfw = {
  render: () => nsfwMarkup,
  name: 'NSFW',
};
