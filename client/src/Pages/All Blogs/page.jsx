import React from 'react'
import BlogCard from '../../components/Blog Card/BlogCard';

const AllBlogs = () => {
  const data = [
    {
      img: "./temp.jpg",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ratione necessitatibus eveniet voluptates explicabo alias. Modi recusandae maxime, alias id autem tenetur asperiores veniam, veritatis tempora placeat voluptate consectetur explicabo! lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ratione necessitatibus eveniet voluptates explicabo alias. Modi recusandae maxime, alias id autem tenetur asperiores veniam, veritatis tempora placeat voluptate consectetur explicabo!",
    },
    {
      img: "./temp.jpg",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ratione necessitatibus eveniet voluptates explicabo alias. Modi recusandae maxime, alias id autem tenetur asperiores veniam, veritatis tempora placeat voluptate consectetur explicabo! lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ratione necessitatibus eveniet voluptates explicabo alias. Modi recusandae maxime, alias id autem tenetur asperiores veniam, veritatis tempora placeat voluptate consectetur explicabo!",
    },
    {
      img: "./temp.jpg",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ratione necessitatibus eveniet voluptates explicabo alias. Modi recusandae maxime, alias id autem tenetur asperiores veniam, veritatis tempora placeat voluptate consectetur explicabo! lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ratione necessitatibus eveniet voluptates explicabo alias. Modi recusandae maxime, alias id autem tenetur asperiores veniam, veritatis tempora placeat voluptate consectetur explicabo!",
    },
    {
      img: "./temp.jpg",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ratione necessitatibus eveniet voluptates explicabo alias. Modi recusandae maxime, alias id autem tenetur asperiores veniam, veritatis tempora placeat voluptate consectetur explicabo! lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ratione necessitatibus eveniet voluptates explicabo alias. Modi recusandae maxime, alias id autem tenetur asperiores veniam, veritatis tempora placeat voluptate consectetur explicabo!",
    },
    {
      img: "./temp.jpg",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ratione necessitatibus eveniet voluptates explicabo alias. Modi recusandae maxime, alias id autem tenetur asperiores veniam, veritatis tempora placeat voluptate consectetur explicabo! lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ratione necessitatibus eveniet voluptates explicabo alias. Modi recusandae maxime, alias id autem tenetur asperiores veniam, veritatis tempora placeat voluptate consectetur explicabo!",
    },
    {
      img: "./temp.jpg",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ratione necessitatibus eveniet voluptates explicabo alias. Modi recusandae maxime, alias id autem tenetur asperiores veniam, veritatis tempora placeat voluptate consectetur explicabo! lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ratione necessitatibus eveniet voluptates explicabo alias. Modi recusandae maxime, alias id autem tenetur asperiores veniam, veritatis tempora placeat voluptate consectetur explicabo!",
    },
    {
      img: "./temp.jpg",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ratione necessitatibus eveniet voluptates explicabo alias. Modi recusandae maxime, alias id autem tenetur asperiores veniam, veritatis tempora placeat voluptate consectetur explicabo! lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ratione necessitatibus eveniet voluptates explicabo alias. Modi recusandae maxime, alias id autem tenetur asperiores veniam, veritatis tempora placeat voluptate consectetur explicabo!",
    },
    {
      img: "./temp.jpg",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ratione necessitatibus eveniet voluptates explicabo alias. Modi recusandae maxime, alias id autem tenetur asperiores veniam, veritatis tempora placeat voluptate consectetur explicabo! lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ratione necessitatibus eveniet voluptates explicabo alias. Modi recusandae maxime, alias id autem tenetur asperiores veniam, veritatis tempora placeat voluptate consectetur explicabo!",
    },
  ];
  return (
    <div className="mb-4 py-4">
      <h1 className="text-xl font-semibold mb-4">All Blogs</h1>
      <div className="flex flex-col gap-8 lg:gap-4">
        {data &&
          data.map((items, i) => (
            <div key={i} className="flex flex-col lg:flex-row gap-2 lg:gap-4">
              <BlogCard items={items} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default AllBlogs