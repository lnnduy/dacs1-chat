import React from "react";
import {
  TextField,
  Typography,
  InputAdornment,
  useMediaQuery,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { Search } from "@material-ui/icons";

import useStyles from "./styles";
import "./styles.css";

function SearchContainer(props) {
  const isSmall = !useMediaQuery("(min-width:740px)");
  const classes = useStyles(isSmall)(props);
  const user = useSelector((states) => states.user).userData;

  return (
    <div className={classes.searchContainer}>
      {(isSmall && <div></div>) || (
        <>
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
        </>
      )}
    </div>
  );
}

export default SearchContainer;
