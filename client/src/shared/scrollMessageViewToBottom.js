const scrollMessageViewToBottom = () => {
  const elm = document.getElementById("message-list");
  if (elm === null) return;
  setTimeout(() => {
    elm.scrollTop = elm.scrollHeight;
  }, 0);
};

export default scrollMessageViewToBottom;
