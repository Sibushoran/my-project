import express from "express";
import multer from "multer";
import Product from "../models/Product.js";
import path from "path";
import fs from "fs";

const router = express.Router();

// Ensure uploads directory exists
const uploadsDir = path.join("uploads");
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);

// Multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});
const upload = multer({ storage });

// Create product with image upload
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const productData = {
      ...req.body,
      image: req.file ? req.file.filename : "", // Save filename in DB
    };
    const product = new Product(productData);
    await product.save();
    res.status(201).json({ message: "Product added", product });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
