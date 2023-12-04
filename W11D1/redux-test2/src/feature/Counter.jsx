import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './counterSlice'

function Counter() {
    const count = useSelector(state=>state.counter.value)
    const dispatch = useDispatch()


  return (
    <div>
        <button onClick={()=>dispatch(increment())}>+</button>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}

export default Counter