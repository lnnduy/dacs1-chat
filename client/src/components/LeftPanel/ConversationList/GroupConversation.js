import React from "react";
import { Flex, Text } from "@fluentui/react-northstar";
import { useMediaQuery, Avatar } from "@material-ui/core";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { selectConversation } from "../../../_actions/conversationActions";
import LastMessage from "./LastMessage";

function GroupConversation(props) {
  const { conversation, isSelected } = props;
  const classes = useStyles(!useMediaQuery("(min-width:740px)"))(props);
  const dispatch = useDispatch();

  return (
    <Flex
      className={
        classes.container + " " + (isSelected ? classes.isSelected : "")
      }
      onClick={() => dispatch(selectConversation(conversation._id))}
    >
      <Avatar
        src={conversation.group.avatar}
        className={
          classes.avatar +
          " " +
          (conversation.role === "Admin"
            ? classes.isAdmin
            : conversation.role === "Moderator"
            ? classes.isModerator
            : "")
        }
      />
      <Flex column vAlign="center">
        <Text
          truncated
          size="medium"
          weight="bold"
          content={conversation.group.name}
        />
        <LastMessage message={conversation.lastMessage} />
      </Flex>
    </Flex>
  );
}

export default GroupConversation;
