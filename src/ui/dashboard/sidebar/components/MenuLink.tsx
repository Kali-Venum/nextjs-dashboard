"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MenuLink = ({ menuItem }: any) => {
  const pathname = usePathname();

  return (
    <Link
      href={menuItem.path}
      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-300
        ${
          pathname === menuItem.path
            ? "bg-blue-700 text-blue-300 font-semibold"
            : "text-gray-300 hover:bg-blue-800 hover:text-white"
        }
        md:px-4 md:py-3 lg:px-5 lg:py-4
      `}
    >
      <span
        className={`text-lg sm:text-xl md:text-2xl
          ${
            pathname === menuItem.path
              ? "text-blue-300"
              : "text-gray-400 group-hover:text-white"
          }`}
      >
        {menuItem.icon}
      </span>
      <span
        className={`text-sm sm:text-base lg:text-lg
          ${pathname === menuItem.path ? "font-medium" : "font-light"}`}
      >
        {menuItem.title}
      </span>
    </Link>
  );
};

export default MenuLink;
