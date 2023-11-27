import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

function Card({ id, name, price, img }) {


    return (
        <Link to={`details/${id}`}>
            <div className='card'>
                <div className="imgBox"><img src={img} alt="" /></div>
                <span>{name}</span>
                <span>{price}</span>
            </div>
        </Link>
    )
}

export default Card