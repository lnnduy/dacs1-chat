import React from "react";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";

function MainPage(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.chatContainer}>
      <div className={classes.searchContainer}></div>
      <div className={classes.chatTitle}>
        <Typography variant="h4" bold>
          Duỹ
        </Typography>
      </div>
      <div className={classes.conversationList}></div>
      <div className={classes.chatMessageList}></div>
      <div className={classes.chatForm}></div>
    </div>
  );
}

export default MainPage;
