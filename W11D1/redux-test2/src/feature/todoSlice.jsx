import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState:{
        value:[]
    },
    reducers:{
        addTodoItem:(state,action)=>{
            state.push(action.payload)
        }
    }
})

export const {addTodoItem} = todoSlice.actions

export default todoSlice.reducer
