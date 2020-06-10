const {
  emitAddContactRequest,
  emitAddNewContact,
} = require("../emitters/contactEmitters");
const { emitAddGroup } = require("../emitters/groupEmitters");
const { userStartedSocket, userStoppedSocket } = require("../functions/user");

const addEventListenersToSocket = (io, socket) => {
  socket.on("sendUserIdToServer", function ({ userId }) {
    userStartedSocket(userId, socket.id);
  });
  socket.on("sendAddContactRequest", function ({ senderId, receiverEmail }) {
    emitAddContactRequest(io)(senderId, receiverEmail);
  });
  socket.on("acceptAddContactRequest", function ({ userId, senderId }) {
    emitAddNewContact(io)(userId, senderId);
  });
  socket.on("addMember", function ({ groupId, memberEmail }) {
    emitAddGroup(io)(groupId, memberEmail);
  });
  socket.on("disconnect", function () {
    userStoppedSocket(socket.id);
  });
};

module.exports = addEventListenersToSocket;
