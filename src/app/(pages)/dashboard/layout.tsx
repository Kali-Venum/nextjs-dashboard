import React from "react";

// components
import NavBar from "@/ui/dashboard/navbar/NavBar";
import SideBar from "@/ui/dashboard/sidebar/SideBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Sidebar */}
      <div className="lg:w-[250px] xl:w-[300px] lg:block hidden bg-blue-700">
        <SideBar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
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
