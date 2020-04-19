import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  chatForm: {
    gridArea: "chat-form",
    backgroundColor: "#fff",
    borderTop: "1px solid rgba(0, 0, 0, 0.25)",
    borderLeft: "1px solid rgba(0, 0, 0, 0.25)",
  },
}));

export default useStyles;
