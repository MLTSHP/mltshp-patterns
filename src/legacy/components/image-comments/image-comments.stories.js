import imageCommentMarkup from './examples/image-comment.html?raw';
import imageCommentFormMarkup from './examples/image-comment-form.html?raw';

/**
 * Used on permalink pages, as well as the Conversations area to render the comments.
 */
export default {
  title: 'Legacy/Components/Image Comments',
  tags: ['autodocs'],
};

/**
 * Note this is different from the
 * [Image Comments Tab](/docs/legacy-components-image--docs#comments-open)
 * that's shown in the list view for an image.
 */
export const Comment = {
  render: () => imageCommentMarkup,
};

export const CommentForm = {
  render: () => imageCommentFormMarkup,
};
