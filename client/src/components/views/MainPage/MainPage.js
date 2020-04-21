import React from "react";
import { useMediaQuery } from "@material-ui/core";

import useStyles from "./styles";

import LeftMenu from "../../LeftMenu/LeftMenu";
import SearchContainer from "../../SearchContainer/SearchContainer";
import ConversationList from "../../ConversationList/ConversationList";
import ConversationView from "../../ConversationView/ConversationView";

function MainPage(props) {
  const isSmall = !useMediaQuery("(min-width:740px)");
  const classes = useStyles(isSmall)(props);

  return (
    <div className={classes.chatContainer}>
      {!isSmall && <LeftMenu />}
      <SearchContainer />
      <ConversationList />
      <ConversationView />
    </div>
  );
}

export default MainPage;
