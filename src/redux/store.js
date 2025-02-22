import {configureStore} from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import {productReducer} from './productReducer';
import {cartReducer} from './cartReducer';

const store = configureStore ({
    reducer: {
        products: productReducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(thunk),
});
export default store;