const upload = require("./upload"); // Add this line

// Add a new POST route using multer
app.post("/api/products/upload", upload.single("image"), async (req, res) => {
  try {
    const imagePath = req.file ? req.file.filename : null;

    const newProduct = new Product({
      ...req.body,
      image: imagePath, // Save just the filename
    });

    await newProduct.save();
    res.status(201).json({ message: "✅ Product with image uploaded successfully!" });
  } catch (err) {
    console.error("❌ Error saving product with image:", err);
    res.status(500).json({ error: "Failed to add product with image" });
  }
});
