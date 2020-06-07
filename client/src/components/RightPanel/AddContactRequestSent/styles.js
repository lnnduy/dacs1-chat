import { makeStyles } from "@material-ui/core";

const largeScreenStyles = {
  container: {
    gridArea: "contact-view",
    borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
    padding: 15,
    height: "100%",
  },
};

const smallScreenStyles = largeScreenStyles;

const useStyles = (isSmall) =>
  isSmall
    ? makeStyles((theme) => smallScreenStyles)
    : makeStyles((theme) => largeScreenStyles);

export default useStyles;
