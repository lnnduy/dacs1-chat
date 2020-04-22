import React from "react";
import { useMediaQuery } from "@material-ui/core";

import useStyles from "./styles";

function MessageList(props) {
  const isSmall = !useMediaQuery("(min-width:740px)");
  const classes = useStyles(isSmall)(props);

  return <div className={classes.messageList}></div>;
}

export default MessageList;
