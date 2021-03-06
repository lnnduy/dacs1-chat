import React, { useState } from "react";
import { useMediaQuery } from "@material-ui/core";
import { useSelector } from "react-redux";

import useStyles from "./styles";
import GroupConversation from "./GroupConversation";
import PrivateConversation from "./PrivateConversation";

function ConversationList(props) {
  const classes = useStyles(!useMediaQuery("(min-width:740px)"))(props);
  const { conversations, selectedConversationIdx } = useSelector(
    (store) => store.conversation
  );
  console.log(conversations);

  return (
    <div className={classes.conversationList}>
      {conversations.map((c, i) => {
        const isSelected =
          selectedConversationIdx !== null &&
          c._id === conversations[selectedConversationIdx]._id;
        if (c.type === "GroupConversation")
          return (
            <GroupConversation
              key={i}
              conversation={c}
              isSelected={isSelected}
            />
          );
        if (c.type === "PrivateConversation")
          return (
            <PrivateConversation
              key={i}
              conversation={c}
              isSelected={isSelected}
            />
          );
        return <div key={i}></div>;
      })}
    </div>
  );
}

export default ConversationList;
