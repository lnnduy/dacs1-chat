import React from "react";
import { useMediaQuery } from "@material-ui/core";

import useStyles from "./styles";

function ChatTitle(props) {
  const isSmall = !useMediaQuery("(min-width:740px)");
  const classes = useStyles(isSmall)(props);

  return <div className={classes.chatTitle}></div>;
}

export default ChatTitle;
