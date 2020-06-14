const Message = require("../models/Message");
const GroupConversation = require("../models/GroupConversation");
const PrivateConversation = require("../models/PrivateConversation");
const User = require("../models/User");

const getMessages = async (conversation, page) => {
  try {
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
          m.sender = await User.findById(m.sender).select([
            "_id",
            "name",
            "avatar",
            "email",
          ]);
          return m;
        }
      );
      promises.push(promise);
    }

    const messages = await Promise.all(promises);

    messages.sort((m1, m2) =>
      m1.sentAt > m2.sentAt ? 1 : m1.sentAt < m2.sentAt ? -1 : 0
    );

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

const getGroupMessages = async (conversationId, page) => {
  try {
    let conversation = await GroupConversation.findById(conversationId);

    if (conversation === null)
      return { page: +page || 0, totalPages: 0, messages: [] };

    const result = await getMessages(conversation, +page);
    return result;
  } catch (err) {
    console.log(err);
    return { page: 0, totalPages: 0, messages: [] };
  }
};

const getPrivateMessages = async (conversationId, page) => {
  try {
    let conversation = await PrivateConversation.findById(conversationId);

    if (conversation === null)
      return { page: +page || 0, totalPages: 0, messages: [] };
    const result = await getMessages(conversation, +page);

    return result;
  } catch (err) {
    console.log(err);
    return { page, totalPages: 0, messages: [] };
  }
};

module.exports = {
  getGroupMessages,
  getPrivateMessages,
};
