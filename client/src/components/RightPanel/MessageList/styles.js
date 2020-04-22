import { makeStyles } from "@material-ui/core";

const largeScreenStyles = {
  messageList: {
    gridArea: "chat-message-list",
    borderLeft: "1px solid rgba(0, 0, 0, 0.25)",
  },
};

const smallScreenStyles = largeScreenStyles;

const useStyles = (isSmall) =>
  isSmall
    ? makeStyles((theme) => smallScreenStyles)
    : makeStyles((theme) => largeScreenStyles);

export default useStyles;
