const Hotel = require('../models/Hotel');

const getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching hotels', error: err });
  }
};

const addHotel = async (req, res) => {
  try {
    const { name, location, availableRooms, pricePerNight } = req.body;

    const newHotel = new Hotel({
      name,
      location,
      availableRooms,
      pricePerNight,
    });

    await newHotel.save();
    res.status(201).json({ message: 'Hotel added successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error adding hotel', error: err });
  }
};

module.exports = {
  getAllHotels,
  addHotel,
};
