import React from "react";
import { useSelector } from "react-redux";

import GroupList from "../GroupList/GroupList";
import FriendList from "../FriendList/FriendList";
import AddContactRequestReceived from "../AddContactRequestReceived/AddContactRequestReceived";
import AddContactRequestSent from "../AddContactRequestSent/AddContactRequestSent";

import { CONTACT_MENU_ITEMS } from "../../../_actions/types";

function ContactView() {
  const { selectedContactMenuItemCode } = useSelector(
    (store) => store.contactMenu
  );

  return (
    <div>
      {selectedContactMenuItemCode === CONTACT_MENU_ITEMS.GROUPS && (
        <GroupList />
      )}
      {selectedContactMenuItemCode === CONTACT_MENU_ITEMS.FRIENDS && (
        <FriendList />
      )}
      {selectedContactMenuItemCode ===
        CONTACT_MENU_ITEMS.ADD_CONTACT_REQUEST_RECEIVED && (
        <AddContactRequestReceived />
      )}
      {selectedContactMenuItemCode ===
        CONTACT_MENU_ITEMS.ADD_CONTACT_REQUEST_SENT && (
        <AddContactRequestSent />
      )}
    </div>
  );
}

export default ContactView;
