import {
  SEND_ADD_CONTACT_REQUEST_SUCCESS,
  UPDATE_ADD_CONTACT_REQUESTS_RECEIVED,
  UPDATE_ADD_CONTACT_REQUESTS_SENT,
  UPDATE_ADD_CONTACTS,
  ACCEPT_ADD_CONTACT_REQUEST_SUCCESS,
  CANCEL_ADD_CONTACT_REQUEST_SUCCESS,
  DECLINE_ADD_CONTACT_REQUEST_SUCCESS,
  RECEIVED_ADD_CONTACT_REQUEST,
  ADD_NEW_CONTACT,
} from "../_actions/types";

export default function (
  state = { sentRequests: [], receivedRequests: [], contacts: [] },
  action
) {
  switch (action.type) {
    case SEND_ADD_CONTACT_REQUEST_SUCCESS:
      state = {
        ...state,
        sentRequests: [action.payload, ...state.receivedRequests],
      };
      return state;
    case UPDATE_ADD_CONTACT_REQUESTS_RECEIVED:
      state = {
        ...state,
        receivedRequests: [...action.payload],
      };
      return state;
    case UPDATE_ADD_CONTACT_REQUESTS_SENT:
      state = {
        ...state,
        sentRequests: [...action.payload],
      };
      return state;
    case UPDATE_ADD_CONTACTS:
      state = {
        ...state,
        contacts: [...action.payload],
      };
      return state;
    case ACCEPT_ADD_CONTACT_REQUEST_SUCCESS:
      const receivedRequestsWithRequestWillAccept = state.receivedRequests;
      receivedRequestsWithRequestWillAccept.splice(
        receivedRequestsWithRequestWillAccept.findIndex(
          (r) => r._id === action.payload._id
        ),
        1
      );
      state = {
        ...state,
        contacts: [action.payload, ...state.contacts],
        receivedRequests: [...receivedRequestsWithRequestWillAccept],
      };
      return state;
    case CANCEL_ADD_CONTACT_REQUEST_SUCCESS:
      let sentRequests = state.sentRequests;

      sentRequests.splice(
        sentRequests.findIndex((r) => r._id === action.payload),
        1
      );

      state = { ...state, sentRequests: [...sentRequests] };
      return state;
    case DECLINE_ADD_CONTACT_REQUEST_SUCCESS:
      const receivedRequestsWithRequestWillDecline = state.receivedRequests;
      receivedRequestsWithRequestWillDecline.splice(
        receivedRequestsWithRequestWillDecline.findIndex(
          (r) => r._id === action.payload._id
        ),
        1
      );
      state = {
        ...state,
        receivedRequests: [...receivedRequestsWithRequestWillDecline],
      };
      return state;
    case RECEIVED_ADD_CONTACT_REQUEST:
      state = {
        ...state,
        receivedRequests: [action.payload, ...state.receivedRequests],
      };
      return state;
    case ADD_NEW_CONTACT:
      let sentRequestsWithAcceptedRequest = state.sentRequests;

      sentRequestsWithAcceptedRequest.splice(
        sentRequestsWithAcceptedRequest.findIndex(
          (r) => r._id === action.payload._id
        ),
        1
      );
      state = {
        ...state,
        contacts: [action.payload, ...state.contacts],
        sentRequests: [...sentRequestsWithAcceptedRequest],
      };
      return state;
    default:
      return state;
  }
}
