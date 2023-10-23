const { Model, Schema } = require("mongoose");
const userSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  photo: {
    type: String,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnItfoaqBb79uI7f0rwfZfWpuJHEE61uJV0XCYn-GRg6WstFTyH1BimIIpXth5WST1sDA&usqp=CAU",
  },
}, {timestamps: true});

const User = Model("User", userSchema)

module.exports = User