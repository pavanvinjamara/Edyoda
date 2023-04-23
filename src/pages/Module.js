import React from 'react'
import './Module.css'
import NavbarModule from '../components/NavbarModule'
import { Outlet } from 'react-router-dom'
function Module() {
  return (
    <div className='module-container'>
        <NavbarModule/>
        <Outlet/>
    </div>
  )
}

export default Module