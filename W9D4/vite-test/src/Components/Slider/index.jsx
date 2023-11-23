import React from 'react'
import style from "./index.module.scss";

function Silder() {

    function handleClick() {
        console.log("Albinoni");
    }

  return (
    <div onClick={handleClick} className={`${style.card}`}>Silder</div>
  )
}

export default Silder