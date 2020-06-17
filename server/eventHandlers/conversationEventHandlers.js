const User = require("../models/User");
const Group = require("../models/Group");
const Message = require("../models/Message");
const PrivateConversation = require("../models/PrivateConversation");
const GroupConversation = require("../models/GroupConversation");

const addMessageToGroupConversation = async (io, userId, groupId, message) => {
  const conversation = await GroupConversation.findOne({ userId, groupId });
  const user = await User.findById(userId);
  message = message.toObject();
  message.sender = await User.findById(message.sender).select([
    "_id",
    "name",
    "email",
    "avatar",
  ]);

  if (conversation !== null) {
    conversation.messages.push({ $each: [message._id], $position: 0 });
    await conversation.save();
    if (user.isOnline)
      io.to(user.socketId).emit("receivedMessage", {
        conversationId: conversation._id,
        message,
      });
    return;
  }

  const newConversation = new GroupConversation();
  newConversation.userId = userId;
  newConversation.groupId = groupId;
  newConversation.lastSeenAt = new Date().toISOString();
  newConversation.lastActivityAt = new Date().toISOString();
  newConversation.messages = [message._id];
  await newConversation.save();

  const newConversationObj = newConversation.toObject();

  newConversationObj.lastMessage = message;
  newConversationObj.group = await Group.findById(
    newConversation.groupId
  ).select(["_id", "name", "avatar"]);
  newConversationObj.type = "GroupConversation";

  if (user.isOnline)
    io.to(user.socketId).emit("newConversation", newConversationObj);
};

const sendGroupMessage = (io) => async (userId, conversationId, message) => {
  try {
    let conversation = await GroupConversation.findById(conversationId);
    conversation = conversation.toObject();

    if (conversation === null) return;

    const group = await Group.findById(conversation.groupId);

    if (group === null || !group.members.includes(userId)) return;

    const memberPromises = [];

    for (const m of group.members) {
      const member = User.findById(m);
      memberPromises.push(member);
    }

    const members = await Promise.all(memberPromises);
    const newMessage = new Message(message);
    newMessage.sentAt = new Date().toISOString();
    newMessage.save();

    for (const member of members) {
      if (!member._id.equals(userId))
        addMessageToGroupConversation(io, member._id, group._id, newMessage);
    }
  } catch (err) {
    console.log(err);
  }
};

const sendPrivateMessage = (io) => (userId, conversationId, message) => {};

module.exports = {
  sendGroupMessage,
  sendPrivateMessage,
};
