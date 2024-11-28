const express = require('express');
const { getAllHotels, addHotel } = require('../controllers/hotelController');
const router = express.Router();

router.get('/', getAllHotels);

router.post('/add', addHotel);

module.exports = router;
