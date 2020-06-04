const { model, Schema } = require("mongoose");

const MESSAGE_STATUS = {
  SENT: "SENT",
  RECEIVED: "RECEIVED",
  SEEN: "SEEN",
};

const groupConversationSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  lastMessageAt: {
    type: Date,
    default: Date.now,
  },
  messages: [
    {
      message: {
        type: Schema.Types.ObjectId,
        ref: "Message",
      },
      status: {
        type: String,
        enum: [
          MESSAGE_STATUS.SENT,
          MESSAGE_STATUS.RECEIVED,
          MESSAGE_STATUS.SEEN,
        ],
      },
    },
  ],
  isHide: { type: Boolean, default: false },
});

groupConversationSchema.methods.addNewMessage = function (messageId) {
  let conversation = this;
  return Promise((resolve, reject) => {
    conversation.messages.push(messageId);
    conversation.save();
  });
};

const GroupConversation = model("GroupConversation", groupConversationSchema);

module.exports = GroupConversation;
