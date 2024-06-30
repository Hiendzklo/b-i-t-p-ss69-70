import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducers/productsReducer';
import cartReducer from './reducers/cartReducer';
import notificationReducer from './reducers/notificationReducer';

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        notification: notificationReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
