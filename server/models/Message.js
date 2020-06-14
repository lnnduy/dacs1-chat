const { Schema, model } = require("mongoose");

const messageSchema = Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    type: String,
    content: String,
    sentAt: {
      type: Date,
      default: Date.now(),
    },
    status: String,
  },
  {
    versionKey: false,
  }
);

module.exports = model("message", messageSchema);
