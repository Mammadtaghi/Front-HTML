import React, { useState } from 'react'
import "./index.css"

// Modal 

function Modal() {

  const [lol, setLol] = useState("show")

  return (
    <div className="screen">

      <button className='openModalBtn' onClick={()=>lol==='show'?setLol("hide"):setLol("show")}>Open Modal</button>

      <div className={`modal ${lol}`}>

      </div>

    </div>
  )
}

export default Modal