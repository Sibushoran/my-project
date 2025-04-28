// routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../../../Session/models/user');
const session = require('express-session');

const router = express.Router();

// Sign-Up Route
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ success: true, message: 'User created successfully' });
  } catch (error) {
    res.status(400).json({ success: false, message: 'Error creating user' });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).json({ success: false, message: 'Invalid credentials' });
  }
  const match = await user.comparePassword(password);
  if (match) {
    req.session.user = user._id;
    res.status(200).json({ success: true, message: 'Logged in successfully' });
  } else {
    res.status(400).json({ success: false, message: 'Invalid credentials' });
  }
});

// Logout Route
router.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.status(200).json({ success: true, message: 'Logged out successfully' });
  });
});

module.exports = router;
