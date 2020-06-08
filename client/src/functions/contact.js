import axios from "axios";
import { CONTACT_SERVER } from "../shared/Config";

export function sendAddContactRequest(email) {
  return axios
    .post(`${CONTACT_SERVER}/addContactRequests`, { email })
    .then((res) => res.data);
}

export function loadAddContactRequestsReceived() {
  return axios
    .get(`${CONTACT_SERVER}/addContactRequests/received`)
    .then((res) => res.data);
}

export function loadAddContactRequestsSent() {
  return axios
    .get(`${CONTACT_SERVER}/addContactRequests/sent`)
    .then((res) => res.data);
}

export function cancelAddContactRequestsSent(requestId) {
  return axios
    .delete(`${CONTACT_SERVER}/addContactRequests/cancel/${requestId}`)
    .then((res) => res.data);
}

export function acceptAddContactRequestsSent(requestId) {
  return axios
    .get(`${CONTACT_SERVER}/addContactRequests/accept/${requestId}`)
    .then((res) => res.data);
}

export function declineAddContactRequestsSent(requestId) {
  return axios
    .delete(`${CONTACT_SERVER}/addContactRequests/decline/${requestId}`)
    .then((res) => res.data);
}

export function loadContacts() {
  return axios.get(`${CONTACT_SERVER}`).then((res) => res.data);
}
