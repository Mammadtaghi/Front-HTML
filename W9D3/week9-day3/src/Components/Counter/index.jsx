import React from 'react'
import useCounter from '../../Hooks/useCounter'

function Counter() {

    const [count, handleClick] = useCounter(0)
    const [count1, handleClick1] = useCounter(0)
    const [count2, handleClick2] = useCounter(0)

    return (
        <>
            <div style={{ display: "flex" }}>
                <button onClick={() => handleClick(true)} >+</button>
                <span>{count}</span>
                <button onClick={() => handleClick(false)} >-</button>
            </div>
            <div style={{ display: "flex" }}>
                <button onClick={() => handleClick1(true)} >+</button>
                <span>{count1}</span>
                <button onClick={() => handleClick1(false)} >-</button>
            </div>
            <div style={{ display: "flex" }}>
                <button onClick={() => handleClick2(true)} >+</button>
                <span>{count2}</span>
                <button onClick={() => handleClick2(false)} >-</button>
            </div>
        </>
    )
}

export default Counter