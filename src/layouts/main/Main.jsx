import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Main() {
  return (
    <div>
      <Navbar />
      <div className='min-h-screen'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Main
