"use client";

import React from "react";
import MenuLink from "./components/MenuLink";
import { RiDashboardFill } from "react-icons/ri";
import { IoBookSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <RiDashboardFill />,
      },
      {
        title: "Books",
        path: "/dashboard/books",
        icon: <IoBookSharp />,
      },
    ],
  },
];

const SideBar = ({
  isSidebarOpen,
  toggleSidebar,
}: {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}) => {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed inset-0 lg:relative lg:w-[250px] bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 z-10 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform lg:translate-x-0`}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-extrabold tracking-wide">My Sidebar</h2>
          <button
            className="text-white lg:hidden"
            onClick={toggleSidebar}
            aria-label="Close Sidebar"
          >
            <IoCloseSharp size={24} />
          </button>
        </div>
        {menuItems.map((category, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold uppercase text-gray-400 mb-4">
              {category.title}
            </h3>
            <ul className="space-y-4">
              {category.list.map((menuItem, idx) => (
                <li key={idx} className="group">
                  <MenuLink menuItem={menuItem} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-5 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default SideBar;
