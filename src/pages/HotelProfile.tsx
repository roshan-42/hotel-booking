import React from "react";
import {
  FaMapMarkerAlt,
  FaStar,
  FaWifi,
  FaUtensils,
  FaSwimmingPool,
} from "react-icons/fa";

const HotelProfile: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Hero Section */}
      <div className="relative w-full h-64 sm:h-96">
        <img
          src="https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg"
          alt="Hotel"
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Hotel Details */}
      <div className="mt-6">
        <h1 className="text-3xl font-bold">Grand Luxury Hotel</h1>
        <div className="flex items-center gap-2 text-gray-600 mt-2">
          <FaMapMarkerAlt className="text-red-500" />
          <p>New York, USA</p>
        </div>
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-yellow-500" />
          ))}
          <span className="ml-2 text-gray-600">5.0 (120 reviews)</span>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">About the Hotel</h2>
        <p className="text-gray-700 mt-2">
          Experience the ultimate luxury in the heart of New York. Our hotel
          offers world-class facilities, premium dining, and an unforgettable
          stay.
        </p>
      </div>

      {/* Amenities Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Amenities</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
          <div className="flex items-center gap-2">
            <FaWifi className="text-blue-500" /> Free WiFi
          </div>
          <div className="flex items-center gap-2">
            <FaUtensils className="text-green-500" /> Restaurant
          </div>
          <div className="flex items-center gap-2">
            <FaSwimmingPool className="text-cyan-500" /> Swimming Pool
          </div>
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-500" /> 5-Star Service
          </div>
        </div>
      </div>

      {/* Room Availability */}
      <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold">Book a Room</h2>
        <p className="text-gray-700 mt-1">
          Check availability and enjoy a luxurious stay.
        </p>
        <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-500/80">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default HotelProfile;
