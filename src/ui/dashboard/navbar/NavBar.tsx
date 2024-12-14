"use client";

import React, { useState, useEffect } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      setIsDropdownOpen(false);
    };

    if (isDropdownOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropdownOpen]);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md p-4">
      <div className="flex justify-between items-center">
        {/* Navbar Title */}
        <div className="text-lg font-bold tracking-wide sm:text-xl md:text-2xl">
          My App
        </div>

        {/* Profile Section */}
        <div className="relative">
          <img
            src="/images/user.png"
            alt="Profile"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white cursor-pointer hover:opacity-90"
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-lg z-20">
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 flex items-center gap-3 transition-all text-sm sm:text-base"
              >
                <FaCircleUser className="text-blue-500" />
                <span>Account Settings</span>
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 flex items-center gap-3 transition-all text-sm sm:text-base"
              >
                <FaSignOutAlt className="text-red-500" />
                <span>Sign Out</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
