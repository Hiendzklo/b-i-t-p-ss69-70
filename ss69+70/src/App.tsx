import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Notification from './components/Notification';

const App: React.FC = () => {
    return (
        <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-6">Shopping Cart</h1>
            <div className="flex flex-col lg:flex-row lg:space-x-6">
                <div className="flex-1">
                    <ProductList />
                </div>
                <div className="flex-1">
                    <Cart />
                </div>
            </div>
            <Notification />
        </div>
    );
};

export default App;
