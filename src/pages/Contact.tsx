import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#344A71] text-white p-6">
      <div className="bg-white text-[#344A71] p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-[#344A71] text-xl" />
            <p>123 Luxury St, New York, USA</p>
          </div>
          <div className="flex items-center gap-4">
            <FaPhone className="text-[#344A71] text-xl" />
            <p>+1 (234) 567-890</p>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-[#344A71] text-xl" />
            <p>contact@hotelbooking.com</p>
          </div>
        </div>

        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FDE55B]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FDE55B]"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 border rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-[#FDE55B]"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#FDE55B] text-[#344A71] font-bold p-2 rounded-md hover:bg-yellow-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
