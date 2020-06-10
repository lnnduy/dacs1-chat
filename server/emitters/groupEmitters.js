const User = require("../models/User");
const Group = require("../models/Group");

const ROLES = {
  ADMIN: "Admin",
  MODERATOR: "Moderator",
  MEMBER: "Member",
};

const emitAddGroup = (io) => async (groupId, memberEmail) => {
  const member = await User.findOne({ email: memberEmail });

  if (member === null && !member.isOnline && member.socketId === undefined)
    return;

  const g = await Group.findById(groupId);
  const { _id, name, avatar, messages, admin, moderators } = g;
  const role = admin.equals(member._id)
    ? ROLES.ADMIN
    : moderators.some((id) => id.equals(member._id))
    ? ROLES.MODERATOR
    : ROLES.MEMBER;

  const group = {
    _id,
    name,
    avatar,
    messages,
    memberCount: g.members.length,
    role,
  };

  io.to(member.socketId).emit("addGroup", group);
};

module.exports = { emitAddGroup };
