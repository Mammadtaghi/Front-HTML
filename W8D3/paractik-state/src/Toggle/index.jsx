import React, { useState } from 'react'
import "./index.css"

// Toggle Done!

function Toggle() {

  const [toggle, setToggle] = useState('fa-bars')
  const [active, setActive] = useState('')

  function OpenSideNav() {
    if (toggle === 'fa-bars') {
      setToggle("fa-xmark")
      setActive('active')
    }
    else{
      setToggle("fa-bars")
      setActive('')
    }
  }

  return (
    <nav className='nav'>
      <i onClick={OpenSideNav} className={`fa-solid ${toggle}`}></i>

      <ul className={`sideNav ${active}`}>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </ul>

    </nav>
  )
}

export default Toggle