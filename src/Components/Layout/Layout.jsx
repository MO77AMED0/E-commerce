import React, { useState } from 'react'
import style from './Layout.module.css'
import Navbar from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
import Navbarr from '../Navbar/Navbar.jsx'

export default function Layout() {




  return <>
    <Navbarr/>
    <div className="container py-44 lg:py-20">

      <Outlet></Outlet>
    </div>
    <Footer />
  </>
}
