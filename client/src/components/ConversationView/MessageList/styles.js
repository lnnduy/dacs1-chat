import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  messageList: {
    gridArea: "chat-message-list",
    borderLeft: "1px solid rgba(0, 0, 0, 0.25)",
  },
}));

export default useStyles;
