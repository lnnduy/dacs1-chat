import React from "react";
import { useMediaQuery, Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Flex, Text } from "@fluentui/react-northstar";

import useStyles from "./styles";
import GroupConversation from "./GroupConversation";
import PrivateConversation from "./PrivateConversation";

function ConversationList(props) {
  const classes = useStyles(!useMediaQuery("(min-width:740px)"))(props);
  const { conversations } = useSelector((store) => store.conversation);

  return (
    <div className={classes.conversationList}>
      {conversations.map((c) => {
        if (c.type === "GroupConversation")
          return <GroupConversation conversation={c} />;
        if (c.type === "PrivateConversation")
          return <PrivateConversation conversation={c} />;
      })}
    </div>
  );
}

export default ConversationList;
