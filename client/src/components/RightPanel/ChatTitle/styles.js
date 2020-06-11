import { makeStyles } from "@material-ui/core";

const largeScreenStyles = {
  title: {
    padding: 15,
    gridArea: "chat-title",
    backgroundColor: "#fff",
    color: "#232323",
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
    borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
  },
  contactTitle: {
    padding: 15,
    userSelect: "none",
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
};

const smallScreenStyles = largeScreenStyles;

const useStyles = (isSmall) =>
  isSmall
    ? makeStyles((theme) => smallScreenStyles)
    : makeStyles((theme) => largeScreenStyles);

export default useStyles;
