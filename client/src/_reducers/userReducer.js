import {
  UPDATE_USER_DATA,
  CLEAR_USER_DATA,
  UPDATE_ADD_CONTACT_REQUESTS_RECEIVED,
  UPDATE_ADD_CONTACT_REQUESTS_SENT,
  UPDATE_ADD_CONTACTS,
} from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case UPDATE_USER_DATA:
      state = { ...state, user: { ...action.payload } };
      return state;
    case UPDATE_ADD_CONTACT_REQUESTS_RECEIVED:
      state = {
        ...state,
        user: {
          ...state.user,
          addContactRequestsReceived: [...action.payload],
        },
      };
      return state;
    case UPDATE_ADD_CONTACT_REQUESTS_SENT:
      state = {
        ...state,
        user: { ...state.user, addContactRequestsSent: [...action.payload] },
      };
      return state;
    case UPDATE_ADD_CONTACTS:
      state = {
        ...state,
        user: { ...state.user, contacts: [...action.payload] },
      };
      return state;
    case CLEAR_USER_DATA:
      return { ...state, user: null };
    default:
      return state;
  }
}
