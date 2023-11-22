import { useState } from 'react';
import './App.css';
import useFetch from "./Hooks/useFetch";
import Counter from './Components/Counter';
import Todo from './Components/Todo';



function App() {

  // API Url
  const baseURL = 'http://localhost:3000/products'

  // States
  const [basket, setBasket] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // GetAllProduct from API
  function GetProducts(data) {
    if (isLoading) {
      setAllProducts(data)
      setIsLoading(false)
    }
  }

  // useFetch(baseURL, GetProducts)

  // handleClick
  function addToBasket(item) {
    let basketCopy = [...basket]
    if (basketCopy.length) {

      const itemIndex = basketCopy.findIndex((x) => x.id === item.id)

      if (itemIndex !== -1) {
        basketCopy[itemIndex].count++
        console.log(basketCopy[itemIndex]);
        setBasket([...basketCopy])
        console.log(basket);
      }
      else {
        console.log(item);
        basketCopy.push({ ...item, count: 1 })
        setBasket(basketCopy)
      }

    }
    else {
      basketCopy.push({ ...item, count: 1 })
      setBasket(basketCopy)
    }
  }

  // updateCount
  function updateCount(isInc, item) {
    let basketCopy = [...basket]
    const itemIndex = basketCopy.findIndex((x) => x.id === item.id)
    if (isInc) {
      basketCopy[itemIndex].count++
      console.log(basketCopy[itemIndex])
      setBasket(basketCopy)
    }
    else {
      basketCopy[itemIndex].count--
      console.log(basketCopy[itemIndex])
      setBasket(basketCopy)
    }
  }

  // handleChange
  function handleChange(count, item) {
    let basketCopy = [...basket]
    const itemIndex = basketCopy.findIndex((x) => x.id === item.id)
    if (count && count > 0) {
      basketCopy[itemIndex].count = count
      setBasket(basketCopy)
    }
  }


  return (
    <>
      <h1>All Products</h1>
      {allProducts && allProducts.map((item) => (
        <ul onClick={() => addToBasket(item)} key={item.id} >
          <li>{item.id}</li>
          <li>{item.name}</li>
        </ul>
      ))}

      <h1>Basket Products</h1>
      {basket && basket.map((item) => (
        <ul key={item.id} >
          <li>{item.id}</li>
          <li>{item.name}</li>
          <button onClick={() => updateCount(true, item)} >+</button>
          <input type="number" onChange={(e) => handleChange(e.target.value, item)} value={item.count} style={{ width: "20px", border: "1px solid black", borderRadius: "0px" }} />
          <button onClick={() => updateCount(false, item)} >-</button>
        </ul>
      ))}

        <Todo/>

    </>
  )
}

export default App;
