import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NotificationState {
    message: string;
    type: 'success' | 'error' | '';
}

const initialState: NotificationState = {
    message: '',
    type: '',
};

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setNotification: (state, action: PayloadAction<{ message: string; type: 'success' | 'error' }>) => {
            state.message = action.payload.message;
            state.type = action.payload.type;
        },
        clearNotification: (state) => {
            state.message = '';
            state.type = '';
        },
    },
});

export const { setNotification, clearNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
