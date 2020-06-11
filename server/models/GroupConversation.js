const { Schema, model } = require("mongoose");

const groupConversationSchema = Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    group: {
      type: Schema.Types.ObjectId,
      ref: "group",
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

module.exports = model("group-conversation", groupConversationSchema);
