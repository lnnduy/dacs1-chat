import axios from "axios";
import { GROUP_SERVER } from "../shared/Config";

export const loadGroups = () => {
  return axios.get(GROUP_SERVER).then((res) => res.data);
};
