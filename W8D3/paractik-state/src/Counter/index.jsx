import React, { useState } from 'react'

// Counter Done!

function Counter() {

    const [count,setCount]=useState(0)

  return (
    <div className='counter'>
        <span>{count}</span>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
}

export default Counter