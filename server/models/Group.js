const { model, Schema } = require("mongoose");

const groupSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  lastMessageAt: {
    type: Date,
    default: Date.now,
  },
  messages: {
    type: [Schema.Types.ObjectId],
    ref: "Message",
  },
  isHide: { type: Boolean, default: false },
});

const Group = model("Group", groupSchema);

module.exports = Group;
