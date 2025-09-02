import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import MainLayout from './Layout/MainLayout'
import Home from './Pages/Home/page'
import OtherLayout from './Layout/OtherLayout'
import Login from './Pages/Login/page'
import SignUp from './Pages/Signup/page'
import Profile from './Pages/Profile/page'
import AllBlogs from '../src/Pages/All Blogs/page'
import DashBoardProfile from './components/Profile/DashBoardProfile'
import Favourites from './components/Profile/Favourites'
import LikedBlogs from './components/Profile/LikedBlogs'
import Description from './Pages/Description/Description'
import Categories from './Pages/Categories/Categories'
import AdminLogin from './Pages/Admin Login/AdminLogin'
import AdminDashboard from './Pages/Admin Dashboard/page'
import DashBoard from './components/Admin Components/Dashboard/DashBoard'
import AddBlogs from './components/Admin Components/Add Blog/AddBlogs'
import EditBlogs from './components/Admin Components/Edit Blog/EditBlogs'
import UpdateBlog from './components/Admin Components/Edit Blog/Compo/UpdateBlog'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/all-blogs" element={<AllBlogs />} />
          <Route path="/description/:id" element={<Description />} />
          <Route path="/cat/:id" element={<Categories />} />
          <Route path="/profile" element={<Profile />}>
            <Route index element={<DashBoardProfile />} />
            <Route path="/profile/favourites" element={<Favourites />} />
            <Route path="/profile/liked-blogs" element={<LikedBlogs />} />
          </Route>
        </Route>
        <Route element={<OtherLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />}>
            <Route index element={<DashBoard />} />
            <Route path='/admin-dashboard/add-blogs' element={<AddBlogs />} />
            <Route path='/admin-dashboard/edit-blogs' element={<EditBlogs />} />
            <Route path='/admin-dashboard/update-blog/:id' element={<UpdateBlog />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App
