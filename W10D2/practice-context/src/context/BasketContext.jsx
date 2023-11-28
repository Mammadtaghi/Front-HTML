import { createContext, useState } from "react";

export const BasketContext = createContext()

function BasketProvider({children}) {
    
    const [basket, setBasket]=useState([])

    function getBasketItem(id) {
        let BasketCopy = basket.filter((item)=>item[id]===id)
        return BasketCopy
    }

    return(
        <BasketContext.Provider value={[basket, setBasket, getBasketItem]}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketProvider;