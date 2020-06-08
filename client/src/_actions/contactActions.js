import {
  SEND_ADD_CONTACT_REQUEST_SUCCESS,
  UPDATE_ADD_CONTACT_REQUESTS_RECEIVED,
  UPDATE_ADD_CONTACT_REQUESTS_SENT,
  UPDATE_ADD_CONTACTS,
  CANCEL_ADD_CONTACT_REQUEST_SUCCESS,
  ACCEPT_ADD_CONTACT_REQUEST_SUCCESS,
  DECLINE_ADD_CONTACT_REQUEST_SUCCESS,
} from "./types";

export function sendAddContactRequestSuccess(request) {
  return { type: SEND_ADD_CONTACT_REQUEST_SUCCESS, payload: request };
}

export function cancelAddContactRequestSuccess(request) {
  return { type: CANCEL_ADD_CONTACT_REQUEST_SUCCESS, payload: request };
}

export function acceptAddContactRequestSuccess(request) {
  return { type: ACCEPT_ADD_CONTACT_REQUEST_SUCCESS, payload: request };
}

export function declineAddContactRequestSuccess(request) {
  return { type: DECLINE_ADD_CONTACT_REQUEST_SUCCESS, payload: request };
}

export function updateAddContactRequestsReceived(requests) {
  return { type: UPDATE_ADD_CONTACT_REQUESTS_RECEIVED, payload: requests };
}

export function updateAddContactRequestsSent(requests) {
  return { type: UPDATE_ADD_CONTACT_REQUESTS_SENT, payload: requests };
}

export function updateContacts(contacts) {
  return { type: UPDATE_ADD_CONTACTS, payload: contacts };
}
