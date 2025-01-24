import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import Dashboard from "./Menus/Dashboard";
import HotelManage from "./Menus/HotelManage";
import RoomTypeManage from "./Menus/RoomTypeManage";
import BookingManage from "./Menus/BookingManage";
import PaymentHistories from "./Menus/PaymentHistories";

const AdminDashboardLayout = () => {
  const [selectedMenu, setSelectedMenu] = useState();
  return (
    <div className="flex h-screen w-full ">
      <div className="w-1/6">
        <AdminSidebar setSelectedMenu={setSelectedMenu} />
      </div>
      <div className="w-5/6 ">
        {selectedMenu === "dashboard" && <Dashboard />}
        {selectedMenu === "hotel management" && <HotelManage />}
        {selectedMenu === "room type management" && <RoomTypeManage />}
        {selectedMenu === "booking management" && <BookingManage />}
        {selectedMenu === "payment history" && <PaymentHistories />}
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
