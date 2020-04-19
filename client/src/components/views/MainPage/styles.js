import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  chatContainer: {
    width: "100vw",
    maxWidth: "100vw",
    height: "100vh",
    display: "grid",
    grid: `
      'left-menu search-container chat-title' 71px
      'left-menu conversation-list chat-message-list' 1fr
      'left-menu conversation-list chat-form' 78px
      / 275px 1fr
    `,
    gridTemplateColumns: `
      67px 252px auto
    `,
  },
}));

export const useStylesSmall = makeStyles((theme) => ({
  chatContainer: {
    width: "100vw",
    maxWidth: "100vw",
    height: "100vh",
    display: "grid",
    grid: `
      'conversation-list chat-title' 71px
      'conversation-list chat-message-list' 1fr
      'conversation-list chat-form' 78px
      / 275px 1fr
    `,
    gridTemplateColumns: `
      75px auto
    `,
  },
  leftMenu: {
    display: "none",
  },
  searchContainer: {
    display: "none",
  },
  conversationList: {
    gridArea: "conversation-list",
    background: "#fff",
  },
  chatTitle: {
    gridArea: "chat-title",
    backgroundColor: "#fff",
    color: "#232323",
    borderBottom: "1px solid rgba(0, 0, 0, 0.25)",
    borderLeft: "1px solid rgba(0, 0, 0, 0.25)",
  },
  chatMessageList: {
    gridArea: "chat-message-list",
    borderLeft: "1px solid rgba(0, 0, 0, 0.25)",
  },
  chatForm: {
    gridArea: "chat-form",
    backgroundColor: "#fff",
    borderTop: "1px solid rgba(0, 0, 0, 0.25)",
    borderLeft: "1px solid rgba(0, 0, 0, 0.25)",
  },
}));

export default useStyles;
