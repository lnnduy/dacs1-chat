const formater = (messages) => {
  if (!messages || messages.length < 1) return [];

  const arr = [];
  let currentSection = null;

  for (let i = 0; i < messages.length; i++) {
    if (messages[i] === undefined) continue;

    if (currentSection === null) {
      currentSection = {
        sender: messages[i].sender,
        messages: [messages[i]],
      };
      continue;
    }

    const lastMessage =
      currentSection?.messages[currentSection.messages.length - 1];
    const lastMessageSentAt = new Date(lastMessage.sentAt).getTime();
    const currentMessageSentAt = new Date(messages[i].sentAt).getTime();

    if (
      messages[i].sender._id === lastMessage.sender._id &&
      Math.abs(currentMessageSentAt - lastMessageSentAt) < 60000
    ) {
      currentSection.messages.push(messages[i]);
    } else {
      arr.push({
        sender: currentSection.sender,
        messages: currentSection.messages.map((m) => ({
          _id: m._id,
          type: m.type,
          content: m.content,
          sentAt: m.sentAt,
          status: m.status,
        })),
      });
      currentSection = {
        sender: messages[i].sender,
        messages: [messages[i]],
      };
    }
  }

  arr.push({
    sender: currentSection.sender,
    messages: currentSection.messages.map((m) => ({
      _id: m._id,
      type: m.type,
      content: m.content,
      sentAt: m.sentAt,
      status: m.status,
    })),
  });

  return arr;
};

export default formater;
