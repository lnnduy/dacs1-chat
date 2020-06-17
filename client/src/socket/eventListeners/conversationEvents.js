import store from "../../store";
import {
  newConversation,
  receivedMessage,
} from "../../_actions/conversationActions";
import scrollMessageViewToBottom from "../../shared/scrollMessageViewToBottom";

export const handleNewConversation = (conversation) => {
  store.dispatch(newConversation(conversation));
};

export const handleReceivedMessage = ({ conversationId, message }) => {
  store.dispatch(receivedMessage(conversationId, message));
  scrollMessageViewToBottom();
};
