// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  rating: Number,
  brand: String,
  image: String,
  tag: String,
  colors: [String],
});

// Check if the model already exists to avoid redefining it
const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

module.exports = Product;
