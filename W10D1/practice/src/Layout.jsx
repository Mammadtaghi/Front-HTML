import React from 'react'
import Navbar from './Layout/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Layout/Footer/Footer';

function Layout() {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout