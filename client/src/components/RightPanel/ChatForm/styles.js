import { makeStyles } from "@material-ui/core";

const largeScreenStyles = {
  chatForm: {
    gridArea: "chat-form",
    backgroundColor: "#fff",
    borderTop: "1px solid rgba(0, 0, 0, 0.1)",
    borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
  },
  chatInput: {
    width: "100%",
    height: "100%",
    padding: "20px 15px",
    border: "none",
    outline: "none",
    fontSize: "16px",
    "&:focus": {
      outline: "none",
    },
  },
};

const smallScreenStyles = largeScreenStyles;

const useStyles = (isSmall) =>
  isSmall
    ? makeStyles((theme) => smallScreenStyles)
    : makeStyles((theme) => largeScreenStyles);

export default useStyles;
