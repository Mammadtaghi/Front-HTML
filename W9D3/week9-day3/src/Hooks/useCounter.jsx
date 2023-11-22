import { useState } from "react"

function useCounter(defaultValue) {

    const [count, setCount] = useState(defaultValue)

    function handleClick(isAdd) {
        if (isAdd) {
            setCount(count + 1)
            return
        }
        setCount(count - 1)
    }

    return [count, handleClick]
}

export default useCounter