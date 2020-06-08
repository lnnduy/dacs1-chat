import { makeStyles } from "@material-ui/core";

const largeScreenStyles = {
  container: {
    gridArea: "contact-view",
    borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
    padding: 15,
    height: "100%",
  },
  btnAddFriend: {
    color: "#00aaff",
    borderColor: "#00aaff",
    "&:hover": {
      color: "#00eeff",
      borderColor: "#00eeff",
      backgroundColor: "#00aaff12",
    },
  },
  avatar: {
    border: "1px solid white",
    borderRadius: "100%",
    width: 34,
    height: 34,
    padding: 4,
  },
  friendCardContainer: {
    width: 200,
    marginBottom: 15,
  },
  friendCard: {
    userSelect: "none",
    "&:hover": {
      cursor: "pointer",
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
