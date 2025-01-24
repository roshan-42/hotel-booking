// src/components/Navbar.jsx

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#344A71] text-white py-4 ">
      <div className="container mx-auto flex items-center justify-between">
        <img className="h-14 w-fit" src="/images/logo.png" alt="Logo" />
        <div>
          <Link
            to="/"
            className="px-2 hover:bg-white hover:text-black py-4 transition-all ease-in "
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
            AllROOM
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
