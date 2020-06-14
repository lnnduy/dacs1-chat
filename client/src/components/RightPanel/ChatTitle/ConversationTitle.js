import React from "react";
import { useMediaQuery, Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Flex, Text } from "@fluentui/react-northstar";

import useStyles from "./styles";

function ConversationTitle(props) {
  const isSmall = !useMediaQuery("(min-width:740px)");
  const classes = useStyles(isSmall)(props);
  const { selectedConversationIdx, conversations } = useSelector(
    (store) => store.conversation
  );

  return (
    (selectedConversationIdx !== null && (
      <div className={classes.title}>
        {conversations[selectedConversationIdx].type ===
          "GroupConversation" && (
          <Flex fill vAlign="center">
            <Avatar
              className={
                classes.avatar +
                " " +
                (conversations[selectedConversationIdx]?.role === "Admin"
                  ? classes.isAdmin
                  : conversations[selectedConversationIdx]?.role === "Moderator"
                  ? classes.isModerator
                  : "")
              }
              src={conversations[selectedConversationIdx]?.group.avatar}
            />
            <Text
              size="large"
              weight="bold"
              content={conversations[selectedConversationIdx]?.group.name}
            />
          </Flex>
        )}
        {conversations[selectedConversationIdx]?.type ===
          "PrivateConversation" && (
          <Flex fill vAlign="center">
            <Avatar
              className={classes.avatar}
              src={conversations[selectedConversationIdx]?.participant.avatar}
            />
            <Text
              size="large"
              weight="bold"
              content={
                conversations[selectedConversationIdx]?.participant.name ||
                conversations[selectedConversationIdx]?.participant.email
              }
            />
          </Flex>
        )}
      </div>
    )) || (
      <div className={classes.title}>
        <Flex vAlign="center">
          <Text
            size="large"
            weight="bold"
            content="Chọn một cuộc trò chuyện và bắt đầu!"
          />
        </Flex>
      </div>
    )
  );
}

export default ConversationTitle;
