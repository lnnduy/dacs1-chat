import { makeStyles } from "@material-ui/core/styles";
import { MENU_ITEMS } from "../../../_actions/types";

const conversationView = `
      'left-menu search-container chat-title' 85px
      'left-menu conversation-list chat-message-list' 1fr
      'left-menu conversation-list chat-form' 78px
      / 275px 1fr`;
const contactView = `
      'left-menu search-container chat-title' 85px
      'left-menu conversation-list contact-view' 1fr
      / 275px 1fr`;

const largeScreenStyles = (view) => ({
  chatContainer: {
    width: "100vw",
    maxWidth: "100vw",
    height: "100vh",
    display: "grid",
    grid:
      view === MENU_ITEMS.CHAT
        ? conversationView
        : view === MENU_ITEMS.CONTACTS
        ? contactView
        : "",
    gridTemplateColumns: `
      67px 300px auto
    `,
  },
});

const smallScreenStyles = (view) => ({
  chatContainer: {
    width: "100vw",
    maxWidth: "100vw",
    height: "100vh",
    display: "grid",
    grid:
      view === MENU_ITEMS.CHAT
        ? conversationView
        : view === MENU_ITEMS.CONTACTS
        ? contactView
        : "",
    gridTemplateColumns: `
      85px auto
    `,
  },
});

const useStyles = (isSmall, view) => {
  const large = largeScreenStyles(view);
  const small = smallScreenStyles(view);

  return isSmall ? makeStyles((theme) => small) : makeStyles((theme) => large);
};

export default useStyles;
