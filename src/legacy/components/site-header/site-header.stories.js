import loggedOutMarkup from './examples/logged-out.html?raw';
import loggedInMarkup from './examples/logged-in.html?raw';
import loggedInWithContentMarkup from './examples/logged-in-with-content.html?raw';

/**
 * Note that the Site Header contains the
 * [Site Navigation](/docs/legacy-components-site-navigation--docs),
 * [Choose a Shake](/docs/legacy-components-choose-a-shake--docs), and
 * [User Navigation](/docs/legacy-components-user-navigation--docs)
 * components. See those components for variations and states.
 */
export default {
  title: 'Legacy/Components/Site Header',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export const LoggedOut = {
  render: () => loggedOutMarkup,
};

export const LoggedIn = {
  render: () => loggedInMarkup,
};

export const LoggedInWithContent = {
  render: () => loggedInWithContentMarkup,
};
