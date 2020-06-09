import store from "../../store";
import {
  receivedAddContactRequest,
  addNewContact,
} from "../../_actions/contactActions";

export const handleReceivedAddContactRequest = (request) => {
  store.dispatch(receivedAddContactRequest(request));
};

export const handleAddNewContact = (contact) => {
  store.dispatch(addNewContact(contact));
};
