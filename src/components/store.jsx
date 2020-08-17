import { configureStore } from '@reduxjs/toolkit';

import cartReducer from '../reducers/cartSlice';
import wishlistReducer from '../reducers/wishlistSlice';

export default configureStore({
    reducer: {
        cart: cartReducer,
        whishlist: wishlistReducer
    }
})