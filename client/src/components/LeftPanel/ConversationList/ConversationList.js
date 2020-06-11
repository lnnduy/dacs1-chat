import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { useSelector } from "react-redux";

import useStyles from "./styles";
import GroupConversation from "./GroupConversation";
import PrivateConversation from "./PrivateConversation";

function ConversationList(props) {
  const classes = useStyles(!useMediaQuery("(min-width:740px)"))(props);
  const { conversations, selectedConversation } = useSelector(
    (store) => store.conversation
  );

  return (
    <div className={classes.conversationList}>
      {conversations.map((c, i) => {
        const isSelected =
          selectedConversation !== null && c._id === selectedConversation._id;
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
        return <></>;
      })}
    </div>
  );
}

export default ConversationList;
