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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/all-blogs" element={<AllBlogs />} />
          <Route path="/profile" element={<Profile />}>
            <Route index element={<DashBoardProfile />} />
            <Route path='/profile/favourites' element={<Favourites />} />
            <Route path='/profile/liked-blogs' element={<LikedBlogs />} />
          </Route>
        </Route>
        <Route element={<OtherLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
