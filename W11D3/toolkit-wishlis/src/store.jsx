import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./Redux/wishlistSlice";

export const store = configureStore({
    reducer:{
        wishlist: wishlistReducer
    }
})