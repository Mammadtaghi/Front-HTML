import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
    name:'basket',
    initialState:{
        basket:[]
    },
    reducers:{
        addToBasket:(state,action)=>{
            state.basket.push(action.payload)
        }
    }
})