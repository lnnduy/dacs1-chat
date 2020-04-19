import React from "react";
import { TextField, Typography, InputAdornment } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Search } from "@material-ui/icons";

import useStyles from "./styles";
import css from "./styles.css";

function SearchContainer(props) {
  const classes = useStyles(props);
  const user = useSelector((states) => states.user).userData;
  console.log(user);

  return (
    <div className={classes.searchContainer}>
      <Typography variant="subtitle2" noWrap display="inline">
        {user?.name || ""}
      </Typography>
      <TextField
        id="search-bar"
        className={classes.searchBar}
        variant="outlined"
        size="small"
        placeholder="Tìm kiếm tin nhắn, bạn bè, nhóm"
        autoComplete="off"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

export default SearchContainer;
