import React from "react";
import { FaUser } from "react-icons/fa";

const DashBoardProfile = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-12">
        <div>
          <div className="size-[20vh] border rounded-full">
            <div className="w-[100%] h-[100%] flex items-center justify-center">
              <FaUser className="size-[12vh] text-zinc-600" />
            </div>
          </div>
          <div className="mt-4">
            <button className="bg-blue-700 text-center px-4 py-2 text-white rounded cursor-pointer">
              Change Avatar
            </button>
          </div>
        </div>
        <div>
          <p className="text-zinc-700">aymanchaudhary96@gmail.com</p>
          <h1 className="text-3xl mt-2 font-semibold">Ayman Chaudhary</h1>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default DashBoardProfile;
