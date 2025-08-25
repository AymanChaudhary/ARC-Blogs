import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <div className="text-4xl flex flex-col w-full items-start">
        <h1 className="font-bold">Hi I am ARC!</h1>
        <h2>Discover new blogs of technology and trends!</h2>
      </div>
      <div className="my-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2">
          <img
            src="./temp.jpg"
            alt="temp"
            className="rounded w-full h-[30vh] md:h-[40vh] lg:h-[50vh] object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold">Lorem Ipsum</h1>
          <p className="mt-2 mb-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            ratione necessitatibus eveniet voluptates explicabo alias. Modi
            recusandae maxime, alias id autem tenetur asperiores veniam,
            veritatis tempora placeat voluptate consectetur explicabo!
          </p>
          <Link className="mt-2 bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700 transition-all duration-300">Read Blog</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
