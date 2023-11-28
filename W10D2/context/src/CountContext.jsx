import { createContext, useContext, useState } from "react";

const CountContext = createContext()

export const CountProvider=({children})=>{

  const [count, setCount] = useState(0)

  const data = {
    count,
    setCount
  }

    return(
        <CountContext.Provider value={data}>
            {children}
        </CountContext.Provider>
    )

}

export const useCount=()=>useContext(CountContext)