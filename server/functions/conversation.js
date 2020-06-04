const GroupConversation = require("../models/GroupConversation");
const PrivateConversation = require("../models/PrivateConversation");
const Message = require("../models/Message");
const User = require("../models/User");

const getConversations = async (userId) => {
  let groupConversations = await GroupConversation.where("user", userId)
    .populate({
      path: "users",
      model: User,
      select: ["name", "image"],
    })
    .populate({
      path: "messages.message",
      limit: 1,
      skip: 1,
      model: Message,
    })
    .find();
  let privateConversations = await PrivateConversation.where("user", userId)
    .populate({
      path: "messages.message",
      model: Message,
    })
    .find();

  const conversations = [...groupConversations, ...privateConversations];

  return { ...groupConversations };
};

const addMessageToGroup = async (userId, conversationId, messageData) => {
  const message = new Message({
    sender: userId,
    type: messageData.type,
    content: messageData.content,
    sentAt: Date.now(),
  });

  // await message.save();

  let conversation = null;

  conversation = await GroupConversation.findById(conversationId);
  conversation =
    conversation === null
      ? await PrivateConversation.findById(conversationId)
      : conversation;

  return conversation;
};

module.exports = {
  getConversations,
  addMessageToGroup,
};
