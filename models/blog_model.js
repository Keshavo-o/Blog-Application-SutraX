const mongoose = require("mongoose");

const blog_schema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: String, required: true },
  tags: [{ type: String }],
  image: { type: String, default: "../blog_images/1.png" }
}, { timestamps: true });

const Blog = mongoose.model("Blog", blog_schema);
module.exports = Blog;
