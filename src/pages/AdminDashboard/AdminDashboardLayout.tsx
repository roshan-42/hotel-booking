import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AdminSidebar from "./AdminSidebar";
import Dashboard from "./Menus/Dashboard";
import HotelManage from "./Menus/HotelManage";
import RoomTypeManage from "./Menus/RoomTypeManage";
import BookingManage from "./Menus/BookingManage";
import PaymentHistories from "./Menus/PaymentHistory";

const AdminDashboardLayout = () => {
  const { menuSlug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to "dashboard" if no menuSlug is provided
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
    <div className="flex h-screen w-full">
      <div className="w-1/6">
        <AdminSidebar />
      </div>
      <div className="w-5/6">{renderMenu()}</div>
    </div>
  );
};

export default AdminDashboardLayout;
