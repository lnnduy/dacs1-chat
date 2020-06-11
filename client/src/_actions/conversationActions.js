import { UPDATE_CONVERSATIONS } from "./types";

export const updateConversations = (conversations) => {
  return {
    type: UPDATE_CONVERSATIONS,
    payload: conversations,
  };
};
