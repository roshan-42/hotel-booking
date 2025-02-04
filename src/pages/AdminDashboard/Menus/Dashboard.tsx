import {
  BookCheck,
  BookMarked,
  DoorOpen,
  Hotel,
  ShoppingCart,
  User,
  Users,
} from "lucide-react"; // Example for icons
import api from "../../../utils/api";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [stats, setStats] = useState();
  const cards = [
    {
      icon: <Hotel className="text-blue-500" size={24} />,
      value: stats?.total_no_of_hotels,
      label: "Total Hotels",
      percentage: "0.43%",
      isPositive: true,
    },
    {
      icon: <DoorOpen className="text-blue-500" size={24} />,
      value: stats?.total_no_of_rooms,
      label: "Total Rooms",
      percentage: "9.35%",
      isPositive: true,
    },

    {
      icon: <BookCheck className="text-blue-500" size={24} />,
      value: stats?.total_booked_room,

      label: "Booked Rooms",
      percentage: "0.95%",
      isPositive: false,
    },
    {
      icon: <Users className="text-blue-500" size={24} />,
      value: "39",
      label: "Total Customer",
      percentage: "4.35%",
      isPositive: true,
    },
    {
      icon: <BookMarked className="text-blue-500" size={24} />,
      value: stats?.new_booking_today,

      label: "Today Bookings",
      percentage: "5.85%",
      isPositive: true,
    },
    {
      icon: <User className="text-blue-500" size={24} />,
      value: "50",
      label: "New Customer",
      percentage: "1.35%",
      isPositive: true,
    },
    // {
    //   icon: <ShoppingCart className="text-blue-500" size={24} />,
    //   value: "$45.2K",
    //   label: "Total Profit",
    //   percentage: "2.33%",
    //   isPositive: true,
    // },
  ];

  const fetchInfo = async () => {
    try {
      const response = await api.get("/dashboard/api/stats/");
      console.log("Check response", response?.data?.data);
      setStats(response?.data?.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div>
      <div className="text-3xl font-bold  p-4 ml-2">Dashboard</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow-lg flex flex-col space-y-2"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
              {card.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold">{card.value}</h3>
              <p className="text-gray-500">{card.label}</p>
            </div>
            <div
              className={`text-sm font-medium ${
                card.isPositive ? "text-green-500" : "text-red-500"
              }`}
            >
              {card.percentage} {card.isPositive ? "↑" : "↓"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
