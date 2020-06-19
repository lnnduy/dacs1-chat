import React from "react";
import { Avatar } from "@material-ui/core";
import { Flex, Divider } from "@fluentui/react-northstar";
import Message from "./Message";
import { useMediaQuery } from "@material-ui/core";

import useStyles from "./styles";
import { useSelector } from "react-redux";

function MessageSection(props) {
  const isSmall = !useMediaQuery("(min-width:740px)");
  const classes = useStyles(isSmall)(props);
  const { messageSection } = props;
  const { sender, messages } = messageSection;
  console.log(messageSection);
  const { user } = useSelector((store) => store.user);
  const isMe = sender._id === user._id;

  return (
    <Flex>
      <Flex classes={classes.messageContainer} column fill>
        <Flex
          classes={classes.noMargin}
          styles={{ position: "relative" }}
          hAlign={isMe ? "end" : "start"}
        >
          <Avatar
            className={isMe ? classes.myAvatar : classes.senderAvatar}
            src={sender.avatar}
          />
          <Message
            message={messages[0]}
            isMe={isMe}
            time={messages.length === 1 ? true : false}
          />
        </Flex>
        {messages.map((m, i) =>
          i > 0 ? (
            <Flex key={i} hAlign={isMe ? "end" : "start"}>
              <Message
                key={i}
                message={m}
                isMe={isMe}
                time={i === messages.length - 1 ? true : false}
              />
            </Flex>
          ) : (
            ""
          )
        )}
        <div className={classes.spacer} />
      </Flex>
    </Flex>
  );
}

export default MessageSection;
