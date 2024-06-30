import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    stock: number;
}

const initialState: Product[] = [
    { id: 1, name: 'Pizza', price: 30, imageUrl: 'https://via.placeholder.com/64', stock: 10 },
    { id: 2, name: 'Hamburger', price: 15, imageUrl: 'https://via.placeholder.com/64', stock: 5 },
    { id: 3, name: 'Bread', price: 20, imageUrl: 'https://via.placeholder.com/64', stock: 8 },
    { id: 4, name: 'Cake', price: 10, imageUrl: 'https://via.placeholder.com/64', stock: 2 },
];

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        decrementStock: (state, action: PayloadAction<number>) => {
            const product = state.find(product => product.id === action.payload);
            if (product && product.stock > 0) {
                product.stock -= 1;
            }
        },
        incrementStock: (state, action: PayloadAction<number>) => {
            const product = state.find(product => product.id === action.payload);
            if (product) {
                product.stock += 1;
            }
        }
    }
});

export const { decrementStock, incrementStock } = productsSlice.actions;
export default productsSlice.reducer;
