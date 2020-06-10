import {
  UPDATE_GROUPS,
  ADD_MEMBER_SUCCESS,
  ADD_GROUP,
} from "../_actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case UPDATE_GROUPS:
      state = [...action.payload];
      return state;
    case ADD_GROUP:
      console.log(action.payload);
      state = [action.payload, ...state];
      return state;
    case ADD_MEMBER_SUCCESS:
      const groups = state;
      const groupIndex = groups.findIndex((g) => g._id === action.payload);
      let group = groups[groupIndex];
      group = { ...group, memberCount: group.memberCount + 1 };
      groups.splice(groupIndex, 1, group);
      state = [...groups];
      return state;
    default:
      return state;
  }
}
