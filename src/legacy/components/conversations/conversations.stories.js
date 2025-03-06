import conversationsNavMarkup from './examples/conversations-nav.html?raw';
import conversationMarkup from './examples/conversation.html?raw';
import mentionMarkup from './examples/mention.html?raw';

/**
 * Components used on the Conversations page.
 */
export default {
	title: 'Legacy/Components/Conversations',
	tags: ['autodocs'],
};

export const ConversationsNavigation = {
	render: () => conversationsNavMarkup,
};

/**
 * Note that the
 * [Image Comments](/docs/legacy-components-image-comments--docs)
 * component is used for the comments themselves.
 * This component handles the layout of the conversation overall.
 */
export const Conversation = {
	render: () => conversationMarkup,
};

/**
 * Note that the
 * [Image Comments](/docs/legacy-components-image-comments--docs)
 * component is used for the comments themselves.
 * This component handles the layout of the conversation overall.
 */
export const Mention = {
	render: () => mentionMarkup,
};
