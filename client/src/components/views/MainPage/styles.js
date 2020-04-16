import { makeStyles } from "@material-ui/core/styles";

const mainBlue = "#0584FF";

const useStyles = makeStyles(theme => ({
  chatContainer: {
    width: "100vw",
    maxWidth: "100vw",
    height: "100vh",
    display: "grid",
    grid: `
      'search-container chat-title' 71px
      'conversation-list chat-message-list' 1fr
      'conversation-list chat-form' 78px
      / 275px 1fr
    `
  },
  searchContainer: {
    gridArea: "search-container",
    background: mainBlue,
    borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
    zIndex: 1
  },
  conversationList: {
    gridArea: "conversation-list",
    background: "#cbfffa"
  },
  chatTitle: {
    gridArea: "chat-title",
    backgroundColor: "#fff",
    color: "#232323",
    borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
    borderLeft: "1px solid rgba(0, 0, 0, 0.7)"
  },
  chatMessageList: {
    gridArea: "chat-message-list",
    borderLeft: "1px solid rgba(0, 0, 0, 0.25)"
  },
  chatForm: {
    gridArea: "chat-form",
    backgroundColor: "#fff",
    borderTop: "1px solid rgba(0, 0, 0, 0.3)",
    borderLeft: "1px solid rgba(0, 0, 0, 0.4)"
  }
}));

export default useStyles;
