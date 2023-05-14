import conversationsNavMarkup from './examples/conversations-nav.html?raw';
import conversationMarkup from './examples/conversation.html?raw';
import mentionMarkup from './examples/mention.html?raw';

export default {
  title: 'Legacy/Components/Conversations',
  tags: ['autodocs'],
};

export const ConversationsNavigation = {
  render: () => conversationsNavMarkup,
};

export const Conversation = {
  render: () => conversationMarkup,
};

export const Mention = {
  render: () => mentionMarkup,
};
