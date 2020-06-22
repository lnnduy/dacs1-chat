import {
  UPDATE_CONVERSATIONS,
  SELECT_CONVERSATION,
  UPDATE_MESSAGES,
  CLEAR_CONVERSATION,
  SEND_MESSAGE,
  NEW_CONVERSATION,
  RECEIVED_MESSAGE,
  MENU_ITEMS,
} from "./types";
import { selectMenuItem } from "./leftMenuActions";
import axios from "axios";
import { CONVERSATION_SERVER } from "../shared/Config";

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

export function startConversation(id) {
  const { participantId, groupId } = id;

  return async (dispatch, getState) => {
    const state = getState().conversation;
    const conversations = state.conversations;
    const conversationIndex = conversations.findIndex(
      (c) =>
        (c.type === "PrivateConversation" &&
          c.participant._id === participantId) ||
        (c.type === "GroupConversation" && c.group?._id === groupId)
    );
    const conversation = conversations[conversationIndex];

    if (conversation !== undefined) {
      dispatch(selectConversation(conversation._id));
      dispatch(selectMenuItem(MENU_ITEMS.CHAT));
      return state;
    }
    const conversationType =
      participantId === undefined
        ? "proupConversations"
        : "privateConversations";
    const _newConversation = await axios.post(
      `${CONVERSATION_SERVER}/${conversationType}`,
      {
        participantId,
        groupId,
      }
    );

    dispatch(newConversation(_newConversation));
    dispatch(selectConversation(_newConversation._id));
    dispatch(selectMenuItem(MENU_ITEMS.CHAT));
  };
}
