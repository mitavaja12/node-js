const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  img: String,
  price: Number,
  ratings: [{}],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;