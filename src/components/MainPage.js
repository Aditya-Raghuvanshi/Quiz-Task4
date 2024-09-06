import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const MainPage = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default MainPage
