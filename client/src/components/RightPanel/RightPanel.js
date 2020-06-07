import React from "react";
import { useSelector } from "react-redux";

import ChatTitle from "./ChatTitle/ChatTitle";
import MessageList from "./MessageList/MessageList";
import ChatForm from "./ChatForm/ChatForm";
import ContactView from "./ContactView/ContactView";

import { MENU_ITEMS } from "../../_actions/types";

function RightPanel(props) {
  const { selectedMenuItemCode } = useSelector((store) => store.leftMenu);

  return (
    <>
      {(selectedMenuItemCode === MENU_ITEMS.CONTACTS && (
        <>
          <ChatTitle />
          <ContactView />
        </>
      )) || (
        <>
          <ChatTitle />
          <MessageList />
          <ChatForm />
        </>
      )}
    </>
  );
}

export default RightPanel;
