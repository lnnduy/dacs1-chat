import React from "react";

import useStyles from "./styles";

function MessageList(props) {
  const classes = useStyles(props);

  return <div className={classes.messageList}></div>;
}

export default MessageList;
