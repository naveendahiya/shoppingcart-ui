import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        itemAdded(state, action){
            state.push(action.payload)
        },
        itemDelete(state,action){
            const { id } = action.payload
            state.filter(item => id !== item.id)
        },
        reset(state){
            Object.assign(state, initialState)
        }
    }
})

export const { itemAdded }  = wishlistSlice.actions

export default wishlistSlice.reducer