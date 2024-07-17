import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import {
  ArrowDownLeftIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";

const Sidebar = () => {
  return (
    <div>
      <Link
        href="/store"
        className="bg-purple-500 mb-4 flex h-20 items-end justify-start rounded-md p-4"
      >
        <div className="w-32 md:w-40">
          <Logo />
        </div>
      </Link>
      <div className="flex flex-wrap gap-2 justify-center md:grow flex-row md:justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <form>
          <button className="flex h-[48px] grow items-center justify-center gap-2 text-black rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-purple-600 md:flex-none md:justify-start md:px-3">
            <ArrowLeftOnRectangleIcon className="w-6" /> Sign Out
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
