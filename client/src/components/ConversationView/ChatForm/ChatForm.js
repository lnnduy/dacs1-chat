import React from "react";

import useStyles from "./styles";

function ChatForm(props) {
  const classes = useStyles(props);

  return <div className={classes.chatForm}></div>;
}

export default ChatForm;
