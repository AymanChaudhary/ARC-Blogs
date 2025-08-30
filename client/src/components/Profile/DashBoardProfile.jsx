import React, { useState } from "react";
import { FaUser } from "react-icons/fa";

const DashBoardProfile = () => {
  const [ChangeAvatar, setChangeAvatar] = useState(null);
  const changeImage = (e) => {
    setChangeAvatar(e.target.files[0]);
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div>
          <div className="size-[20vh] border rounded-full">
            <label
              className="w-[100%] h-[100%] flex items-center justify-center"
              htmlFor="imgFile"
            >
              {ChangeAvatar ? (
                <img
                  src={URL.createObjectURL(ChangeAvatar)}
                  alt=""
                  className="size-[100%] object-cover"
                ></img>
              ) : (
                <FaUser className="size-[12vh] text-zinc-600" />
              )}
            </label>
          </div>
          <div className="mt-4 flex items-center justify-center">
            <input
              type="file"
              id="imgFile"
              accept=".jpeg, .jpg, .png"
              className="mb-4 bg-zinc-900 text-white hidden"
              onChange={changeImage}
            />
            <button className="bg-blue-700 hover:bg-blue-600 transition-all duration-300 text-center px-4 py-2 text-white rounded cursor-pointer">
              Change Avatar
            </button>
          </div>
        </div>
        <div>
          <p className="text-zinc-700">aymanchaudhary96@gmail.com</p>
          <h1 className="text-2xl md:text-3xl lg:text-5xl mt-2 font-semibold">Ayman Chaudhary</h1>
        </div>
      </div>
      <hr className="my-8" />
      <div>
        <h1 className="text-2xl font-semibold">Change account's Password</h1>
        <form className="my-4">
          <div className="flex flex-col">
            <label htmlFor="">Current Password</label>
            <input
              type="password"
              placeholder="Current Password"
              //value=""
              name="password"
              required
              className="mt-2 outline-none border px-3 py-2 rounded border-zinc-400"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="">New Password</label>
            <input
              type="password"
              placeholder="New Password"
              //value=""
              name="newPassword"
              required
              className="mt-2 outline-none border px-3 py-2 rounded border-zinc-400"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="">Confirm New Password</label>
            <input
              type="password"
              placeholder="Confirm New Password"
              //value=""
              name="confirmNewPassword"
              required
              className="mt-2 outline-none border px-3 py-2 rounded border-zinc-400"
            />
          </div>
          <div className="mt-8">
            <button className="bg-blue-700 hover:bg-blue-600 transition-all duration-300 text-center px-4 py-2 text-white rounded cursor-pointer">
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashBoardProfile;
