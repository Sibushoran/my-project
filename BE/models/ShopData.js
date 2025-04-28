const mongoose = require("mongoose");

const ShopSchema = new mongoose.Schema({
  categories: Array,
  products: Array,
  promoBanners: Array,
  trendingProducts: Array,
  promo50Off: Object,
  brands: [String],
  ratings: [Number]
});

module.exports = mongoose.model("ShopData", ShopSchema);
