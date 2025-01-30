import React from "react";
import { useNavigate } from "react-router-dom";

interface RoomType {
  name: string;
  image: string;
}
interface RoomCardProps {
  roomtype: RoomType[];
}
const RoomCard: React.FC<RoomCardProps> = ({ roomtype }) => {
  console.log("room type: ", roomtype);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Rooms</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {roomtype?.map((hotel, index) => (
          <div
            key={index}
            className="group bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow relative"
          >
            <img
              src={hotel.images[0].image}
              alt={hotel.name}
              className="h-40 w-full object-cover group-hover:opacity-10 transition-opacity duration-300"
            />
            <div className="bg-[#344A71] text-white text-center py-2 group-hover:opacity-10 transition-opacity duration-300">
              <p className="text-lg font-semibold">{hotel.name}</p>
            </div>
            {/* Buttons visible on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex flex-col gap-4 items-center">
                <button
                  type="button"
                  className="bg-[#344A71] hover:bg-[#2c394e] p-2 px-4 rounded-lg text-white cursor-pointer transition-all duration-300"
                >
                  View Rooms
                </button>
                <button
                  onClick={() => navigate(`/bookhotel?room=${roomtype[0]?.id}`)}
                  className="bg-[#E7C130] hover:bg-[#d6b52e]  p-2 px-4 rounded-lg text-white cursor-pointer transition-all duration-300"
                >
                  Book Room
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomCard;
