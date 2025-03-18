import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from 'react-use-cart';
import logo from '@/logo.png';

const ProductPreviewModal = ({ product, isOpen, onClose }) => {
    const { addItem, inCart, updateItemQuantity, getItem, removeItem } = useCart();
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const images = product?.images?.length > 0 
        ? product.images 
        : product?.image 
            ? [product.image]
            : ['https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'];

    useEffect(() => {
        if (inCart(product?.id)) {
            setQuantity(getItem(product.id).quantity);
        } else {
            setQuantity(1);
        }
    }, [product?.id, inCart]);

    const handleQuantityChange = (value) => {
        const newQuantity = parseInt(value);
        if (isNaN(newQuantity) || newQuantity < 1) return;
        
        setQuantity(newQuantity);
        if (inCart(product.id)) {
            updateItemQuantity(product.id, newQuantity);
        }
    };

    const handleAddToCart = () => {
        addItem({
            id: product.id,
            name: product.name,
            price: product.campaign_price,
            sku: product.sku,
            image: images[selectedImage],
        }, quantity);
    };

    if (!isOpen) return null;

    const calculateTotal = () => {
        return (quantity * product.campaign_price).toFixed(2);
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50"
                    onClick={onClose}
                />
                
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="relative bg-white rounded-2xl shadow-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="grid md:grid-cols-2 gap-8 p-8">
                        {/* Ürün Görseli */}
                        <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-50">
                            <img
                                src={images[selectedImage]}
                                alt={product.name}
                                className="w-full h-full object-contain"
                                onError={(e) => e.target.src = images[0]}
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none select-none">
                                <img src={logo} alt="Watermark" className="w-48 h-48 object-contain" />
                            </div>
                            {product.is_new && (
                                <div className="absolute top-4 right-4">
                                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                                        Yeni
                                    </span>
                                </div>
                            )}
                            {images.length > 1 && (
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="grid grid-cols-4 gap-2">
                                        {images.map((image, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setSelectedImage(index)}
                                                className={`relative aspect-square overflow-hidden rounded-lg bg-white/80 backdrop-blur-sm ${
                                                    selectedImage === index ? 'ring-2 ring-yellow-500' : ''
                                                }`}
                                            >
                                                <img
                                                    src={image}
                                                    alt={`${product.name} - ${index + 1}`}
                                                    className="h-full w-full object-contain"
                                                    loading="lazy"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Ürün Detayları */}
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
                            
                            <div className="flex items-center gap-3">
                                <span className="text-base font-medium text-gray-500">SKU:</span>
                                <span className="bg-yellow-50 text-yellow-700 px-3 py-1.5 rounded-lg text-base font-medium border border-yellow-100">
                                    {product.sku}
                                </span>
                            </div>

                            <div className="space-y-3">
                                <div className="text-4xl font-bold text-yellow-600">
                                    {product.campaign_price} TL
                                </div>
                                {product.price !== product.campaign_price && (
                                    <div className="text-xl text-gray-500 line-through">
                                        {product.price} TL
                                    </div>
                                )}
                            </div>

                            {/* Sepet İşlemleri */}
                            <div className="space-y-4">
                                <div className="flex flex-wrap items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => handleQuantityChange(quantity - 1)}
                                            className="p-3 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        <input
                                            type="number"
                                            min="1"
                                            value={quantity}
                                            onChange={(e) => handleQuantityChange(e.target.value)}
                                            className="w-20 text-center text-xl font-semibold text-gray-700 border border-gray-200 rounded-lg py-2 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                                        />
                                        <button
                                            onClick={() => handleQuantityChange(quantity + 1)}
                                            className="p-3 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                    {!inCart(product.id) ? (
                                        <button
                                            onClick={handleAddToCart}
                                            className="flex-1 bg-yellow-600 text-white py-4 px-8 rounded-lg font-semibold hover:bg-yellow-700 transition-colors flex items-center justify-center gap-2 text-lg"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                            Sepete Ekle
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => removeItem(product.id)}
                                            className="flex-1 bg-red-600 text-white py-4 px-8 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2 text-lg"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                            Sepetten Çıkar
                                        </button>
                                    )}
                                </div>

                                {inCart(product.id) && (
                                    <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 flex items-center justify-between">
                                        <span className="text-yellow-800 font-medium">Sepet Tutarı:</span>
                                        <span className="text-2xl font-bold text-yellow-700">{calculateTotal()} TL</span>
                                    </div>
                                )}
                            </div>

                            {/* Ürün Açıklaması */}
                            <div className="prose prose-yellow max-w-none">
                                <h3 className="text-xl font-semibold text-gray-900">Ürün Açıklaması</h3>
                                <p className="text-gray-600 text-lg">
                                    {product.description || 'Bu ürün için henüz bir açıklama eklenmemiştir.'}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ProductPreviewModal; 