import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: []
}

export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers:{
        setOrderReducer:(state, action) => {
            state.orders = [...state.orders, action.payload]
        },
    }
})

export const {
    setOrderReducer,
} = ordersSlice.actions;

export default ordersSlice.reducer