import React from "react";
import useStyles from "./styles";

function SearchContainer(props) {
  const classes = useStyles(props);
  return <div className={classes.searchContainer}></div>;
}

export default SearchContainer;
