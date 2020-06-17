import {
  SEND_ADD_CONTACT_REQUEST_SUCCESS,
  UPDATE_ADD_CONTACT_REQUESTS_RECEIVED,
  UPDATE_ADD_CONTACT_REQUESTS_SENT,
  UPDATE_ADD_CONTACTS,
  CANCEL_ADD_CONTACT_REQUEST_SUCCESS,
  ACCEPT_ADD_CONTACT_REQUEST_SUCCESS,
  DECLINE_ADD_CONTACT_REQUEST_SUCCESS,
  RECEIVED_ADD_CONTACT_REQUEST,
  ADD_NEW_CONTACT,
  CLEAR_CONTACT,
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

export function receivedAddContactRequest(request) {
  return { type: RECEIVED_ADD_CONTACT_REQUEST, payload: request };
}

export function addNewContact(contact) {
  return { type: ADD_NEW_CONTACT, payload: contact };
}

export function clearContact() {
  return { type: CLEAR_CONTACT };
}
