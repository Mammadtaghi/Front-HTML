import React from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'
import { useUser } from '../../Context/userContext'

function Navbar() {

  const { user, setUser } = useUser()

  return (
    <nav style={{ display: 'flex', columnGap: '10px' }}>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/login'}>Login</NavLink>
      <NavLink to={'/register'}>Sign Up</NavLink>
      { (user && user.role === "User" || user.role === "Admin" ) ? <NavLink to={'/account/:id'}>Account</NavLink> : ''}
      { (user && user.role === "Admin") ? <NavLink to={'/adminpanel'}>AdminPanel</NavLink> : ''}
    </nav>
  )
}

export default Navbar