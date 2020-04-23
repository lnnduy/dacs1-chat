import { makeStyles } from "@material-ui/core";

const largeScreenStyles = {
  searchContainer: {
    gridArea: "search-container",
    background: "#fff",
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
    zIndex: 1,
    padding: 10,
  },
  searchBar: {
    margin: "5px 0px",
    width: "90%",
  },
};

const smallScreenStyles = {
  searchContainer: {
    gridArea: "search-container",
    background: "#fff",
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
    zIndex: 1,
    display: "flex",
    flexWrap: "wrap",
    padding: 10,
  },
  searchBar: {
    margin: "5px 0px",
    width: "90%",
  },
};

const useStyles = (isSmall) =>
  isSmall
    ? makeStyles((theme) => smallScreenStyles)
    : makeStyles((theme) => largeScreenStyles);

export default useStyles;
