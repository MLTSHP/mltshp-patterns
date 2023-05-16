import newPostPanelMarkup from './examples/new-post-panel.html?raw';
import withShakesMarkup from './examples/with-shakes.html?raw';
import withShakesOpenMarkup from './examples/with-shakes-open.html?raw';
import saveVideoMarkup from './examples/save-video.html?raw';
import saveVideoConfirmationMarkup from './examples/save-video-confirmation.html?raw';
import emailUnconfirmedMarkup from './examples/email-unconfirmed.html?raw';
import overUploadLimitMarkup from './examples/over-upload-limit.html?raw';

/**
 * Overlay that can appear on any page.
 */
export default {
  title: 'Legacy/Components/New Post Panel',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
        height: '320px',
      },
    },
  },
};

export const Default = {
  render: () => newPostPanelMarkup,
};

export const WithShakes = {
  render: () => withShakesMarkup,
};

export const WithShakesOpen = {
  render: () => withShakesOpenMarkup,
  parameters: {
    docs: {
      story: {
        height: '420px',
      },
    },
  },
};

export const SaveVideo = {
  render: () => saveVideoMarkup,
};

export const ConfirmVideo = {
  render: () => saveVideoConfirmationMarkup,
  parameters: {
    docs: {
      story: {
        height: '620px',
      },
    },
  },
};

export const EmailUnconfirmed = {
  render: () => emailUnconfirmedMarkup,
};

/**
 * Note there does not appear to be a way to reach this view,
 * since the "New Post" button is hidden if you're over the upload limit.
 */
export const OverUploadLimit = {
  render: () => overUploadLimitMarkup,
  parameters: {
    docs: {
      story: {
        height: '500px',
      },
    },
  },
};
