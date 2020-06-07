const Group = require("../models/Group");
const User = require("../models/User");
const { Types } = require("mongoose");

const ROLES = {
  ADMIN: "Admin",
  MODERATOR: "Moderator",
  MEMBER: "Member",
};

const createGroup = async (userId, requestBody) => {
  const { name, avatar } = requestBody;

  const group = new Group();

  group.name = name;
  group.admin = userId;
  group.avatar = avatar;
  group.members = [userId];

  try {
    await group.save();
    return group;
  } catch (e) {
    console.log(e);
  }
};

const getGroups = async (userId) => {
  try {
    const groups = await Group.find({
      members: userId,
    });

    return groups.map((g) => {
      const { _id, name, avatar, messages, admin, moderators } = g;
      const role = admin.equals(userId)
        ? ROLES.ADMIN
        : moderators.some((id) => id.equals(userId))
        ? ROLES.MODERATOR
        : ROLES.MEMBER;
      console.log(admin.equals(userId));
      g = { _id, name, avatar, messages, memberCount: g.members.length, role };

      return g;
    });
  } catch (err) {
    console.log(err);
    return [];
  }
};

const addMember = async (userId, requestBody) => {
  try {
    const { groupId, memberEmail } = requestBody;
    const group = await Group.findById(groupId);

    if (
      group === null ||
      (!group.admin.equals(userId) &&
        !group.moderators.some((m) => m.equals(userId)))
    )
      return false;

    const member = await User.findOne({ email: memberEmail });

    if (member === null) return false;

    if (group.members.includes(member._id)) return true;

    group.members.push(member._id);

    await group.save();

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

module.exports = {
  createGroup,
  getGroups,
  addMember,
};
