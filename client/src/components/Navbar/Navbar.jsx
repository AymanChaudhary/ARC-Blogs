import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoReorderThreeSharp } from "react-icons/io5";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "All Blogs",
      to: "/all-blogs",
    },
    {
      name: "Profile",
      to: "/profile",
    },
    {
      name: "Login",
      to: "/login",
    },
  ];
  const [MobileNav, setMobileNav] = useState(false);
  return (
    <nav className="relative flex items-center justify-between py-4 border-b border-zinc-200">
      <div className="w-3/6 lg:w-2/6 brandName">
        <Link to="/" className="text-xl font-bold">
          ARC Blogs
        </Link>
      </div>
      <div className="w-4/6 hidden lg:flex items-center justify-end">
        {links.map((items, i) => (
          <Link
            className="ms-4 hover:text-blue-600 transition-all duration-300"
            key={i}
            to={items.to}
          >
            {items.name}
          </Link>
        ))}
        <Link
          className="ms-4 bg-black rounded px-4 py-1 text-zinc-100 hover:bg-blue-600 transition-all duration-300"
          to="/signup"
        >
          Sign Up
        </Link>
      </div>
      <div className="w-3/6 flex lg:hidden items-center justify-end">
        <button className="text-3xl" onClick={() => setMobileNav(!MobileNav)}>
          <IoReorderThreeSharp />
        </button>
      </div>
      <div
        className={`absolute top-0 left-0 nav-bg h-screen w-full ${
          MobileNav
            ? "flex flex-col translate-y-[0%]"
            : "translate-y-[-100%]"
        } transition-all duration-300 z-10 p-4`}
      ></div>
    </nav>
  );
};

export default Navbar;
