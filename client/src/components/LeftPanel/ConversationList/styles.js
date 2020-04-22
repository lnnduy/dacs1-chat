import { makeStyles } from "@material-ui/core";

const largeScreenStyles = {
  conversationList: {
    gridArea: "conversation-list",
    background: "#fff",
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
