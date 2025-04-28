require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const Product = require("./models/Product");

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files (images) from admin-portal/server/uploads
app.use("/uploads", express.static(path.join(__dirname, "../admin-portal/server/uploads"))); 

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/shopdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((error) => console.log("❌ MongoDB connection error:", error));

// Routes

// Get all products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find(); 

    // Return the products with full image URL
    const productsWithImageUrls = products.map((product) => ({
      ...product.toObject(),
      image: product.image ? `http://localhost:${PORT}${product.image}` : "", 
      // Corrected the URL formatting
    }));

    res.json({
      products: productsWithImageUrls,
      promoBanners: [],      
      promo50Off: {},
      categories: [],
      trendingProducts: [],
      brands: [...new Set(products.map(p => p.brand))],
      ratings: [...new Set(products.map(p => p.rating))].sort((a, b) => b - a),
    });
  } catch (error) {
    console.error("❌ Failed to fetch products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
