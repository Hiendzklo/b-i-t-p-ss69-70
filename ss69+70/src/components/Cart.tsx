import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import CartItem from './CartItem';

const Cart: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart);

    return (
        <div className="w-full p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p className="text-gray-500 p-4 text-center">Empty product in your cart</p>
            ) : (
                <div>
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="py-2">STT</th>
                                <th className="py-2">Name</th>
                                <th className="py-2">Price</th>
                                <th className="py-2">Quantity</th>
                                <th className="py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item => (
                                <CartItem key={item.id} item={item} />
                            ))}
                        </tbody>
                    </table>
                    <div className="p-4 text-right font-bold text-blue-600">
                        Total: {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)} USD
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
