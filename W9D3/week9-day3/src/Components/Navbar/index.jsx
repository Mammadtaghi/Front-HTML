import React from 'react'
import useToggle from '../../Hooks/useToggle'

function Navbar() {

    const {toggle, handleToggle} = useToggle(false)

  return (
    <nav>
        <div  onClick={handleToggle} style={{cursor:"pointer", width:"20px", height:"20px"}}>{toggle ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}</div>
        <ul style={{height:`${toggle ? "100%" : "0px"}`, overflow:"hidden"}}>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
        </ul>
    </nav>
  )
}

export default Navbar