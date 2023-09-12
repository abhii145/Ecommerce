import React from "react";
import { Link, useLocation } from "react-router-dom";

const SubNavbar = () => {
  const location = useLocation();
  const activeTab = location.pathname.split("/")[1] || "allProducts"; // Extract the first part of the pathname as the active tab

  return (
    <nav className="bg-zinc-700 p-4">
      <div className="flex justify-center items-center">
        <div className="flex space-x-4">
          <div
            className={`cursor-pointer ${
              activeTab === "allProducts"
                ? "text-lime-400 font-bold"
                : "text-gray-300"
            }`}
          >
            <Link to="/">All Products</Link>
          </div>
          <div
            className={`cursor-pointer ${
              activeTab === "electronics"
                ? "text-lime-400 font-bold"
                : "text-gray-300"
            }`}
          >
            <Link to="/electronics">Electronics</Link>
          </div>
          <div
            className={`cursor-pointer ${
              activeTab === "mens" ? "text-lime-400 font-bold" : "text-gray-300"
            }`}
          >
            <Link to="/mens">Men's Clothing</Link>
          </div>
          <div
            className={`cursor-pointer ${
              activeTab === "womens"
                ? "text-lime-400 font-bold"
                : "text-gray-300"
            }`}
          >
            <Link to="/womens">Women's Clothing</Link>
          </div>
          <div
            className={`cursor-pointer ${
              activeTab === "jewelery"
                ? "text-lime-400 font-bold"
                : "text-gray-300"
            }`}
          >
            <Link to="/jewelery">Jewelry</Link>
          </div>
        </div>
        <div className="p-4"></div>
      </div>
    </nav>
  );
};

export default SubNavbar;
