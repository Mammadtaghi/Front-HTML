import { Fragment, useState } from 'react';
import './App.css';
import useFetch from './useFetch';
import "../src/Components/Product/product.css"


function App() {

  // states
  const [basket, setBasket] = useState([])
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const baseURL = 'http://localhost:3000/products'

  function handleData(data) {
    if (isLoading) {
      setData(data)
      setIsLoading(false)
    }
    
  }

  useFetch(baseURL, handleData)

  return (
    <div className='App'>
      { isLoading ? <span>Loading...</span> : data && data.map((product)=>(
        <Fragment key={product.id}>
          <Product {...product} />
        </Fragment>
      )) }
    </div>
  );
}

function Product(props) {

return (
  <div className='product'>
      <span>{props.id}</span>
      <h2 className='productName'>{props.name}</h2>
  </div>
)
}

export default App;
