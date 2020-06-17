import {
  ADD_MEMBER_SUCCESS,
  UPDATE_GROUPS,
  ADD_GROUP,
  REMOVE_GROUP,
  MEMBER_LEAVE_GROUP,
  CLEAR_GROUP,
} from "./types";

export const addMemberSuccess = (groupId) => {
  return { type: ADD_MEMBER_SUCCESS, payload: groupId };
};

export const updateGroups = (groups) => {
  return { type: UPDATE_GROUPS, payload: groups };
};

export const addGroup = (group) => {
  return { type: ADD_GROUP, payload: group };
};

export const removeGroup = (groupId) => {
  return { type: REMOVE_GROUP, payload: groupId };
};

export const memberLeaveGroup = (groupId) => {
  return { type: MEMBER_LEAVE_GROUP, payload: groupId };
};

export function clearGroup() {
  return { type: CLEAR_GROUP };
}
