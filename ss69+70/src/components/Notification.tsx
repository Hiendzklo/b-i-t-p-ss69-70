import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { clearNotification } from '../redux/reducers/notificationReducer';

const Notification: React.FC = () => {
    const dispatch = useDispatch();
    const notification = useSelector((state: RootState) => state.notification);

    React.useEffect(() => {
        if (notification.message) {
            const timer = setTimeout(() => {
                dispatch(clearNotification());
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [notification, dispatch]);

    if (!notification.message) return null;

    return (
        <div className={`fixed bottom-4 right-4 px-4 py-2 rounded ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white`}>
            {notification.message}
        </div>
    );
};

export default Notification;
