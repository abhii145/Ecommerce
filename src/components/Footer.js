import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { BiStore } from "react-icons/bi";

const Footer = ({ isFixed }) => {
  const currentYear = new Date().getFullYear();

  const footerClasses = isFixed
    ? "bg-gray-900 text-white py-6 bottom-0 w-full fixed"
    : "bg-gray-900 text-white py-6 w-full";

  return (
    <footer className={footerClasses}>
      <div className="container mx-auto flex justify-between items-center">
        <BiStore size={30} className="text-gray-300 hover:text-emerald-700" />
        <div className="flex space-x-4">
          <FaTwitter size={25} className="text-gray-300 hover:text-cyan-400" />

          <FaFacebook size={25} className="text-gray-300 hover:text-sky-500" />

          <FaInstagram
            size={25}
            className="text-gray-300 hover:text-rose-400"
          />
        </div>
      </div>
      <div className="mt-2 text-center text-gray-600">
        &copy; {currentYear} Bazar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
