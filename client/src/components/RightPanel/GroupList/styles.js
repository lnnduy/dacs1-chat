import { makeStyles } from "@material-ui/core";

const largeScreenStyles = {
  groupList: {
    gridArea: "chat-message-list",
    borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
    padding: 15,
  },
  controlsContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  filter: {
    maxWidth: 220,
  },
  sorter: {
    maxWidth: 320,
  },
  avatar: {
    border: "1px solid #c9c9c9",
    borderRadius: "100%",
    width: 30,
    height: 30,
  },
  groupCard: {
    userSelect: "none",
    "&:hover": {
      cursor: "pointer",
    },
    marginBottom: 15,
    width: 200,
  },
  addCard: {
    userSelect: "none",
    "&:hover": {
      cursor: "pointer",
      borderColor: "#007070",
      backgroundColor: "#00808010",
    },
    width: 200,
  },
};

const smallScreenStyles = largeScreenStyles;

const useStyles = (isSmall) =>
  isSmall
    ? makeStyles((theme) => smallScreenStyles)
    : makeStyles((theme) => largeScreenStyles);

export default useStyles;
