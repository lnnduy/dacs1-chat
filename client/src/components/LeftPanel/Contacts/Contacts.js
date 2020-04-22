import React from "react";
import useStyles from "./styles";
import { useMediaQuery } from "@material-ui/core";

function Contacts(props) {
  const classes = useStyles(!useMediaQuery("(min-width:740px)"))(props);
  return <div className={classes.conversationList}>Contacts</div>;
}

export default Contacts;
