const mongoose = require('mongoose'); 

const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    img: String,
    rating: [{ username: String, count: Number }] 
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
