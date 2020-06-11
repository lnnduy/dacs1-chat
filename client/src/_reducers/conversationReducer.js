import { UPDATE_CONVERSATIONS, SELECT_CONVERSATION } from "../_actions/types";

const reducer = (
  state = { conversations: [], selectedConversation: null },
  action
) => {
  switch (action.type) {
    case UPDATE_CONVERSATIONS:
      state = { ...state, conversations: [...action.payload] };
      return state;
    case SELECT_CONVERSATION:
      state = { ...state, selectedConversation: { ...action.payload } };
      return state;
    default:
      return state;
  }
};

export default reducer;
