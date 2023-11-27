import React from 'react'
import { Link, Outlet, Route } from 'react-router-dom'

function Navbar() {
  return (
        <nav>
            <Link to='home' >Home</Link>
            <Link to='contact' >Contact</Link>
            <Link to='about' >About</Link>
        </nav>
  )
}

export default Navbar