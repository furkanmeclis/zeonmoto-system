import React from 'react';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import ProductCard from '@/Components/Shop/ProductCard';
import Pagination from '@/Components/Shop/Pagination';
import ShopLayout from '@/Layouts/ShopLayout';
import HeroSection from '@/Components/Shop/HeroSection';
import FilterSection from '@/Components/Shop/FilterSection';
import { CartProvider } from '@/Components/Shop/CartContext';
import { appendHead } from '@/utils';

const Index = ({ products, categories, priceRange, filters }) => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };
    const socialLinks = {
        whatsapp: 'https://wa.me/905070004777',
        instagram: 'https://www.instagram.com/zeonmotomarket/',
        tiktok: 'https://www.tiktok.com/@zeonmotoryedekparca',
        phone: '0(507) 000 4777'
    }
    let metaData = {
        description: `Zeon Moto'da motosikletiniz için en kaliteli yedek parçaları ve aksesuarları bulun. Geniş ürün yelpazemiz ve uygun fiyatlarımızla hizmetinizdeyiz.`,
        keywords: `motosiklet yedek parça, motosiklet aksesuarları, zeon moto, motosiklet ekipmanları, motor parçaları`,
        ogTitle: `Zeon Moto | Motosiklet Yedek Parça ve Aksesuarları`,
        ogDescription: `Zeon Moto'da motosikletiniz için en kaliteli yedek parçaları ve aksesuarları bulun. Geniş ürün yelpazemiz ve uygun fiyatlarımızla hizmetinizdeyiz.`,
        ogImage: '/hero-bg.png',
        ogUrl: route('new-shop.index'),
        canonicalUrl: route('new-shop.index')
    }
    appendHead(metaData);
    return (
        <>
            <ShopLayout>
                <Head title='Anasayfa'/>
                
                {/* Hero Section */}
                <HeroSection socialLinks={socialLinks} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sol Sidebar - Filtreler */}
                        <div className="w-full lg:w-1/4">
                            <FilterSection
                                categories={categories}
                                priceRange={priceRange}
                                filters={filters}
                            />
                        </div>

                        {/* Sağ Taraf - Ürünler */}
                        <div className="w-full lg:w-3/4">
                            <motion.div 
                                variants={container}
                                initial="hidden"
                                animate="show"
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {products.data.map((product) => (
                                    <motion.div key={product.id} variants={item}>
                                        <ProductCard product={product} />
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Sayfalama */}
                            <div className="mt-8">
                                <Pagination meta={{
                                    current_page: products.current_page,
                                    last_page: products.last_page,
                                    total: products.total,
                                    per_page: products.per_page,
                                    from: products.from,
                                    to: products.to     
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
            </ShopLayout>
        </>
    );
};

export default Index;
