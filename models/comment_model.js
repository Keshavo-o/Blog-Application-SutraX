const mongoose = require("mongoose");

const comment_schema = new mongoose.Schema({
  blogId: { type: mongoose.Schema.Types.ObjectId, ref: "Blog", required: true },
  body: { type: String, required: true },
  author: { type: String, required: true }
}, { timestamps: true });

const Comment = mongoose.model("Comment", comment_schema);
module.exports = Comment;
