import { LuHotel } from "react-icons/lu";
import {
  MdOutlineHistory,
  MdOutlineMeetingRoom,
  MdSpaceDashboard,
} from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { TbLogout2 } from "react-icons/tb";

const AdminSidebar = ({ setSelectedMenu }: any) => {
  return (
    <aside className="bg-gray-800 text-white w-full h-screen">
      <div className="w-full flex items-center justify-center  h-24  ">
        <img src="/images/logo.png" alt="" className="h-10 " />
      </div>
      <ul>
        <li className="p-4 font-thin text-gray-400">General</li>
      </ul>

      <ul className=" p-4 flex flex-col gap-10">
        <li
          onClick={() => setSelectedMenu("dashboard")}
          className="flex items-center  gap-2 cursor-pointer hover:underline "
        >
          <MdSpaceDashboard /> Dashboard
        </li>
        <li
          onClick={() => setSelectedMenu("hotel management")}
          className="flex items-center  gap-2 cursor-pointer hover:underline "
        >
          <LuHotel />
          Hotel Management
        </li>
        <li
          onClick={() => setSelectedMenu("room type management")}
          className="flex items-center  gap-2 cursor-pointer hover:underline "
        >
          <MdOutlineMeetingRoom /> Room Type Management
        </li>
        <li
          onClick={() => setSelectedMenu("booking management")}
          className="flex items-center  gap-2 cursor-pointer hover:underline "
        >
          <SlCalender />
          Booking Management
        </li>
        <li
          onClick={() => setSelectedMenu("payment history")}
          className="flex items-center  gap-2 cursor-pointer hover:underline "
        >
          {" "}
          <MdOutlineHistory />
          Payment History
        </li>
      </ul>
      <ul>
        <li className="p-4 font-thin text-gray-400">Account</li>
      </ul>
      <ul className=" px-4 py-2 flex flex-col">
        <li
          onClick={() => setSelectedMenu("dashboard")}
          className="flex items-center  gap-2 cursor-pointer hover:underline "
        >
          <TbLogout2 /> Logout
        </li>
      </ul>
    </aside>
  );
};

export default AdminSidebar;
