import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import ProductItem from './ProductItem';

const ProductList: React.FC = () => {
    const products = useSelector((state: RootState) => state.products);

    return (
        <div className="w-full p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">List Products</h2>
            <div>
                {products.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
