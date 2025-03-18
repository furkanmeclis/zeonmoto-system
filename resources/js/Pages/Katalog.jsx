import React, { useState, useEffect } from 'react';
import Shop from '@/Components/Shop';
import HeroSection from '@/Components/HeroSection';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import { CartProvider } from 'react-use-cart';
import { Head } from '@inertiajs/react';
import { getCatalogProducts } from "@/helpers/helper.js";

const Katalog = ({ phoneNumber, csrf_token }) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getCatalogProducts(csrf_token)
            .then(({ status, data }) => {
                if (status) {
                    setProducts(data);
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
                    <div className="mt-4 text-lg font-medium text-gray-600">
                        Ürünler Yükleniyor...
                    </div>
                </div>
            </div>
        );
    }

    return (
        <CartProvider>
            <Head>
                <title>Zehir Motor - Ürün Kataloğu</title>
                <meta name="description" content="Motosikletiniz için en kaliteli yedek parçalar" />
            </Head>
            
            <div className="min-h-screen bg-gray-100">
                <Navbar />
                <main className="container mx-auto px-4 py-8">
                    <HeroSection newProducts={products.filter(p => p.is_new === 1)} />
                    <Shop products={products} phoneNumber={phoneNumber} />
                </main>
                <Footer />
            </div>
        </CartProvider>
    );
};

export default Katalog;
