import React from 'react';
import { useCart } from 'react-use-cart';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import logo from '@/logo.png';

const ProductCard = ({ product, onProductClick }) => {
    const { addItem, inCart, updateItemQuantity, getItem, removeItem } = useCart();
    const fallbackImage = 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg';

    return (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden group">
            <div 
                onClick={() => onProductClick(product)}
                className="cursor-pointer"
            >
                <div className="relative h-64 overflow-hidden">
                    <LazyLoadImage
                        src={product.images?.[0] || fallbackImage}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => e.target.src = fallbackImage}
                        effect="opacity"
                        visibleByDefault={false}
                        threshold={100}
                        placeholder={
                            <div className="w-full h-full flex items-center justify-center bg-gray-100">
                                <div className="w-10 h-10 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
                            </div>
                        }
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none select-none">
                        <img src={logo} alt="Watermark" className="w-32 h-32 object-contain" />
                    </div>
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {product.is_new === 1 && (
                            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                Yeni Ürün
                            </span>
                        )}
                        {product.is_discount === 1 && (
                            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                İndirimli
                            </span>
                        )}
                    </div>
                    <div className="absolute top-4 right-4">
                        <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                            {product.category}
                        </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 hover:text-yellow-600 transition-colors">
                        {product.name}
                    </h3>
                </div>
            </div>

            <div className="px-6 pb-6">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-medium text-gray-500">
                        SKU:
                    </span>
                    <span className="bg-yellow-50 text-yellow-700 px-2 py-1 rounded text-sm font-medium border border-yellow-100">
                        {product.sku}
                    </span>
                </div>
                <div className="flex items-end justify-between">
                    <div>
                        <div className="text-xl font-bold text-yellow-600 dark:text-yellow-400">
                            {Number(product.campaign_price).toFixed(2)} TL
                        </div>
                        {product.is_discount === 1 && (
                            <div className="text-sm text-red-500 line-through">
                                {Number(product.price).toFixed(2)} TL
                            </div>
                        )}
                    </div>
                    <div className="flex items-center gap-2">
                        {inCart(product.id) ? (
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        updateItemQuantity(product.id, getItem(product.id).quantity - 1);
                                    }}
                                    className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <span className="w-8 text-center font-semibold text-gray-700">
                                    {getItem(product.id).quantity}
                                </span>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        updateItemQuantity(product.id, getItem(product.id).quantity + 1);
                                    }}
                                    className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeItem(product.id);
                                    }}
                                    className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors ml-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    addItem({
                                        id: product.id,
                                        name: product.name,
                                        price: product.campaign_price,
                                        sku: product.sku,
                                        image: product.images?.[0] || fallbackImage,
                                    });
                                }}
                                className="p-3 rounded-full bg-yellow-600 text-white hover:bg-yellow-700 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard; 