import React from "react";
import { Link } from "react-router-dom";

const EditBlogs = () => {
  const data = [
    {
      img: "../temp.jpg",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ratione necessitatibus eveniet voluptates explicabo alias. Modi recusandae maxime, alias id autem tenetur asperiores veniam, veritatis tempora placeat voluptate consectetur explicabo! lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ratione necessitatibus eveniet voluptates explicabo alias. Modi recusandae maxime, alias id autem tenetur asperiores veniam, veritatis tempora placeat voluptate consectetur explicabo!",
    },
    {
      img: "../temp.jpg",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ratione necessitatibus eveniet voluptates explicabo alias. Modi recusandae maxime, alias id autem tenetur asperiores veniam, veritatis tempora placeat voluptate consectetur explicabo! lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ratione necessitatibus eveniet voluptates explicabo alias. Modi recusandae maxime, alias id autem tenetur asperiores veniam, veritatis tempora placeat voluptate consectetur explicabo!",
    },
    {
      img: "../temp.jpg",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ratione necessitatibus eveniet voluptates explicabo alias. Modi recusandae maxime, alias id autem tenetur asperiores veniam, veritatis tempora placeat voluptate consectetur explicabo! lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ratione necessitatibus eveniet voluptates explicabo alias. Modi recusandae maxime, alias id autem tenetur asperiores veniam, veritatis tempora placeat voluptate consectetur explicabo!",
    },
    {
      img: "../temp.jpg",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ratione necessitatibus eveniet voluptates explicabo alias. Modi recusandae maxime, alias id autem tenetur asperiores veniam, veritatis tempora placeat voluptate consectetur explicabo! lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ratione necessitatibus eveniet voluptates explicabo alias. Modi recusandae maxime, alias id autem tenetur asperiores veniam, veritatis tempora placeat voluptate consectetur explicabo!",
    },
    {
      img: "../temp.jpg",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ratione necessitatibus eveniet voluptates explicabo alias. Modi recusandae maxime, alias id autem tenetur asperiores veniam, veritatis tempora placeat voluptate consectetur explicabo! lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ratione necessitatibus eveniet voluptates explicabo alias. Modi recusandae maxime, alias id autem tenetur asperiores veniam, veritatis tempora placeat voluptate consectetur explicabo!",
    },
    {
      img: "../temp.jpg",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ratione necessitatibus eveniet voluptates explicabo alias. Modi recusandae maxime, alias id autem tenetur asperiores veniam, veritatis tempora placeat voluptate consectetur explicabo! lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ratione necessitatibus eveniet voluptates explicabo alias. Modi recusandae maxime, alias id autem tenetur asperiores veniam, veritatis tempora placeat voluptate consectetur explicabo!",
    },
    {
      img: "../temp.jpg",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ratione necessitatibus eveniet voluptates explicabo alias. Modi recusandae maxime, alias id autem tenetur asperiores veniam, veritatis tempora placeat voluptate consectetur explicabo! lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ratione necessitatibus eveniet voluptates explicabo alias. Modi recusandae maxime, alias id autem tenetur asperiores veniam, veritatis tempora placeat voluptate consectetur explicabo!",
    },
    {
      img: "../temp.jpg",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ratione necessitatibus eveniet voluptates explicabo alias. Modi recusandae maxime, alias id autem tenetur asperiores veniam, veritatis tempora placeat voluptate consectetur explicabo! lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ratione necessitatibus eveniet voluptates explicabo alias. Modi recusandae maxime, alias id autem tenetur asperiores veniam, veritatis tempora placeat voluptate consectetur explicabo!",
    },
  ];
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">Edit Blog</h1>
      <div className="grid grid-cols-3 gap-8 lg:gap-4 my-4">
        {data &&
          data.map((items, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-4 flex flex-col items-center justify-center"
            >
              <div className="w-full lg:w-2/6">
                <img src={items.img} alt="" className="rounded object-cover" />
              </div>
              <div className="mt-4">
                <h1 className="text-2xl font-semibold">{items.title}</h1>
                <p className="mb-4">{items.description.slice(0, 170)}...</p>
              </div>
              <div className="w-[100%] flex items-center justify-between gap-4">
                <Link to={`/admin-dashboard/update-blog/:id`} className="bg-blue-600 w-[100%] text-white px-4 py-2 rounded cursor-pointer text-center">
                  Edit
                </Link>
                <button className="bg-red-600 w-[100%] text-white px-4 py-2 rounded cursor-pointer">
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default EditBlogs;
