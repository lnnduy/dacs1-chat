import React from "react";
import useStyles from "./styles";

function ChatTitle(props) {
  const classes = useStyles(props);
  return <div className={classes.chatTitle}></div>;
}

export default ChatTitle;
