const express = require('express');
const { registerUser, updateUserProfile, getUserProfile, deleteUserProfile } = require('./controllersProfile');
const authenticate = require('./authMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.put('/:userId', authenticate, updateUserProfile);
router.get('/:userId', authenticate, getUserProfile);
router.delete('/:userId', authenticate, deleteUserProfile);

module.exports = router;
