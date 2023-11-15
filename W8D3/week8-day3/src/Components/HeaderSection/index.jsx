import React from 'react'
import "./index.css"

function HeaderSection() {

  return (
    <section id='header'>

      <div className="headerContainer">

        <div className="headerMiddle">

          <h1 className='headerTitle'>Special Dish<span className='titleDot'>.</span></h1>
          <p className='byChef'>By Chef Francis Smith</p>

        </div>

        <div className="swiperOrderDots">

          <span className="dot1 dot">.</span>

          <span className="dot2 dot">.</span>

          <span className="dot3 dot">.</span>

        </div>

      </div>

    </section>
  )
}

export default HeaderSection