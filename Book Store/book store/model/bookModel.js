const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    category: String,
    publicationYear: Number,
    price: Number,
    quantity: Number,
    description: String,
    imageUrl: String,
}, 
{ timestamps: true });

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;