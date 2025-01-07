const mongoose = require("mongoose");
require("dotenv").config();

const config = async () => {
  await mongoose.connect("mongodb://localhost:27017/auth_system");
  console.log("MongoDB connected");
}

module.exports = config;
