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

// Serve static files (images) from the /uploads directory in the backend
app.use("/uploads", express.static(path.join(__dirname, "./uploads"))); // Serve from /BE/uploads/

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/shopdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(error));

// Routes

// Get all products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find(); // if using MongoDB

    // Return the products with full image URL
    const productsWithImageUrls = products.map((product) => ({
      ...product.toObject(),
      image: product.image ? `http://localhost:${PORT}${product.image}` : "", // Return full URL for image
    }));

    res.json({
      products: productsWithImageUrls,
      promoBanners: [],      // Placeholder for now
      promo50Off: {},
      categories: [],
      trendingProducts: [],
      brands: [...new Set(products.map(p => p.brand))],
      ratings: [...new Set(products.map(p => p.rating))].sort((a, b) => b - a),
    });
  } catch (error) {
    console.error("Failed to fetch products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
