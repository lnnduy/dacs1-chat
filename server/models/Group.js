const { Schema, model } = require("mongoose");

const groupSchema = Schema(
  {
    name: String,
    avatar: String,
    members: {
      type: [Schema.Types.ObjectId],
      ref: "user",
    },
    moderators: {
      type: [Schema.Types.ObjectId],
      ref: "user",
    },
    admin: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    versionKey: false,
  }
);

module.exports = model("group", groupSchema);
