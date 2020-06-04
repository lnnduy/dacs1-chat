const { model, Schema } = require("mongoose");

const messageModel = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  content: String,
});

const Message = model("Message", messageModel);

module.exports = Message;
