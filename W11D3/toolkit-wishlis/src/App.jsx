import { addToWishlist } from "./Redux/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import useFetch from './Hooks/useFetch';
import { useState } from "react";
import styled from "styled-components";
import { v4 } from "uuid";
import './App.css'

const SectionTitle = styled.h1`
font-family: Georgia, 'Times New Roman', Times, serif;
color: indigo;
`

const ProductTitle = styled.h2`
font-family: Arial, Helvetica, sans-serif;
color: tomato;
`

function App() {



  const baseURL = 'http://localhost:3000/products'

  const [products, setProducts] = useState([])

  useFetch(baseURL, setProducts)

  const Wishlist = useSelector(state => state.wishlist.value)
  const dispatch = useDispatch()

  function handleWishlist(item) {
    dispatch(addToWishlist(item))
  }

  return (
    <>
      <div>
        {products && products.map(product => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <h4>$ {product.price}</h4>
            <button style={{ cursor: 'pointer' }} onClick={() => handleWishlist(product)}><i className={`fa-${Wishlist.find(x => x.id === product.id) ? 'solid' : "regular"} fa-heart`}></i></button>
          </div>
        ))}
      </div>
      <div>
        <SectionTitle>Wishlist</SectionTitle>
        {Wishlist && Wishlist.map(item => (
          <ProductTitle key={v4()}>{item.name}</ProductTitle>
        ))}
        <h2>Total: $ <span style={{color:'teal'}}>{Wishlist.reduce((a,b)=> a + +b.price, 0)}</span></h2>
      </div>
    </>
  )
}

export default App
