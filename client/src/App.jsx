import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import MainLayout from './Layout/MainLayout'
import Home from './Pages/Home/page'
import OtherLayout from './Layout/OtherLayout'
import Login from './Pages/Login/page'
import SignUp from './Pages/Signup/page'
import Profile from './Pages/Profile/page'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/profile' element={<Profile />} />
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
