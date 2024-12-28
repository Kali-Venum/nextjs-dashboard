"use client";

import React, { useState } from "react";

// components
import NavBar from "@/ui/dashboard/navbar/NavBar";
import SideBar from "@/ui/dashboard/sidebar/SideBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        } lg:ml-0`}
      >
        {/* Navbar */}
        <div className="sticky top-0 z-10 bg-white shadow-md">
          <NavBar />
        </div>

        {/* Page Content */}
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
