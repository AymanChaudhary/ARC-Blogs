import React from 'react'
import AllBlogsComponents from '../../components/All Blogs/AllBlogsComponents';

const AllBlogs = () => {
  return (
    <div className="mb-4 py-4">
      <h1 className="text-xl font-semibold mb-4">All Blogs</h1>
      <AllBlogsComponents />
    </div>
  );
}

export default AllBlogs