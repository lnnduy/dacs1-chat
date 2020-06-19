import { makeStyles } from "@material-ui/core";

const largeScreenStyles = {
  conversationList: {
    gridArea: "conversation-list",
    background: "#fff",
    overflow: "auto",
  },
  container: {
    padding: 10,
    overflow: "hidden",
    position: "relative",
    "&:hover": {
      backgroundColor: "#f5f5f5",
      cursor: "pointer",
    },
  },
  isSelected: {
    backgroundColor: "#00a0e922",
  },
  avatar: {
    border: "1px solid #00000050",
    borderRadius: "100%",
    padding: 5,
    marginRight: 4,
    backgroundColor: "white",
  },
  isAdmin: {
    border: "2px solid #FFDF00",
  },
  isModerator: {
    border: "2px solid #C0C0C0",
  },
  btnMore: {
    position: "absolute",
    right: 5,
    top: 5,
  },
};

const smallScreenStyles = {
  conversationList: {
    gridArea: "conversation-list",
    background: "#fff",
  },
};

const useStyles = (isSmall) =>
  isSmall
    ? makeStyles((theme) => smallScreenStyles)
    : makeStyles((theme) => largeScreenStyles);

export default useStyles;
