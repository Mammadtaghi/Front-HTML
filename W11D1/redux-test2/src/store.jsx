import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feature/counterSlice";
import todoReducer from "./feature/todoSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer
    },
})
