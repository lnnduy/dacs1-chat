import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { useSelector } from "react-redux";

import useStyles from "./styles";

import LeftPanel from "../../LeftPanel/LeftPanel";
import RightPanel from "../../RightPanel/RightPanel";

function MainPage(props) {
  const isSmall = !useMediaQuery("(min-width:740px)");
  const { selectedMenuItemCode } = useSelector((store) => store.leftMenu);
  const classes = useStyles(isSmall, selectedMenuItemCode)(props);

  return (
    <div className={classes.chatContainer}>
      <LeftPanel />
      <RightPanel />
    </div>
  );
}

export default MainPage;
