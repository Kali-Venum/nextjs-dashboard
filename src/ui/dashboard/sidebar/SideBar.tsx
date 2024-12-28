"use client";

import React, { useState } from "react";
import MenuLink from "./components/MenuLink";
import { RiDashboardFill } from "react-icons/ri";
import { IoBookSharp } from "react-icons/io5";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";

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

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed inset-0 lg:relative lg:w-[250px] bg-gradient-to-br text-white p-6 z-10 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform lg:translate-x-0`}
      >
        <h2 className="text-3xl font-extrabold mb-8 tracking-wide text-center">
          My Sidebar
        </h2>
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
    </>
  );
};

export default SideBar;
