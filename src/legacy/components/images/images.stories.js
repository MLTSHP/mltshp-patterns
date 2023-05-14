import permalinkMarkup from './examples/permalink.html?raw';
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

export default {
  title: 'Legacy/Components/Image',
  tags: ['autodocs'],
};

export const Permalink = {
  render: () => permalinkMarkup,
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
