import React from "react";
import { useMediaQuery } from "@material-ui/core";

import useStyles from "./styles";

function AddContactRequestReceived(props) {
  const isSmall = !useMediaQuery("(min-width:740px)");
  const classes = useStyles(isSmall)(props);

  return <div className={classes.container}>AddContactRequestReceived</div>;
}

export default AddContactRequestReceived;
