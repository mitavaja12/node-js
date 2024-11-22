const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    userId: String
})

const Blog = mongoose.model('Blog', BlogSchema)

module.exports = Blog