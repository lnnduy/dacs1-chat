import React from "react";
import useStyles from "./styles";

function LeftMenu(props) {
  const classes = useStyles(props);

  return <div className={classes.leftMenu}></div>;
}

export default LeftMenu;
