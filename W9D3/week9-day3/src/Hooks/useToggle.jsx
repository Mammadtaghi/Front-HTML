import { useState } from "react"

function useToggle(isToggle) {

    const [toggle , setToggle] = useState(isToggle)

    function handleToggle() {
        setToggle(!toggle)
    }

  return {toggle,handleToggle}
}

export default useToggle