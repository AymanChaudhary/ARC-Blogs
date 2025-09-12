import axios from "axios";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const AddBlogs = () => {
  const backendLink = useSelector((state) => state.prod.link);
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Image, setImage] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [NewCategory, setNewCategory] = useState("");

  const handleAddBlog = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const form = new FormData();
      form.append("title", Title);
      form.append("description", Description);
      form.append("image", Image);
      const res = await axios.post(`${backendLink}/api/v1/addBlog`, form, {
        withCredentials: true,
      });
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setTitle("");
      setDescription("");
      setLoading(false);
    }
  };

  const addCategoryHandle = async(e) => {
    e.preventDefault();
    const res = await axios.post(`${backendLink}/api/v1/addCategory`, {title: NewCategory}, {
      withCredentials: true,
    });
    toast.success(res.data.message);
    setNewCategory("");
  }

  return (
    <div className="p-4 h-screen">
      <h1 className="text-2xl font-semibold">Add Blog</h1>
      <form className="my-4 flex flex-col gap-4" onSubmit={handleAddBlog}>
        <input
          type="text"
          placeholder="Title"
          className="outline-none p-4 bg-transparent text-3xl border-b border-zinc-400 font-semibold w-full"
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          className="outline-none p-4 bg-transparent text-xl border-b border-zinc-400 font-semibold w-full"
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div>
          <input
            type="file"
            className="bg-zinc-900 rounded text-white"
            accept=".jpeg, .png, .jpg"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div>
          {Loading ? (
            <div className="bg-blue-400 w-fit text-xl rounded px-4 py-2 text-white shadow-xl">
              Adding Blog...
            </div>
          ) : (
            <button className="bg-blue-600 text-xl rounded px-4 py-2 text-white shadow-xl cursor-pointer hover:bg-blue-700 transition-all duration-300">
              Add Blog
            </button>
          )}
        </div>
      </form>
      <h1 className="text-2xl font-semibold mt-8">Add New Category</h1>
      <form className="mt-4" onSubmit={addCategoryHandle}>
        <input
          type="text"
          placeholder="Your new category"
          className="bg-none border outline-none px-4 py-2 rounded bg-gray-50"
          required
          value={NewCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button className="ms-4 bg-blue-600 px-4 py-2 rounded text-white cursor-pointer">Add Category</button>
      </form>
    </div>
  );
};

export default AddBlogs;
