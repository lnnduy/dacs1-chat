const User = require("../models/User");
const Group = require("../models/Group");

const ROLES = {
  ADMIN: "Admin",
  MODERATOR: "Moderator",
  MEMBER: "Member",
};

const addGroup = (io) => async (groupId, memberEmail) => {
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

const leaveGroup = (io) => async (groupId) => {
  const group = await Group.findById(groupId);

  if (group === null) return;

  const memberIds = group.members;

  const promises = [];
  for (const id of memberIds) {
    promises.push(User.findOne({ _id: id, isOnline: true }).select("socketId"));
  }
  const onlineMembers = await Promise.all(promises);

  for (const member of onlineMembers)
    io.to(member.socketId).emit("leaveGroup", groupId);
};

const deleteGroup = (io) => async (userId, groupId) => {
  const group = await Group.findById(groupId);

  if (group === null || !group.admin.equals(userId)) return;

  const memberIds = group.members;

  const promises = [];
  for (const id of memberIds) {
    promises.push(User.findOne({ _id: id, isOnline: true }).select("socketId"));
  }
  const onlineMembers = await Promise.all(promises);

  for (const member of onlineMembers)
    io.to(member.socketId).emit("deleteGroup", groupId);
};

module.exports = { addGroup, leaveGroup, deleteGroup };
