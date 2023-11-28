import React, { useContext, useState } from 'react'
import useFetch from '../../Hooks/useFetch'
import BasketProvider, { BasketContext } from '../../context/BasketContext'
import Basket from '../../Components/Basket'

function Home() {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    const [basket, setBasket, getBasketItem] = useContext(BasketContext)

    console.log(basket);

    useFetch('https://northwind.vercel.app/api/categories', handleData)

    function handleData(data) {
        setData(data)
        setIsLoading(false)
    }

    function getItem(item) {
        if (basket.includes(item)) {
            console.log('You have added this product before');
            return
        }
        setBasket([...basket, item])
    }

    return (
        <main>
            Home
            {isLoading ? <span>Loading...</span> : data && data.map((item) => (
                <div onClick={()=>getItem(item)} key={item.id} style={{border:'1px solid black', cursor:'progress'}}>
                    <p>{item.id}</p>
                    <p>{item.name}</p>
                </div>
            ))}
            <Basket/>
        </main>
    )
}

export default Home