import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cartSlice";
import orderReducer from "../reducers/orderSlice";

export const store = configureStore({
    reducer:{
        orders: orderReducer,
        cart: cartReducer,
    }
})