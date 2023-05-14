import aggregateMarkup from './examples/notification-aggregate.html?raw';
import announcementMarkup from './examples/notification-tou.html?raw';
import blockCollapsedMarkup from './examples/notification-block-collapsed.html?raw';
import blockExpandedMarkup from './examples/notification-block-expanded.html?raw';
import blockLinkMarkup from './examples/notification-block-link.html?raw';
import commentMarkup from './examples/notification-comment.html?raw';
import followMarkup from './examples/notification-follow.html?raw';
import invitationApprovedMarkup from './examples/notification-invitation-approved.html?raw';
import invitationRequestMarkup from './examples/notification-invitation-request.html?raw';
import invitationsMarkup from './examples/notification-invitations.html?raw';
import likeMarkup from './examples/notification-like.html?raw';
import mentionMarkup from './examples/notification-mention.html?raw';
import saveMarkup from './examples/notification-save.html?raw';

export default {
  title: 'Legacy/Components/Notifications',
  tags: ['autodocs'],
};

export const Link = {
  render: () => blockLinkMarkup,
};

export const Collapsed = {
  render: () => blockCollapsedMarkup,
};

export const Expanded = {
  render: () => blockExpandedMarkup,
};

export const SiteAnnouncement = {
  render: () => announcementMarkup,
};

export const Mentions = {
  render: () => mentionMarkup,
};

export const Aggregate = {
  render: () => aggregateMarkup,
};

export const Followers = {
  render: () => followMarkup,
};

export const Saves = {
  render: () => saveMarkup,
};

export const Likes = {
  render: () => likeMarkup,
};

export const Comments = {
  render: () => commentMarkup,
};

export const ApprovedInvitations = {
  render: () => invitationApprovedMarkup,
};

export const Invitations = {
  render: () => invitationsMarkup,
};

export const InvitationRequests = {
  render: () => invitationRequestMarkup,
};
