import { UPDATE_CONVERSATIONS, SELECT_CONVERSATION } from "./types";

export const updateConversations = (conversations) => {
  return {
    type: UPDATE_CONVERSATIONS,
    payload: conversations,
  };
};

export const selectConversation = (conversation) => {
  return {
    type: SELECT_CONVERSATION,
    payload: conversation,
  };
};
