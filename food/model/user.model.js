const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    roles: ["admin", "user"],
    default: "user",
  },
});


const User = mongoose.model("User", userSchema);

module.exports = User;