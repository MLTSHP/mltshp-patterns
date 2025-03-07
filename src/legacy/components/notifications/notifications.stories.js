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

/**
 * A notification block that contains a single link.
 */
export const Link = {
	render: () => blockLinkMarkup,
};

/**
 * A notification block containing a title that expands for more detail.
 */
export const Collapsed = {
	render: () => blockCollapsedMarkup,
};

/**
 * The expanded form of a notification block.
 */
export const Expanded = {
	render: () => blockExpandedMarkup,
};

/**
 * Links to the announcement page.
 */
export const SiteAnnouncement = {
	render: () => announcementMarkup,
};

/**
 * Links to the mentions page.
 */
export const Mentions = {
	render: () => mentionMarkup,
};

/**
 * When clicked, replaces itself with more notificiation blocks.
 */
export const Aggregate = {
	render: () => aggregateMarkup,
};

/**
 * Expands to show new followers.
 */
export const Followers = {
	render: () => followMarkup,
};

/**
 * Expands to show new saves.
 */
export const Saves = {
	render: () => saveMarkup,
};

/**
 * Expands to show new likes.
 */
export const Likes = {
	render: () => likeMarkup,
};

/**
 * Expands to show new comments.
 */
export const Comments = {
	render: () => commentMarkup,
};

/**
 * Expands to show your approved invitations to new shakes.
 */
export const ApprovedInvitations = {
	render: () => invitationApprovedMarkup,
};

/**
 * Expands to show your invitations to join new shakes.
 */
export const Invitations = {
	render: () => invitationsMarkup,
};

/**
 * Expands to show requests to join your shakes.
 */
export const InvitationRequests = {
	render: () => invitationRequestMarkup,
};
