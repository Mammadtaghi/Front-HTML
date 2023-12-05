import { createSlice } from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        nums: [],
        num1:0,
        num2:0,
        operator: '',
        answer: [],
    },
    reducers: {
        SetNum1:(state,action)=>{
            state.num1 = action.payload
            console.log(state.num1);
        },
        SetNum2:(state,action)=>{
            state.num2 = action.payload
            console.log(state.num2);
        },
        AddNumber: (state, action) => {
            state.nums.push(action.payload)
        },
        SetOperator: (state, action) => {
            state.operator = action.payload
            console.log(state.operator);
        },
        Calculate: (state) => {
            if (state.operator) {
                switch (state.operator) {
                    case "+":
                        state.answer[0] = (state.num1 + state.num2)
                        return 
                    case "-":
                        state.answer[0] = (state.num1 - state.num2)
                        return 
                    case '/':
                        state.answer[0] = (state.num1 / state.num2)
                        return 
                    case '*':
                        state.answer[0] = (state.num1 * state.num2)
                        return 
                    default:
                        state.answer[0] = ("Something went wrong")
                        return 
                }
            }
        }
    }
})

export const { AddNumber, SetOperator, Calculate, SetNum1, SetNum2 } = calculatorSlice.actions
export default calculatorSlice.reducer