import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { useSelector } from "react-redux";

import useStyles from "./styles";

function FriendList(props) {
  const isSmall = !useMediaQuery("(min-width:740px)");
  const classes = useStyles(isSmall)(props);
  const { user } = useSelector((store) => store.user);
  const contacts = user?.contacts || [];

  return (
    <div className={classes.container}>
      <pre>{JSON.stringify(contacts, null, 2)}</pre>
    </div>
  );
}

export default FriendList;
