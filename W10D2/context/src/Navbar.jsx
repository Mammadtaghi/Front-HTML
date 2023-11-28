import React from 'react'
import { useCount } from './CountContext'

const Navbar = () => {

    const {count, setCount}=useCount()

  return (
    <div>
        Navbar (
        {count}
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
        )
    </div>
  )
}

export default Navbar