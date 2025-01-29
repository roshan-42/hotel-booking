import React, { useEffect, useState } from "react";
import {
  FaMapMarkerAlt,
  FaStar,
  FaWifi,
  FaUtensils,
  FaSwimmingPool,
  FaStarHalfAlt,
} from "react-icons/fa";
import api from "../utils/api";
import { useParams } from "react-router-dom";

interface HotelData {
  name: string;
  location: string;
  description: string;
  rating: number;
  reviewsCount: number;
  images: Array<{ image: string }>;
}

const HotelProfile: React.FC = () => {
  const [data, setData] = useState<HotelData | null>(null);
  const id = useParams().slug;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/hotels/api/hotels/${id}/`);
        setData(response?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Hero Section */}
      <div className="relative w-full h-64 sm:h-96">
        <img
          src={data?.images[0].image}
          alt="Hotel"
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Hotel Details */}
      <div className="mt-6">
        <h1 className="text-3xl font-bold">{data?.name}</h1>
        <div className="flex items-center gap-2 text-gray-600 mt-2">
          <FaMapMarkerAlt className="text-red-500" />
          <p>{data?.location}</p>
        </div>
        <div className="flex items-center mt-2">
          {data ? (
            <>
              {[...Array(5)].map((_, index) => {
                if (index < Math.floor(data.rating || 0)) {
                  return <FaStar key={index} className="text-yellow-500" />;
                }
                if (
                  index < Math.floor(data.rating || 0) + 0.5 &&
                  data.rating % 1 !== 0
                ) {
                  return (
                    <FaStarHalfAlt key={index} className="text-yellow-500" />
                  );
                }
                return <FaStar key={index} className="text-gray-300" />;
              })}
              <span className="ml-2 text-gray-600">
                {data.rating} ({data.reviewsCount} reviews)
              </span>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>

      {/* About Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">About the Hotel</h2>
        <p className="text-gray-700 mt-2">{data?.description}</p>
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
