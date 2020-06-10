import {
  handleReceivedAddContactRequest,
  handleAddNewContact,
} from "./eventListeners/contactEvents";
import { handleAddGroup } from "./eventListeners/groupEvents";
import { auth } from "../functions/user";

const addEventListenersToSocket = (socket) => {
  socket.on("receivedAddContactRequest", handleReceivedAddContactRequest);
  socket.on("addNewContact", handleAddNewContact);
  socket.on("addGroup", handleAddGroup);

  socket.on("serverRequestUserId", async () => {
    const user = await auth();

    if (user.isAuth === false) return;

    socket.emit("sendUserIdToServer", {
      userId: user._id,
    });
  });
};

export default addEventListenersToSocket;
