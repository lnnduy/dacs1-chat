import {
  UPDATE_CONVERSATIONS,
  SELECT_CONVERSATION,
  UPDATE_MESSAGES,
} from "../_actions/types";

const reducer = (
  state = {
    conversations: [],
    selectedConversationIdx: null,
    loadedConversations: [],
  },
  action
) => {
  switch (action.type) {
    case UPDATE_CONVERSATIONS:
      state = { ...state, conversations: [...action.payload] };
      return state;
    case SELECT_CONVERSATION:
      const index = state.conversations.findIndex(
        (c) => c._id === action.payload
      );
      state = {
        ...state,
        selectedConversationIdx: index,
      };
      return state;
    case UPDATE_MESSAGES:
      const { conversationId, totalPages, page, messages } = action.payload;
      const conversations = state.conversations;
      const conversationIndex = conversations.findIndex(
        (c) => c._id === conversationId
      );
      let conversation = conversations[conversationIndex];
      conversation = {
        ...conversation,
        totalLoadedPages:
          (conversation.totalLoadedPages !== undefined &&
            Math.max(conversation.totalLoadedPages, page)) ||
          0,
        totalPages,
        messages: [...messages, ...(conversation.messages || [])],
      };
      conversations.splice(conversationIndex, 1, conversation);
      state = {
        ...state,
        conversations: [...conversations],
        loadedConversations: [...state.loadedConversations, conversation._id],
      };

      return state;
    default:
      return state;
  }
};

export default reducer;
