import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import useStyles from "./styles";
import {
  loadGroupMessages,
  loadPrivateMessages,
} from "../../../functions/message";
import { updateMessages } from "../../../_actions/conversationActions";
import formater from "./formater";
import MessageSection from "./MessageSection";

function MessageList(props) {
  const isSmall = !useMediaQuery("(min-width:740px)");
  const classes = useStyles(isSmall)(props);
  const {
    selectedConversationIdx,
    conversations,
    loadedConversations,
  } = useSelector((store) => store.conversation);
  const dispatch = useDispatch();
  const container = useRef(null);

  const scrollToBottom = () => {
    if (container.current === null) return;

    container.current.scrollTop = container.current.scrollHeight;
  };

  useEffect(() => {
    if (
      selectedConversationIdx === null ||
      conversations[selectedConversationIdx] === undefined ||
      loadedConversations.includes(conversations[selectedConversationIdx]._id)
    ) {
      scrollToBottom();
      return;
    }

    if (conversations[selectedConversationIdx].type === "GroupConversation")
      loadGroupMessages(conversations[selectedConversationIdx]._id, 1)
        .then((data) => {
          if (data.success) {
            const { messages, page, totalPages } = data.data;
            dispatch(
              updateMessages(
                conversations[selectedConversationIdx]._id,
                messages,
                totalPages,
                page
              )
            );
            scrollToBottom();
          }
        })
        .catch((err) => console.log(err));
    if (conversations[selectedConversationIdx].type === "PrivateConversation")
      loadPrivateMessages(conversations[selectedConversationIdx]._id, 1)
        .then((data) => {
          if (data.success) {
            const { messages, page, totalPages } = data.data;
            dispatch(
              updateMessages(
                conversations[selectedConversationIdx]._id,
                messages,
                totalPages,
                page
              )
            );
            scrollToBottom();
          }
        })
        .catch((err) => console.log(err));
  }, [selectedConversationIdx, dispatch]);

  return (
    (conversations[selectedConversationIdx] !== undefined && (
      <div id="message-list" className={classes.messageList} ref={container}>
        {formater(conversations[selectedConversationIdx].messages).map(
          (section, i) => (
            <MessageSection key={i} messageSection={section} />
          )
        )}
      </div>
    )) || <div className={classes.messageList} />
  );
}

export default MessageList;
