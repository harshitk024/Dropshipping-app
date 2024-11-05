import {createSlice} from "@reduxjs/toolkit"


const cartSlice = createSlice({
    
    name: "cart",
    initialState: [],
    reducers: {

        addToCart(state,action){
            state.push(action.payload)
        },

        removeFromCart(state,action){
           const id = action.payload
           return state.filter(item => item.id !== id)
        }
    }
})