import axios from "axios";
import { CONVERSATION_SERVER } from "../shared/Config";

export const loadConversations = () => {
  return axios.get(CONVERSATION_SERVER).then((res) => res.data);
};
