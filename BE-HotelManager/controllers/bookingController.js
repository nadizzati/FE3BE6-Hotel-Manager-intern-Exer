const Booking = require('../models/Booking');
const Hotel = require('../models/Hotel');

const bookHotel = async (req, res) => {
  const { hotelId, checkInDate, checkOutDate } = req.body;

  try {
    const hotel = await Hotel.findById(hotelId);
    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }

    const newBooking = new Booking({
      userId: req.userId,  
      hotelId: hotel._id,
      checkInDate,
      checkOutDate
    });

    await newBooking.save();
    res.status(201).json({ message: 'Booking successful', booking: newBooking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { bookHotel };
