const mongoose = require("mongoose");

const user_schema = new mongoose.Schema({
  username: { type: String, required: true ,unique: true },
  email: { type: String, required: true  },
  password: { type: String, required: true },
  salt: { type: String, required: true },
  profilepic: { type: String, default: "../profile_pics/default.jpg" },
  bio: { type: String, maxlength: 160 }
}, { timestamps: true });

const user = mongoose.model("User", user_schema);
module.exports = user;
