import React from 'react'
import Sidebar from '../../components/Admin Components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <div className='flex'>
      <div className='w-1/6'></div>
      <div className='w-1/6 fixed h-screen border-r'>
        <Sidebar />
      </div>
      <div className='w-5/6 bg-zinc-200'>
        <Outlet />
      </div>
    </div>
  )
}

export default AdminDashboard
