import {
  UPDATE_GROUPS,
  ADD_MEMBER_SUCCESS,
  ADD_GROUP,
  REMOVE_GROUP,
  MEMBER_LEAVE_GROUP,
} from "../_actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case UPDATE_GROUPS:
      state = [...action.payload];
      return state;
    case ADD_GROUP:
      state = [action.payload, ...state];
      return state;
    case REMOVE_GROUP:
      let groupsWithGroupWillRemove = state;
      const groupWillRemoveIndex = groupsWithGroupWillRemove.findIndex(
        (g) => g._id === action.payload
      );

      groupsWithGroupWillRemove.splice(groupWillRemoveIndex, 1);

      state = [...groupsWithGroupWillRemove];
      return state;
    case MEMBER_LEAVE_GROUP:
      const groupsWithLeftMember = state;
      const groupWillUpdateMemberCountIndex = groupsWithLeftMember.findIndex(
        (g) => g._id === action.payload
      );
      let updatedMemberCountGroup =
        groupsWithLeftMember[groupWillUpdateMemberCountIndex];
      updatedMemberCountGroup = {
        ...updatedMemberCountGroup,
        memberCount: updatedMemberCountGroup.memberCount - 1,
      };

      groupsWithLeftMember.splice(
        groupWillUpdateMemberCountIndex,
        1,
        updatedMemberCountGroup
      );
      state = [...groupsWithLeftMember];

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
