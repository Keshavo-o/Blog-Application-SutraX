const mongoose = require("mongoose");

const user_schema = new mongoose.Schema({
  username: { type: String, required: true ,unique: true },
  email: { type: String, required: true  },
  password: { type: String, required: true },
  salt: { type: String, required: true }
});

const user = mongoose.model("User", user_schema);
module.exports = user;
