import React, { useEffect } from "react";
import { useMediaQuery } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import { loadGroupMessages } from "../../../functions/message";
import { updateMessages } from "../../../_actions/conversationActions";
import useStyles from "./styles";

function MessageList(props) {
  const isSmall = !useMediaQuery("(min-width:740px)");
  const classes = useStyles(isSmall)(props);
  const {
    selectedConversationIdx,
    conversations,
    loadedConversations,
  } = useSelector((store) => store.conversation);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      selectedConversationIdx === null ||
      conversations[selectedConversationIdx] === undefined ||
      loadedConversations.includes(conversations[selectedConversationIdx]._id)
    )
      return;

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
          }
        })
        .catch((err) => console.log(err));
    if (conversations[selectedConversationIdx].type === "PrivateConversation")
      return;
  }, [selectedConversationIdx, dispatch]);

  return (
    conversations[selectedConversationIdx] !== undefined && (
      <div className={classes.messageList}>
        <pre>
          {JSON.stringify(
            conversations[selectedConversationIdx].messages,
            null,
            2
          )}
        </pre>
      </div>
    )
  );
}

export default MessageList;
