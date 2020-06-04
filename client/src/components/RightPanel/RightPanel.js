import React from "react";
import { useSelector } from "react-redux";

import ChatTitle from "./ChatTitle/ChatTitle";
import MessageList from "./MessageList/MessageList";
import GroupList from "./GroupList/GroupList";
import ChatForm from "./ChatForm/ChatForm";

import { MENU_ITEMS } from "../../_actions/types";

import {
  CONVERSATION_TYPES,
  MESSAGE_STATUS,
  MESSAGE_TYPES,
} from "../../shared/contants";

function RightPanel(props) {
  const { selectedMenuItemCode } = useSelector((store) => store.leftMenu);

  return (
    <>
      <ChatTitle />
      {(selectedMenuItemCode === MENU_ITEMS.CONTACTS && <GroupList />) || (
        <MessageList />
      )}
      <ChatForm />
    </>
  );
}

export default RightPanel;
