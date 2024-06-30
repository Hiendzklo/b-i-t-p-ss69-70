import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';
import notificationReducer from './notificationReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    notification: notificationReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
