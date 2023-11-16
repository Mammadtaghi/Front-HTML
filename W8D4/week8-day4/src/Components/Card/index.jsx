import React from 'react'
import "./index.css"

function Card(item) {
    console.log(item.for);
    return (
        <div className='Card'>
            <div className="productImgBox">
                <img className='productImg' src={item.img} alt="" />
            </div>
            <div className="titleBox">
                <h3 className='productName'>{item.name}</h3>
                <span className='productPrice'>${item.price}</span>
            </div>
        </div>
    )
}

export default Card