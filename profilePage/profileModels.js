const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password_hash: {
    type: String,
    required: true,
  },
  full_name: {
    type: String,
  },
  phone_number: {
    type: String,
  },
  address: {
    type: String,
  },
});

module.exports = mongoose.model('User', UserSchema);

// routesProfile.js
const express = require('express');
const { registerUser, updateUserProfile, getUserProfile, deleteUserProfile } = require('./controllersProfile');
const router = express.Router();

router.post('/register', registerUser);
router.put('/:userId', updateUserProfile);
router.get('/:userId', getUserProfile);
router.delete('/:userId', deleteUserProfile);

module.exports = router;