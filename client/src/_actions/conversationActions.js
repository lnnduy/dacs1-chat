import {
  UPDATE_CONVERSATIONS,
  SELECT_CONVERSATION,
  UPDATE_MESSAGES,
  CLEAR_CONVERSATION,
  SEND_MESSAGE,
  NEW_CONVERSATION,
  RECEIVED_MESSAGE,
  START_CONVERSATION,
} from "./types";

export const updateConversations = (conversations) => {
  return {
    type: UPDATE_CONVERSATIONS,
    payload: conversations,
  };
};

export const selectConversation = (conversationId) => {
  return {
    type: SELECT_CONVERSATION,
    payload: conversationId,
  };
};

export const updateMessages = (conversationId, messages, totalPages, page) => {
  return {
    type: UPDATE_MESSAGES,
    payload: { conversationId, messages, totalPages, page },
  };
};

export function clearConversation() {
  return { type: CLEAR_CONVERSATION };
}

export function sendMessage(conversationId, message) {
  return { type: SEND_MESSAGE, payload: { message, conversationId } };
}

export function receivedMessage(conversationId, message) {
  return { type: RECEIVED_MESSAGE, payload: { message, conversationId } };
}

export function newConversation(conversation) {
  return { type: NEW_CONVERSATION, payload: conversation };
}

export function startConversation(conversation) {
  return { type: START_CONVERSATION, payload: conversation };
}
