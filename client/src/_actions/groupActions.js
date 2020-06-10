import { ADD_MEMBER_SUCCESS, UPDATE_GROUPS, ADD_GROUP } from "./types";

export const addMemberSuccess = (groupId) => {
  return { type: ADD_MEMBER_SUCCESS, payload: groupId };
};

export const updateGroups = (groups) => {
  return { type: UPDATE_GROUPS, payload: groups };
};

export const addGroup = (group) => {
  return { type: ADD_GROUP, payload: group };
};
