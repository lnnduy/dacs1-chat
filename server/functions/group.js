const Group = require("../models/Group");
const { Schema } = require("mongoose");

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
    }).select(["_id", "name", "avatar", "messages", "members"]);

    return groups.map((g) => {
      const { _id, name, avatar, messages } = g;
      g = { _id, name, avatar, messages, memberCount: g.members.length };
      return g;
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createGroup,
  getGroups,
};
