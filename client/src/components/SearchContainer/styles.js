import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    gridArea: "search-container",
    background: "#fff",
    borderBottom: "1px solid rgba(0, 0, 0, 0.25)",
    zIndex: 1,
  },
}));

export default useStyles;
