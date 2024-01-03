import React from 'react'
import NavBar from '../../components/dashboard/NavBar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='main-content'>
        <Outlet />
      </div>
      <NavBar />
    </div>
  )
}

export default Dashboard
