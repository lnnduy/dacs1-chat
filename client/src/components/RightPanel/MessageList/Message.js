import React, { useState } from "react";
import { Text, Flex } from "@fluentui/react-northstar";
import { useMediaQuery } from "@material-ui/core";

import useStyles from "./styles";

function Message(props) {
  const isSmall = !useMediaQuery("(min-width:740px)");
  const classes = useStyles(isSmall)(props);
  const { message, time } = props;
  const [onMouseHover, setOnMouseHover] = useState(false);
  const sentAt = new Date(message.sentAt);
  const timeStamp =
    sentAt.getHours() +
    ":" +
    sentAt.getMinutes() +
    " " +
    sentAt.getDate() +
    "/" +
    (sentAt.getMonth() + 1);

  return (
    <span
      onMouseOver={() => setOnMouseHover(true)}
      onMouseLeave={() => setOnMouseHover(false)}
    >
      <Flex column className={classes.message} gap="gap.smaller">
        <Text content={message.content} />
        {time || onMouseHover ? (
          <Text
            size="smaller"
            weight="light"
            content={timeStamp}
            style={{ color: "#707070" }}
          />
        ) : (
          <Text size="smaller" weight="light" content={""} />
        )}
      </Flex>
    </span>
  );
}

export default Message;
