// routes/cart.js
const express = require('express');
const User = require('../../../Session/models/user');
const router = express.Router();

// Add product to Cart
router.post('/add-to-cart', async (req, res) => {
  const { userId, productId, quantity } = req.body; // Assuming user is logged in and `userId` is available

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const existingItemIndex = user.cart.findIndex(item => item.productId.toString() === productId);
    
    if (existingItemIndex >= 0) {
      // Update quantity if product already in cart
      user.cart[existingItemIndex].quantity += quantity;
    } else {
      // Add new product to cart
      user.cart.push({ productId, quantity });
    }

    await user.save();

    res.status(200).json({ message: 'Product added to cart', cart: user.cart });
  } catch (error) {
    console.error("❌ Error adding to cart:", error);
    res.status(500).json({ message: 'Error adding to cart' });
  }
});

module.exports = router;
