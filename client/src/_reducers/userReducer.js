import { UPDATE_USER_DATA, CLEAR_USER_DATA } from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case UPDATE_USER_DATA:
      state = { ...state, user: { ...action.payload } };
      return state;
    case CLEAR_USER_DATA:
      return { ...state, user: null };
    default:
      return state;
  }
}
