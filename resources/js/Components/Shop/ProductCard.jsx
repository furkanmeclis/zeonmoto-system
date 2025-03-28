import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useCart } from './CartContext';

const ProductCard = ({ product }) => {
    const [loading, setLoading] = useState(false);
    const { addToCart, getCartItem, updateQuantity, removeFromCart, pricesVisible } = useCart();
    const cartItem = getCartItem(product.uniqid);

    const handleAddToCart = async () => {
        setLoading(true);
        await addToCart(product.uniqid, 1);
        setLoading(false);
    };

    const handleUpdateQuantity = async (newQuantity) => {
        setLoading(true);
        if (newQuantity < 1) {
            await removeFromCart(cartItem.id);
        } else {
            await updateQuantity(cartItem.id, newQuantity);
        }
        setLoading(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="bg-gradient-to-b from-white to-yellow-50 rounded-xl shadow-lg overflow-hidden border border-yellow-100 hover:shadow-xl hover:border-yellow-200 transition-all"
        >
            <Link href={route("new-shop.product.show", product.sku)}>
                <div className="relative aspect-square">
                    <img
                        src={product.images[0] || '/logo.png'}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <img
                            src="/logo.png"
                            alt="Watermark"
                            className="w-full h-full object-contain opacity-30"
                        />
                    </div>
                    <div className="absolute top-2 right-2 flex flex-col gap-2">
                        {product.is_new === 1 && (
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full shadow-sm">
                                Yeni
                            </span>
                        )}
                        {product.is_discount === 1 && (
                            <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full shadow-sm">
                                İndirim
                            </span>
                        )}
                    </div>
                </div>
            </Link>

            <div className="p-4 space-y-4">
                <Link href={route("new-shop.product.show", product.sku)}>
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 hover:text-yellow-600 transition-colors">
                        {product.name}
                    </h3>
                </Link>

                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-yellow-600">
                        {pricesVisible ? product.price.toLocaleString('tr-TR') : '***'} ₺
                    </span>
                </div>

                {cartItem ? (
                    <div className="flex items-center justify-between bg-gray-50 border border-yellow-200 rounded-lg p-2">
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => handleUpdateQuantity(cartItem.quantity - 1)}
                                disabled={loading}
                                className="w-8 h-8 flex items-center justify-center text-yellow-700 hover:bg-yellow-100 rounded-lg transition-colors"
                            >
                                -
                            </button>
                            <span className="w-8 text-center font-medium text-yellow-800">{cartItem.quantity}</span>
                            <button
                                onClick={() => handleUpdateQuantity(cartItem.quantity + 1)}
                                disabled={loading}
                                className="w-8 h-8 flex items-center justify-center text-yellow-700 hover:bg-yellow-100 rounded-lg transition-colors"
                            >
                                +
                            </button>
                        </div>
                        <button
                            onClick={() => handleUpdateQuantity(0)}
                            disabled={loading}
                            className="text-red-600 hover:text-red-700 text-sm font-medium"
                        >
                            Kaldır
                        </button>
                    </div>
                ) : (
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={handleAddToCart}
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-2 px-4 rounded-lg font-medium hover:from-yellow-600 hover:to-yellow-700 transition-all shadow-md disabled:opacity-50"
                    >
                        {loading ? (
                            <div className="flex items-center justify-center space-x-2">
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                <span>Ekleniyor...</span>
                            </div>
                        ) : (
                            'Sepete Ekle'
                        )}
                    </motion.button>
                )}
                <div className="text-sm text-gray-500 flex items-center justify-between">
                    <span><span className="font-medium">SKU:</span> {product.sku}</span>
                    <span><span className="font-medium">{product.category}</span></span>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
