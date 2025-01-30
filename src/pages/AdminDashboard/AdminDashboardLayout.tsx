import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons
import AdminSidebar from "./AdminSidebar";
import Dashboard from "./Menus/Dashboard";
import HotelManage from "./Menus/HotelManage";
import RoomTypeManage from "./Menus/RoomTypeManage";
import BookingManage from "./Menus/BookingManage";
import PaymentHistories from "./Menus/PaymentHistory";

const AdminDashboardLayout = () => {
  const { menuSlug } = useParams();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (!menuSlug) navigate("/admin-panel/dashboard");
  }, [menuSlug, navigate]);

  const renderMenu = () => {
    switch (menuSlug) {
      case "dashboard":
        return <Dashboard />;
      case "hotel-management":
        return <HotelManage />;
      case "room-type-management":
        return <RoomTypeManage />;
      case "booking-management":
        return <BookingManage />;
      case "payment-history":
        return <PaymentHistories />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen w-full relative">
      {/* Sidebar for large screens */}
      <div className="w-1/6 hidden md:flex">
        <AdminSidebar />
      </div>

      {/* Sidebar toggle button for small screens */}
      {!isSidebarOpen && (
        <button
          className="absolute top-4 right-4 md:hidden z-50 bg-gray-800 text-white p-2 rounded border  "
          onClick={() => setIsSidebarOpen(true)}
        >
          <FiMenu size={24} />
        </button>
      )}

      {/* Sidebar for small screens */}
      {isSidebarOpen && (
        <div className="fixed inset-0  z-40 md:hidden">
          <div className="w-4/6 bg-white h-full  relative">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 bg-white rounded text-gray-800"
              onClick={() => setIsSidebarOpen(false)}
            >
              <FiX size={24} />
            </button>
            <AdminSidebar />
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="w-full md:w-5/6">{renderMenu()}</div>
    </div>
  );
};

export default AdminDashboardLayout;
