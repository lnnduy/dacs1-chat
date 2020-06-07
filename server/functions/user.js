const User = require("../models/User");

const sendAddContactRequest = async (userId, bodyRequest) => {
  const { email } = bodyRequest;

  try {
    const sender = await User.findById(userId);
    const receiver = await User.findOne({ email });

    if (receiver === null) return false;

    if (receiver._id.equals(userId)) return false;

    if (receiver.addContactRequestsReceived !== undefined)
      receiver.addContactRequestsReceived.push(userId);
    else if (!receiver.addContactRequestsReceived.includes(userId))
      receiver.addContactRequestsReceived = [userId];
    else return true;

    if (
      receiver.addContactRequestsSent !== undefined &&
      receiver.addContactRequestsSent.includes(sender._id)
    ) {
      if (receiver.contacts !== undefined) receiver.contacts.push(sender._id);
      else receiver.contacts = [sender._id];
      if (sender.contacts !== undefined) sender.contacts.push(receiver._id);
      else sender.contacts = [receiver._id];
      receiver.addContactRequestsSent.pull(sender._id);

      receiver.save();
      sender.save();

      return true;
    }

    if (sender.addContactRequestsSent !== undefined)
      sender.addContactRequestsSent.push(receiver._id);
    else if (!sender.addContactRequestsSent.includes(receiver._id))
      receiver.addContactRequestsSent = [receiver._id];
    else return true;

    await receiver.save();
    await sender.save();

    return true;
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

module.exports = {
  sendAddContactRequest,
  getAddContactRequestsReceived,
  getAddContactRequestsSent,
  getContacts,
};
