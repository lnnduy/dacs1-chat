const User = require("../models/User");

const emitAddContactRequest = (io) => async (senderId, receiverEmail) => {
  console.log(senderId, receiverEmail);
  const receiver = await User.findOne({ email: receiverEmail });

  if (
    receiver === null &&
    !receiver.isOnline &&
    receiver.socketId === undefined
  )
    return;

  const sender = await User.findById(senderId);
  const { _id, email, name, avatar } = sender;
  const request = { _id, email, name, avatar };

  io.to(receiver.socketId).emit("receivedAddContactRequest", request);
};

const emitAddNewContact = (io) => async (userId, senderId) => {
  const sender = await User.findById(senderId);

  if (sender === null && !sender.isOnline && sender.socketId === undefined)
    return;

  const user = await User.findById(userId);
  const { _id, email, name, avatar } = user;
  const contact = { _id, email, name, avatar };

  io.to(sender.socketId).emit("addNewContact", contact);
};

module.exports = { emitAddContactRequest, emitAddNewContact };
