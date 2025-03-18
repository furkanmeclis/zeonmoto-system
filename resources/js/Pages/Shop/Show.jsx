import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import ShopLayout from '@/Layouts/ShopLayout';
import { useCart } from '@/Components/Shop/CartContext';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { appendHead } from '@/utils';

const ProductDetails = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(false);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const { addToCart, getCartItem, updateQuantity, removeFromCart } = useCart();
    const cartItem = getCartItem(product.uniqid);
    let metaData = {
        description: `${product.name} - ${product.category} kategorisinde yer alan ürünümüzü inceleyin. SKU: ${product.sku}`,
        keywords: `${product.name}, ${product.category}, motosiklet yedek parça, zeon moto, ${product.sku}`,
        ogTitle: `${product.name} | Zeon Moto`,
        ogDescription: `${product.name} - ${product.category} kategorisinde yer alan ürünümüzü inceleyin. SKU: ${product.sku}`,
        ogImage: product.images[0] || '/logo.png',
        ogUrl: route('new-shop.product.show', product.uniqid),
        canonicalUrl: route('new-shop.product.show', product.uniqid)
    }
    appendHead(metaData);
    const handleAddToCart = async () => {
        setLoading(true);
        const result = await addToCart(product.uniqid, quantity);
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

    const images = product.images.length > 0 ? product.images : ["/logo.png"];

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Ürün Resimleri */}
                <div className="space-y-4">
                    <Swiper
                        modules={[Navigation, Pagination, Thumbs]}
                        navigation
                        pagination={{ clickable: true }}
                        thumbs={{ swiper: thumbsSwiper }}
                        className="aspect-square rounded-lg overflow-hidden shadow-lg"
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={image}
                                    alt={`${product.name} - ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        modules={[Navigation, Thumbs]}
                        className="thumbs-swiper"
                        watchSlidesProgress
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="aspect-square rounded-lg overflow-hidden cursor-pointer"
                                >
                                    <img
                                        src={image}
                                        className="w-full h-full object-cover"
                                        alt={`${product.name} - Thumbnail ${index + 1}`}
                                    />
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Ürün Bilgileri */}
                <div className="space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                        <p className="mt-2 text-lg text-gray-600">{product.category}</p>
                        <p className="mt-1 text-sm font-medium text-gray-900">SKU: #{product.sku}</p>
                    </div>

                    <div className="flex items-center space-x-4">
                        <span className="text-4xl font-bold text-yellow-500">
                            {product.price.toLocaleString('tr-TR')} {product.is_tl === 1 ? '₺' : '$'}
                        </span>
                        {product.is_discount === 1 && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                                İndirimli Ürün
                            </span>
                        )}
                        {product.is_new === 1 && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                Yeni Ürün
                            </span>
                        )}
                    </div>

                    <div className="space-y-4">
                        {cartItem ? (
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                                    <div className="flex items-center space-x-2 text-green-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="font-medium">Bu ürün sepetinizde</span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center space-x-2">
                                            <button
                                                onClick={() => handleUpdateQuantity(cartItem.quantity - 1)}
                                                disabled={loading}
                                                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-green-100 rounded-lg transition-colors"
                                            >
                                                -
                                            </button>
                                            <span className="w-8 text-center font-medium">{cartItem.quantity}</span>
                                            <button
                                                onClick={() => handleUpdateQuantity(cartItem.quantity + 1)}
                                                disabled={loading}
                                                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-green-100 rounded-lg transition-colors"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => handleUpdateQuantity(0)}
                                            disabled={loading}
                                            className="text-red-600 hover:text-red-700 font-medium px-3 py-1 rounded-lg hover:bg-red-50 transition-colors"
                                        >
                                            Sepetten Kaldır
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="flex items-center space-x-4">
                                    <label htmlFor="quantity" className="text-gray-700 font-medium">
                                        Adet:
                                    </label>
                                    <div className="flex items-center border border-gray-300 rounded-lg">
                                        <button
                                            onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                            className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                                        >
                                            -
                                        </button>
                                        <input
                                            type="number"
                                            id="quantity"
                                            value={quantity}
                                            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                            className="w-20 text-center border-x border-gray-300 py-2"
                                        />
                                        <button
                                            onClick={() => setQuantity(q => q + 1)}
                                            className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleAddToCart}
                                    disabled={loading}
                                    className="w-full bg-yellow-500 text-white py-4 px-6 rounded-lg text-lg font-medium hover:bg-yellow-600 transition-colors disabled:opacity-50"
                                >
                                    {loading ? (
                                        <div className="flex items-center justify-center space-x-2">
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                            <span>Sepete Ekleniyor...</span>
                                        </div>
                                    ) : (
                                        'Sepete Ekle'
                                    )}
                                </motion.button>
                            </>
                        )}
                    </div>

                    {product.description && (
                        <div className="prose prose-yellow max-w-none">
                            <h2 className="text-xl font-semibold mb-4">Ürün Açıklaması</h2>
                            <div dangerouslySetInnerHTML={{ __html: product.description }} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const Show = ({ product }) => {
    return (
        <ShopLayout>
            <Head title={product.name} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <ProductDetails product={product} />
            </div>
        </ShopLayout>
    );
};

export default Show;
