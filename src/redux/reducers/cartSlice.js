import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        setCartReducer:(state, action)=>{
            //verificamos existencia en articulos
            if(state.cart.some((cartItem) => cartItem.id === action.payload.id)){
                state.cart.map((ele)=>{
                    if(ele.id === action.payload.id){
                        ele.qty = ele.qty + 1
                    }
                })
            }
            else{
                state.cart = [...state.cart, action.payload]
            }
        },
        addCartReducer: (state, action) =>{
            return [...state, action.payload]
        },
        removeCartReducer: (state, action) =>{
            state.cart = state.cart.filter(cart => cart.id !== action.payload.id)
        },
        totalCartReducer:(state) =>{
            return state.cart.reduce((acum, item) => acum = acum + (item.precio * item.qty), 0)
        },
        defaultCartReducer:(state, action) =>{
            return initialState
        }
    }
})

export const {
    setCartReducer,
    addCartReducer,
    removeCartReducer,
    totalCartReducer,
    defaultCartReducer
} = cartSlice.actions;

export default cartSlice.reducer