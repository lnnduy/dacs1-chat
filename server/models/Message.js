const { Schema, model } = require("mongoose");

const messageSchema = Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    type: String,
    content: String,
    sendAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    versionKey: false,
  }
);

module.exports = model("message", messageSchema);
