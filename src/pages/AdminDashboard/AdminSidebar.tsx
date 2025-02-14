import { Link } from "react-router-dom";
import { LuHotel } from "react-icons/lu";
import {
  MdOutlineHistory,
  MdOutlineMeetingRoom,
  MdSpaceDashboard,
} from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { TbLogout2 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const navigate = useNavigate();
  return (
    <aside className="bg-gray-800 text-white w-full h-screen">
      <div
        onClick={() => navigate("/")}
        className="w-full flex items-center justify-center h-24 cursor-pointer"
      >
        <img src="/images/logo.png" alt="Logo" className="h-10" />
      </div>
      <ul>
        <li className="p-4 font-thin text-gray-400">General</li>
      </ul>
      <ul className="p-4 flex flex-col gap-10">
        <li className="flex items-center gap-2">
          <MdSpaceDashboard />
          <Link to="/admin-panel/dashboard" className="hover:underline">
            Dashboard
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <LuHotel />
          <Link to="/admin-panel/hotel-management" className="hover:underline">
            Hotel Management
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <MdOutlineMeetingRoom />
          <Link
            to="/admin-panel/room-type-management"
            className="hover:underline"
          >
            Room Type Management
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <SlCalender />
          <Link
            to="/admin-panel/booking-management"
            className="hover:underline"
          >
            Booking Management
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <MdOutlineHistory />
          <Link to="/admin-panel/payment-history" className="hover:underline">
            Payment History
          </Link>
        </li>
      </ul>
      <ul>
        <li className="p-4 font-thin text-gray-400">Account</li>
      </ul>
      <ul className="px-4 py-2 flex flex-col">
        <li className="flex items-center gap-2 cursor-pointer hover:underline">
          <TbLogout2 /> Logout
        </li>
      </ul>
    </aside>
  );
};

export default AdminSidebar;
