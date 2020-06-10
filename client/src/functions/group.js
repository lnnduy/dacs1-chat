import axios from "axios";
import { GROUP_SERVER } from "../shared/Config";

export const loadGroups = () => {
  return axios.get(GROUP_SERVER).then((res) => res.data);
};

export const leaveGroups = (groupId) => {
  return axios.get(`${GROUP_SERVER}/${groupId}/leave`).then((res) => res.data);
};

export const deleteGroups = (groupId) => {
  return axios.delete(`${GROUP_SERVER}/${groupId}`).then((res) => res.data);
};
