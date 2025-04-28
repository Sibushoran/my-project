const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 5001;

// MongoDB connection URI
const mongoURI = "mongodb://localhost:27017/back"; // Replace with your actual MongoDB URI

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

// Define a Product Schema
const productSchema = new mongoose.Schema({
  title: String,
  brand: String,
  price: Number,
  original: Number,
  category: String,
  rating: Number,
  tag: String,
  img: String,
  colors: [String]
});

// Create a Product model based on the schema
const Product = mongoose.model("Product", productSchema);

// Define a User Schema for Authentication
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
});

// Create a User model based on the schema
const User = mongoose.model("User", userSchema);

// Use middleware
app.use(cors());
app.use(express.json());

// JWT Authentication Middleware
const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(403).send("Access Denied");
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).send("Invalid Token");
    }
    req.user = user;
    next();
  });
};

// API endpoint to fetch products from MongoDB
app.get("/api/products", async (req, res) => {
  try {
    // Fetch all products from the database
    const products = await Product.find();
    res.json({ products });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Error fetching products from the database.");
  }
});

// API endpoint to add a new product (Admin only)
app.post("/api/products", authenticateToken, async (req, res) => {
  if (!req.user.isAdmin) {
    return res.status(403).send("You don't have permission to add products.");
  }

  const { title, brand, price, original, category, rating, tag, img, colors } = req.body;

  try {
    const newProduct = new Product({ title, brand, price, original, category, rating, tag, img, colors });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).send("Error adding product to the database.");
  }
});

// API endpoint to update a product (Admin only)
app.put("/api/products/:id", authenticateToken, async (req, res) => {
  if (!req.user.isAdmin) {
    return res.status(403).send("You don't have permission to update products.");
  }

  const { id } = req.params;
  const { title, brand, price, original, category, rating, tag, img, colors } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, { title, brand, price, original, category, rating, tag, img, colors }, { new: true });
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).send("Error updating product in the database.");
  }
});

// API endpoint to delete a product (Admin only)
app.delete("/api/products/:id", authenticateToken, async (req, res) => {
  if (!req.user.isAdmin) {
    return res.status(403).send("You don't have permission to delete products.");
  }

  const { id } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted successfully", deletedProduct });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).send("Error deleting product from the database.");
  }
});

// Sign-up Route
app.post("/api/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).send("Username already taken");

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      password: hashedPassword,
      cart: [],
      wishlist: []
    });

    await newUser.save();
    res.status(201).send("User registered successfully");
  } catch (error) {
    console.error("Error signing up:", error);
    res.status(500).send("Error signing up the user.");
  }
});

// Login Route (Returns JWT Token)
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).send("Invalid credentials");

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).send("Invalid credentials");

    const token = jwt.sign({ userId: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).send("Error logging in.");
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
