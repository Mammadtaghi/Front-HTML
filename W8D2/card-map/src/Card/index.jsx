// import React, { useState } from 'react'
import "./index.css"

function Card({img, name, price, stars}) {

  return (
    <div className='Card'>
        <img src={img} alt="" />
        <h1>{name}</h1>
        <span>{price}</span>
        <span>{stars}</span>
    </div>
  )
}

export default Card