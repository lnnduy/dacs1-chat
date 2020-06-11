import React from "react";
import { useMediaQuery, Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Flex, Text } from "@fluentui/react-northstar";

import useStyles from "./styles";

function ConversationTitle(props) {
  const isSmall = !useMediaQuery("(min-width:740px)");
  const classes = useStyles(isSmall)(props);
  const { selectedConversation } = useSelector((store) => store.conversation);

  return (
    (selectedConversation !== null && (
      <div className={classes.title}>
        {selectedConversation.type === "GroupConversation" && (
          <Flex fill vAlign="center">
            <Avatar
              className={
                classes.avatar +
                " " +
                (selectedConversation.role === "Admin"
                  ? classes.isAdmin
                  : selectedConversation.role === "Moderator"
                  ? classes.isModerator
                  : "")
              }
              src={selectedConversation.group.avatar}
            />
            <Text
              size="large"
              weight="bold"
              content={selectedConversation.group.name}
            />
          </Flex>
        )}
        {selectedConversation.type === "PrivateConversation" && (
          <Flex fill vAlign="center">
            <Avatar
              className={classes.avatar}
              src={selectedConversation.participant.avatar}
            />
            <Text
              size="large"
              weight="bold"
              content={
                selectedConversation.participant.name ||
                selectedConversation.participant.email
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
