import React from "react";
import useStyles from "./styles";
import { useMediaQuery } from "@material-ui/core";
import { useSelector } from "react-redux";

function ConversationList(props) {
  const classes = useStyles(!useMediaQuery("(min-width:740px)"))(props);
  const { conversations } = useSelector((store) => store.conversation);

  return (
    <div className={classes.conversationList}>
      <pre>{JSON.stringify(conversations, null, 2)}</pre>
    </div>
  );
}

export default ConversationList;
