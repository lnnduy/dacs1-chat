import React from "react";

import ChatTitle from "./ChatTitle/ChatTitle";
import MessageList from "./MessageList/MessageList";
import ChatForm from "./ChatForm/ChatForm";

import {
  CONVERSATION_TYPES,
  MESSAGE_STATUS,
  MESSAGE_TYPES,
} from "../../shared/contants";

function RightPanel(props) {
  const selectedConversation = {
    type: CONVERSATION_TYPES.PRIVATE,
    peoples: [
      {
        id: 1,
        name: "Dev 1",
      },
    ],
    messages: [
      {
        sender: 1,
        type: MESSAGE_TYPES.TEXT,
        content: "Hello!",
        sentAt: 1587280674472,
        status: MESSAGE_STATUS.SEEN,
      },
      {
        sender: 2,
        type: MESSAGE_TYPES.TEXT,
        content: "What's up, bro?",
        sentAt: 1587281040584,
        status: MESSAGE_STATUS.RECEIVED,
      },
    ],
  };

  return (
    <>
      <ChatTitle />
      <MessageList />
      <ChatForm />
    </>
  );
}

export default RightPanel;
