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
    border: "1px solid gray",
    borderRadius: "100%",
    width: 34,
    height: 34,
    padding: 4,
  },
  roleAdmin: {
    border: "2px solid #FFDF00",
  },
  roleModerator: {
    border: "2px solid #C0C0C0",
  },
  groupCardContainer: {
    width: 200,
    marginBottom: 15,
  },
  groupCard: {
    userSelect: "none",
    "&:hover": {
      cursor: "pointer",
    },
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
  btnMore: {
    position: "absolute",
    right: 3,
    top: 5,
  },
};

const smallScreenStyles = largeScreenStyles;

const useStyles = (isSmall) =>
  isSmall
    ? makeStyles((theme) => smallScreenStyles)
    : makeStyles((theme) => largeScreenStyles);

export default useStyles;
