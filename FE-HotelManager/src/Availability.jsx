import React, { useState } from "react";

export default function Availability(props) {
    const {
        roomTitle,
        roomImage,
        facilities,
        benefit1,
        benefit2,
        price1,
        price2,
        tooltipText,
    } = props;

    const [isHovered, setIsHovered] = useState(false);

    const [currentSlide, setCurrentSlide] = useState(0);

    // Scroll function to the booking form
    const handleBookingClick = () => {
        navigate('/Booking');
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
        <div className="bg-[#B7CEDE] flex items-center justify-center px-2">
            <div className="p-2">
                <div className="bg-[#EBDFE1] shadow-lg rounded-lg">
                    <div className="flex flex-start">
                        {/* Room Details */}
                        <div className="flex flex-col">
                            <div className="relative">
                                {/* Room Title with hover events */}
                                <div
                                    className="font-bold ml-3 p-2 cursor-pointer relative hover:scale-105"
                                    onMouseEnter={() => setIsHovered(true)} // Show tooltip
                                    onMouseLeave={() => setIsHovered(false)} // Hide tooltip
                                >
                                    {roomTitle}

                                    {/* Bubble chat tooltip */}
                                    {isHovered && (
                                        <div className="absolute top-8 left-0 bg-white text-gray-700 text-xs rounded-lg px-3 py-2 shadow-lg w-72 z-10">
                                            {tooltipText}
                                            <div className="absolute -top-2 left-4 w-3 h-3 bg-white rotate-45"></div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <img src={roomImage} className="mt-1 mb-4 mx-7 w-[200px] h-auto rounded-lg" alt={`${roomTitle} Image`} />

                            <div className="flex flex-start">
                                <div className="flex flex-col gap-2 ml-6 mr-4 mb-4">
                                    <img src={"https://hackmd.io/_uploads/HJwBvQvQyl.png"} className="w-[23px] h-auto" alt="Bed Icon" />
                                    <img src={"https://hackmd.io/_uploads/r1PrPmwQyg.png"} className="w-[23px] h-auto" alt="Shower Icon" />
                                    <img src={"https://hackmd.io/_uploads/S1xDHwQDXkl.png"} className="w-[23px] h-auto" alt="WiFi Icon" />
                                    <img src={"https://hackmd.io/_uploads/SkDSD7wQyx.png"} className="w-[23px] h-auto" alt="Desk Icon" />
                                    <img src={"https://hackmd.io/_uploads/B1vSw7wXkx.png"} className="w-[23px] h-auto" alt="TV Icon" />
                                    <img src={"https://hackmd.io/_uploads/S1gwHPQP71e.png"} className="w-[23px] h-auto" alt="Size Icon" />
                                </div>

                                <div className="flex flex-col text-black leading-[1.9]">
                                    <p>{facilities.text1}</p>
                                    <p>{facilities.text2}</p>
                                    <p>Free Wifi</p>
                                    <p>Work desk and chair</p>
                                    <p>Flat-screen TV</p>
                                    <p>{facilities.text3}</p>
                                </div>
                            </div>
                        </div>

                        {/* Benefits and Prices */}
                        <div className="p-7 bg-pink-50 rounded-lg">
                            <div className="w-full max-w-4xl mx-auto border border-pink-200 rounded-lg shadow-md bg-slate-50">
                                <div className="grid grid-cols-2 border-b border-pink-200">
                                    <div className="p-4 font-bold text-center text-gray-700 border-r border-pink-200">
                                        Benefits
                                    </div>
                                    <div className="p-4 font-bold text-center text-gray-700">
                                        Price per Night
                                    </div>
                                </div>

                                {/* Benefit and Price 1 */}
                                <div className="grid grid-cols-2 border-b border-pink-200">
                                    <div className="p-4 border-r border-pink-200">
                                        <ul className="list-disc list-inside text-gray-600">
                                            <li>{benefit1.line1}</li>
                                            <li>{benefit1.line2}</li>
                                            <li>{benefit1.line3}</li>
                                        </ul>
                                    </div>
                                    <div className="p-4 flex flex-col justify-end">
                                        <div className="text-red-500 font-bold text-lg text-right">
                                            {price1.price}
                                        </div>
                                        <div className="text-gray-500 text-sm text-right">
                                            {price1.total}
                                        </div>
                                        <button onClick={handleBookingClick} className="mt-2 px-8 py-2 text-white bg-red-300 rounded-lg hover:bg-red-400 hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg ml-auto">
                                            Reserve
                                        </button>
                                    </div>
                                </div>

                                {/* Benefit and Price 2 */}
                                <div className="grid grid-cols-2">
                                    <div className="p-4 border-r border-pink-200">
                                        <ul className="list-disc list-inside text-gray-600">
                                            <li>{benefit2.line1}</li>
                                            <li>{benefit2.line2}</li>
                                            <li>{benefit2.line3}</li>
                                            <li>{benefit2.line4}</li>
                                        </ul>
                                    </div>
                                    <div className="p-4 flex flex-col justify-end">
                                        <div className="text-red-500 font-bold text-lg text-right">
                                            {price2.price}
                                        </div>
                                        <div className="text-gray-500 text-sm text-right">
                                            {price2.total}
                                        </div>
                                        <button onClick={handleBookingClick} className="mt-2 px-8 py-2 text-white bg-red-300 rounded-lg hover:bg-red-400 hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg ml-auto">
                                            Reserve
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
