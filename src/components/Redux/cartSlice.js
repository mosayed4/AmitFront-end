import { createSlice } from "@reduxjs/toolkit";
const cartState = {
    cart : [],
}
export const cartSlice = createSlice({
    name : 'cart',
    initialState : cartState,
    reducers : {
        addToCart : (state , action)=>{
            state.cart.push(action.payload)
            // console.log(state);
        },
        removeFromCart : (state ,action) =>{
            state.cart.splice(action.payload ,1)
            // console.log(action.payload);
        }
    }
})