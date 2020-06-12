import {
  UPDATE_CONVERSATIONS,
  SELECT_CONVERSATION,
  UPDATE_MESSAGES,
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
