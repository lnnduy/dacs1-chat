import {
  SEND_MESSAGE_SUCCESS,
  RECEIVED_NEW_MESSAGE,
  DELETE_MESSAGE,
  DELETE_CONVERSATION,
  MARK_MESSAGES_READ,
  NEW_CONVERSATION,
} from "../_actions/types";
import {
  CONVERSATION_TYPES,
  MESSAGE_STATUS,
  MESSAGE_TYPES,
  SELECT_CONVERSATION,
} from "../shared/contants";

const reducer = (
  state = { conversations: [], selectedConversationId: null },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case RECEIVED_NEW_MESSAGE:
      return receiveNewMessage(state, payload);
    case NEW_CONVERSATION:
      return newConversation(state, payload);
    case SELECT_CONVERSATION:
      return selectConversation(state, patload);
    case DELETE_MESSAGE:
      return deleteMessage(state, payload);
    case DELETE_CONVERSATION:
      return deleteConversation(state, payload);
    case MARK_MESSAGES_READ:
      return markMessagesRead(state, payload);
    case SEND_MESSAGE_SUCCESS:
      return sendMessageSuccess(state, payload);
    default:
      return state;
  }
};

const selectConversation = (state, payload) => {
  const { selectedConversationId } = payload;
  state = { ...state, selectedConversationId };
  return state;
};

const newConversation = (state, payload) => {
  let { conversation } = payload;
  let { conversations } = state;

  conversations = [conversation, ...conversations];

  state = { ...state, conversations };
  return state;
};

const receiveNewMessage = (state, payload) => {
  let { conversationId, message } = payload;
  let { conversations, selectedConversationId } = state;
  let conversation = conversations.find((c) => c._id === conversationId);

  if (conversation === null) conversation = { messages: [], newMessages: [] };

  const { messages, newMessages } = conversation;

  if (conversation._id === selectedConversationId) return state;
  else newMessages = [...newMessages, message];

  conversation = {
    ...conversation,
    newMessages,
    messages,
    lastMessageAt: Date.now(),
  };

  conversations = [conversation, ...conversations];

  state = { ...state, conversations };
  return state;
};

const deleteMessage = (state, payload) => {
  const { conversationId, messageId } = payload;
  const { conversations } = state;
  const conversation = conversations.find((c) => c._id === conversationId);

  if (conversation === null) return state;

  const { messages } = conversation;
  const messageIndex = messages.findIndex((m) => m._id === messageId);

  if (messageIndex === -1) return state;

  messages = [
    ...messages.slice(0, messageIndex),
    ...messages.slice(messageIndex + 1),
  ];
  conversations = { ...conversations, messages };
  state = { ...state, conversations };

  return state;
};

const deleteConversation = (state, payload) => {
  const { conversationId } = payload;
  const { conversations } = state;
  const conversationIndex = conversations.findIndex(
    (c) => c._id === conversationId
  );

  if (conversationIndex === -1) return state;

  conversations = [
    ...conversations.slice(0, conversationIndex),
    ...conversations.slice(conversationIndex + 1),
  ];
};

const markMessagesRead = (state, payload) => {
  const { conversationId } = payload;
  const { conversations } = state;
  const conversation = conversations.find((c) => c._id === conversationId);

  if (conversation === null) return state;

  const { messages, newMessages } = conversation;

  newMessages.forEach((m) => {
    m = { ...m, status: MESSAGE_STATUS.SEEN };
    messages = [...messages, m];
  });

  conversation = { ...conversation, messages, newMessages: [] };
  state = { ...state, conversations };

  return state;
};

const sendMessageSuccess = (state, payload) => {
  const { conversationId, message } = payload;
  const { conversations } = state;
  const conversation = conversation.find((c) => c._id === conversationId);

  if (conversation === null) return state;

  const { messages } = conversation;

  messages = [...messages, message];
};

export default reducer;
