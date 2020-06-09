import io from "socket.io-client";
import addEventListenersToSocket from "./addEventListenersToSocket";

var socket = null;

export function startSocket() {
  socket = io.connect(
    process.env.NODE_ENV.toLowerCase() === "production"
      ? window.location.href
      : "http://localhost:5000"
  );
  addEventListenersToSocket(socket);
}

export function socketEmit(eventName, data) {
  if (socket === null) return;
  socket.emit(eventName, data);
}
