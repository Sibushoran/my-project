const Product = require('../models/Product'); // Assuming Product model exists

// Controller function for adding a product
const addProduct = async (req, res) => {
  try {
    const newProduct = req.body; // Extracting new product details from the request body

    // Create a new product instance based on the Product schema
    const product = new Product(newProduct);

    // Save the new product to the database
    await product.save();

    res.status(200).send({ message: "Product added successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Failed to add product" });
  }
};

module.exports = { addProduct };
