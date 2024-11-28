import React, { useState } from "react";

const RoomCard = () => {
  const roomData = [
    {
      id: 1,
      type: "Single Room",
      image: "./src/assets/single.png",
      amenities: [
        "Single bed",
        "Shower",
        "Free Wi-Fi",
        "Work desk and chair",
        "Flat-screen TV",
        "12-18 m²",
      ],
      prices: [
        {
          benefits: [
            "Breakfast for Rp 100,941 (optional)",
            "Free Cancellation before 12.00",
            "Instant Confirmation",
          ],
          price: "Rp 2,234,001",   // Harga tanpa pajak
          total: "Rp 2,456,012",   // Harga total (termasuk pajak)
        },
        {
          benefits: [
            "Include 1 breakfast",
            "Free Cancellation before 12.00",
            "Instant Confirmation",
            "Free fitness center access",
          ],
          price: "Rp 3,456,002",   // Harga tanpa pajak
          total: "Rp 3,675,022",   // Harga total (termasuk pajak)
        },
      ],
    },
    {
      id: 2,
      type: "Double Room",
      image: "./src/assets/double.png",
      amenities: [
        "Double bed",
        "Shower",
        "Free Wi-Fi",
        "Work desk and chair",
        "Flat-screen TV",
        "16-20 m²",
      ],
      prices: [
        {
          benefits: [
            "Breakfast for Rp 100,941 (optional)",
            "Free Cancellation before 12.00",
            "Instant Confirmation",
          ],
          price: "Rp 3,234,001",   // Harga tanpa pajak
          total: "Rp 3,456,012",   // Harga total (termasuk pajak)
        },
        {
          benefits: [
            "Include 1 breakfast",
            "Free Cancellation before 12.00",
            "Instant Confirmation",
            "Free fitness center access",
          ],
          price: "Rp 4,056,002",   // Harga tanpa pajak
          total: "Rp 4,276,022",   // Harga total (termasuk pajak)
        },
      ],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Scroll function to the booking form
  const handleScrollToBooking = () => {
    const bookingForm = document.getElementById("booking-form");
    if (bookingForm) {
      bookingForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % roomData.length); // Next Slide
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + roomData.length) % roomData.length); // Previous Slide
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-pink-700 font-semibold text-xl text-center mb-6">
        Select your Room!
      </h2>
      <div className="relative overflow-hidden w-full h-auto bg-[#EBDFE1] rounded-lg">
        {/* Carousel Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {roomData.map((room) => (
            <div key={room.id} className="min-w-full p-6 bg-[#EBDFE1] rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{room.type}</h3>
              <div className="flex gap-6">
                {/* Left: Room Info */}
                <div className="w-1/3 flex flex-col justify-between h-full">
                  <img
                    src={room.image}
                    alt={room.type}
                    className="w-full h-[400px] object-cover rounded-lg shadow-md mb-4"
                  />
                  <ul className="space-y-2 text-gray-700 text-sm">
                    {room.amenities.map((amenity, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span>•</span> {amenity}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Benefit and Price Tables */}
                <div className="w-2/3 flex flex-col justify-between h-full">
                  <table className="w-full table-auto bg-white shadow-md rounded-lg">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left font-semibold text-gray-800 px-4 py-2">Benefit</th>
                        <th className="text-left font-semibold text-gray-800 px-4 py-2 border-l">
                          Price per Night
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {room.prices.map((price, idx) => (
                        <tr key={idx} className="border-b">
                          <td className="px-4 py-2 text-gray-600">
                            {price.benefits.map((benefit, bIdx) => (
                              <div key={bIdx}>{benefit}</div>
                            ))}
                          </td>
                          <td className="px-4 py-2 border-l">
                            {/* Tampilkan harga tanpa pajak */}
                            <div className="font-semibold text-gray-800">{price.price}</div>
                            {/* Tampilkan harga dengan pajak */}
                            <div className="text-sm text-gray-600">{price.total}</div>
                            <button
                              onClick={handleScrollToBooking}
                              className="bg-pink-300 hover:bg-pink-400 text-black px-4 py-2 rounded-md mt-2 w-full"
                            >
                              Reserve
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
        >
          ‹
        </button>
        <button
          onClick={handleNextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
