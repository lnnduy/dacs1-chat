import {
  SEND_MESSAGE_SUCCESS,
  RECEIVED_NEW_MESSAGE,
  NEW_CONVERSATION,
  DELETE_CONVERSATION,
  DELETE_MESSAGE,
  MARK_MESSAGES_READ,
  SELECT_CONVERSATION,
} from "./types";

export const sendMessageSuccess = (conversationId, message) => {
  return {
    type: SEND_MESSAGE_SUCCESS,
    payload: {
      conversationId,
      message,
    },
  };
};

export const receivedNewMessage = (conversationId, message) => {
  return {
    type: RECEIVED_NEW_MESSAGE,
    payload: {
      conversationId,
      message,
    },
  };
};

export const newConversation = (conversation) => {
  return {
    type: NEW_CONVERSATION,
    payload: {
      conversation,
    },
  };
};

export const deleteConversation = (conversationId) => {
  return {
    type: DELETE_CONVERSATION,
    payload: {
      conversationId,
    },
  };
};

export const deleteMessage = (conversationId, messageId) => {
  return {
    type: DELETE_MESSAGE,
    payload: {
      conversationId,
      messageID,
    },
  };
};

export const markMessagesRead = (conversationId) => {
  return {
    type: MARK_MESSAGES_READ,
    payload: {
      conversationId,
    },
  };
};

export const selectConversation = (conversationId) => {
  return {
    type: SELECT_CONVERSATION,
    payload: {
      conversationId,
    },
  };
};
