import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { useSelector } from "react-redux";

import useStyles from "./styles";
import { MENU_ITEMS } from "../../../_actions/types";

import ContactsTitle from "./ContactsTitle";
import ConversationTitle from "./ConversationTitle";

function ChatTitle(props) {
  const isSmall = !useMediaQuery("(min-width:740px)");
  const classes = useStyles(isSmall)(props);
  const { selectedMenuItemCode } = useSelector((store) => store.leftMenu);

  return (
    (selectedMenuItemCode === MENU_ITEMS.CHAT && <ConversationTitle />) ||
    (selectedMenuItemCode === MENU_ITEMS.CONTACTS && <ContactsTitle />)
  );
}

export default ChatTitle;
