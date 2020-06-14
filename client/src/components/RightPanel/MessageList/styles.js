import { makeStyles } from "@material-ui/core";

const largeScreenStyles = {
  messageList: {
    gridArea: "chat-message-list",
    borderLeft: "1px solid rgba(0, 0, 0, 0.05)",
    backgroundColor: "#f1f1f1",
    overflow: "auto",
    padding: "15px 0 5px 0",
  },
  message: {
    marginLeft: 60,
    marginRight: 60,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 4,
    width: "fit-content",
    transition: "all 0.3s",
  },
  messageContainer: {
    position: "relative",
    marginBottom: "15px !important",
  },
  senderAvatar: {
    position: "absolute",
    top: 0,
    left: 10,
    margin: 0,
  },
  noMargin: {
    marginBottom: "0 !important",
  },
  myMessage: {
    backgroundColor: "#00aaee20",
  },
  myAvatar: {
    position: "absolute",
    right: 10,
    top: 0,
  },
  spacer: {
    marginBottom: 15,
  },
};

const smallScreenStyles = largeScreenStyles;

const useStyles = (isSmall) =>
  isSmall
    ? makeStyles((theme) => smallScreenStyles)
    : makeStyles((theme) => largeScreenStyles);

export default useStyles;
