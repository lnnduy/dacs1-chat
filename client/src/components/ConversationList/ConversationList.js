import React from "react";
import useStyles from "./styles";
import { useMediaQuery } from "@material-ui/core";

function ConversationList(props) {
  const classes = useStyles(!useMediaQuery("(min-width:740px)"))(props);
  return <div className={classes.conversationList}></div>;
}

export default ConversationList;
