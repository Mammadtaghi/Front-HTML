import { NavLink } from 'react-router-dom'
import React from 'react'
import './Navbar.css'

function Navbar() {

    const NavLinkStyle = {
      border: '1px solid black',
      padding: '10px 20px'
    }
  return (
    <nav>
        <NavLink to='' style={NavLinkStyle}>Home</NavLink>
        <NavLink to='contact' style={NavLinkStyle}>Contact</NavLink>
        <NavLink to='login' style={NavLinkStyle}>Login</NavLink>
    </nav>
  )
}

export default Navbar