import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';

export const TypingEffect = ({ words, speed = 1500 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, speed);

    return () => clearInterval(interval);
  }, [words, speed]);

  return <span>{words[index]}</span>;
};

export function HeaderSlider() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTeam = () => {
    const aboutSection = document.getElementById('Team');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  const handleBookingClick = () => {
    alert("Redirecting to the booking page...");
    navigate('/booking');
  };

  const handleLoginOrAccountClick = () => {
    if (isLoggedIn || user) {
      navigate('/account');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-gradient-to-b from-white to-gray-100 h-16 flex items-center justify-between px-5 shadow-lg z-50 transition-all duration-300">
        <p className="text-2xl font-bold bg-gradient-to-r from-rose-200 to-red-400 text-transparent bg-clip-text">
          K Hotel
        </p>
        <nav className="flex space-x-6">
          <button
            onClick={scrollToAbout}
            className="text-gray-700 hover:bg-slate-500 p-5 hover:text-white font-medium transition-all duration-300 relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </button>
          <Link
            to="/services"
            className="text-gray-700 hover:bg-slate-500 p-5 hover:text-white font-medium transition-all duration-300 relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Services
          </Link>
          <button
            onClick={scrollToTeam}
            className="text-gray-700 hover:bg-slate-500 p-5 hover:text-white font-medium transition-all duration-300 relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Our Team
          </button>
          <button
            onClick={handleLoginOrAccountClick}
            className={`self-center h-2 flex items-center rounded-2xl p-5 font-medium transition-all duration-300 ${
            isLoggedIn? 'bg-gray-50 hover:bg-slate-200 hover:rounded-full' : 'bg-slate-500 text-gray-100 border-white hover:bg-pink-300 hover:text-slate-700'}`}
          >
            {isLoggedIn ? (
              <img
                src="https://hackmd.io/_uploads/BkXoMRNXkl.png"
                alt="User Account"
                className="w-6 h-6"
              />
            ) : (
              'Log In'
            )}
          </button>
        </nav>
      </header>

      {/* Slider Section */}
      <div className="relative bg-pink-300 h-[600px]">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          className="h-full"
        >
          {[
            "https://hackmd.io/_uploads/Skjn0dbXyl.jpg",
            "https://hackmd.io/_uploads/B1PnQFWQ1l.jpg",
            "https://hackmd.io/_uploads/r1msZKZXke.jpg",
          ].map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Call to Action */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 text-center z-20 max-w-xl">
        <h1 className="font-mono text-6xl font-bold tracking-wide text-gray-800 mt-16 mb-4 leading-tight">
          Feel Your{" "}
          <span className="bg-gradient-to-r from-rose-200 to-red-400 text-transparent bg-clip-text animate-pulse">
            <TypingEffect words={["Romantic", "Cozy", "Luxurious"]} />
          </span>{" "}
          Self
        </h1>
          <p className="font-serif font-semibold text-pink-800 mt-8">
            K Hotel & Spa offers stylish and coquettish accommodations with
            luxurious amenities in every room so that you can enjoy your stay.
          </p>
        </div>

        <div className="absolute bottom-40 left-1/2 bg-rose-200 transform -translate-x-1/2 px-10 py-3 rounded-2xl z-10 hover:scale-110 ease-in-out hover:bg-rose-300 hover:rounded-2xl">
          <button
            onClick={handleBookingClick}
            className="text-gray-700 font-bold text-lg"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export function AboutSection() {
  const navigate = useNavigate();
  const features = [
    { icon: "https://hackmd.io/_uploads/H12hqpZ7Jx.png", title: "Rooms", bgColor: "bg-rose-200", textcolor: "text-white" },
    { icon: "https://hackmd.io/_uploads/SJM-j6WXkg.png", title: "Activities", bgColor: "bg-slate-100" },
    { icon: "https://hackmd.io/_uploads/rk9Ei6-m1e.png", title: "Pool", bgColor: "bg-slate-100" },
    { icon: "https://hackmd.io/_uploads/HySPo6-mJl.png", title: "Dining", bgColor: "bg-teal-200", textcolor: "text-white" },
  ];

  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div id="about" className="w-full min-h-screen bg-white flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 md:h-screen">
        {/* Features Section */}
        <div className="grid grid-cols-2 gap-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center justify-center text-center p-6 ${feature.bgColor} ${feature.textcolor} min-h-[200px]`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <motion.div
                animate={hoverIndex === index ? { y: -10 } : { y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <div>
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className={`w-12 h-12 ${['Rooms', 'Dining'].includes(feature.title) ? 'filter invert' : ''}`}
                  />
                </div>
                <h3 className="font-bold text-lg mt-4">{feature.title}</h3>
                {['Pool', 'Activities'].includes(feature.title) && (
                  <hr className="w-10 border-t-2 border-gray-800 mt-2" />
                )}
                {['Rooms', 'Dining'].includes(feature.title) && (
                  <hr className="w-8 border-t-2 border-white mt-2" />
                )}
              </motion.div>

              {hoverIndex === index && (
                <motion.button
                  onClick={() => navigate('/services')}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute bottom-8 px-8 py-2 text-sm rounded-2xl border-2 
                    ${feature.title === 'Rooms' ? 'bg-white text-rose-300 border-white hover:bg-rose-200 hover:border-white hover:text-white font-bold' : ''}
                    ${feature.title === 'Dining' ? 'bg-white text-teal-300 border-white hover:bg-teal-200 hover:border-white hover:text-white font-bold' : ''}
                    ${['Pool', 'Activities'].includes(feature.title) ? 'bg-gray-800 text-gray-300 border-gray-800 hover:bg-gray-200 hover:border-gray-800 hover:text-gray-800 font-bold' : ''}
                  `}
                >
                  More
                </motion.button>
              )}
            </div>
          ))}
        </div>

        {/* About Us Text Section */}
        <div className="flex flex-col bg-orange-100 p-12 py-20">
          <h4 className="text-sm uppercase tracking-widest text-gray-500 mt-8 mb-1">About Us</h4>
          <h2 className="font-mono text-5xl font-bold text-gray-800 mb-6">A Few Words About Us</h2>
          <p className="text-gray-700 leading-7 text-sm">
            K Hotel & Spa offers its guests coquette accommodation combined
            with spa & relaxation activities. Our layout has been carefully
            thought out to include increased harmony principles and an enhanced
            sense of vitality and joy. We are one of the area’s only luxury spa
            hotels that is energy efficient, green built, and designed to offer
            the ultimate level of relaxation.
          </p>
          <button 
            onClick={() => navigate('/services')}
            className="self-start mt-6 px-8 py-3 bg-rose-200 md:font-bold text-sm rounded-2xl shadow-lg hover:bg-teal-200">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
}

export function TeamSection() {
  const [activeIndexGroup1, setActiveIndexGroup1] = useState(null);
  const [activeIndexGroup2, setActiveIndexGroup2] = useState(null);

  const handleCardClickGroup1 = (index) => {
    setActiveIndexGroup1(index === activeIndexGroup1 ? null : index);
  };

  const handleCardClickGroup2 = (index) => {
    setActiveIndexGroup2(index === activeIndexGroup2 ? null : index);
  };

  const teamMembers1 = [
    { name: "Azra NA", img: " ", role: "Front End" },
    { name: "Kharisma A", img: " ", role: "Front End" },
    { name: "M. Fattah", img: " ", role: "Front End" },
    { name: "Musyaffa", img: " ", role: "Front End" },
  ];

  const teamMembers2 = [
    { name: "Huzara A", img: " ", role: "Back End" },
    { name: "Nadia I", img: " ", role: "Back End" },
    { name: "Nelson L", img: " ", role: "Back End" },
    { name: "Radya", img: " ", role: "Back End" },
  ];

  const renderTeamMembers = (members, activeIndex, handleCardClick) => (
    <div className="relative flex overflow-hidden justify-center items-center gap-2 max-w-2xl mx-auto">
      {members.map((member, index) => (
        <div
          key={index}
          onClick={() => handleCardClick(index)}
          className={`relative flex-shrink-0 transition-all duration-500 ease-in-out cursor-pointer ${
            activeIndex === index
              ? "flex-[4] h-96 z-10"
              : "flex-[1] h-80 hover:flex-[2]"
          } bg-gray-200 rounded-lg shadow-lg overflow-hidden`}
        >
          {/* Card Image */}
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(https://via.placeholder.com/400x300?text=${encodeURIComponent(
                member.name,
                member.img
              )})`,
            }}
          ></div>

          {/* Card Content */}
          <div
            className={`absolute bottom-0 left-0 w-full text-white p-4 transition-opacity duration-300 ${
              activeIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <h3 className="text-2xl font-semibold">{member.name}</h3>
            <p className="font-mono">{member.role}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div id="Team" className="w-full min-h-screen bg-gray-100 py-12">
      <h2 className="font-mono text-center text-5xl font-bold text-gray-800 mb-12">
        Meet Our Team
      </h2>
      <div className="relative flex flex-col lg:flex-row justify-center items-start gap-6 max-w-6xl mx-auto">
        {/* Team Members Group 1 */}
        <div className="w-full lg:w-1/2">
          {renderTeamMembers(teamMembers1, activeIndexGroup1, handleCardClickGroup1)}
        </div>

        {/* Team Members Group 2 */}
        <div className="w-full lg:w-1/2">
          {renderTeamMembers(teamMembers2, activeIndexGroup2, handleCardClickGroup2)}
        </div>
      </div>
    </div>
  );
}
