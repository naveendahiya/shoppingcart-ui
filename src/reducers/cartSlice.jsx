import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        productAdded(state, action){
            state.push(action.payload)
        },
        productUpdated(state, action){
            const { id, quantity } = action.payload
            const existingProduct = state.find(product => product.id == id)
            if(existingProduct){
                existingProduct.quantity = quantity
            }
        },
        productDelete(state, action){
            const { id } = action.payload
            state.filter(product => id !== product.id)
        },
        reset(state){
            Object.assign(state, initialState)
        }
    }
})

export const  { productAdded }  = cartSlice.actions

export default cartSlice.reducer