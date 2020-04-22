import { makeStyles } from "@material-ui/core";

const largeScreenStyles = {
  title: {
    gridArea: "chat-title",
    backgroundColor: "#fff",
    color: "#232323",
    borderBottom: "1px solid rgba(0, 0, 0, 0.25)",
    borderLeft: "1px solid rgba(0, 0, 0, 0.25)",
  },
};

const smallScreenStyles = largeScreenStyles;

const useStyles = (isSmall) =>
  isSmall
    ? makeStyles((theme) => smallScreenStyles)
    : makeStyles((theme) => largeScreenStyles);

export default useStyles;
