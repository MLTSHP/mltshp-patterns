import followingMarkup from './examples/following.html?raw';
import membersMarkup from './examples/members.html?raw';
import otherShakesMarkup from './examples/other-shakes.html?raw';
import findShakesMarkup from './examples/find-shakes.html?raw';
import upgradeAccountMarkup from './examples/upgrade-account.html?raw';
import coolToolsMarkup from './examples/cool-tools.html?raw';
import shakeInviteMemberMarkup from './examples/shake-invite-member.html?raw';
import shakeInviteMemberResultsMarkup from './examples/shake-invite-member-results.html?raw';
import shakeActionsMarkup from './examples/shake-actions.html?raw';
import shakeEditorMarkup from './examples/shake-editor.html?raw';
import sidebarFlagNSFWMarkup from './examples/sidebar-flag-nsfw.html?raw';
import flagImageMarkup from './examples/flag-image.html?raw';
import deletePostMarkup from './examples/delete-post.html?raw';
import sidebarStatsMarkup from './examples/sidebar-stats.html?raw';
import metaDataMarkup from './examples/meta-data.html?raw';
import addToShakesMarkup from './examples/add-to-shakes.html?raw';
import inTheseShakesMarkup from './examples/in-these-shakes.html?raw';
import permalinkSocialMarkup from './examples/permalink-social.html?raw';

export default {
  title: 'Legacy/Components/Sidebar',
  tags: ['autodocs'],
};

export const Following = {
  render: () => followingMarkup,
};

export const Members = {
  render: () => membersMarkup,
};

export const OtherShakes = {
  render: () => otherShakesMarkup,
};

export const FindShakes = {
  render: () => findShakesMarkup,
};

export const UpgradeAccount = {
  render: () => upgradeAccountMarkup,
};

export const CoolTools = {
  render: () => coolToolsMarkup,
};

export const ShakeInviteMember = {
  render: () => shakeInviteMemberMarkup,
};

export const ShakeInviteMemberResults = {
  render: () => shakeInviteMemberResultsMarkup,
  parameters: {
    docs: {
      story: {
        height: '220px',
      },
    },
  },
};

export const ShakeActions = {
  render: () => shakeActionsMarkup,
};

export const ShakeEditor = {
  render: () => shakeEditorMarkup,
};

/**
 * Appears in the sidebar of a user shake if logged in as an admin.
 */
export const FlagNsfw = {
  render: () => sidebarFlagNSFWMarkup,
  name: 'Flag NSFW',
};

/**
 * Appears on the permalink page
 */
export const FlagImage = {
  render: () => flagImageMarkup,
};

/**
 * Appears on the permalink page
 */
export const DeletePost = {
  render: () => deletePostMarkup,
};

/**
 * Appears on the permalink page
 */
export const SidebarStats = {
  render: () => sidebarStatsMarkup,
};

/**
 * Appears on the permalink page
 */
export const MetaData = {
  render: () => metaDataMarkup,
};

/**
 * Appears on the permalink page
 */
export const AddToShakes = {
  render: () => addToShakesMarkup,
};

/**
 * Appears on the permalink page
 */
export const InTheseShakes = {
  render: () => inTheseShakesMarkup,
};

/**
 * Appears on the permalink page
 */
export const SocialLinks = {
  render: () => permalinkSocialMarkup,
};
