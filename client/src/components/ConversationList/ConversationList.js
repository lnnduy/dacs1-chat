import React from "react";
import useStyles from "./styles";

function ConversationList(props) {
  const classes = useStyles(props);
  return <div className={classes.conversationList}></div>;
}

export default ConversationList;
