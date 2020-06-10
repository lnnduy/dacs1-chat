import store from "../../store";
import {
  addGroup,
  memberLeaveGroup,
  removeGroup,
} from "../../_actions/groupActions";

export const handleAddGroup = (group) => {
  store.dispatch(addGroup(group));
};

export const handleLeaveGroup = (groupId) => {
  store.dispatch(memberLeaveGroup(groupId));
};

export const handleDeleteGroup = (groupId) => {
  console.log("delete", groupId);
  store.dispatch(removeGroup(groupId));
};
