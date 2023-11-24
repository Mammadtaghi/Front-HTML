import BasketCard from './Components/BasketCard'
import React, { useEffect, useState } from 'react'
import useFetch from './Hooks/useFetch'
import './App.css'

function App() {

  const [users, setUsers] = useState([])
  const [data, setData] = useState([])

  const baseProductURL = 'http://localhost:3000/products'
  const baseUsersURL = 'http://localhost:3000/users'

  useEffect(() => {
    useFetch(baseUsersURL, setUsers)
  }, [])

  useEffect(() => {
    useFetch(baseProductURL, setData)
  }, [])

  const addToBasket=(props)=> {
    console.log(props);
  }

  return (
    <>
      <div className='allProducts'>
        { data && data.map((product)=>(
          <BasketCard key={product.id} addToBasket={addToBasket} id={product.id} name={product.name} img={product.img} price={product.price}  />
        )) }
      </div>

    </>
  )
}

export default App
