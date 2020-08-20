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
            const { name } = action.payload
            let state2 = state.filter(item => name !== item.name)
            return state2;
        },
        reset(state){
            Object.assign(state, initialState)
        }
    }
})

export const { itemAdded, itemDelete }  = wishlistSlice.actions

export default wishlistSlice.reducer