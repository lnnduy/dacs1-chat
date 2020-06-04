const { model, Schema } = require("mongoose");

const MESSAGE_STATUS = {
  SENT: "SENT",
  RECEIVED: "RECEIVED",
  SEEN: "SEEN",
};

const privateConversationSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  participant: {
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
          MESSAGE_STATUS.SENT,
        ],
      },
    },
  ],
  isHide: { type: Boolean, default: false },
});

privateConversationSchema.methods.addNewMessage = function (messageId) {
  let conversation = this;
  return Promise((resolve, reject) => {
    conversation.messages.push(messageId);
    conversation.save();
  });
};

const PrivateConversation = model(
  "PrivateConversation",
  privateConversationSchema
);

module.exports = PrivateConversation;
