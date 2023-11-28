import React, { useContext, useState } from 'react'
import { BasketContext } from '../../context/BasketContext'

function Basket() {

    const [basket, setBasket, getBasketItem] = useContext(BasketContext)
    const [isLoading, setIsLoading] = useState(true)



  return (
    <div>
        { !basket ? <h1>Loading...</h1> : basket && basket.map(item=>(
            <div key={item.id}>
                <span>{item.name}</span>
            </div>
        )) }
    </div>
  )
}

export default Basket