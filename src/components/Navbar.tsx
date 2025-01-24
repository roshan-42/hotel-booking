// src/components/Navbar.jsx

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#344A71] text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <img className="h-14 w-fit" src="/images/logo.png" alt="Logo" />
        <div>
          <Link
            to="/"
            className="px-2 hover:bg-white hover:text-black py-4 transition-all ease-in "
          >
            Home
          </Link>
          <Link to="/hotels" className="px-4">
            Hotel
          </Link>
          <Link to="/about" className="px-4">
            About
          </Link>
          <Link to="/contact" className="px-4">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
