const User = require("../models/User");

const createContacts = async (user1, user2) => {
  if (user1.contacts === undefined) user1.contacts = [user2._id];
  else user1.contacts.push(user2._id);

  if (user2.contacts === undefined) user2.contacts = [user1._id];
  else user2.contacts.push(user1._id);

  await user1.save();
  await user2.save();
};

const sendAddContactRequest = async (userId, bodyRequest) => {
  const { email } = bodyRequest;

  try {
    const sender = await User.findById(userId);
    const receiver = await User.findOne({ email });

    if (receiver === null) return false;

    if (receiver._id.equals(userId)) return false;

    if (
      sender.addContactRequestsSent !== undefined &&
      sender.addContactRequestsSent.includes(receiver._id)
    ) {
      if (
        receiver.addContactRequestsReceived !== undefined &&
        !receiver.addContactRequestsReceived.includes(sender._id)
      )
        receiver.addContactRequestsReceived.push(sender._id);
      else if (
        receiver.addContactRequestsReceived === undefined &&
        !receiver.addContactRequestsReceived.includes(sender._id)
      )
        receiver.addContactRequestsReceived = [sender._id];

      await receiver.save();

      return true;
    }

    if (
      receiver.addContactRequestsSent !== undefined &&
      receiver.addContactRequestsSent.includes(sender._id)
    ) {
      receiver.addContactRequestsSent.pull(sender._id);

      await createContacts(sender, receiver);

      return true;
    }

    if (
      receiver.addContactRequestsReceived !== undefined &&
      !receiver.addContactRequestsReceived.includes(userId)
    )
      receiver.addContactRequestsReceived.push(userId);
    else if (receiver.addContactRequestsReceived === undefined)
      receiver.addContactRequestsReceived = [userId];

    if (
      sender.addContactRequestsSent !== undefined &&
      !sender.addContactRequestsSent.includes(receiver._id)
    )
      sender.addContactRequestsSent.push(receiver._id);
    else if (sender.addContactRequestsSent === undefined)
      sender.addContactRequestsSent = [receiver._id];

    await receiver.save();
    await sender.save();

    const { _id, name, avatar } = receiver;
    return { _id, email, name, avatar };
  } catch (err) {
    console.log(err);
    return false;
  }
};

const getAddContactRequestsReceived = async (userId) => {
  try {
    const user = await User.findById(userId);

    if (user.addContactRequestsReceived === undefined) return [];

    const promises = user.addContactRequestsReceived.map((r) =>
      User.findById(r).select(["_id", "email", "name", "avatar"])
    );

    const requests = await Promise.all(promises);

    return requests;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const getAddContactRequestsSent = async (userId) => {
  try {
    const user = await User.findById(userId);

    if (user.addContactRequestsReceived === undefined) return [];

    const promises = user.addContactRequestsSent.map((r) =>
      User.findById(r).select(["_id", "email", "name", "avatar"])
    );

    const requests = await Promise.all(promises);

    return requests;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const getContacts = async (userId) => {
  try {
    const user = await User.findById(userId);

    if (user.addContactRequestsReceived === undefined) return [];

    const promises = user.contacts.map((r) =>
      User.findById(r).select(["_id", "email", "name", "avatar"])
    );

    const contacts = await Promise.all(promises);

    return contacts;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const acceptAddContactRequest = async (userId, senderId) => {
  try {
    const user = await User.findById(userId);
    const sender = await User.findById(senderId);
    const receivedRequests = user.addContactRequestsReceived;

    if (receivedRequests === undefined) return false;

    if (sender === null) {
      if (
        receivedRequests !== undefined &&
        receivedRequests.includes(senderId)
      ) {
        receivedRequests.pull(senderId);
        user.addContactRequestsReceived = receivedRequests;
        await user.save();
      }
      return false;
    }

    if (!receivedRequests.includes(senderId)) {
      if (
        sender.addContactRequestsSent !== undefined &&
        sender.addContactRequestsSent.includes(user._id)
      ) {
        sender.addContactRequestsSent.pull(user._id);
        await sender.save();
      }
      return false;
    }

    user.addContactRequestsSent.pull(sender._id);
    sender.addContactRequestsReceived.pull(user._id);
    await createContacts(user, sender);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const declineAddContactRequest = async (userId, senderId) => {
  try {
    const user = await User.findById(userId);
    const sender = await User.findById(senderId);

    if (user.addContactRequestsReceived !== undefined)
      user.addContactRequestsReceived.pull(senderId);

    if (sender !== null && sender.addContactRequestsSent !== undefined)
      sender.addContactRequestsSent.pull(user._id);

    await user.save();
    await sender.save();

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const cancelAddContactRequest = async (userId, receiverId) => {
  try {
    const user = await User.findById(userId);
    const receiver = await User.findById(receiverId);

    if (user.addContactRequestsSent !== undefined) {
      user.addContactRequestsSent.pull(receiverId);
      await user.save();
    }

    if (
      receiver !== null &&
      receiver.addContactRequestsReceived !== undefined
    ) {
      receiver.addContactRequestsReceived.pull(user._id);
      await receiver.save();
    }

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = {
  sendAddContactRequest,
  getAddContactRequestsReceived,
  getAddContactRequestsSent,
  getContacts,
  acceptAddContactRequest,
  declineAddContactRequest,
  cancelAddContactRequest,
};
