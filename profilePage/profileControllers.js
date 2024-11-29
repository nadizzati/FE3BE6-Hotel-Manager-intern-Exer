const bcrypt = require('bcrypt');
const User = require('./modelsProfile');

exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, email, password_hash: hashedPassword });
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
};

exports.updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found!' });
    }

    const { full_name, phone_number, address } = req.body;
    user.full_name = full_name || user.full_name;
    user.phone_number = phone_number || user.phone_number;
    user.address = address || user.address;
    await user.save();

    res.status(200).json({ message: 'User profile updated successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile', error: error.message });
  }
};

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found!' });
    }

    const userData = {
      username: user.username,
      email: user.email,
      full_name: user.full_name,
      phone_number: user.phone_number,
      address: user.address,
    };
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile', error: error.message });
  }
};

exports.deleteUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found!' });
    }

    await user.remove();
    res.status(200).json({ message: 'User profile deleted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting profile', error: error.message });
  }
};