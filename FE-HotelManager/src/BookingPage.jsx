import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [roomNumber, setRoomNumber] = useState('Room-1');
  const [roomType, setRoomType] = useState('single');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);  // Assuming user is logged in
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const bookingData = {
      checkInDate,
      checkOutDate,
      roomNumber,
      roomType,
    };

    try {
      // Ganti dengan axios POST request
      const response = await axios.post('http://localhost:5000/api/bookings', bookingData);

      // Menangani respons sukses
      alert('Booking successful!');
      console.log('Response:', response.data);

      setCheckInDate('');
      setCheckOutDate('');
      setRoomNumber('Room-1');
      setRoomType('single');
    } catch (error) {
      // Menangani error
      console.error('Error while booking:', error);
      alert('Failed to book. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBookingClick = () => {
    navigate('/booking');
  };

  const handleLoginOrAccountClick = () => {
    if (isLoggedIn) {
      navigate('/account');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen bg-[#B7CEDE] flex flex-col items-center justify-center">
      {/* Header */}
      <header className="sticky top-0 bg-gradient-to-b from-white to-gray-100 h-16 flex items-center justify-between px-5 shadow-lg z-50 transition-all duration-300">
        <p className="text-2xl font-bold bg-gradient-to-r from-rose-200 to-red-400 text-transparent bg-clip-text">
          K Hotel
        </p>
        <nav className="flex space-x-6">
          <Link to="/" className="text-gray-700 hover:bg-slate-500 p-5 hover:text-white font-medium transition-all duration-300">
            About
          </Link>
          <Link to="/" className="text-gray-700 hover:bg-slate-500 p-5 hover:text-white font-medium transition-all duration-300">
            Our Team
          </Link>
          <Link to="/services" className="text-gray-700 hover:bg-slate-500 p-5 hover:text-white font-medium transition-all duration-300">
            Services
          </Link>
          <button onClick={handleBookingClick} className="text-gray-700 hover:bg-slate-500 p-5 hover:text-white font-medium transition-all duration-300">
            Book Now
          </button>
          <button onClick={handleLoginOrAccountClick} className={`self-center h-2 flex items-center rounded-2xl p-5 font-medium transition-all duration-300 ${isLoggedIn ? 'bg-gray-50 hover:bg-slate-200' : 'bg-slate-500 text-gray-100 border-white hover:bg-pink-300 hover:text-slate-700'}`}>
            {isLoggedIn ? (
              <img src="https://hackmd.io/_uploads/BkXoMRNXkl.png" alt="User Account" className="w-6 h-6" />
            ) : (
              'Log In'
            )}
          </button>
        </nav>
      </header>


      {/* Booking Form */}
      <div id="booking-form" className="bg-[#EBDFE1] p-8 rounded-lg shadow-lg w-full max-w-md mt-10 flex justify-center">
        <div className="w-full">
          <h2 className="text-2xl font-semibold text-center mb-6">Hotel Booking</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Check-In Date</label>
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Check-Out Date</label>
              <input
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Room</label>
              <select
                value={roomNumber}
                onChange={(e) => setRoomNumber(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
              >
                <option value="Room-1">Room-1</option>
                <option value="Room-2">Room-2</option>
                <option value="Room-3">Room-3</option>
                <option value="Room-4">Room-4</option>
                <option value="Room-5">Room-5</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Room Type</label>
              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
              >
                <option value="single">Single</option>
                <option value="singlePlus">Single Plus</option>
                <option value="double">Double</option>
                <option value="doublePlus">Double Plus</option>
              </select>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full bg-[#DFB9B6] hover:bg-pink-300 text-white font-semibold py-2 px-4 rounded-lg"
                disabled={isLoading}
              >
                {isLoading ? 'Booking...' : 'Book Now'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
