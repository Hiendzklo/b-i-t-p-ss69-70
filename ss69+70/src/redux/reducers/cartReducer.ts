import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from './productsReducer';
import { setNotification } from './notificationReducer';
import { AppDispatch, RootState } from '../store';

export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

const loadCartFromLocalStorage = (): CartItem[] => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
};

const saveCartToLocalStorage = (cart: CartItem[]) => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

const initialState: CartItem[] = loadCartFromLocalStorage();

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const item = action.payload;
            const existingItem = state.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.push({ ...item, quantity: 1 });
            }
            saveCartToLocalStorage(state);
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const updatedCart = state.filter(cartItem => cartItem.id !== action.payload);
            saveCartToLocalStorage(updatedCart);
            return updatedCart;
        },
        incrementQuantity: (state, action: PayloadAction<number>) => {
            const item = state.find(cartItem => cartItem.id === action.payload);
            if (item) {
                item.quantity += 1;
                saveCartToLocalStorage(state);
            }
        },
        decrementQuantity: (state, action: PayloadAction<number>) => {
            const item = state.find(cartItem => cartItem.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                saveCartToLocalStorage(state);
            }
        },
        updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
            const item = state.find(cartItem => cartItem.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
                saveCartToLocalStorage(state);
            }
        },
    }
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
