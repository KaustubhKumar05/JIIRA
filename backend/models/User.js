const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true],
  },
  emailAddress: {
    type: String,
    trim: true,
    required: [true],
  },
  username: {
    type: String,
    trim: true,
  },
  role: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
