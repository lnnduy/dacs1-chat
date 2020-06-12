import axios from "axios";
import { MESSAGE_SERVER } from "../shared/Config";

export const loadGroupMessages = (conversationId, page) => {
  return axios
    .get(`${MESSAGE_SERVER}/groupConversations/${conversationId}?page=${page}`)
    .then((res) => res.data);
};
