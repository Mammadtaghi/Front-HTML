import React, { useState } from 'react'
import "./index.css"

// Slider Done!

function Slider() {

  const [src, setSrc] = useState("")

  function GetSrc(e) {
    console.log(setSrc(e.src))
  }

  return (
    <div className='slider'>

      <div className="bigImg">

        <img src={src} alt="" />

      </div>

      <div className="childImgsBox">

        <div className="childImg"><img onClick={(e)=>GetSrc(e.target)} src="https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg" alt="" /></div>

        <div className="childImg"><img onClick={(e)=>GetSrc(e.target)} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz3N8n7zzJDyHortWYUU00x9OJg0M7bKQqIQ&usqp=CAU" alt="" /></div>

        <div className="childImg"><img onClick={(e)=>GetSrc(e.target)} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9CmPkVwcmY4enxAcmcQvwWKR_xaOE14t50A&usqp=CAU" alt="" /></div>

      </div>

    </div>
  )
}

export default Slider