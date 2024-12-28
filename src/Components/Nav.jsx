import React from "react";
import { GoHome } from "react-icons/go";
import { IoLibraryOutline } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  // Function to determine if the current path matches the nav item's path
  const isActive = (path) => location.pathname === path;

  return (
    <div>
      <nav className="flex justify-center bg-white p-5 gap-14 fixed w-full bottom-0">
        {/* Home */}
        <Link
          to="/home"
          className={`flex flex-col items-center ${
            isActive("/home") ? "text-[#FF8E2B]" : "hover:text-[#FF8E2B]"
          }`}
        >
          <GoHome className="text-xl" />
          <p>Home</p>
        </Link>

        {/* Library */}
        <Link
          to="/library"
          className={`flex flex-col items-center ${
            isActive("/library") ? "text-[#FF8E2B]" : "hover:text-[#FF8E2B]"
          }`}
        >
          <IoLibraryOutline className="text-xl" />
          <p>Library</p>
        </Link>

        {/* Favorite */}
        <Link
          to="/favorite"
          className={`flex flex-col items-center ${
            isActive("/favorite") ? "text-[#FF8E2B]" : "hover:text-[#FF8E2B]"
          }`}
        >
          <GrFavorite className="text-xl" />
          <p>Favorite</p>
        </Link>

        {/* Profile */}
        <Link
          to="/profile"
          className={`flex flex-col items-center ${
            isActive("/profile") ? "text-[#FF8E2B]" : "hover:text-[#FF8E2B]"
          }`}
        >
          <CgProfile className="text-xl" />
          <p>Profile</p>
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
