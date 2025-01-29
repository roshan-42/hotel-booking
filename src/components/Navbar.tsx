// src/components/Navbar.jsx

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const navigation = useNavigate();
  return (
    <nav className="bg-[#344A71] text-white p-4  w-full  opacity-100 ">
      <div className="container  flex items-center justify-between">
        <img
          onClick={() => navigation("/")}
          className="h-14 w-fit cursor-pointer"
          src="/images/logo.png"
          alt="Logo"
        />

        <div className="hidden md:flex md:items-center  text-sm">
          <Link
            to="/"
            className="px-2 hover:bg-white hover:text-black py-4 transition-all ease-in  "
          >
            HOME
          </Link>
          <Link to="/hotels" className="px-4">
            HOTEL
          </Link>
          <Link to="/roomtype" className="px-4">
            ROOMTYPES
          </Link>
          <Link to="/allrooms" className="PX-4">
            All ROOM
          </Link>

          <Link to="/contact" className="px-4">
            CONTACT
          </Link>
          <Link to="/feedback" className="px-4">
            FEEDBACK
          </Link>
          <Link to="/login" className="px-4">
            LOGIN
          </Link>
          <Link to="/button" className="px-4">
            BUTTON
          </Link>
        </div>
        <button onClick={() => setShowNav(!showNav)} className="flex md:hidden">
          <RxHamburgerMenu size={40} />
        </button>

        <div
          onScroll={() => setShowNav(false)}
          className={`lg:hidden fixed ${
            showNav ? "top-16 opacity-80" : "-top-[600px] opacity-0 "
          } transition-all ease-in duration-600 right-0 px-5 bg-[#344A71] flex flex-col items-center gap-10 py-4`}
        >
          <Link
            to="/"
            className="px-2 hover:bg-white hover:text-black py-4 transition-all ease-in  "
          >
            HOME
          </Link>
          <Link to="/hotels" className="px-4">
            HOTEL
          </Link>
          <Link to="/roomtype" className="px-4">
            ROOMTYPES
          </Link>
          <Link to="/allrooms" className="PX-4">
            All ROOM
          </Link>

          <Link to="/contact" className="px-4">
            CONTACT
          </Link>
          <Link to="/feedback" className="px-4">
            FEEDBACK
          </Link>
          <Link to="/login" className="px-4">
            LOGIN
          </Link>
          <Link to="/button" className="px-4">
            BUTTON
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
