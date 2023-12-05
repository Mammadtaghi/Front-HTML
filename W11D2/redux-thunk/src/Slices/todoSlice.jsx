import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name:'todo',
    initialState:{
        todos:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.todos.push(action.payload)
        },
        deleteItem:(state,action)=>{
            const index = state.todos.findIndex((x)=> x.id === action.payload)
            if (index !== -1) {
                state.todos = state.todos.filter(x=>x.id !== action.payload)
            }
        },
        deleteAll:(state)=>{
            state.todos = []
        },
        editItem:(state,action)=>{
            const index = state.todos.findIndex((x)=> x.id === action.payload.id)
            state.todos[index].name = action.payload.name
        }
    }
})

export const {addItem, deleteItem, editItem, deleteAll} = todoSlice.actions

export default todoSlice.reducer