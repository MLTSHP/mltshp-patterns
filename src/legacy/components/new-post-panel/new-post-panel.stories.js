import newPostPanelMarkup from './examples/new-post-panel.html?raw';
import withShakesMarkup from './examples/with-shakes.html?raw';
import withShakesOpenMarkup from './examples/with-shakes-open.html?raw';
import saveVideoMarkup from './examples/save-video.html?raw';
import saveVideoConfirmationMarkup from './examples/save-video-confirmation.html?raw';
import emailUnconfirmedMarkup from './examples/email-unconfirmed.html?raw';
import overUploadLimitMarkup from './examples/over-upload-limit.html?raw';

export default {
  title: 'Legacy/Components/New Post Panel',
  tags: ['autodocs'],
};

export const Default = {
  render: () => newPostPanelMarkup,
  height: '300px',
  inline: false,
};

export const WithShakes = {
  render: () => withShakesMarkup,
  height: '300px',
  inline: false,
};

export const WithShakesOpen = {
  render: () => withShakesOpenMarkup,
  height: '400px',
  inline: false,
};

export const SaveVideo = {
  render: () => saveVideoMarkup,
  height: '300px',
  inline: false,
};

export const ConfirmVideo = {
  render: () => saveVideoConfirmationMarkup,
  height: '600px',
  inline: false,
};

export const EmailUnconfirmed = {
  render: () => emailUnconfirmedMarkup,
  height: '300px',
  inline: false,
};

export const OverUploadLimit = {
  render: () => overUploadLimitMarkup,
  height: '550px',
  inline: false,
};
