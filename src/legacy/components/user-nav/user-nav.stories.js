import userNavLoggedInMarkup from './examples/user-nav-logged-in.html?raw';
import userNavLoggedOutMarkup from './examples/user-nav-logged-out.html?raw';
import confirmEmailMarkup from './examples/confirm-email.html?raw';
import maintenanceMarkup from './examples/maintenance.html?raw';

/**
 * Appears in the [Site Header](/docs/legacy-components-site-header--docs).
 */
export default {
  title: 'Legacy/Components/User Navigation',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        height: '5em',
      },
    },
  },
};

export const LoggedIn = {
  render: () => userNavLoggedInMarkup,
};

export const LoggedOut = {
  render: () => userNavLoggedOutMarkup,
};

export const ConfirmYourEmail = {
  render: () => confirmEmailMarkup,
};

export const MaintenanceMode = {
  render: () => maintenanceMarkup,
};
