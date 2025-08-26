import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
    const cat = [
      {
        name: "DSA",
        to: "/cat/dsa",
        bg: "bg-green-200",
      },
      {
        name: "MERN Stack",
        to: "/cat/mern-stack",
        bg: "bg-orange-200"
      },
      {
        name: "NEXT JS",
        to: "/cat/next-js",
        bg: "bg-indigo-200"
      },
      {
        name: "Trending Topics",
        to: "/cat/trending-topics",
        bg: "bg-pink-200"
      },
    ];
  return (
    <div className='mb-4 py-4'>
        <h1 className='text-xl font-semibold mb-4'>Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cat.map((items, i) => (
          <Link key={i} to={items.to} className={`px-4 py-2 text-center text-normal md:text-xl font-semibold ${items.bg} rounded`}>
            {items.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories
