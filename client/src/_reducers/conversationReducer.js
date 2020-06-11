import { UPDATE_CONVERSATIONS } from "../_actions/types";

const reducer = (
  state = { conversations: [], selectedConversationId: null },
  action
) => {
  switch (action.type) {
    case UPDATE_CONVERSATIONS:
      state = { ...state, conversations: [...action.payload] };
      return state;
    default:
      return state;
  }
};

export default reducer;
