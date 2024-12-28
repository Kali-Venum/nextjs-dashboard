"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MenuLink = ({ menuItem }: any) => {
  const pathname = usePathname();
  const isActive = pathname === menuItem.path;

  return (
    <Link href={menuItem.path} passHref>
      {" "}
      <div
        className={`flex items-center space-x-2 cursor-pointer hover:text-blue-300 ${
          isActive ? "text-blue-400 font-bold" : "text-white"
        }`}
      >
        {" "}
        <span>{menuItem.icon}</span> <span>{menuItem.title}</span>{" "}
      </div>
    </Link>
  );
};

export default MenuLink;
