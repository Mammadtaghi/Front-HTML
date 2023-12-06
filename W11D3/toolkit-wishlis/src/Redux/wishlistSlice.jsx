import { createSlice } from "@reduxjs/toolkit";
import { GetLocalStorage, SetLocalStorage } from "./../Functions/LocalStorage";

const local = localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : []


export const wishlistSlice=createSlice({
    name:"wishlist",
    initialState:{
        value:local
    },
    reducers:{
        addToWishlist:(state,action)=>{
            const index = state.value.findIndex(x=>x.id===action.payload.id)
            if (index === -1) {
                state.value.push(action.payload)
                SetLocalStorage('wishlist', state.value)
                return
            }
            state.value = state.value.filter(x=> x.id !== action.payload.id)
            SetLocalStorage('wishlist', state.value)
        },
    }
})

export const {addToWishlist} = wishlistSlice.actions

export default wishlistSlice.reducer