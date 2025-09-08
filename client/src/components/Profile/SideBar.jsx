import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/authReducer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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
  const dispatch = useDispatch();
  const backendLink = useSelector((state) => state.prod.link);
  const history = useNavigate();
  const logoutHandler = async () => {
    await axios.post(`${backendLink}/api/v1/logout`, {
      withCredentials: true,
    });
    dispatch(authActions.logout());
    history("/");
  };
  return (
    <div className="w-[100%] flex flex-col gap-10 md:gap-8 lg:gap-4 pr-4">
      {sideBarLinks.map((items, i) => (
        <Link key={i} to={items.to} className="hover:font-semibold">
          {items.name}
        </Link>
      ))}
      <button
        className="bg-zinc-900 text-white rounded w-[100%] py-2 hover:bg-zinc-800 text-center transition-all duration-300 cursor-pointer"
        onClick={logoutHandler}
      >
        Logout
      </button>
    </div>
  );
};

export default SideBar;
