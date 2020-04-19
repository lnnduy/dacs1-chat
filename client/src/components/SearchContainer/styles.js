import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    gridArea: "search-container",
    background: "#fff",
    borderBottom: "1px solid rgba(0, 0, 0, 0.25)",
    zIndex: 1,
    display: "flex",
    flexWrap: "wrap",
    padding: 10,
  },
  searchBar: {
    margin: "5px 0px",
    width: "80%",
  },
}));

export default useStyles;
