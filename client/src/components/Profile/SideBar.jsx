import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const sideBarLinks = [
    {
      name: "Dashboard",
      to: "/profile",
    },
    {
      name: "Favourites",
      to: "/profile/favourites",
    },
    {
      name: "Liked Blogs",
      to: "/profile/liked-blogs",
    },
  ];
  return (
    <div className="w-[100%] border-r flex flex-col gap-4 pr-4">
      {sideBarLinks.map((items, i) => (
          <Link
            key={i}
            to={items.to}
            className="text-sm text-gray-700 hover:font-semibold"
          >
            {items.name}
          </Link>
      ))}
      <button className="bg-zinc-900 text-white rounded w-[100%] py-2 hover:bg-zinc-800 text-center transition-all duration-300 cursor-pointer">
        Logout
      </button>
    </div>
  );
};

export default SideBar;
