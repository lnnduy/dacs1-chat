import {
  UPDATE_USER_DATA,
  CLEAR_USER_DATA,
  UPDATE_ADD_CONTACT_REQUESTS_RECEIVED,
  UPDATE_ADD_CONTACT_REQUESTS_SENT,
  UPDATE_ADD_CONTACTS,
} from "./types";

export function updateUserData(userData) {
  return { type: UPDATE_USER_DATA, payload: userData };
}

export function updateAddContactRequestsReceived(requests) {
  return { type: UPDATE_ADD_CONTACT_REQUESTS_RECEIVED, payload: requests };
}

export function updateAddContactRequestsSent(requests) {
  return { type: UPDATE_ADD_CONTACT_REQUESTS_SENT, payload: requests };
}

export function updateContacts(userData) {
  return { type: UPDATE_ADD_CONTACTS, payload: userData };
}

export function clearUserData() {
  return { type: CLEAR_USER_DATA };
}
