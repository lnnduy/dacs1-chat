const {
  addContactRequest,
  addNewContact,
} = require("../eventHandlers/contactEventHandlers");
const {
  addGroup,
  leaveGroup,
  deleteGroup,
} = require("../eventHandlers/groupEventHandlers");
const { userStartedSocket, userStoppedSocket } = require("../functions/user");
const {
  sendGroupMessage,
  sendPrivateMessage,
} = require("../eventHandlers/conversationEventHandlers");

const addEventListenersToSocket = (io, socket) => {
  socket.on("sendUserIdToServer", function ({ userId }) {
    userStartedSocket(userId, socket.id);
  });
  socket.on("sendAddContactRequest", function ({ senderId, receiverEmail }) {
    addContactRequest(io)(senderId, receiverEmail);
  });
  socket.on("acceptAddContactRequest", function ({ userId, senderId }) {
    addNewContact(io)(userId, senderId);
  });
  socket.on("addMember", function ({ groupId, memberEmail }) {
    addGroup(io)(groupId, memberEmail);
  });
  socket.on("leaveGroup", function ({ groupId }) {
    leaveGroup(io)(groupId);
  });
  socket.on("deleteGroup", function ({ userId, groupId }) {
    deleteGroup(io)(userId, groupId);
  });
  socket.on("sendGroupMessage", function ({ userId, conversationId, message }) {
    sendGroupMessage(io)(userId, conversationId, message);
  });
  socket.on("sendPrivateMessage", function ({
    userId,
    conversationId,
    message,
  }) {
    sendPrivateMessage(io)(userId, conversationId, message);
  });
  socket.on("disconnect", function () {
    userStoppedSocket(socket.id);
  });
};

module.exports = addEventListenersToSocket;
