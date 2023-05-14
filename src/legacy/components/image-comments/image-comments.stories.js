import imageCommentMarkup from './examples/image-comment.html?raw';
import imageCommentFormMarkup from './examples/image-comment-form.html?raw';

export default {
  title: 'Legacy/Components/Image Comments',
  tags: ['autodocs'],
};

export const Comment = {
  render: () => imageCommentMarkup,
};

export const CommentForm = {
  render: () => imageCommentFormMarkup,
};
