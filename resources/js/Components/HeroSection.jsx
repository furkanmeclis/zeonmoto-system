import React, { useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useCart } from 'react-use-cart';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import logo from '@/logo.png';
import ProductPreviewModal from './ProductPreviewModal';
import ProductCard from './ProductCard';

const HeroSection = ({ newProducts = [] }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const swiperRef = useRef(null);

    const handleSlideChange = useCallback(() => {
        // Slider değiştiğinde yapılacak işlemler buraya
    }, []);

    const stats = [
        { label: 'Mutlu Müşteri', value: '2000+' },
        { label: 'Ürün Çeşidi', value: '1500+' }
    ];

    const scrollToMap = () => {
        document.getElementById('map-section').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="space-y-12 mb-16">
            {/* Hero Section */}
            <div className="relative min-h-[85vh] overflow-hidden">
                {/* Arka plan deseni */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-yellow-50 to-orange-50 overflow-hidden">
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-0 -left-4 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                        <div className="absolute top-0 -right-4 w-72 h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
                    </div>
                </div>

                <div className="relative z-20 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center py-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-8"
                    >
                        <img src={logo} alt="Zehir Motor Logo" className="h-40 w-auto" loading="eager" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-red-600 text-transparent bg-clip-text"
                    >
                        Zehir Motor
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-3xl mb-12 max-w-3xl text-gray-700"
                    >
                        Motosikletiniz için en kaliteli yedek parçalar
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap gap-6 justify-center"
                    >
                        <button
                            onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
                            className="group relative px-12 py-5 text-xl font-semibold text-white rounded-full overflow-hidden bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
                        >
                            <span className="relative z-10">Ürünleri Keşfet</span>
                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-yellow-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                        <button
                            onClick={scrollToMap}
                            className="group relative px-12 py-5 text-xl font-semibold text-white rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl flex items-center gap-3"
                        >
                            <span className="relative z-10">Konumumuz</span>
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M12 0C7.802 0 4 3.403 4 7.602C4 11.8 7.469 16.812 12 24C16.531 16.812 20 11.8 20 7.602C20 3.403 16.199 0 12 0ZM12 11C10.343 11 9 9.657 9 8C9 6.343 10.343 5 12 5C13.657 5 15 6.343 15 8C15 9.657 13.657 11 12 11Z"/>
                            </svg>
                        </button>
                        <a
                            href="https://wa.me/905458870147"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-12 py-5 text-xl font-semibold text-white rounded-full overflow-hidden bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl flex items-center gap-3"
                        >
                            <span className="relative z-10">WhatsApp</span>
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                            </svg>
                        </a>
                        <a
                            href="https://www.instagram.com/zehirmotor_/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-12 py-5 text-xl font-semibold text-white rounded-full overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl flex items-center gap-3"
                        >
                            <span className="relative z-10">Instagram'da Takip Et</span>
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                    </motion.div>

                    {/* İstatistikler */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + index * 0.1 }}
                                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="text-4xl font-bold text-yellow-600 mb-2">{stat.value}</div>
                                <div className="text-gray-700 text-lg">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Yeni Ürünler Slider */}
            {newProducts.length > 0 && false && (
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Yeni Gelen Ürünler
                    </h2>
                    <div className="swiper-custom-buttons">
                        <Swiper
                            ref={swiperRef}
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{ 
                                clickable: true,
                                dynamicBullets: true
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 4,
                                },
                                
                            }}
                            onSlideChange={handleSlideChange}
                            className="!pb-12"
                            watchSlidesProgress={true}
                            observer={true}
                            observeParents={true}
                            preloadImages={false}
                            lazy={{
                                loadPrevNext: true,
                                loadPrevNextAmount: 1
                            }}
                        >
                            {newProducts.map((product) => (
                                <SwiperSlide key={product.id} className="h-auto">
                                    <div className="h-full">
                                        <ProductCard 
                                            product={product} 
                                            onProductClick={setSelectedProduct}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            )}

            {/* Harita Bölümü */}
            <div id="map-section" className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Mağazamızın Konumu
                </h2>
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg">
                    <div 
                        className="w-full h-full"
                        dangerouslySetInnerHTML={{
                            __html: `
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.3461135270392!2d35.31662851744384!3d37.00620987990506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15288f78e6753465%3A0x3381ca43208bec8!2sZEH%C4%B0R%20MOTOR!5e0!3m2!1str!2str!4v1710799992345!5m2!1str!2str"
                                    width="100%"
                                    height="100%"
                                    style="border:0;"
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                ></iframe>
                            `
                        }}
                    />
                </div>
            </div>

            <style jsx global>{`
                .swiper-custom-buttons .swiper-button-next,
                .swiper-custom-buttons .swiper-button-prev {
                    color: #d97706; /* yellow-600 */
                }
                
                .swiper-custom-buttons .swiper-button-next:hover,
                .swiper-custom-buttons .swiper-button-prev:hover {
                    color: #b45309; /* yellow-700 */
                }

                .swiper-custom-buttons .swiper-pagination-bullet {
                    background: #d97706; /* yellow-600 */
                }

                .swiper-custom-buttons .swiper-pagination-bullet-active {
                    background: #b45309; /* yellow-700 */
                }
            `}</style>

            {/* Ürün Önizleme Modalı */}
            <ProductPreviewModal
                product={selectedProduct}
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </div>
    );
};

export default HeroSection; 