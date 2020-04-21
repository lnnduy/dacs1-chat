import { makeStyles } from "@material-ui/core/styles";

const largeScreenStyles = {
  chatContainer: {
    width: "100vw",
    maxWidth: "100vw",
    height: "100vh",
    display: "grid",
    grid: `
      'left-menu search-container chat-title' 85px
      'left-menu conversation-list chat-message-list' 1fr
      'left-menu conversation-list chat-form' 78px
      / 275px 1fr
    `,
    gridTemplateColumns: `
      67px 300px auto
    `,
  },
};

const smallScreenStyles = {
  chatContainer: {
    width: "100vw",
    maxWidth: "100vw",
    height: "100vh",
    display: "grid",
    grid: `
      'search-container chat-title' 85px
      'conversation-list chat-message-list' 1fr
      'conversation-list chat-form' 78px
      / 275px 1fr
    `,
    gridTemplateColumns: `
      85px auto
    `,
  },
};

const useStyles = (isSmall) =>
  isSmall
    ? makeStyles((theme) => smallScreenStyles)
    : makeStyles((theme) => largeScreenStyles);

export default useStyles;
