import React, { useState } from "react";
import { useMediaQuery } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import useStyles from "./styles";
import { sendMessage } from "../../../_actions/conversationActions";
import scrollMessageViewToBottom from "../../../shared/scrollMessageViewToBottom";
import { socketEmit } from "../../../socket";

function ChatForm(props) {
  const isSmall = !useMediaQuery("(min-width:740px)");
  const classes = useStyles(isSmall)(props);
  const dispatch = useDispatch();
  const { selectedConversationIdx, conversations } = useSelector(
    (store) => store.conversation
  );
  const { user } = useSelector((store) => store.user);
  const [value, setValue] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const message = {
        sentAt: new Date().toISOString(),
        type: "Text",
        sender: {
          _id: user._id,
          name: user.name,
          email: user.email,
          avatar: user.avatar,
        },
        content: value,
        status: "Sent",
      };
      dispatch(
        sendMessage(conversations[selectedConversationIdx]._id, message)
      );
      socketEmit(
        conversations.type === "PrivateConversation"
          ? "sendPrivateMessage"
          : "sendGroupMessage",
        {
          userId: user._id,
          conversationId: conversations[selectedConversationIdx]._id,
          message,
        }
      );
      setTimeout(() => scrollMessageViewToBottom(), 0);
      setValue("");
    }
  };

  return (
    (selectedConversationIdx !== null && (
      <div className={classes.chatForm}>
        <input
          className={classes.chatInput}
          placeholder="Nhập nội dung tin nhắn..."
          onKeyPress={handleKeyPress}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    )) || <div className={classes.chatForm} />
  );
}

export default ChatForm;
