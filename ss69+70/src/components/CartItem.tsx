import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../redux/reducers/cartReducer';
import { RootState } from '../redux/store';
import { Product } from '../redux/reducers/productsReducer';

interface CartItemProps {
    item: {
        id: number;
        name: string;
        price: number;
        quantity: number;
    };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
    const dispatch = useDispatch();
    const product = useSelector((state: RootState) => state.products.find((product: Product) => product.id === item.id));

    const handleRemove = () => {
        dispatch(removeFromCart(item.id));
    };

    const handleIncrement = () => {
        if (product && item.quantity < product.stock) {
            dispatch(incrementQuantity(item.id));
        } else {
            alert('Số lượng sản phẩm vượt quá số lượng trong kho');
        }
    };

    const handleDecrement = () => {
        if (item.quantity > 1) {
            dispatch(decrementQuantity(item.id));
        } else {
            handleRemove();
        }
    };

    return (
        <tr>
            <td className="p-2">{item.id}</td>
            <td className="p-2">{item.name}</td>
            <td className="p-2">{item.price} USD</td>
            <td className="p-2">
                <div className="flex items-center">
                    <button onClick={handleDecrement} className="bg-yellow-500 text-white py-1 px-3 rounded">-</button>
                    <span className="px-4">{item.quantity}</span>
                    <button onClick={handleIncrement} className="bg-green-500 text-white py-1 px-3 rounded">+</button>
                </div>
            </td>
            <td className="p-2">
                <button onClick={handleRemove} className="bg-red-500 text-white py-1 px-3 rounded">Remove</button>
            </td>
        </tr>
    );
};

export default CartItem;
