import { makeStyles } from "@material-ui/core";

const largeScreenStyles = {
  container: {
    gridArea: "contact-view",
    borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
    padding: 15,
    height: "100%",
  },
  btnAccept: {
    color: "#00ff55",
    margin: 0,
    backgroundColor: "#00ff5522",
    borderRight: "1px solid rgba(0, 0, 0, 0.1)",
    borderTop: "1px solid rgba(0, 0, 0, 0.1)",
    "&:hover": {
      color: "#00aa00",
      backgroundColor: "#00ff5555",
    },
  },
  btnDecline: {
    color: "#ff2222",
    margin: 0,
    backgroundColor: "#ff222215",
    borderTop: "1px solid rgba(0, 0, 0, 0.1)",
    "&:hover": {
      color: "#dd0000",
      backgroundColor: "#ff222255",
    },
  },
  requestCard: {
    padding: 0,
    height: 102,
  },
  info: {
    padding: 15,
    overFlow: "hidden",
  },
};

const smallScreenStyles = largeScreenStyles;

const useStyles = (isSmall) =>
  isSmall
    ? makeStyles((theme) => smallScreenStyles)
    : makeStyles((theme) => largeScreenStyles);

export default useStyles;
