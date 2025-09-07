import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const history = useNavigate();
  const [Inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  const SubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:1000/api/v1/log-in",
        Inputs,
        { withCredentials: true }
      );
      toast.success(res.data.message);
      history("/profile");
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setInputs({ email: "", password: "" });
    }
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="p-12 shadow-2xl rounded w-[80%] md:w-[60%] lg:w-[40%] flex flex-col items-center justify-center">
        <div className="text-2xl flex flex-col lg:flex-row gap-2 text-center">
          <h1 className="font-bold">Welcome Again!</h1>
          <span>Please log in here</span>
        </div>
        <form className="flex flex-col w-[100%] mt-8" onSubmit={SubmitHandler}>
          <div className="flex flex-col mb-4">
            <label>Email</label>
            <input
              type="email"
              value={Inputs.email}
              name="email"
              className="mt-2 outline-none border px-3 py-2 rounded border-zinc-400"
              required
              onChange={change}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label>Password</label>
            <input
              type="password"
              value={Inputs.password}
              name="password"
              className="mt-2 outline-none border px-3 py-2 rounded border-zinc-400"
              required
              onChange={change}
            />
          </div>
          <div className="flex mt-4">
            <button
              className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white px-4 py-2 rounded w-[100%] cursor-pointer"
              type="submit"
            >
              Log In
            </button>
          </div>
        </form>
        <h4 className="mt-8">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:text-blue-700 hover:font-semibold">
            Sign Up here
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default Login;
