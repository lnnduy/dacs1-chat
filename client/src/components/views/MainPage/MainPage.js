import React from "react";
import { useStyles, useStylesSmall } from "./styles";
import { useMediaQuery } from "@material-ui/core";

import LeftMenu from "../../LeftMenu/LeftMenu";
import SearchContainer from "../../SearchContainer/SearchContainer";
import ConversationList from "../../ConversationList/ConversationList";
import ConversationView from "../../ConversationView/ConversationView";

function MainPage(props) {
  const smallStyles = useStylesSmall(props);
  const styles = useStyles(props);

  const isSmall = !useMediaQuery("(min-width:740px)");
  const classes = isSmall ? smallStyles : styles;

  return (
    <div className={classes.chatContainer}>
      <LeftMenu />
      <SearchContainer />
      <ConversationList />
      <ConversationView />
    </div>
  );
}

export default MainPage;
