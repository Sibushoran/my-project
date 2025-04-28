const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  category: String,
  price: Number,
  originalPrice: Number,
  image: String,
  tag: String,
  colors: [String],
  rating: Number,
});

module.exports = mongoose.model("Product", productSchema);
