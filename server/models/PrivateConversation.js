const { Schema, model } = require("mongoose");

const privateConversationSchema = Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    participantId: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    messages: {
      type: [Schema.Types.ObjectId || Object],
      ref: "message",
    },
    lastSeenAt: Date,
    lastActivityAt: Date,
    isHide: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = model("private-conversation", privateConversationSchema);
