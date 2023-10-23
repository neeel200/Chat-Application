const { Schema, Model } = require("mongoose");

const messageSchema = Schema(
  {
    sender: {
      type: Schema.types.ObjectId,
      ref: "User",
    },
    content: { type: String, trim: true },
    chat: {
      type: Schema.types.ObjectId,
      ref: "chat",
    },
  },
  { timestamps: true }
);
const Message = Model("Message", messageSchema);
module.exports = Message
