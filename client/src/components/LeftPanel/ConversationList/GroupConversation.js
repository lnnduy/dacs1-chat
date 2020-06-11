import React from "react";
import { Flex, Text } from "@fluentui/react-northstar";
import { useMediaQuery, Avatar } from "@material-ui/core";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { selectConversation } from "../../../_actions/conversationActions";

function GroupConversation(props) {
  const { conversation } = props;
  const classes = useStyles(!useMediaQuery("(min-width:740px)"))(props);
  const dispatch = useDispatch();

  return (
    <Flex
      className={classes.container}
      onClick={() => dispatch(selectConversation(conversation))}
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
          size="small"
          weight="semibold"
          content={conversation.group.name}
        />
      </Flex>
    </Flex>
  );
}

export default GroupConversation;
