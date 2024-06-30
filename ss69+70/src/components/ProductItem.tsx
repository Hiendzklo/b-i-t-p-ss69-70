import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decrementQuantity, incrementQuantity } from '../redux/reducers/cartReducer';
import { setNotification } from '../redux/reducers/notificationReducer';
import { decrementStock, Product } from '../redux/reducers/productsReducer';
import { RootState } from '../redux/store';

interface ProductItemProps {
    product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart);
    const productInCart = cartItems.find(item => item.id === product.id);

    const handleAddToCart = () => {
        if (product.stock === 0) {
            alert("Số lượng sản phẩm vượt quá số lượng trong kho");
        } else {
            dispatch(addToCart(product));
            dispatch(decrementStock(product.id));
            dispatch(setNotification({ message: 'Add to cart successfully', type: 'success' }));
        }
    };

    return (
        <div className="flex items-center p-4 bg-gray-50 hover:bg-gray-100 transition duration-300 mb-4">
            <img src={product.imageUrl} alt={product.name} className="w-16 h-16 rounded mr-4"/>
            <div className="flex-1">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="text-gray-500">Stock: {product.stock}</p>
            </div>
            <div className="flex items-center space-x-4">
                <button
                    onClick={handleAddToCart}
                    className={`py-2 px-4 rounded text-white ${product.stock > 0 ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'}`}
                    disabled={product.stock <= 0}
                >
                    {product.price} USD
                </button>
            </div>
        </div>
    );
};

export default ProductItem;
