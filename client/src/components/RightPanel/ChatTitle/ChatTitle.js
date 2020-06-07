import React from "react";
import { useSelector } from "react-redux";

import ContactsTitle from "./ContactsTitle";
import ConversationTitle from "./ConversationTitle";

import { MENU_ITEMS } from "../../../_actions/types";

function ChatTitle(props) {
  const { selectedMenuItemCode } = useSelector((store) => store.leftMenu);

  return (
    (selectedMenuItemCode === MENU_ITEMS.CHAT && <ConversationTitle />) ||
    (selectedMenuItemCode === MENU_ITEMS.CONTACTS && <ContactsTitle />)
  );
}

export default ChatTitle;
