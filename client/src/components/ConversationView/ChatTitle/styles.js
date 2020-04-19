import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  chatTitle: {
    gridArea: "chat-title",
    backgroundColor: "#fff",
    color: "#232323",
    borderBottom: "1px solid rgba(0, 0, 0, 0.25)",
    borderLeft: "1px solid rgba(0, 0, 0, 0.25)",
  },
}));

export default useStyles;
