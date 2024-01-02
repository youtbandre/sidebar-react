import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'

const Root = () => {
  return <div className="main">
    <Sidebar />
    <div className="center">
      <Outlet />
    </div>
  </div>
}

export default Root