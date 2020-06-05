import { makeStyles } from "@material-ui/core";

const largeScreenStyles = {
  contactLists: {
    gridArea: "conversation-list",
    background: "#fff",
  },
  leftMenuCard: {
    padding: 15,
    userSelect: "none",
    "&:hover": {
      backgroundColor: "#f0f0f0",
      cursor: "pointer",
    },
  },
};

const smallScreenStyles = {
  contactLists: {
    gridArea: "conversation-list",
    background: "#fff",
  },
};

const useStyles = (isSmall) =>
  isSmall
    ? makeStyles((theme) => smallScreenStyles)
    : makeStyles((theme) => largeScreenStyles);

export default useStyles;
