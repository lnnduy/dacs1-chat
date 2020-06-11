const GroupConversation = require("../models/GroupConversation");
const PrivateConversation = require("../models/PrivateConversation");
const Group = require("../models/Group");
const User = require("../models/User");

const sortConversations = (conversations) => {
  conversations.sort((c1, c2) => {
    if (c1.lastActivityAt > c1.lastSeenAt && c2.lastActivityAt <= c2.lastSeenAt)
      return -1;
    if (c1.lastActivityAt <= c1.lastSeenAt && c2.lastActivityAt > c2.lastSeenAt)
      return 1;

    return c1.lastActivityAt < c2.lastActivityAt
      ? 1
      : c1.lastActivityAt > c2.lastActivityAt
      ? -1
      : 0;
  });

  return conversations;
};

const classifyConversations = (conversations) => {
  conversations = conversations
    .map((c) => c.toObject())
    .map((c) => {
      const { _id, messages, lastSeenAt, lastActivityAt, isHide, userId } = c;
      const conversation = {
        _id,
        userId,
        messages,
        lastSeenAt,
        lastActivityAt,
        isHide,
      };

      if (c.groupId !== undefined) {
        conversation.type = "GroupConversation";
        conversation.groupId = c.groupId;
      }
      if (c.participantId !== undefined) {
        conversation.type = "PrivateConversation";
        conversation.participantId = c.participantId;
      }

      return conversation;
    });
  return conversations;
};

const populateConversationDatas = async (conversations) => {
  try {
    for (const conversation of conversations) {
      if (conversation.type === "GroupConversation") {
        let group = await Group.findById(conversation.groupId).select([
          "_id",
          "name",
          "avatar",
          "admin",
          "moderators",
        ]);

        if (group.admin.equals(conversation.userId))
          conversation.role = "Admin";
        else if (
          group.moderators !== undefined &&
          group.moderators.includes(conversation.userId)
        )
          conversation.role = "Moderator";
        else conversation.role = "Member";

        conversation.group = {
          _id: group._id,
          name: group.name,
          avatar: group.avatar,
        };

        delete conversation.groupId;
      }
      if (conversation.type === "PrivateConversation") {
        const user = await User.findById(conversation.userId).select([
          "_id",
          "name",
          "email",
          "avatar",
        ]);
        conversation.user = user;
        delete conversation.userId;
      }
    }

    return conversations;
  } catch (err) {
    console.log(err);
    return;
  }
};

const getConversations = async (userId) => {
  try {
    let groupConversations = await GroupConversation.find({
      userId: userId,
    });
    let privateConversations = await PrivateConversation.find({
      userId: userId,
    });

    let conversations = [...groupConversations, ...privateConversations];
    conversations = sortConversations(conversations);
    conversations = classifyConversations(conversations);
    conversations = populateConversationDatas(conversations);

    return conversations;
  } catch (err) {
    console.log(err);
    return [];
  }
};

module.exports = {
  getConversations,
};