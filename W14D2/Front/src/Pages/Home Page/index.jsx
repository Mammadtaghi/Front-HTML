import React, { useState } from 'react';
import { v4 } from "uuid";
import useFetch from '../../Hooks/useFetch';
import './index.scss';

function Home() {

  const [Products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const url = 'http://localhost:8000/products'

  useFetch(url, GetProducts)

  function GetProducts(data) {
    setProducts(data)
    setIsLoading(false)
  }

  return (
    <main>
      {isLoading ? <h1>Loading...</h1> : Products && Products.map(item => (
        <div key={v4()}>
          <h2>{item.title}</h2>
          <h3 style={{textDecoration:"line-through"}}>${item.price}</h3><h3>${(item.price*(100 - item.discount))/100}</h3>
        </div>
      ))}
    </main>
  )
}

export default Home