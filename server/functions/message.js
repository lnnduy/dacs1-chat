const Message = require("../models/Message");
const GroupConversation = require("../models/GroupConversation");
const PrivateConversation = require("../models/PrivateConversation");
const User = require("../models/User");
const Group = require("../models/Group");

const getGroupMessages = async (userId, conversationId, page) => {
  try {
    let conversation = await GroupConversation.findById(conversationId);

    if (conversation === null)
      return { page: +page, totalPages: 0, messages: [] };

    conversation = conversation.toObject();
    conversation.messages = conversation.messages || [];

    page = page || 1;

    const promises = [];
    for (
      let i = 20 * (+page - 1);
      i < conversation.messages.length && i < 20 * +page;
      i++
    ) {
      const promise = Message.findById(conversation.messages[i]).then(
        async (m) => {
          console.log(m);
          m.sender = await User.findById(m.sender).select([
            "_id",
            "name",
            "avatar",
            "email",
          ]);
          if (m.sender === userId) m.isMe = true;
          else m.isMe = false;
          return m;
        }
      );
      promises.push(promise);
    }

    const messages = await Promise.all(promises);
    const totalPages =
      Math.floor(conversation.messages.length / 20) +
      (conversation.messages.length % 20 !== 0 ? 1 : 0);

    const result = {
      page: +page,
      totalPages,
      messages,
    };

    return result;
  } catch (err) {
    console.log(err);
    return { page, totalPages: 0, messages: [] };
  }
};

module.exports = {
  getGroupMessages,
};
