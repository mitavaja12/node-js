const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  text: String,
  username: String,
  date: Date,
});

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  image: String,
  author: String,
  category: String,
  likedBy: [{ username: String }],
  comments: [commentSchema],
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
