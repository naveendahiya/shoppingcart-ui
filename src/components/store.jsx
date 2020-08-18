import { configureStore } from '@reduxjs/toolkit';

import cartReducer from '../reducers/cartSlice';
import wishlistReducer from '../reducers/wishlistSlice';

const store =  configureStore({
    reducer: {
        cart: cartReducer,
        whishlist: wishlistReducer
    }
})

export default store;