import { createContext, useContext, useState } from "react";


const userContext = createContext()

export const UserProvider = ({children}) =>{

    const [user, setUser] = useState({username:'', role:'',token:''})

    const data = {
        user:user,
        setUser:setUser,
    }

    return(
        <userContext.Provider value={data}>
            {children}
        </userContext.Provider>
    )

}

export const useUser=()=>useContext(userContext)
